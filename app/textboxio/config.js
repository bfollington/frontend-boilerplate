
export function defaultConfig() {
    return {
        autosubmit: false,
        paste: {
            style: 'clean'
        },
        ui: {
            toolbar: {
                items: [
                    'undo',
                    'style',
                    'emphasis',
                    'align',
                    'listindent',
                    {
                        id: 'insert',
                        label: 'Insert',
                        items: ['link', 'fileupload', 'table', 'hr', 'specialchar']
                    },
                    {
                        label: 'format',
                        items: [
                            'removeformat',
                            'superscript',
                            'subscript',
                            'strikethrough'
                        ]
                    },
                    'tools',
                    'language'
                ]
            }
        }
    };
}
