import React from "react";

import { default as LAYOUTS, linear, twoGrid } from "./layouts";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                { LAYOUTS[this.props.layout](this.props.contents) }
            </div>
        );
    }
}

Layout.defaultProps = {
    layout: "linear"
};
