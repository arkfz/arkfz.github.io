$(function () {

    $('body').prepend('<button>Animation</button><div><h2>Animacja Zakończona</h2></div>');

    $('div').css({
        position: 'relative',
        backgroundColor: 'red',
        width: '200px',
        height: '200px',
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontFamily: 'Arial',
        color: 'white'
    });

    $('button').css({
        width: '200px'
    })

    $('h2').css({
        fontSize: '15px',
        opacity: '0'
    })

    $('button').click(function () {
        $('div').animate({
            width: '100px',
            height: '100px',
            left: '100px'
        }, 1000, function () {
            $('div').animate({
                backgroundColor: 'blue'
            }, 1000, function () {
                $('h2').animate({
                    opacity: "1",
                }, 1250)
            })
        });
    });
}); 
