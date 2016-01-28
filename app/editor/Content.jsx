import React from 'react';
import Textbox from './Textbox';


export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Textbox content={this.props.content} editable={this.props.editable} onChange={this.props.onChange} />
            </div>
        );
    }
}
