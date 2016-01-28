import React from 'react';
import ReactDOM from 'react-dom';
import { defaultConfig } from '../textboxio/config';

/**
 * Textboxio Wrapper Component. HTML passed to this component can be managed using the textboxio editor.
 */
export default class Textbox extends React.Component {
    constructor(props) {
        super(props);
    }

    onContentUpdated() {
        this.content = this.editor.content.get();
        this.editor.content.setDirty(false); // set dirty to false so we get future notifications of changes

        if (this.props.onChange) {
            this.props.onChange(this.content);
        }
    }

    /**
     * Used to create a textboxio editor
     */
    initialiseEditor() {
        if (!this.editor) {
            this.editor = textboxio.inline(ReactDOM.findDOMNode(this), defaultConfig()); // eslint-disable-line
            this.dirtyEventListener = this.onContentUpdated.bind(this);
            this.editor.events.dirty.addListener(this.dirtyEventListener);
        }
    }

    /**
     * Used to destroy an editor instance
     */
    teardownEditor() {
        if (this.editor) {
            this.editor.events.dirty.removeListener(this.dirtyEventListener);
            this.editor.restore();
            this.editor = null;
        }
    }

    shouldComponentUpdate(nextProps) {
        // Only update if the props differ from what we have in the editor now
        // This prevents unnecessary DOM thrashing and maintians cursor position
        return (nextProps.content !== this.content);
    }

    componentDidMount() {
        // Check if the library has loaded correctly
        if (window.textboxio && this.props.editable) {
            this.initialiseEditor();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.editable) {
            this.initialiseEditor();
        } else {
            this.teardownEditor();
        }
    }

    componentWillUnmount() {
        this.teardownEditor();
    }

    generateMarkup() {
        return { __html: this.props.content };
    }

    render() {
        return (
            <div dangerouslySetInnerHTML={ this.generateMarkup() } />
        );
    }
}

Textbox.defaultProps = {
    content: '',
    editable: true
};

Textbox.propTypes = {
    content: React.PropTypes.string,
    editable: React.PropTypes.bool
};
