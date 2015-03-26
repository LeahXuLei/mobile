
var app = function(app) {
	
	app.makeHotSpots = function(assets, pages, direction) {
		
		if (direction == "horizontal") {
			var hs = new zim.HotSpots([
				{page:assets.main, rect:assets.main.box, call:function() {pages.go(assets.info, "right");}}
			], true, true); // local (defaults to true) and enable swipe on button (defaults to false)
		} else {
			var hs = new zim.HotSpots([
				{page:assets.main, rect:assets.main.box, call:function() {pages.go(assets.info, "down");}}
			], true, true); 
		}		
	}
		
	
	return app;
}(app || {});