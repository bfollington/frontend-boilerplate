import React from "react";
import Editable from "./Editable";


export default class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            content: 'Hello'
        }
    }

    onTextboxChange(content) {
        this.setState({
            content: content
        });
    }

    render() {
        return (
            <div>
                <Editable content={this.state.content} onChange={this.onTextboxChange.bind(this)} />
            </div>
        );
    }
}
