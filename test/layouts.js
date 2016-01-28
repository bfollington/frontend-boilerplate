import { groupIntoSets } from '../app/editor/layouts';

describe('layouts', () => {

    it('sorts items into even groups correctly', () => {

        const arr = [1, 2, 3, 4];

        const result = groupIntoSets(arr, 2);

        expect(result.length).to.equal(2);
        expect(result[0].length).to.equal(2);
        expect(result[1].length).to.equal(2);
    });

    it('sorts items into uneven groups correctly', () => {

        const arr = [1, 2, 3];

        const result = groupIntoSets(arr, 2);

        expect(result.length).to.equal(2);
        expect(result[0].length).to.equal(2);
        expect(result[1].length).to.equal(1);
    });

    it('sorts items into groups of one correctly', () => {

        const arr = [1, 2, 3];

        const result = groupIntoSets(arr, 1);

        expect(result.length).to.equal(3);
    });

    it('handles groups of zero', () => {

        const arr = [1, 2, 3];

        const test = () => {
            const result = groupIntoSets(arr, 0);
        };

        expect(test).to.throw(Error);
    });

});
