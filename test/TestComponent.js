// Import component to render as usual
import TestComponent from "../app/TestComponent";

// Import TestModule file as object, so we can replace one of its methods
import * as TestModule from "../app/TestModule";

function stubbedMethod() {
    return "test";
}

describe('Test Component', () => {

    before(() => {

        // Using sinon we stub the something method
        // This is later passed as a property to a subComponent in the test
        // Note: this means the method is TestModule is _not_ detected as covered by testing, as expected.
        sinon.stub(TestModule, 'something', stubbedMethod);
    })

    it('Stubs a method correctly in another module', () => {

        // Shallow rendering the component, this means we do not need a virtual DOM
        var tree = shallowRender(<TestComponent />);
        var output = tree.getRenderOutput();

        var subTree = tree.subTree("SubComponent").getRenderOutput();

        expect(subTree.props.weirdTest).to.equal(stubbedMethod());
    });

});
