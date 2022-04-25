/*var currentMinute = document.querySelector(".currentMinute");
var timeline = document.querySelector(".timeline");
var time = document.querySelector(".time");
var pre = document.querySelector("#pre");
var next = document.querySelector("#next"); */



const songs = [
    {
        image:`/img/istockphoto-1283308631-612x612.jpg`,
        names:`Dean Martin - Let it Snow`,
        artist:`Dean Martin`,
        minute:`2:06`,
        listen:`/mp3/Dean Martin - Let it Snow_(MP3_128K).mp3`
    },
    {
        image:`/img/istockphoto-1306461345-612x612.jpg`,
        names:`Fool_s Garden - Lemon Tree`,
        artist:`Fool_s Garden`,
        minute:`3:13`,
        listen:`/mp3/Fool_s Garden - Lemon Tree(MP3_128K).mp3`
    }
    ,
    {
        image:`/img/istockphoto-623603366-170667a.jpg`,
        names:`Adamlar-Koca-Yasli-Sisko-Dunya`,
        artist:`Adamlar`,
        minute:`3:53`,
        listen:`/mp3/mp3indirdur-Adamlar-Koca-Yasli-Sisko-Dunya.mp3`
    }
]





    songs.forEach(function(e){
        $(".songlist").append(`<li class="listitem"><img class="listimgclass">
        <div class="listtext">
            <p class="listnames"></p>
            <p class="listartist"></p>
            <p class="listminute"></p>
            <audio> <source class="listaudio"> </audio>
        </div>
        </li>`);
        $(".listitem").attr("src", e.image);
        $(".listnames").text(e.names);
        $(".listartist").text(e.artist);
        $(".listminute").text(e.minute);
        $(".listaudio").attr("src",e.listen)
    })
songs.forEach(function(e){
    $(".songimage").attr("src", e.image);
    $(".names").text(e.names);
    $(".artist").text(e.artist);
    $(".minute").text(e.minute);
    $(".listen").attr("src",e.listen)
})




$("#openList").click(
    function(){
        $(".songlist").show();
        $("#closeList").show();
        $("#openList").hide()
    }
)

$("#closeList").click(
    function(){
        $("#openList").show();
        $(".songlist").hide();
        $("#closeList").hide()
    }
)


$("#repeatList").click(
    function(){
        $("#repeatList").hide();
        $("#mixed").show();
        $("#repeatSong").hide()
    }
)
$("#mixed").click(
    function(){
        $("#repeatList").hide();
        $("#mixed").hide();
        $("#repeatSong").show()
    }
)
$("#repeatSong").click(
    function(){
        $("#repeatList").show();
        $("#mixed").hide();
        $("#repeatSong").hide()
    }
)


$("#volume").click(
    function(){
        $(".volumelinebg").show();
        $(".volumeline").show();
        $(".volumepoint").show();
    }
)
$("#muted").click(
    function(){
        $(".volumelinebg").show();
        $(".volumeline").show();
        $(".volumepoint").show();
    }
)
$("#volume").dblclick(
    function(){
        $(".volumelinebg").hide();
        $(".volumeline").hide();
        $(".volumepoint").hide();
    }
)
$("#muted").dblclick(
    function(){
        $(".volumelinebg").hide();
        $(".volumeline").hide();
        $(".volumepoint").hide();
    }
)

$("#play").click(
    function(){
        $("#play").hide();
        $("#pause").show();
        (function playAudio() {
            $('#listen').get(0).play();
        } )()
    }
)


$("#pause").click(
    function(){
        $("#play").show();
        $("#pause").hide();
        (function pauseAudio() {
            $('#listen').get(0).pause();
        })()
    }
)
/* 
function pauseAudio() {
    $('#listen').get(0).pause();
}

function pauseAudio() {
    $('#listen').get(0).pause();
} */
