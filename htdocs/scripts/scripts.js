

$(function () {
    
    var socket = io('http://10.69.3.151:1797');
    var screenHeight = $(window).innerHeight;
    var screenWidth = $(window).innerWidth;

    $(".select-screen button").click(function() {

        const data = {
            buttonRef:$(this).attr('data-ref'),
            height: window.innerHeight,
            width: window.innerWidth,
            ready: true
        }

        socket.emit('device-connected', data);
        $('.select-screen').fadeOut('slow');
        $('.ready-screen').fadeIn('slow');

        // startGame();
        return false;
    });


    socket.on('viewer', function(data){
        $('.ready-screen .play-button').fadeIn();
    });

    if($('.ready-screen .play-button').length > 0){
        $(".ready-screen .play-button").click(function() {
            socket.emit('ready');
        });
    }

    socket.on("move_on", function(data){

        // alert("RECIEVED AT SCREEN " + data.screen);
        // alert($("#plane").length);

        $("#plane").show();

       
        // $("#plane").css
        // while(xPos != (data.screenWidth - 50)){
    
            // }
        $('#plane').css('left',"0px");
       
    
        let xPos = 0;
        timer = setInterval (function () { // timer to move element slowly
            xPos++;
            $('#plane').css('left',xPos + "px");
            if (xPos == data.screenWidth){
                clearInterval(timer);
                socket.emit("moved", data);

            }

            // if(data.screen < data.devices.length - 1){
            // } else{
                // socket.emit("finished", data);
            // }
            
        }, 1);
       
    });
    
});


function startGame(){

    // let yPos =  document.getElementById("plane").offsetTop;
    // var screenHeight = window.innerHeight;
    
    // document.getElementById("plane").style.top = screenHeight / 2 + "px";
    
    // gameLoop();
};

function gameLoop(){
    // while(yPos != (screenHeight - 50)){
    //     yPos++;
    //     document.getElementById("plane").style.top = yPos + "px";
    // }
}

