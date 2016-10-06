$(function(){
    var $first = $('#firstname');
    var $last = $('#lastname');
    var $add = $('#address');
    var $but = $('#all');

    $first.on('focus',function(){
        $('#hide1').show().fadeOut( 1000 );
    });

    $last.on('focus',function(){
            $('#hide2').show().fadeOut( 1000 );
        });

    $add.on('focus',function(){
            $('#hide3').show().fadeOut( 1000 );
        });

    $but.on('click', function(e){
        e.preventDefault();
        $('#hide1').show();
        $('#hide2').show();
        $('#hide3').show();
    })

});