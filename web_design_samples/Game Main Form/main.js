var Global = new Object();
window.addEventListener('load', function () {
    var bgm = Global.bgm = new Audio('./resources/AI_RASK.mp3');
    bgm.play();

    Global.btnActive = new Audio('./resources/button-active.mp3');
    Global.btnOver = new Audio('./resources/button-over.mp3');

    function Sound(audio){
        return new Audio(audio.src);
    }

    var noteSpans = document.querySelectorAll('.note span');
    for (var i = 1, len = noteSpans.length; i < len; i++) {

        noteSpans[i].addEventListener('click', function () {
            Sound(Global.btnActive).play();
        });

        noteSpans[i].addEventListener('mouseover', function () {
            Sound(Global.btnOver).play();
        });

    }

});