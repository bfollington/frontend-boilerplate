// ES2015 imports are preferred over require syntax.

import React from 'react';
import { something } from './TestModule'; // Only import what is needed, until more than 5 things are imported.
import SubComponent from './SubComponent';
import Editable from './Editable';

import Layout from "./Layout";
import Content from "./Content";

export default class TestComponent extends React.Component {
    constructor(props) {
        super(props);

        // State must be initialised in the constructor
        // Any information that will require a rerender belongs in state
        // API connectors, utility classes etc. can be stored on the object itself
        this.state = {
            list: [1, 2, 3, 4],
            editableHtml: '<p>Hello</p>',
            editing: true
        };
    }

    onToggle() {
        this.setState({
            test: !this.state.test
        });
    }

    onTextboxChange(content) {
        this.setState({
            editableHtml: content
        });
    }

    render() {

        // In general, it is preferred to keep as much JSX in one place as possible.
        // If this render method becomes unweildy,
        // it likely means more components are needed to correctly separate logic.

        // Complex logic or data manipulation can occur here, but should be in a separate method typically

        const listDisplay = {
            true: 'True',
            false: 'False',
            1: 'One'
        };

        // React returns should be set out as below for readability.
        return (
            <div>
            {/* This is the syntax for a JSX comment */}
                <h1>React Test</h1>
                <button onClick={this.onToggle.bind(this)}>
                {/* The ternary operator is often used in JSX for basic if-else logic. It should only be
                used when it does not degrade readability. */}
                Toggle Me ({this.state.test ? 'True' : 'False'})
                </button>

                {/* This is still acceptable, but does require React specific knowledge that null -> no render */}
                { this.state.test ? <a href="#">A Link</a> : null }

                {/* This is pushing the limit, if either sub expression is over several lines
                then this is not permitted. */}
                {
                this.state.test ?
                this.state.list.map(el => <li key={el}>{el}</li>) :
                this.state.list.map(el => <li key={el}>False {el}</li>)
                }

                {/* Preferable syntax for a "switch" style logic block. */}
                { listDisplay[this.state.test] }

                {/* This is a for-each in JSX, any more advanced templating should be accomplished using methods */}
                {/* Note: a unique key must be provided for any iteration,
                omitting it or duplicate keys can cause unexpected behaviour */}
                {
                    this.state.list.map((entry) => {
                        return <li key={entry}>{entry}</li>;
                    })
                }

                {/* For a simple list, it is acceptable to use the shorthand syntax below */}
                { this.state.list.map(entry => <li key={entry}>{entry}</li>) }

                <SubComponent weirdTest={something()} />

                {/* Large JSX expressions should list each property on a new line */}
                <SubComponent
                    weirdTest={something()}
                    anotherProp={1}
                    moreProps={2}
                    something={123}
                />

                <Layout
                    contents={[
                        <Content />,
                        <Content />,
                        <Content />
                    ]}
                    layout="twoGrid"
                />

                <Editable
                    content={this.state.editableHtml}
                    editable={this.state.editing}
                    onChange={this.onTextboxChange.bind(this)}
                />
            </div>
        );
    }
}
