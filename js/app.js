// 创建一个WaveSurfer实例
var wavesurfer = Object.create(WaveSurfer);


// Init on DOM ready
document.addEventListener('DOMContentLoaded', function () {
    wavesurfer.init({
        container: '#waveform',
        waveColor: '#428bca',
        progressColor: '#31708f',
        height: 120,
        barWidth: 3,
        hideScrollbar:true
    });
});


// 绑定控件
document.addEventListener('DOMContentLoaded', function () {
    var playPause = document.querySelector('#playPause');
    playPause.addEventListener('click', function () {
        wavesurfer.playPause();
    });

    // 切换播放/暂停文本
    wavesurfer.on('play', function () {
        document.querySelector('#play').style.display = 'none';
        document.querySelector('#pause').style.display = '';
    });
    wavesurfer.on('pause', function () {
        document.querySelector('#play').style.display = '';
        document.querySelector('#pause').style.display = 'none';
    });


    // 播放列表的链接
    var links = document.querySelectorAll('#playlist a');
    var currentTrack = 0;

    // 按索引加载一条轨道并突出相应的链接
    var setCurrentSong = function (index) {
        links[currentTrack].classList.remove('active');
        currentTrack = index;
        links[currentTrack].classList.add('active');
        wavesurfer.load(links[currentTrack].href);
    };

    // 单击加载轨道
    Array.prototype.forEach.call(links, function (link, index) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            setCurrentSong(index);
        });
    });

    // 播放音频负载
    wavesurfer.on('ready', function () {
        wavesurfer.play();
    });

    // 到下一个轨道上完成
    wavesurfer.on('finish', function () {
        setCurrentSong((currentTrack + 1) % links.length);
    });

    // 加载第一个磁道
    setCurrentSong(currentTrack);
});
function Next(){
    console.log('1234')
    $("#link-music").attr("href","music/music3.mp3"); 
    $("#waveform").load();
}
