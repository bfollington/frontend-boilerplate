// Import component to render as usual
import SubComponent from "../app/SubComponent";

describe('Test SubComponent', () => {

    it('Rejects incorrect propTypes', () => {

        let oldConsole = console.error;
        let spy = sinon.spy();
        console.error = spy;

        // Shallow rendering the component, this means we do not need a virtual DOM
        let tree = shallowRender(<SubComponent something={123} />);
        let output = tree.getRenderOutput();

        expect(spy).to.have.been.called;

        console.error = oldConsole;
    });

    it('Accepts correct correct propTypes', () => {

        let oldConsole = console.error;
        let spy = sinon.spy();
        console.error = spy;

        // Shallow rendering the component, this means we do not need a virtual DOM
        let tree = shallowRender(<SubComponent something={'Test'} />);
        let output = tree.getRenderOutput();

        expect(spy).to.not.have.been.called;

        console.error = oldConsole;
    });

});
