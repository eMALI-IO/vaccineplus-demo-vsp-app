
$(document).ready(()=>{
    loaderFadeOut();

    $('.tab').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass("active");
    })
})

function openDay(day){
    $('.tabcontent').hide();
    $(day).fadeIn('slow');
}

function loaderFadeOut() {
    $(".loader-wrapper").hide();
}