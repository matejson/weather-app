$(document).on("scroll", function () {

    var pixels = $(document).scrollTop()

    $('#sun').css('top', -(pixels ** -0.1) + '%');
    $('#clouds0').css('top', -(pixels * -0.05) + '%');
    $('#clouds1').css('top', -(pixels * 0.175) + '%');
    $('#clouds2').css('top', -(pixels * 0.15) + '%');
    $('#overlay').css('top', -(pixels * 0.12) +'%');
    $('#clouds3').css('top', -(pixels * 0.12) + '%');
    $('#birds').css('top', -(pixels * 0.075) + '%');
})




