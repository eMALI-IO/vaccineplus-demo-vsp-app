$(document).ready(function(){
    $("#addDoctorBtn").click(function(){

        var last_id = $(".doctor-wrapper:last").last().attr('id');
        var split_id = last_id.split('-');
        var index = Number(split_id[1])+1;

        var newel = $(".doctor-wrapper:last").clone(true);
        $(newel).find('input').val('');
        $(newel).find('.doc-del-btn').css('display','inline');
        $(newel).find('.doc-title').empty().append("Doctor - "+index);
        $(newel).attr('id',"doc-"+index);


        $(newel).insertAfter(".doctor-wrapper:last");
    })

    $('.doc-del-btn').click(function(){
        $(this ).parent().parent().remove()
    })
});