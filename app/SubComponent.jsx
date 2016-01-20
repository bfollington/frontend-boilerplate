import React from 'react';

export default class SubComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    static test() {
        console.log('hello');
    }

    render() {
        return (
            <div>Test</div>
        );
    }
}

/*
    Where applicable both propTypes and defaultProps should be defined statically on React classes.
    These allow simple enforcement of data constraints, and make error handling simpler.
 */
SubComponent.propTypes = {
    something: React.PropTypes.string
};

SubComponent.defaultProps = {
    something: ''
};
