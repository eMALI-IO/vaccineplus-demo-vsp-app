function vaxFormDisplay() {
    $("#vaxData").hide();
    $("#vaxDetailForm").fadeIn();
    $("#vaxEditBtn").hide();
    $("#vaxSaveBtn").fadeIn();
}

function vaxDataDisplay() {

    $("#vaxDetailForm").hide();
    $("#vaxData").fadeIn();

    $("#vaxSaveBtn").hide();
    $("#vaxEditBtn").fadeIn();
}

function userFormDisplay() {
    $("#userData").hide();
    $("#userDetailForm").fadeIn();
    $("#userEditBtn").hide();
    $("#userSaveBtn").fadeIn();
}

function userDataDisplay() {

    $("#userDetailForm").hide();
    $("#userData").fadeIn();

    $("#userSaveBtn").hide();
    $("#userEditBtn").fadeIn();
}

function denyVax() {
    $.confirm({
        title: 'Deny Credential',
        columnClass: 'col-6',
        content: `
        <form class="formName">
            <div class="form-item">
                <textarea type="text" class="form-textbox" id="denyNotes" rows="4" cols="50" required></textarea>
                <span class="form-label" for="denyNotes" style="left:1rem;">Notes</span>
            </div>
        </form>
        `,
        type: 'red',
        animation: 'rotateX',
        closeAnimation: 'rotateX',
        onOpenBefore: function () {
            $(".jconfirm-buttons").addClass("form-row col-12 pl-0 pr-0");
        },
        // autoClose: 'Cancel|8000',
        buttons: {
            Cancel: {
                text:'Cancel',
                btnClass:'btn btn-default col',
                action: close()
            },
            deny: {
                text: 'Deny',
                btnClass: 'btn red col',
                action: function () {}
            }
        }
    });
}

function issueVax() {
    $.confirm({
        title: 'Issue Credential',
        columnClass: 'col-6',
        content: ``,
        type: 'blue',
        animation: 'rotateX',
        closeAnimation: 'rotateX',
        onOpenBefore: function () {
            $(".jconfirm-buttons").addClass("form-row col-12 pl-0 pr-0");
        },
        // autoClose: 'Cancel|8000',
        buttons: {
            Cancel: {
                text:'Cancel',
                btnClass:'btn btn-default col',
                action: close()
            },
            deny: {
                text: 'Confirm',
                btnClass: 'btn col',
                action: function () {}
            }
        }
    });
}