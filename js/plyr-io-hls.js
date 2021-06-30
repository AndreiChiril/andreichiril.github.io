 document.addEventListener("DOMContentLoaded", function(event) {
 	var player = new Plyr(document.getElementById('player'), {
 		//debug: true
 	});
 	player.on('ready', function(event) {
 		var instance = event.detail.plyr;
 		var hslSource = null;
 		var sources = instance.media.querySelectorAll('source'),
 			i;
 		for (i = 0; i < sources.length; ++i) {
 			if (sources[i].src.indexOf('.m3u8') > -1) {
 				hslSource = sources[i].src;
 			}
 		}
 		if (hslSource !== null && Hls.isSupported()) {
 			var hls = new Hls();
 			hls.loadSource(hslSource);
 			hls.attachMedia(instance.media);
 			hls.on(Hls.Events.MANIFEST_PARSED, function() {
 				console.log('MANIFEST_PARSED');
 			});
 		}
 	});
 });
