$(document).ready(function () {

    $.extend(true, $.fn.dataTable.defaults, {
        "lengthChange": false,
        dom: 'l<"toolbar">frtip',
        language: {
            search: "_INPUT_",
            searchPlaceholder: "Search"
        },
        'columnDefs': [{
            'targets': 0,
            "ordering": false,
            'checkboxes': {
                'selectRow': true
            }
        }, {
            orderable: false,
            targets: -1
        }],
        'select': {
            'style': 'multi'
        },
        'order': [
            [1, 'asc']
        ]
    });
    setAsDatatable();
});

function setAsDatatable() {
    var removeBtn = `<div class="btn remove"><img src="img/icon/bin.svg">Remove selected</button>`;
    for (i = 1; i <= 1; i++) {
        $("#vaxRecordList_" + i).DataTable({
            // initComplete: function () {
            //     $("#vaxRecordList_" + i + "_filter").append(removeBtn);
            // },
        });
    }
}