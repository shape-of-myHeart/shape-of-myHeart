var global = new Object();
window.addEventListener('load', function(){
    var bgm = global.bgm = new Audio('./resources/AI_RASK.mp3');
    bgm.play();
});