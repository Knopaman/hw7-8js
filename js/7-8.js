$(function(){
    var $tabs1 = $('#tabs-1');
    var $tabs3 = $('#tabs-3');
    var $tabs2 = $('#tabs-2');
    var $firstlink = $('#item1');

    $firstlink.on('click', function(e){

        e.preventDefault();
        $tabs1.slideToggle('slow');
        $tabs3.css('display','none' );
        $tabs2.css('display','none' );

    });

    var $secondtlink = $('#item2');

    $secondtlink.on('click', function(e){

        e.preventDefault();
        $tabs2.slideToggle('slow');;
        $tabs3.css('display','none');
        $tabs1.css('display', 'none');

    });

    var $thirdtlink = $('#item3');

    $thirdtlink.on('click', function(e){

        e.preventDefault();
        $tabs3.slideToggle('slow');;
        $tabs2.css('display','none' );
        $tabs1.css('display', 'none');
    });

});