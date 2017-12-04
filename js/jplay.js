/* 代码整理：懒人之家 www.lanrenzhijia.com */
$(document).ready(function(){
  var playlist = [{
      mp3:"../music/music1.mp3",
    },{
      mp3:"http://demo.lanrenzhijia.com/2014/music0917/images/i2.mp3",
    },{
      mp3:"http://demo.lanrenzhijia.com/2014/music0917/images/i2.mp3",
  }];
  var cssSelector = {
    jPlayer: "#jquery_jplayer",
    cssSelectorAncestor: ".music-player"
  };
  var options = {
    swfPath: "http://cdnjs.cloudflare.com/ajax/libs/jplayer/2.6.4/jquery.jplayer/Jplayer.swf",
    supplied: "ogv, m4v, oga, mp3"
  };
  var myPlaylist = new jPlayerPlaylist(cssSelector, playlist, options);
});