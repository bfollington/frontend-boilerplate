import React from 'react';
import { something } from './TestModule';
import SubComponent from './SubComponent';

export default class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    onToggle() {
        this.setState({
            test: !this.state.test
        });
    }

    render() {
        return (
            <div>
                <h1>React Test</h1>
                <button onClick={this.onToggle.bind(this)}>
                    Toggle Me ({this.state.test ? 'True' : 'False'})
                </button>
                <SubComponent weirdTest={something()} />
            </div>
        );
    }
}
