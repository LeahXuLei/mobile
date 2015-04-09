// view
zog("hi from view.js");
var app = function(app) {
	
	app.makeHorizontalPages = function(layoutManager, gridManager, guideManager) {
		
// 		zog("pages");
		
 		p = {};
		
 		p.main = new createjs.Container();
 		p.main.name = "main";
 		p.main.setBounds(0,0,stageW,stageH);
 		p.rect = new zim.Rectangle(stageW, stageH, "white");
 		p.main.addChild(p.rect);
		
		var stand = new createjs.Bitmap("stand.png");
		stand.setBounds(0, 0, 200, 286);
		stand.regX = 195/2;
		stand.regY = 195/2;
		p.main.addChild(stand);
		stand.x= stageW/2;
		stand.y= 200;
		
		//jump sprite sheet
		var source; 
		var spriteSheet;
		p.jump;
		source = {
			"images": ["jump.png"],
			"frames": {width:200, height:286, count:2, regX: 17, regY:0},
			
			"animations": {
				"jump": [0,1]
				
			},
			"framerate": 10
		};
		spriteSheet = new createjs.SpriteSheet(source);
		p.jump = new createjs.Sprite(spriteSheet,'jump');
		createjs.Ticker.addEventListener("tick", stage);
		
		
		//run sprite sheet
		var runSource; 
		var runSpriteSheet;
		p.run;
		runSource = {
			"images": ["run.png"],
			"frames":  {width:197, height:286, count:5, regX: 0, regY:0},
			"animations": {
				"run": [0, 4]
			},
			"framerate": 10
		};
		runSpriteSheet = new createjs.SpriteSheet(runSource);
		p.run = new createjs.Sprite(runSpriteSheet,"run");
		createjs.Ticker.addEventListener("tick", stage);
		
		p.menu = new createjs.Container();
 		p.menu.name = "menu";
 		p.menu.setBounds(0,0,560,130);
		p.menu.regX = 500/2;
		p.menu.regY = 130/2;
		p.menu.x = stageW/2;
		p.menu.y = 0;
		p.main.addChild(p.menu);
		
		
		
		var jumpIcon = new createjs.Bitmap("jumpIcon.png");
		jumpIcon.setBounds(0, 0, 120, 120 );
		p.menu.addChild(jumpIcon);
		jumpIcon.x= 50;
		jumpIcon.y=  stageH-100;
		//new zim.drag(jumpIcon, null, null, null, null, true);
		jumpIcon.on("click", function(){
			console.log("onclick");
			stand.x = -200;
			stand.y = -200;
			stage.removeChild(p.run);
			stage.addChild(p.jump);
			p.jump.regX = 195/2;
			p.jump.regY = 195/2;
			p.jump.x = stageW/2;
			p.jump.y = 200;
			stage.update();
			
		});
		
		
		var runIcon = new createjs.Bitmap("runIcon.png");
		runIcon.setBounds(0, 0, 70, 70 );
		p.menu.addChild(runIcon);
		runIcon.x= 200;
		runIcon.y=  stageH-100;
		runIcon.cursor = "pointer";
		runIcon.on("click", function(){
			console.log("onclick");
			stand.x = -200;
			stand.y = -200;
			stage.removeChild(p.jump);
			stage.addChild(p.run);
			p.run.regX = 195/2;
			p.run.regY = 195/2;
			p.run.y = 200;
			p.run.x = stageW/2;
			stage.update();
			
		});
		
		var pause = new createjs.Bitmap("pause.png");
		pause.setBounds(0, 0, 70, 70 );
		p.menu.addChild(pause);
		pause.x= 350;
		pause.y=  stageH-100;
		pause.cursor = "pointer";
		pause.on("click", function(){
			console.log("onclick");
			stage.removeChild(p.jump);
			stage.removeChild(p.run);
			stand.y = 200;
			stand.x = stageW/2;
			stage.update();
			
		});
		
		
		
		
		/*
		jumpIcon.on("mousedown", function(){
			console.log("mousedown");
			stage.on("stagemousemove", checkHit);	
			
		});
		
		jumpIcon.on("mouseup", function(){
			stage.off("stagemousemove", checkHit);	
		});
		
		
		
		var hitting = false;
		
		function checkHit(){
			console.log("hi");
			if (zim.hitTestBounds(jumpIcon, stand)){
				if(!hitting ){
					console.log("hit");
					stage.removeEventListener("stagemousemove", checkHit);
						
					stand.x = -200;
					stand.y = -200;
					stage.addChild(p.jump);
					p.jump.x = stageW/2;
					p.jump.y = 200;
					
					hitting = true;
				} 
				
			}else{
					if(hitting){
						hitting = false;	
						setTimeout(function() {
							p.main.removeChild(p.jump);
							p.main.addChild(stand);
						}, 5000); 
					}
			}
		}*/
		
		
 		p.info = new createjs.Container();		
		p.info.name = "info";		
		p.infoBacking = new zim.Rectangle(stageW, stageH, "#dff79e");
		p.infoBacking.setBounds(0,0,stageW,stageH);
		p.info.addChild(p.infoBacking);
		
		var text = new createjs.Text('Please click the "Jump", "Run" and "Pause" button below to start the characer animation. ', "20px helvetica neue", "white");
		text.textBaseline = "alphabetic";
		text.textAlign ="center";
		text.lineWidth =410;
		p.info.addChild(text);
		text.x = stageW/2;
		text.y = 300;
		
			
		return p;
		
	}
	
	app.makeVerticalPages = function(layoutManager, gridManager, guideManager) {
		
		zog("pages");
		
		p = {};
		
 		p.main = new createjs.Container();
 		p.main.name = "main";
 		p.main.setBounds(0,0,stageW,stageH);
 		p.rect = new zim.Rectangle(stageW, stageH, "white");
 		p.main.addChild(p.rect);
		
		var stand = new createjs.Bitmap("stand.png");
		stand.setBounds(0, 0, 200, 286);
		stand.regX = 195/2;
		stand.regY = 195/2;
		p.main.addChild(stand);
		stand.x= stageW/2;
		stand.y= 200;
		
		//jump sprite sheet
		var source; 
		var spriteSheet;
		p.jump;
		source = {
			"images": ["jump.png"],
			"frames": {width:200, height:286, count:2, regX: 17, regY:0},
			
			"animations": {
				"jump": [0,1]
				
			},
			"framerate": 10
		};
		spriteSheet = new createjs.SpriteSheet(source);
		p.jump = new createjs.Sprite(spriteSheet,'jump');
		createjs.Ticker.addEventListener("tick", stage);
		
		
		//run sprite sheet
		var runSource; 
		var runSpriteSheet;
		p.run;
		runSource = {
			"images": ["run.png"],
			"frames":  {width:197, height:286, count:5, regX: 0, regY:0},
			"animations": {
				"run": [0, 4]
			},
			"framerate": 10
		};
		runSpriteSheet = new createjs.SpriteSheet(runSource);
		p.run = new createjs.Sprite(runSpriteSheet,"run");
		createjs.Ticker.addEventListener("tick", stage);
		
		p.menu = new createjs.Container();
 		p.menu.name = "menu";
 		p.menu.setBounds(0,0,560,130);
		p.menu.regX = 500/2;
		p.menu.regY = 130/2;
		p.menu.x = stageW/2;
		p.menu.y = 0;
		p.main.addChild(p.menu);
		
		
		
		var jumpIcon = new createjs.Bitmap("jumpIcon.png");
		jumpIcon.setBounds(0, 0, 120, 120 );
		p.menu.addChild(jumpIcon);
		jumpIcon.x= 50;
		jumpIcon.y=  stageH-100;
		//new zim.drag(jumpIcon, null, null, null, null, true);
		jumpIcon.on("click", function(){
			console.log("onclick");
			stand.x = -200;
			stand.y = -200;
			stage.removeChild(p.run);
			stage.addChild(p.jump);
			p.jump.regX = 195/2;
			p.jump.regY = 195/2;
			p.jump.x = stageW/2;
			p.jump.y = 200;
			stage.update();
			
		});
		
		
		var runIcon = new createjs.Bitmap("runIcon.png");
		runIcon.setBounds(0, 0, 70, 70 );
		p.menu.addChild(runIcon);
		runIcon.x= 200;
		runIcon.y=  stageH-100;
		runIcon.cursor = "pointer";
		runIcon.on("click", function(){
			console.log("onclick");
			stand.x = -200;
			stand.y = -200;
			stage.removeChild(p.jump);
			stage.addChild(p.run);
			p.run.regX = 195/2;
			p.run.regY = 195/2;
			p.run.y = 200;
			p.run.x = stageW/2;
			stage.update();
			
		});
		
		var pause = new createjs.Bitmap("pause.png");
		pause.setBounds(0, 0, 70, 70 );
		p.menu.addChild(pause);
		pause.x= 350;
		pause.y=  stageH-100;
		pause.cursor = "pointer";
		pause.on("click", function(){
			console.log("onclick");
			stage.removeChild(p.jump);
			stage.removeChild(p.run);
			stand.y = 200;
			stand.x = stageW/2;
			stage.update();
			
		});
		
		
	 	p.info = new createjs.Container();		
		p.info.name = "info";		
		p.infoBacking = new zim.Rectangle(stageW, stageH, "#dff79e");
		p.infoBacking.setBounds(0,0,stageW,stageH);
		p.info.addChild(p.infoBacking);
	
		return p;
		
	}	
	
	
	return app;
	
}(app || {});