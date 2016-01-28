import React from 'react';
import Content from './Content';

import LAYOUTS from './layouts';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const contents = this.props.contents.map( (item, i) => {
            return <Content content={item} onChange={ html => this.props.onContentUpdated(i, html) } />;
        });

        return (
            <div>
                { LAYOUTS[this.props.layout](contents) }
            </div>
        );
    }
}

Layout.defaultProps = {
    layout: 'linear'
};
