export function saveSelection() {
    let savedRange;

    if (window.getSelection) {
        savedRange = window.getSelection().getRangeAt(0);
    } else if (document.selection) {
        savedRange = document.selection.createRange();
    }

    return savedRange;
}

export function restoreSelection(editor, selection) {
    editor.focus();

    if (selection !== null) {
        if (window.getSelection) {
            const s = window.getSelection();

            if (s.rangeCount > 0) {
                s.removeAllRanges();
            }
            s
            .addRange(selection);
        } else if (document.createRange) {
            window.getSelection().addRange(selection);
        } else if (document.selection) {
            selection.select();
        }
    }
}
