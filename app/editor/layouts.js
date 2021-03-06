// Needed for JSX
import React from "react"; // eslint-disable-line

/**
 * Given a list, split the list into a list of lists with each sublist being a certain size.
 * @param  {Array} list    List of items to split
 * @param  {Number} setSize Size of set
 * @return {Array}         List of lists
 */
export function groupIntoSets(list, setSize) {

    if (setSize <= 0) {
        throw new Error('Cannot group items into sets of less than 1 in size');
    }

    if (!Number.isInteger(setSize)) {
        throw new Error('Set size must be a positive integer');
    }

    let rows = [];
    let currentRow = [];

    for (let i = 0; i < list.length; i++) {
        if (i % setSize === 0 && i > 0) {
            rows = rows.concat([currentRow]);
            currentRow = [];
        }

        currentRow.push(list[i]);
    }

    if (rows.indexOf(currentRow) < 0) {
        rows.push(currentRow);
    }

    return rows;
}


/**
 * Content blocks are laid out one after the other, vertically
 * @param  {Array} contents List of content blocks
 * @return {JSX}          Layout JSX
 */
export function linear(contents) {
    return (
        <div>
            { contents.map( (content, i) => <div key={i}>{content}</div> ) }
        </div>
    );
}

export function twoGrid(contents) {

    const rows = groupIntoSets(contents, 2);

    return (
        <div>
            { rows.map( (row, i) => {
                return (
                    <div key={i} className="row">
                        { row.map( (item, j) => <div key={j} className="col-xs-6">{item}</div> ) }
                    </div>
                );
            } ) }
        </div>
    );

}

const LAYOUTS = {
    linear,
    twoGrid
};

export default LAYOUTS;
