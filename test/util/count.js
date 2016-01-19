import {count} from '../../app/util/list';

describe('list utility', () => {

    it('counts the items in an array', () => {

        const arr = [1, 2, 3];

        expect(count(arr)).to.equal(arr.length);

    });

});
