Menu = {
    visible : false,
}
$('#MenuToggle').on('click', function(){
    Menu.visible = !Menu.visible;
    if (Menu.visible){
        $(this).addClass('open');
        $('#menu').addClass('open');
    } else {
        $(this).removeClass('open');

        $('#menu').removeClass('open');
    }
});



