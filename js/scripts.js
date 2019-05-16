/********** Index.html JS **********/
$( document ).ready(function () {

    //Carousel control
    $( "#pauseButton" ).click(function() {
        if ( $( "#pauseButton" ).children("span").hasClass( "fa-pause" )) {
            $( "#photoCarousel" ).carousel( "pause" );
            $( "#pauseButton" ).children( "span" ).removeClass( "fa-pause" );
            $( "#pauseButton" ).children( "span" ).addClass( "fa-play" );
        }
        else if ( $( "#pauseButton" ).children( "span" ).hasClass( "fa-play" )) {
            $( "#photoCarousel" ).carousel( "cycle" );
            $( "#pauseButton" ).children( "span" ).removeClass( "fa-play" );
            $( "#pauseButton" ).children( "span" ).addClass( "fa-pause" );
        }
    }); //End Carousel
});
/********** End Index.html **********/