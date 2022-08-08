(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"instructionalAnimationShahaf_atlas_1", frames: [[0,0,1997,1191]]},
		{name:"instructionalAnimationShahaf_atlas_2", frames: [[1760,249,38,279],[1800,249,38,261],[1720,249,38,280],[1840,249,38,261],[1962,249,28,78],[1880,249,80,119],[485,1192,420,237],[907,1192,420,237],[485,1431,420,77],[907,1431,420,77],[1329,1192,420,237],[1720,132,301,38],[1800,512,222,10],[1720,531,323,26],[1720,0,323,130],[1720,212,322,35],[1880,370,158,24],[0,0,1718,1190],[0,1192,483,440],[1720,172,300,38],[1720,559,222,10]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_22 = function() {
	this.initialize(ss["instructionalAnimationShahaf_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["instructionalAnimationShahaf_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["instructionalAnimationShahaf_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["instructionalAnimationShahaf_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["instructionalAnimationShahaf_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["instructionalAnimationShahaf_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["instructionalAnimationShahaf_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["instructionalAnimationShahaf_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["instructionalAnimationShahaf_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["instructionalAnimationShahaf_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["instructionalAnimationShahaf_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["instructionalAnimationShahaf_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["instructionalAnimationShahaf_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["instructionalAnimationShahaf_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["instructionalAnimationShahaf_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["instructionalAnimationShahaf_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["instructionalAnimationShahaf_atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["instructionalAnimationShahaf_atlas_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["instructionalAnimationShahaf_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["instructionalAnimationShahaf_atlas_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["instructionalAnimationShahaf_atlas_2"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["instructionalAnimationShahaf_atlas_2"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Path_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7EEFC").s().p("AgqEFIgZivQgPhfghAHQgJACgLANIAAlaQANglARACQAYADAIA4QAFAeABAvQADAZACA3QACAzADAcQAGAwAEAPQALApAYAHQAdAJASgyQAFgQAKg5IARh7QAKhKAPgvQAJgaAFgJQANgWAQAEIABAAIAAE/QgJgEgHAGQgSAMgGAiQgCANgBAnQgDB9gEAqQgHBBgEATQgMA2gcASQgJAFgIAAQgkAAgYhxg");
	this.shape.setTransform(13.575,37.4703);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,27.2,74.9), null);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7EEFC").s().p("AgqEFIgZivQgPhfghAHQgJACgLANIAAlaQANglARACQAYADAIA4QAFAeABAvQADAZACA3QACAzADAcQAGAwAEAPQALApAYAHQAdAJASgyQAFgQAKg5IARh7QAKhKAPgvQAJgaAFgJQANgWAQAEIABAAIAAE/QgJgEgHAGQgSAMgGAiQgCAOgBAnQgDB9gEApQgHBBgEATQgMA2gcASQgJAFgIAAQgkAAgYhxg");
	this.shape.setTransform(13.575,37.4703);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,27.2,74.9), null);


(lib.Path_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7EEFC").s().p("AAADxQgMgkgNg/QgQhIgIgbQgZhfgdAXQgVAQgDAsQgBAZABAtIgCATQgCAMgEAIIAAlkIAHgVQAIgVAKgBQAGAAAwBeQAwBdAMAAQAOAAArhfQAshhAFgCQAIgCAKAaQAFANADANIAAECQgKgRgMgGQgQgIgLAQQgPAVgHApQgEAXgFArQgJA4gGAWQgIAagLAGIgFACQgKAAgHgag");
	this.shape.setTransform(13.575,26.6639);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,27.2,53.4), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7EEFC").s().p("AAADxQgMgkgNg/QgQhIgIgbQgZhegdAWQgVARgDAsQgBAYABAtIgCATQgCANgEAHIAAlkIAHgVQAIgVAKgBQAGAAAwBeQAwBdAMAAQAOAAArhfQAshhAFgBQAIgDAKAaQAFANADANIAAECQgKgRgMgGQgQgIgLAQQgPAWgHAoQgEAXgFArQgJA6gGAVQgIAZgLAGIgFACQgKAAgHgag");
	this.shape.setTransform(13.575,26.6852);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0.1,27.2,53.3), null);


(lib.Group_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_22();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,19,139.5), null);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_21();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,19,130.5), null);


(lib.Path_1_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D7EEFC").s().p("AgqEFIgZivQgPhfghAHQgJACgLANIAAlaQANglARACQAYADAIA4QAFAeABAvQADAZACA3QACAzADAcQAGAwAEAPQALApAYAHQAdAJASgyQAFgQAKg5IARh7QAKhKAPgvQAJgaAFgJQANgWAQAEIABAAIAAE/QgJgEgHAGQgSAMgGAiQgCANgBAnQgDB9gEAqQgHBBgEATQgMA2gcASQgJAFgIAAQgkAAgYhxg");
	this.shape_1.setTransform(13.575,37.4703);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0_1, new cjs.Rectangle(0,0,27.2,74.9), null);


(lib.Path_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D7EEFC").s().p("AgqEFIgZivQgPhfghAHQgJACgLANIAAlaQANglARACQAYADAIA4QAFAeABAvQADAZACA3QACAzADAcQAGAwAEAPQALApAYAHQAdAJASgyQAFgQAKg5IARh7QAKhKAPgvQAJgaAFgJQANgWAQAEIABAAIAAE/QgJgEgHAGQgSAMgGAiQgCAOgBAnQgDB9gEApQgHBBgEATQgMA2gcASQgJAFgIAAQgkAAgYhxg");
	this.shape_1.setTransform(13.575,37.4703);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,27.2,74.9), null);


(lib.Path_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D7EEFC").s().p("AAADxQgMgkgNg/QgQhIgIgbQgZhfgdAXQgVAQgDAsQgBAZABAtIgCATQgCAMgEAIIAAlkIAHgVQAIgVAKgBQAGAAAwBeQAwBdAMAAQAOAAArhfQAshhAFgCQAIgCAKAaQAFANADANIAAECQgKgRgMgGQgQgIgLAQQgPAVgHApQgEAXgFArQgJA4gGAWQgIAagLAGIgFACQgKAAgHgag");
	this.shape_1.setTransform(13.575,26.6639);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0_1, new cjs.Rectangle(0,0,27.2,53.4), null);


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D7EEFC").s().p("AAADxQgMgkgNg/QgQhIgIgbQgZhegdAWQgVARgDAsQgBAYABAtIgCATQgCANgEAHIAAlkIAHgVQAIgVAKgBQAGAAAwBeQAwBdAMAAQAOAAArhfQAshhAFgBQAIgDAKAaQAFANADANIAAECQgKgRgMgGQgQgIgLAQQgPAWgHAoQgEAXgFArQgJA6gGAVQgIAZgLAGIgFACQgKAAgHgag");
	this.shape_1.setTransform(13.575,26.6852);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0.1,27.2,53.3), null);


(lib.Group_0_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.CachedBmp_20();
	this.instance_1.setTransform(-0.05,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0_1, new cjs.Rectangle(0,0,19,140), null);


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_1 = new lib.CachedBmp_19();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,19,130.5), null);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(172,226,248,0.678)").s().p("AlvBtQhHgJg/gLQjPglAAg0QAAg0DPglQBjgRB2gJQCDgKCZAAQEmAADPAkQBQAOAyARQBOAbAAAfQAAAXgqAVQgzAZhzAUQjPAmkmAAQjMgBijgRg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.9,-12.6,141.9,25.299999999999997);


(lib.text2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("After 4 days", "bold 81px 'Roboto'", "#FFFFFF");
	this.text.lineHeight = 99;
	this.text.lineWidth = 481;
	this.text.parent = this;
	this.text.setTransform(-240.6,-147.8);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-242.6,-149.8,485.2,299.6);


(lib.sun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFEE9").s().p("AisCtQhHhIAAhlQAAhkBHhIQBIhHBkAAQBlAABIBHQBHBIAABkQAABlhHBIQhIBHhlAAQhkAAhIhHg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.4,-24.4,48.9,48.9);


(lib.stars = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("AG1LkQgDgDgBgCQAAgDACgEIADgHQAEgEAFACIAAgCQAHABAEAGIACAFIAAAHQgCAGgFACIgDACIgBAAQgHAAgFgGgAsbLKQgCgCgBgDQAAgCACgFIAEgHQAEgEAEACIAAgBQAHABAEAFQACAEAAAEQAAALgKADIgCAAQgGAAgGgGgAjXLCIgBgCIABgBIADgDIACgBIAGgBIABAAIAEADIABACIAAACIgCAHIgLACQgEgEAAgEgAMNI5IgJgDIgCgBIgCgDQgEgJABgGQABgFAGgEQAFgDAGAAQAHABAEACQADACADAFQAGAMgIAHQgDADgHACIgEABgAnNI5IgIgDIgCgBIgCgDQgEgJABgGQAAgFAGgEQAGgDAGAAQAGABAEACQAEACACAFQAGAMgIAHQgDADgHACIgEABgAE6HIQgKAAgIgHQgHgGgCgKQgCgLAFgJQAEgHAHgEQAIgEAIAAQAIABAHAEQAHAFADAIQAEAJgCAKQgDAKgIAGQgHAFgKAAIgCAAgAqGEdIgEgFQAAgEABgEIAEgGQAEgEAFABIAAgBIAIADIACADQAFAHgDAHQgDAIgIAAQgGAAgFgFgAtmC6IAAgBIABgBIABgDIABgBIACgBIAGgBIACAAIADAEIABABIAAACIgBAIIgLABIgFgIgANQCdIgDgDQgCgEADgIIACgEQAFgFAFACIAAgCQAGABAEAGQAEAFgBAGQgDAKgIABIgBAAQgGAAgFgFgAE/ByIgCgDQgEgJABgGQACgHAHgDQAFgDAIACIAHACQAHAFABAIQABAIgEAEQgEAEgHACIgEABgAJDBgIAAgBIABgBIACgEIAHgCIADABIABAAIADADIAAABIABACQAAAEgCAEIgLABQgEgEgBgEgAkLA4IADgEIACgBIAGgBIACAAIAEAEIAAABIABABQAAAFgCADIgLACQgEgGgBgEgAqvhFIgEgCIgCgDQgCgCACgFIACgEQADgBADAAIAAgBQAGABABAFQADAFgDAEQgDAEgDAAIgDgBgAIojdIgDgFQgBgDACgFIAEgGQADgFAGACIAAgBQAHABADAFIADAGIgBAHIgCAEQgCAEgEABIgDAAQgFAAgHgFgAm5jzQgKgEgGgLQgFgKADgLQAFgRASgDQARgEALAPQALAOgHAQQgFAKgLAEQgGADgFAAQgFAAgFgCgADclTIAAgBIABgCIABgCIABgBIABgBIAGgBIACAAIABABIADADIABABIAAABQAAAFgBAEIgMABgAshmmIgJgDIgCgBIgCgDQgEgJABgGQABgFAGgEQAFgDAGAAQAHABAEACQADACADAFQAGAMgIAHQgDADgHACIgEABgALbnYIgJgDIgCgBIgCgDQgEgJABgGQABgFAGgEQAFgDAGAAQAHABAEACQADACADAFQAGAMgIAHQgDADgHACIgEABgAH2ogIAAgCIABgBIABgCIABgBIACgBIAFgBIADAAIAFAFIAAACQAAAEgCADIgLACIgFgIgAoYp0IAAgBIADgFIABgBIAGgBIACAAIAFAFIAAACQAAAEgCAEIgLABIgEgIgADWpvQgMgDgHgMQgGgLAFgNQADgHAHgGQAIgGAKABQAKAAAIAGQAHAHADAKQACAKgFAJQgEAIgKAFQgGADgGAAIgHgBgAj2p5QgJgDgCgLQgBgJAGgIIADgEIAEgCQAGgBAGAAQAEAAADADQAHAGAAAKQAAAIgGAHIgCADIgEABIgJABIgGgBgAL3rBIAAgBIABgCIABgCIABgBIABgBIAGgBIACAAIAFAFIAAACIgBAIIgMABQgCgDgCgFgAthrSIgDgEQgBgDACgFIADgHQAFgEAFACIAAgCQAGABAEAGIADAGIgBAGQgDAKgIAAIAAAAQgGAAgGgGg");
	this.shape.setTransform(0.0111,0.0269);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.1,-74.5,174.2,149.1);


(lib.Path_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D3D9B6").s().p("AgpAsIAAgEIACgBQAKgLAFgUIAJghQAJgZAUgHQASgGAGAPQAFALgBASQgEgNgJgDQgJgDgNALQgJAIgFAQQgDAJgEAVQgEAUgIAIQgEAEgCAAQgGAAgDgPg");
	this.shape.setTransform(4.1841,5.9539);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0,0,8.4,11.9), null);


(lib.Path_1_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E3E8C1").s().p("AATC+QgbgsgEg/QgEgwAMhCIAKhCQAIgsgKgUQgLgZgZgCQAPgEANAEQAOAFAMAQQALAPgBARQAAAUgHAcIgMAvQgLA3gDAxQgFAxALApQAGAVALAQg");
	this.shape_2.setTransform(3.25,19.1059);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0_2, new cjs.Rectangle(0,0,6.5,38.2), null);


(lib.Path_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8E463D").s().p("AhSDsQgogTgdgzQgYgpgLgzQgKgqAAgsQAEBTAjA9QAgA3ApAWQAWALAagBQAZgCAWgMQAkgTAWg4IAJgaIAHgaIAHgXQADgPgDgJQgbg9AXhCQAIgZAVgYQAOgPAigUQAcgWADgsQAEAdgPAoQgUAsgIAVQgTAwgGArIgQBzQgNBAgiAoQgcAjgpAKQgQAEgQAAQgaAAgYgLg");
	this.shape_2.setTransform(19.6671,24.7418);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,39.4,49.5), null);


(lib.Path_0_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C4C6A7").s().p("AAZA+IAJgnQAFgWgBgQQABgdgNgTQgEgIgIgEQgOgOgTAUIgGAFQgLAOgJASQAFgOAJgOQAPgWATgFQAYAFAKAPQAFAGACALQADAVgCAYQgBAOgHAdIgDAHIgMAqg");
	this.shape_2.setTransform(4.6068,8.75);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0_2, new cjs.Rectangle(0,0,9.2,17.5), null);


(lib.Path_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8E463D").s().p("AgeggQAWhBA7g1QgsA2gTA/QgYBJgBBvQgchJAjhug");
	this.shape_2.setTransform(5.045,15.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,10.1,30.2), null);


(lib.CompoundPath = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8E463D").s().p("AhSEcQgogTgdgzQgYgpgLgzQgXhmAfhcQAahMAsg3QAfgoAogXQAqgZAugDQAOgBAUACQAnAFAeAWQAhAZAIAkQAGAegPAqQgJAYgUAtQgTAwgGAqIgQB0QgNBAgiAoQgcAjgpAKQgQAEgQAAQgZAAgZgLgAAkkNQgkAGgiAUQgtAZghAwQgiAxgNBQQgNBbARA2QATA2AdAZQARAPAVAHQAWAGAVgEQAXgFARgVQAPgRAKgZQAJgXAEghIAGg6QAIhJAgg6QAhg4AGgXQAOgzgpgWQgWgNgdAAQgLAAgMACg");
	this.shape.setTransform(19.6607,29.5468);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,39.4,59.1), null);


(lib.skt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9BD3F9").s().p("AwXNoIAA7QMAgvAAAIAAbQg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.8,-87.2,209.6,174.5);


(lib.Scene_1_window = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// window
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(74.95,45.75,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(155).to({_off:false},0).wait(505));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_stroke = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// stroke
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C4C6C8").s().p("AhQEcQjWgSiOhaQiFhUhOiaQg2hrgSh0QAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAMAUAsAHQAXAEAnAEIAEADQADADACAAQBFAJC7AOQB6AKDFAEICeADQBYgBBHgLQA0gIBVgFQBPgEAygJIBMgLQAugIASgLIAEgIQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQgGBTgvBlQg1ByhTBRQhvBsibAvQhyAjiFAAQgvAAgzgFgAp/g9QBPCZB+BPQCOBaDUASQGBAiDejaQBOhLA0htQAsheAMhUQgYAMgsAGQgxAFgXAFQg0ALhOAEQhYAEgxAHQhIALhYABIiegDQh2gCg3gCQhRgDhCgGIiOgLQhPgGglgIQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBgBAAIgFgDQgYgCgkgHQgsgJgJgJQARBpA4Bsg");
	this.shape.setTransform(245.144,347.8626);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(627).to({_off:false},0).wait(33));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_coverForSun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// coverForSun
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D8CB98").s().p("AybE/IAAp9MAk3AAAIAAJ9g");
	this.shape.setTransform(195.45,297.525);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(155).to({_off:false},0).wait(505));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_background2_ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// background2_
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-48.35,0,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(155).to({_off:false},0).wait(505));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.replayButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Replay", "bold 13px 'Roboto'", "#FFFFFF");
	this.text.lineHeight = 18;
	this.text.lineWidth = 44;
	this.text.parent = this;
	this.text.setTransform(-19.3133,-8.4168,0.9998,0.9998);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6633").s().p("AkCBRQgaAAgSgTQgSgSAAgaIAAgjQAAgaASgSQASgTAaAAIIFAAQAaAAASATQASASAAAaIAAAjQAAAagSASQgSATgaAAg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.1,-10.4,64.30000000000001,20.8);


(lib.PlayButton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Play", "bold 33px 'Roboto'", "#FFFFFF");
	this.text.lineHeight = 42;
	this.text.lineWidth = 101;
	this.text.parent = this;
	this.text.setTransform(-31.6,-19.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF6633").s().p("AtOEDQhmABhIg7QhIg7AAhTIAAh1QAAhTBIg7QBIg7BmABIadAAQBmgBBIA7QBIA7AABTIAAB1QAABThIA7QhIA7hmgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.3,-25.9,218.6,51.9);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhVEcQkxgbini2Qhvh5glitQgNgSABgZQABgZAEAFQAVAbC5AXQDPAZEiABQE0ACC5gVQC5gUAsgpQAHgHgEAXIgKAyQgqDIigCMQi/CpkrAAQgvAAg0gFg");
	mask.setTransform(102.2118,80.241);

	// Layer_3
	this.instance = new lib.CachedBmp_16();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(30.5,51.4,143.5,57.699999999999996), null);


(lib.Instruction = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Repeat washing once a day, 4 days in total.", "bold 33px 'Roboto'");
	this.text.lineHeight = 42;
	this.text.lineWidth = 417;
	this.text.parent = this;
	this.text.setTransform(-208.25,-84.5);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-210.2,-86.5,420.5,173);


(lib.Path_1_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E4E8EB").s().p("AglAAQAAgNA9gNQAIAoAFANQhJgNgBgOg");
	this.shape_3.setTransform(3.75,2.65);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(0,0,7.5,5.3), null);


(lib.Path_0_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E4E8EB").s().p("AgRgXQAvAKAAANQAAANg7ALg");
	this.shape_3.setTransform(2.975,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0_3, new cjs.Rectangle(0,0,6,4.8), null);


(lib.Path_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E4E8EB").s().p("AifFAQk7ABjCiBQAjASAxASQCnA6CaALQCUAKCtgoQCjgkBihZQByhmAlihQAThRAEhWQB/gOAOgSIAiAAQAFC1hkCfQi9EtnngBg");
	this.shape_3.setTransform(66.8619,32.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,133.7,64.1), null);


(lib.CompoundPath_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4E8EB").s().p("AgbFAQnpABi8ktQg+hhgXh4QgMhDABg4IAmAAQATAYDcAQQDdAREvAAQExAADdgRQDcgQATgYIAiAAQAFC1hkCfQi9EtnogBgArgiaQAHA5A1BgQA+BvB/BJQDGBwEhgpIBggaQBogmAqg5QBJhgAYhyQAbh+hJgBQhAgBkcABIkQAAQgugBhBgFQiAgHhZgMIgUgBQhHAAAKBMg");
	this.shape_1.setTransform(80.0539,32.05);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_1, new cjs.Rectangle(0,0,160.1,64.1), null);


(lib.Path_0_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E4E8EB").s().p("AoeAuQjhgTAAgbQAAgaDhgTQDhgSE9AAQE/AADgASQDhATAAAaQAAAbjhATQjgASk/AAQk+AAjggSg");
	this.shape_4.setTransform(76.8,6.425);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0_4, new cjs.Rectangle(0,0,153.6,12.9), null);


(lib.Path_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E4E8EB").s().p("ACyAuQgFgMgPgDQgHgCgTAAIgwADIgwACQg0ABg0gEQiEgIhJgPQgegHgvgNQgagIgOgJIAAgZIMNAAIAABJQAAAMg7AJQg4AKhfAFg");
	this.shape_4.setTransform(39.05,5.475);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,78.1,11), null);


(lib.credit_plantRoots = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Plant roots vector created by brgfx - www.freepik.com", "normal 300 4px 'Roboto'");
	this.text.lineHeight = 7;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(-50,-3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-5,104,10);


(lib.credit_mineralWater = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Mineral water vector created by brgfx - www.freepik.com", "normal 300 4px 'Roboto'");
	this.text.lineHeight = 7;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(-50,-2.65);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-4.6,104,9.3);


(lib.credit_kitchen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Kitchen cabinet vector created by macrovector - www.freepik.com", "normal 300 4px 'Roboto'");
	this.text.lineHeight = 7;
	this.text.lineWidth = 117;
	this.text.parent = this;
	this.text.setTransform(-58.55,-3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.5,-5,121.1,10);


(lib.credit_colander = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Colander vector created by brgfx - www.freepik.com", "normal 300 4px 'Roboto'");
	this.text.lineHeight = 7;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(-50,-2.65);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-4.6,104,9.3);


(lib.credit_clipArt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Clip art vector created by brgfx - www.freepik.com", "normal 300 4px 'Roboto'");
	this.text.lineHeight = 7;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(-50,-3,0.9999,0.9999);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-5,104,10);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhVEcQkxgbini2Qhvh5glitQgNgSABgZQABgZAEAFQAVAbC5AXQDPAZEiABQE0ACC5gVQC5gUAsgpQAHgHgEAXIgKAyQgqDIigCMQi/CpkrAAQgvAAg0gFg");
	mask_1.setTransform(102.2118,80.241);

	// Layer_3
	this.instance_1 = new lib.CachedBmp_15();
	this.instance_1.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(30.5,51.4,143.5,57.699999999999996), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AhCBeQkcgGiegVQhBgJiBgeQgggNAAgPQAAgpDVgbQDVgbE1ABQE1ABDVAdQDVAdgBAoQAAAOgbANQh8AdhTALQi5AXkAAAIh+gBg");
	mask_2.setTransform(104.1251,16.2163);

	// Layer_3
	this.instance_2 = new lib.CachedBmp_14();
	this.instance_2.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(30.6,6.7,147.1,19.1), null);


(lib.Group_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9B9DA0").s().p("AHlAKIwMgGIAEgDQAOgBANAAIPZAFQBSABAFgPQAAAIgUAGQgTAFgYAAIgEAAg");
	this.shape.setTransform(55.225,3.7269);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9B9DA0").s().p("AIRAJQAAgEgJgDQgJgCgOAAIwBgGQgDgGgHgEIArgBQgGACAGACQABACAYAAIO8AGQAqAAAJAJQAFAGgJAEQgJAEgPAAQATgDABgGg");
	this.shape_1.setTransform(54.1143,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,110.5,4.8), null);


(lib.CompoundPath_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B9DA0").s().p("Ak8BTQixgIiGgZQibgeA1geQA5ghDmgVQDZgUDeADQCvADBzAGIBqAGQAjABgogHQhrgMlSgFIA2AAQE6AADYAcQDZAbgBAnQAAAOghANQAGgFgEgBQgJgDgRAFIgQAGQiWAuljAIQhRAChSAAQicAAiigHgAn2g1QjSAYgBAgQAAAhDSAYQDSAYEgABQEfAADSgYQDTgXAAgiQABggjSgYQjSgYkfgBIgMAAQkYAAjPAYg");
	this.shape_2.setTransform(74.2655,9.0195);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_2, new cjs.Rectangle(0,0,148.6,18.1), null);


(lib.Group_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9B9DA0").s().p("AHlAKIwMgGIAEgDQAOgBANAAIPZAFQBSABAFgPQAAAIgUAGQgTAFgYAAIgEAAg");
	this.shape_2.setTransform(55.225,3.7269);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9B9DA0").s().p("AIRAJQAAgEgJgDQgJgCgOAAIwBgGQgDgGgHgEIArgBQgGACAGACQABACAYAAIO8AGQAqAAAJAJQAFAGgJAEQgJAEgPAAQATgDABgGg");
	this.shape_3.setTransform(54.1143,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,110.5,4.8), null);


(lib.CompoundPath_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9B9DA0").s().p("Ak8BTQixgIiGgZQibgeA1geQA5ghDmgVQDZgUDeADQCvADBzAGIBqAGQAjABgogHQhrgMlSgFIA2AAQE6AADYAcQDZAbgBAnQAAAOghANQAGgFgEgBQgJgDgRAFIgQAGQiWAuljAIQhRAChSAAQicAAiigHgAn2g1QjSAYgBAgQAAAhDSAYQDSAYEgABQEfAADSgYQDTgXAAgiQABggjSgYQjSgYkfgBIgMAAQkYAAjPAYg");
	this.shape_3.setTransform(74.2655,9.0195);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3, new cjs.Rectangle(0,0,148.6,18.1), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AhCBeQkcgGiegVQhBgJiBgeQgggNAAgPQAAgpDVgbQDVgbE1ABQE1ABDVAdQDVAdgBAoQAAAOgbANQh8AdhTALQi5AXkAAAIh+gBg");
	mask_3.setTransform(104.1251,16.2163);

	// Layer_3
	this.instance_3 = new lib.CachedBmp_13();
	this.instance_3.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(30.6,6.7,147.1,19.1), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AhVEcQkxgbini2Qhvh5glitQgNgSABgZQABgZAEAFQAVAbC5AXQDPAZEiABQE0ACC5gVQC5gUAsgpQAHgHgEAXIgKAyQgqDIigCMQi/CpkrAAQgvAAg0gFg");
	mask_4.setTransform(102.2118,80.241);

	// Layer_3
	this.instance_4 = new lib.CachedBmp_12();
	this.instance_4.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(30.5,51.4,143.5,57.699999999999996), null);


(lib.blackscreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhDFAugMAAAhc/MCGLAAAMAAABc/g");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-429.4,-297.6,858.9,595.3);


(lib.Path_1_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8E463D").s().p("AhSDsQgogTgdgzQgYgpgLgzQgKgqAAgsQAEBTAjA9QAgA3ApAWQAWALAagBQAZgCAWgMQAkgTAWg4IAJgaIAHgaIAHgXQADgPgDgJQgbg9AXhCQAIgZAVgYQAOgPAigUQAcgWADgsQAEAdgPAoQgUAsgIAVQgTAwgGArIgQBzQgNBAgiAoQgcAjgpAKQgQAEgQAAQgaAAgYgLg");
	this.shape_4.setTransform(19.6671,24.7418);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_4, new cjs.Rectangle(0,0,39.4,49.5), null);


(lib.Path_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8E463D").s().p("AgeggQAWhBA7g1QgsA2gTA/QgYBJgBBvQgchJAjhug");
	this.shape_5.setTransform(5.045,15.075);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,10.1,30.2), null);


(lib.CompoundPath_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8E463D").s().p("AhSEcQgogTgdgzQgYgpgLgzQgXhmAfhcQAahMAsg3QAfgoAogXQAqgZAugDQAOgBAUACQAnAFAeAWQAhAZAIAkQAGAegPAqQgJAYgUAtQgTAwgGAqIgQB0QgNBAgiAoQgcAjgpAKQgQAEgQAAQgZAAgZgLgAAkkNQgkAGgiAUQgtAZghAwQgiAxgNBQQgNBbARA2QATA2AdAZQARAPAVAHQAWAGAVgEQAXgFARgVQAPgRAKgZQAJgXAEghIAGg6QAIhJAgg6QAhg4AGgXQAOgzgpgWQgWgNgdAAQgLAAgMACg");
	this.shape_4.setTransform(19.6607,29.5468);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_4, new cjs.Rectangle(0,0,39.4,59.1), null);


(lib.Group_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance_2 = new lib.CachedBmp_5();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,859,595), null);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-421.5,-298.5,843,597);


(lib.ClipGroup_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AgHVpQgOgIgBgjQgBgeggAdQgjAggBgCQgIgLgCgsQgDg2ARgpQARgrgJhEQgHg3gWg7QgNgiAYg3QAag7gKgmQgThIgCgiQgDg3AagsQAJgQgMgcQgPgdgDgLQgDgPAMgqQALgpgFgUQgHgbANgwQAMgqgWguQgTgqANgiQANgmgRguQgSgyAEgWQAFgYgKglQgHgbAHgaQADgKAPgiQAag5gVg7QgbhNgBgtQAAgkAWhPQAMgugPgtQgPgsAShBQARg/gUgzQgTgzAQg0QATg+gJgmQgMg3ABgTIAMheQAGgugRgeQgTgjgGgbQgFgXAGgHQAEgGCAgMICAgMQAJBVgDAqQgDBAgZA1QgUAqASArQAWA4gFAuQgwB8AJBDQADAXALAWIARAhQAPAkAFBIQAFBRgRA2QgLAmALBWQALBUgOAlQglBRAYBAQAGARANAeQAKAagEAZQgDAUgYA5QgOAgAPA3QAWBTABApQACA7gdBJQgaBBAQAyIARAsQAMAeAGAXQAAAigNAqQgOAwgDAcQgBATAMAwQALAsgIAfQgGAYAKAkQAKAigOAsQgOArASAjQAUAmgGAiIgNBEQgDAKgJAWQgGAPgYgZQgYgagGAHQgFAHgGAMQgGAMgIAMQgKAOgIAAQgEAAgDgCg");
	mask_5.setTransform(13.6885,138.6595);

	// Layer_3
	this.instance_5 = new lib.Group_0();
	this.instance_5.setTransform(12.65,107.65,1,1,0,0,0,9.4,69.9);
	this.instance_5.alpha = 0.5;
	this.instance_5.compositeOperation = "screen";

	this.instance_6 = new lib.Path_0();
	this.instance_6.setTransform(14.05,29.65,1,1,0,0,0,13.6,26.7);
	this.instance_6.alpha = 0.3008;
	this.instance_6.compositeOperation = "screen";

	this.instance_7 = new lib.Path_1_0();
	this.instance_7.setTransform(14.05,89.95,1,1,0,0,0,13.6,37.5);
	this.instance_7.alpha = 0.5;
	this.instance_7.compositeOperation = "screen";

	this.instance_8 = new lib.Group();
	this.instance_8.setTransform(13.9,215.55,1,1,0,0,0,9.4,65.3);
	this.instance_8.alpha = 0.5;
	this.instance_8.compositeOperation = "screen";

	this.instance_9 = new lib.Path();
	this.instance_9.setTransform(14.05,161.9,1,1,0,0,0,13.6,26.7);
	this.instance_9.alpha = 0.3008;
	this.instance_9.compositeOperation = "screen";

	this.instance_10 = new lib.Path_1();
	this.instance_10.setTransform(14.05,225.5,1,1,0,0,0,13.6,37.5);
	this.instance_10.alpha = 0.5;
	this.instance_10.compositeOperation = "screen";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#71CAF2").s().p("AiHVxMAAAgrhIEOAAMAAAArhg");
	this.shape.setTransform(13.55,142.975);

	var maskedShapeInstanceList = [this.instance_5,this.instance_6,this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0.1,3,27.2,274.3), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("ABUVSQgdgygMAAQgNAAADA0QACAvgPgLQgRgMgKgbQgLgcgFgKQgJgRgIALQgGAIgaAtQgXAhABgeQABgUgNguQgNguABglIAOh3QAJhQgOgwQgNguAHhYQAIhhgCgTQgDgSgKgnQgIgegCgrQgBgxAKgyIAVhWQAIgigKgsQgRhJgCgWQgEglAIg4QAHgxgIgnQgNg6AAgTQAAgXAPgeQAPgeAAg7QAAg2gNg/QgThjAhiRQAJgngMgjQgPgqABggIAPh3QAIhJgOgpQgMgkARg+QAQg7gJgQQgQgegBgiQgBgnASg4QAQgwgTgpQgZglgGgOQgHgRCFgIQBCgEBEAAQAEAngIB5QgHBoALAgQAKAcgMAaQgOAfAJAyQAHAngXBmQgTBWAbApQAXA1gCA/IgMB/QgFAuAFBiQAFBWgIAgQgDAOgUA4QgKAcAKATQAJARgFAfQgGAmACAPQACATASA0QAPA0gKAmQgGAcALBqQALBigQAlQgaBAATBMQAWBagPBHQgUAggHAuQgIAzAKAzIAYB5QALBLgKArQgLAtABAdQABAUAIAYQAIAZABAUQABAcgJAtIgDABQgKAAgYgrg");
	mask_6.setTransform(13.4297,140.5083);

	// Layer_3
	this.instance_11 = new lib.Group_0_1();
	this.instance_11.setTransform(12.85,74.25,1,1,0,0,0,9.3,69.9);
	this.instance_11.alpha = 0.5;
	this.instance_11.compositeOperation = "screen";

	this.instance_12 = new lib.Path_0_1();
	this.instance_12.setTransform(13.75,29.65,1,1,0,0,0,13.6,26.7);
	this.instance_12.alpha = 0.3008;
	this.instance_12.compositeOperation = "screen";

	this.instance_13 = new lib.Path_1_0_1();
	this.instance_13.setTransform(13.75,89.95,1,1,0,0,0,13.6,37.5);
	this.instance_13.alpha = 0.5;
	this.instance_13.compositeOperation = "screen";

	this.instance_14 = new lib.Group_1();
	this.instance_14.setTransform(13.6,215.55,1,1,0,0,0,9.4,65.3);
	this.instance_14.alpha = 0.5;
	this.instance_14.compositeOperation = "screen";

	this.instance_15 = new lib.Path_2();
	this.instance_15.setTransform(13.75,161.9,1,1,0,0,0,13.6,26.7);
	this.instance_15.alpha = 0.3008;
	this.instance_15.compositeOperation = "screen";

	this.instance_16 = new lib.Path_1_1();
	this.instance_16.setTransform(13.75,225.5,1,1,0,0,0,13.6,37.5);
	this.instance_16.alpha = 0.5;
	this.instance_16.compositeOperation = "screen";

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71CAF2").s().p("AiHVxMAAAgrhIEPAAMAAAArhg");
	this.shape_1.setTransform(13.725,142.275);

	var maskedShapeInstanceList = [this.instance_11,this.instance_12,this.instance_13,this.instance_14,this.instance_15,this.instance_16,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0.2,3,26.7,278), null);


(lib.waterflow1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_6();
	this.instance.setTransform(0.2,-1.15,1,1,0,0,0,13.7,140.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-141.9,27.3,281.6);


(lib.waterfall2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_5();
	this.instance.setTransform(0.15,1.1,1,1,0,0,0,13.8,141.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-140.1,27.6,282.29999999999995);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.text2("synched",0);
	this.instance.setTransform(4.35,98.55);

	this.instance_1 = new lib.blackscreen("synched",0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-429.4,-297.6,858.9,595.3);


(lib.sprout = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_0_2();
	this.instance.setTransform(15.95,-2.15,1,1,0,0,0,4.6,8.8);
	this.instance.compositeOperation = "screen";

	this.instance_1 = new lib.Path_1_0_2();
	this.instance_1.setTransform(18.55,7.35,1,1,0,0,0,3.2,19.1);
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.Path_2_1();
	this.instance_2.setTransform(12.65,-0.4,1,1,0,0,0,4.2,6);
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.CachedBmp_18();
	this.instance_3.setTransform(8,-12.05,0.5,0.5);

	this.instance_4 = new lib.Path_3();
	this.instance_4.setTransform(-12.8,-6.3,1,1,0,0,0,5,15.1);
	this.instance_4.alpha = 0.6016;
	this.instance_4.compositeOperation = "screen";

	this.instance_5 = new lib.Path_1_2();
	this.instance_5.setTransform(-2.15,4.9,1,1,0,0,0,19.7,24.8);
	this.instance_5.alpha = 0.3984;
	this.instance_5.compositeOperation = "multiply";

	this.instance_6 = new lib.CompoundPath();
	this.instance_6.setTransform(-2.15,0.1,1,1,0,0,0,19.7,29.6);
	this.instance_6.alpha = 0.3984;
	this.instance_6.compositeOperation = "multiply";

	this.instance_7 = new lib.CachedBmp_17();
	this.instance_7.setTransform(-22.15,-29.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.1,-29.8,44.1,59.5);


(lib.Scene_1_yadit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// yadit
	this.instance = new lib.CompoundPath_3();
	this.instance.setTransform(246.1,317.75,1,1,0,0,0,74.5,9.2);
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(170.5,308.75,0.5,0.5);

	this.instance_2 = new lib.Group_3();
	this.instance_2.setTransform(372.4,318.3,1,1,0,0,0,55.9,3);
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.CachedBmp_1();
	this.instance_3.setTransform(316.75,315.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},627).wait(33));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_waterlipse = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// waterlipse
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(421.25,206.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(111).to({_off:false},0).wait(10).to({startPosition:0},0).to({x:-187.75},13,cjs.Ease.quartIn).to({_off:true},7).wait(14).to({_off:false,x:317.55,y:313},0).wait(204).to({startPosition:0},0).to({regX:-0.1,regY:0.2,scaleX:0.8074,scaleY:0.8074,rotation:-54.2091,x:773.95,y:265.35},6).to({regX:-0.3,regY:0.6,scaleX:0.6004,scaleY:1.447,rotation:0,skewX:-110.3073,skewY:-54.2111,x:718.5,y:321.7,alpha:0},8).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_WaterFlow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// WaterFlow
	this.instance = new lib.waterflow1("synched",0);
	this.instance.setTransform(423.3,142.5,0.386,0.386,0,0,0,0.5,-0.5);
	this.instance._off = true;

	this.instance_1 = new lib.waterfall2("synched",0);
	this.instance_1.setTransform(423.25,144.05,0.3992,0.3992,0,0,0,0.7,1.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(78).to({_off:false},0).to({_off:true,regX:0.7,regY:1.2,scaleX:0.3992,scaleY:0.3992,x:423.25,y:144.05},4).to({_off:false,regX:0.5,regY:-0.5,scaleX:0.386,scaleY:0.386,x:423.3,y:142.5},3).to({_off:true,regX:0.7,regY:1.2,scaleX:0.3992,scaleY:0.3992,x:423.25,y:144.05},4).to({_off:false,regX:0.5,regY:-0.5,scaleX:0.386,scaleY:0.386,x:423.3,y:142.5},5).to({_off:true,regX:0.7,regY:1.2,scaleX:0.3992,scaleY:0.3992,x:423.25,y:144.05},5).to({_off:false,regX:0.5,regY:-0.5,scaleX:0.386,scaleY:0.386,x:423.3,y:142.5},5).to({_off:true,regX:0.7,regY:1.2,scaleX:0.3992,scaleY:0.3992,x:423.25,y:144.05},5).to({_off:false,regX:0.5,regY:-0.5,scaleX:0.386,scaleY:0.386,x:423.3,y:142.5},5).to({_off:true},1).wait(296).to({_off:false,regY:-141.3,scaleX:0.2085,scaleY:0.1723,x:708.1,y:285.75},0).to({_off:true},6).wait(6).to({_off:false},0).to({_off:true},5).wait(6).to({_off:false},0).to({_off:true},5).wait(6).to({_off:false},0).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(78).to({_off:false},4).to({_off:true,regX:0.5,regY:-0.5,scaleX:0.386,scaleY:0.386,x:423.3,y:142.5},3).to({_off:false,regX:0.7,regY:1.2,scaleX:0.3992,scaleY:0.3992,x:423.25,y:144.05},4).to({_off:true,regX:0.5,regY:-0.5,scaleX:0.386,scaleY:0.386,x:423.3,y:142.5},5).to({_off:false,regX:0.7,regY:1.2,scaleX:0.3992,scaleY:0.3992,x:423.25,y:144.05},5).to({_off:true,regX:0.5,regY:-0.5,scaleX:0.386,scaleY:0.386,x:423.3,y:142.5},5).to({_off:false,regX:0.7,regY:1.2,scaleX:0.3992,scaleY:0.3992,x:423.25,y:144.05},5).to({_off:true,regX:0.5,regY:-0.5,scaleX:0.386,scaleY:0.386,x:423.3,y:142.5},5).wait(303).to({_off:false,regX:0.2,regY:-134.2,scaleX:0.2121,scaleY:0.1743,x:708.3,y:286.55},0).to({_off:true},6).wait(5).to({_off:false},0).to({_off:true},6).wait(5).to({_off:false},0).to({_off:true},6).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_top = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// top
	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(246.15,321.55,1,1,0,0,0,105.1,19.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(627).to({_off:false},0).wait(33));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_sun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sun
	this.instance = new lib.sun("synched",0);
	this.instance.setTransform(120.2,100.75);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(155).to({_off:false},0).wait(50).to({startPosition:0},0).to({x:258.5,y:295.35},51).wait(80).to({startPosition:0},0).to({x:120.05,y:100.75},16).wait(144).to({startPosition:0},0).to({x:275.8,y:270.8},18).wait(64).to({startPosition:0},0).to({x:120.05,y:100.75},18).wait(64));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_stars = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// stars
	this.instance = new lib.stars("synched",0);
	this.instance.setTransform(197.15,157.15);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(261).to({_off:false},0).wait(60).to({startPosition:0},0).wait(17).to({startPosition:0},0).to({_off:true},1).wait(179).to({_off:false},0).wait(47).to({startPosition:0},0).wait(19).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_srouts = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// srouts
	this.instance = new lib.sprout("synched",0);
	this.instance.setTransform(277.8,325.3,0.2499,0.2499,-45.0198,0,0,0,2.9);

	this.instance_1 = new lib.sprout("synched",0);
	this.instance_1.setTransform(273.5,317,0.2317,0.2317,-75.0222,0,0,-1.4,2.4);

	this.instance_2 = new lib.sprout("synched",0);
	this.instance_2.setTransform(304.15,321.75,0.2316,0.2316,-165.0435,0,0,-2.5,1.6);

	this.instance_3 = new lib.sprout("synched",0);
	this.instance_3.setTransform(232.85,315.25,0.2315,0.2315,78.002,0,0,-0.8,1.4);

	this.instance_4 = new lib.sprout("synched",0);
	this.instance_4.setTransform(260.25,316.85,0.2316,0.2316,-165.0435,0,0,-2.5,1.6);

	this.instance_5 = new lib.sprout("synched",0);
	this.instance_5.setTransform(292,319.85,0.25,0.25,-45.0148,0,0,0,2);

	this.instance_6 = new lib.sprout("synched",0);
	this.instance_6.setTransform(264.35,321.8,0.2316,0.2316,77.9962,0,0,-1.2,1.7);

	this.instance_7 = new lib.sprout("synched",0);
	this.instance_7.setTransform(250.55,325.95,0.25,0.25,-45.0198,0,0,0,2.2);

	this.instance_8 = new lib.sprout("synched",0);
	this.instance_8.setTransform(286.1,318.05,0.2315,0.2315,77.9954,0,0,-1.2,1.7);

	this.instance_9 = new lib.sprout("synched",0);
	this.instance_9.setTransform(246.55,315.3,0.2315,0.2315,78.002,0,0,-0.8,1.4);

	this.instance_10 = new lib.sprout("synched",0);
	this.instance_10.setTransform(237.55,323.65,0.2317,0.2317,-75.0185,0,0,-1.2,2.1);

	this.instance_11 = new lib.sprout("synched",0);
	this.instance_11.setTransform(223.7,320.55,0.2316,0.2316,-165.0382,0,0,-1.9,1.9);

	this.instance_12 = new lib.sprout("synched",0);
	this.instance_12.setTransform(212.7,319.3,0.2317,0.2317,-72.0089,0,0,-1.6,2.8);

	this.instance_13 = new lib.sprout("synched",0);
	this.instance_13.setTransform(200.55,319.95,0.25,0.25,-45.0173,0,0,0,1.7);

	this.instance_14 = new lib.sprout("synched",0);
	this.instance_14.setTransform(192.05,320.7,0.2318,0.2318,-75.0195,0,0,-1.2,2.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},627).wait(33));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_sky = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sky
	this.instance = new lib.skt("synched",0);
	this.instance.setTransform(196.45,159.1,1.0095,1);
	this.instance._off = true;
	var instanceFilter_1 = new cjs.ColorFilter(1,1,1,1,0,0,0,0);
	this.instance.filters = [instanceFilter_1];
	this.instance.cache(-107,-89,214,179);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(155).to({_off:false},0).wait(85).to({startPosition:0},0).to({startPosition:0},43).wait(32).to({startPosition:0},0).to({startPosition:0},29).wait(168).to({startPosition:0},0).to({startPosition:0},13).wait(52).to({startPosition:0},0).to({startPosition:0},14).wait(69));
	this.timeline.addTween(cjs.Tween.get(instanceFilter_1).wait(240).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 0).to(new cjs.ColorFilter(-1,-1,0.19921875,1,0,0,0,0), 43).wait(32).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 29).wait(168).to(new cjs.ColorFilter(-1,-1,0.19921875,1,0,0,0,0), 13).wait(52).to(new cjs.ColorFilter(1,1,1,1,0,0,0,0), 14).wait(69));

	this.filterCacheList = [];
	this.filterCacheList.push({instance: this.instance, startFrame:155, endFrame:155, x:-107, y:-89, w:214, h:179});
	this.filterCacheList.push({instance: this.instance, startFrame:240, endFrame:240, x:-107, y:-89, w:214, h:179});
	this.filterCacheList.push({instance: this.instance, startFrame:241, endFrame:283, x:-107, y:-89, w:214, h:179});
	this.filterCacheList.push({instance: this.instance, startFrame:316, endFrame:344, x:-107, y:-89, w:214, h:179});
	this.filterCacheList.push({instance: this.instance, startFrame:512, endFrame:512, x:-107, y:-89, w:214, h:179});
	this.filterCacheList.push({instance: this.instance, startFrame:513, endFrame:525, x:-107, y:-89, w:214, h:179});
	this.filterCacheList.push({instance: this.instance, startFrame:578, endFrame:591, x:-107, y:-89, w:214, h:179});
	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_replay_button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// replay_button
	this.buttonReplay = new lib.replayButton();
	this.buttonReplay.name = "buttonReplay";
	this.buttonReplay.setTransform(246.6,293.9,1,1,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.buttonReplay, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6600").ss(0.1,1,1).p("AkChQIIFAAQAaAAASATQATASAAAaIAAAjQAAAagTASQgSATgaAAIoFAAQgaAAgSgTQgTgSAAgaIAAgjQAAgaATgSQASgTAaAAg");
	this.shape.setTransform(246.6,293.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.buttonReplay}]},659).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Play_button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Play_button
	this.buttonPlay = new lib.PlayButton();
	this.buttonPlay.name = "buttonPlay";
	this.buttonPlay.setTransform(411.95,484.8);
	new cjs.ButtonHelper(this.buttonPlay, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.buttonPlay).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_Play_button, null, null);


(lib.Scene_1_instructiontxt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// instructiontxt
	this.instance = new lib.Instruction("synched",0);
	this.instance.setTransform(557.45,259.35);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(558).to({_off:false},0).wait(47));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_front = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// front
	this.instance = new lib.ClipGroup_4();
	this.instance.setTransform(248.5,326.5,1,1,0,0,0,105.1,59.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(627).to({_off:false},0).wait(33));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_fadeEffect = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fadeEffect
	this.instance = new lib.blackscreen("synched",0);
	this.instance.setTransform(424.25,297.35);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance_1 = new lib.Tween9("synched",0);
	this.instance_1.setTransform(429.3,297.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},136).to({state:[{t:this.instance}]},19).to({state:[{t:this.instance}]},15).to({state:[]},1).to({state:[{t:this.instance}]},424).to({state:[{t:this.instance_1}]},13).to({state:[{t:this.instance}]},19).to({state:[{t:this.instance}]},10).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(136).to({_off:false},0).to({alpha:1},19,cjs.Ease.quadOut).to({alpha:0},15,cjs.Ease.sineIn).to({_off:true},1).wait(424).to({_off:false,x:429.3,y:297.6},0).to({_off:true,alpha:1},13,cjs.Ease.sineOut).wait(19).to({_off:false,alpha:0.7109},0).to({alpha:0},10,cjs.Ease.sineIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_creditsSection = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// creditsSection
	this.credit_kitchen = new lib.credit_kitchen();
	this.credit_kitchen.name = "credit_kitchen";
	this.credit_kitchen.setTransform(226.1,272);
	new cjs.ButtonHelper(this.credit_kitchen, 0, 1, 1);

	this.credit_clipArt = new lib.credit_clipArt();
	this.credit_clipArt.name = "credit_clipArt";
	this.credit_clipArt.setTransform(217.45,261.05);
	new cjs.ButtonHelper(this.credit_clipArt, 0, 1, 1);

	this.credit_mineralWater = new lib.credit_mineralWater();
	this.credit_mineralWater.name = "credit_mineralWater";
	this.credit_mineralWater.setTransform(217.65,250.4,0.9999,0.9999,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.credit_mineralWater, 0, 1, 1);

	this.credit_colander = new lib.credit_colander();
	this.credit_colander.name = "credit_colander";
	this.credit_colander.setTransform(217.65,240.3);
	new cjs.ButtonHelper(this.credit_colander, 0, 1, 1);

	this.credit_plantRoots = new lib.credit_plantRoots();
	this.credit_plantRoots.name = "credit_plantRoots";
	this.credit_plantRoots.setTransform(217.6,229.1);
	new cjs.ButtonHelper(this.credit_plantRoots, 0, 1, 1);

	this.text = new cjs.Text("Credits:", "normal 700 6px 'Roboto'");
	this.text.lineHeight = 10;
	this.text.lineWidth = 35;
	this.text.parent = this;
	this.text.setTransform(238.05,213.05);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.439)").s().p("AsZFPQgmAAAAgjIAApXQAAgjAmAAIYzAAQAmAAAAAjIAAJXQAAAjgmAAg");
	this.shape.setTransform(247.375,244.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape},{t:this.text},{t:this.credit_plantRoots},{t:this.credit_colander},{t:this.credit_mineralWater},{t:this.credit_clipArt},{t:this.credit_kitchen}]},659).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.NEWCOLANFRONT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(2.8,-20.85,1,1,0,0,0,105,59.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.2,-80.2,210,118.5);


(lib.colanFront = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(3.15,-21.1,1,1,0,0,0,105,59.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C4C6C8").s().p("AhQEcQjWgSiOhaQiFhUhOiaQg2hrgSh0QAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAMAUAsAHQAXAEAnAEIAEADQADADACAAQBFAJC7AOQB6AKDFAEICeADQBYgBBHgLQA0gIBVgFQBPgEAygJIBMgLQAugIASgLIAEgIQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQgGBTgvBlQg1ByhTBRQhvBsibAvQhyAjiFAAQgvAAgzgFgAp/g9QBPCZB+BPQCOBaDUASQGBAiDejaQBOhLA0htQAsheAMhUQgYAMgsAGQgxAFgXAFQg0ALhOAEQhYAEgxAHQhIALhYABIiegDQh2gCg3gCQhRgDhCgGIiOgLQhPgGglgIQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAgBgBAAIgFgDQgYgCgkgHQgsgJgJgJQARBpA4Bsg");
	this.shape.setTransform(-0.145,0.2195);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.8,-80.5,210,118.5);


(lib.colanBack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CompoundPath_2();
	this.instance.setTransform(-53.1,-0.6,1,1,0,0,0,74.2,9);
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.CachedBmp_11();
	this.instance_1.setTransform(-128.65,-9.65,0.5,0.5);

	this.instance_2 = new lib.Group_2();
	this.instance_2.setTransform(73.2,-0.05,1,1,0,0,0,55.2,2.4);
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.CachedBmp_10();
	this.instance_3.setTransform(17.65,-2.5,0.5,0.5);

	this.instance_4 = new lib.ClipGroup_2();
	this.instance_4.setTransform(-53.05,3.1,1,1,0,0,0,105,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158,-16.1,286.7,38.5);


(lib.bowlFront = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_0_3();
	this.instance.setTransform(74.2,-30.1,1,1,0,0,0,3,2.4);
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Path_1_3();
	this.instance_1.setTransform(-72.65,-30.15,1,1,0,0,0,3.7,2.6);
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.CachedBmp_9();
	this.instance_2.setTransform(-80.3,-34.5,0.4981,0.4981);

	this.instance_3 = new lib.Path_4();
	this.instance_3.setTransform(13.25,2.15,1,1,0,0,0,66.8,32);
	this.instance_3.compositeOperation = "multiply";

	this.instance_4 = new lib.CompoundPath_1();
	this.instance_4.setTransform(0.05,2.15,1,1,0,0,0,80,32);
	this.instance_4.compositeOperation = "multiply";

	this.instance_5 = new lib.CachedBmp_8();
	this.instance_5.setTransform(-80.3,-29.85,0.4981,0.4981);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.3,-34.5,160.89999999999998,69.4);


(lib.bowlBack = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_0_4();
	this.instance.setTransform(0.35,-30.5,1,1,0,0,0,76.8,6.4);
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.CachedBmp_7();
	this.instance_1.setTransform(-80.4,-39.1,0.5,0.5);

	this.instance_2 = new lib.Path_5();
	this.instance_2.setTransform(0.05,32.8,1,1,0,0,0,39.1,5.5);
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.CachedBmp_6();
	this.instance_3.setTransform(-39.4,26.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.4,-39.1,161,78);


(lib.bean = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Path_6();
	this.instance.setTransform(-1.9,1.9,0.2234,0.2234,-75.0116,0,0,5,15.8);
	this.instance.alpha = 0.6016;
	this.instance.compositeOperation = "screen";

	this.instance_1 = new lib.Path_1_4();
	this.instance_1.setTransform(1.15,0.3,0.2234,0.2234,-75.0116,0,0,19.7,25.8);
	this.instance_1.alpha = 0.3984;
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.CompoundPath_4();
	this.instance_2.setTransform(0.05,0,0.2234,0.2234,-75.0116,0,0,19.9,30.2);
	this.instance_2.alpha = 0.3984;
	this.instance_2.compositeOperation = "multiply";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#57210E").s().p("AhTEeQgogTgegyQgZgqgLg0QgXhoAfhcQAahNAtg3QAhgqAqgYQApgXAtgDQAPgBAUACQAmAEAfAYQAjAZAIAlQAFAZgIAfQgFASgRAkIgOAhQgSAxgGApIgGArQgHBAgIAeQgOAxgcAjQgTAYgcANQgaANgeAAQgbAAgZgMgAggkJQgpAXghAoQgsA3gZBMQgfBZAXBoQALAzAYApQAdAwAmATQAYALAaAAQAcAAAagMQAagNASgXQAcgiANgwQAIgdAHg/IAGgsQAHgrASgwIAOghQAQgkAFgRQAIgegFgYQgIgighgZQgegWgkgEIgigBQgrADgoAXg");
	this.shape.setTransform(-0.0573,0.0342,0.2233,0.2233,-75.0076);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8E463D").s().p("AhSEcQgogTgdgzQgYgpgLgzQgXhmAfhcQAahMAsg3QAfgoAogXQAqgZAugDQAOgBAUACQAnAFAeAWQAhAZAIAkQAGAegPAqQgJAYgUAtQgTAwgGAqIgQB0QgNBAgiAoQgcAjgpAKQgQAEgQAAQgZAAgZgLg");
	this.shape_1.setTransform(-0.052,0.0384,0.2233,0.2233,-75.0076);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-5.9,15,11.9);


(lib.background1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Group_4();
	this.instance.setTransform(0.05,0.05,1,1,0,0,0,429.4,297.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-429.3,-297.5,859,595);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bean("synched",0);
	this.instance.setTransform(53.85,-0.7,0.6361,0.5244,0,-111.7494,68.2496,0.1,-0.1);

	this.instance_1 = new lib.bean("synched",0);
	this.instance_1.setTransform(9.7,-4.6,0.7624,0.6285,0,-171.7499,8.2488,-0.2,-0.1);

	this.instance_2 = new lib.bean("synched",0);
	this.instance_2.setTransform(49.7,1.25,0.5799,0.5799,-59.9993,0,0,-0.1,0.1);

	this.instance_3 = new lib.bean("synched",0);
	this.instance_3.setTransform(38.05,1.1,0.58,0.58,30.0025,0,0,-0.1,-0.1);

	this.instance_4 = new lib.bean("synched",0);
	this.instance_4.setTransform(43.1,-0.45,0.58,0.58,-104.9974,0,0,-0.1,-0.1);

	this.instance_5 = new lib.bean("synched",0);
	this.instance_5.setTransform(36.4,-3,0.6475,0.676,0,-141.7498,41.7425,0.1,-0.1);

	this.instance_6 = new lib.bean("synched",0);
	this.instance_6.setTransform(19.2,2.6,0.5182,0.4272,-64.0272,0,0,-0.2,0.1);

	this.instance_7 = new lib.bean("synched",0);
	this.instance_7.setTransform(32.5,0.7,0.6188,0.5101,0,-81.7504,98.2512,-0.2,0.1);

	this.instance_8 = new lib.bean("synched",0);
	this.instance_8.setTransform(-3.65,-2.85,0.7624,0.6285,0,-81.7489,98.2519,-0.2,0.1);

	this.instance_9 = new lib.bean("synched",0);
	this.instance_9.setTransform(23.75,-2.85,0.7623,0.6285,130.9744,0,0,-0.2,0);

	this.instance_10 = new lib.bean("synched",0);
	this.instance_10.setTransform(-13.25,-1.7,0.9173,0.7562,0,179.2415,-0.7587,-0.5,-0.1);

	this.instance_11 = new lib.bean("synched",0);
	this.instance_11.setTransform(-8.25,3.35,0.7624,0.6285,0,34.0242,-145.9753,-0.2,0.1);

	this.instance_12 = new lib.bean("synched",0);
	this.instance_12.setTransform(24.85,2.75,0.6353,0.5237,0,-17.7508,162.2483,-0.3,0.1);

	this.instance_13 = new lib.bean("synched",0);
	this.instance_13.setTransform(3.2,3.6,0.7624,0.6285,0,23.2512,-156.7487,-0.1,0.1);

	this.instance_14 = new lib.bean("synched",0);
	this.instance_14.setTransform(7.15,0.45,1.0428,0.8597,0,-141.749,38.2513,-0.1,-0.1);

	this.instance_15 = new lib.bean("synched",0);
	this.instance_15.setTransform(15.2,0.4,0.9195,0.7333,0,158.2519,-21.7483,-0.1,0);

	this.instance_16 = new lib.bean("synched",0);
	this.instance_16.setTransform(-13.65,-1.7,0.9173,0.7562,-179.2415,0,0,-0.5,-0.1);

	this.instance_17 = new lib.bean("synched",0);
	this.instance_17.setTransform(-18.65,3.35,0.7624,0.6285,-34.0242,0,0,-0.2,0.1);

	this.instance_18 = new lib.bean("synched",0);
	this.instance_18.setTransform(-25.3,-2.65,0.7624,0.6285,-154.0247,0,0,-0.2,0.1);

	this.instance_19 = new lib.bean("synched",0);
	this.instance_19.setTransform(-30.1,3.6,0.7624,0.6285,-23.2512,0,0,-0.1,0.1);

	this.instance_20 = new lib.bean("synched",0);
	this.instance_20.setTransform(-34.05,0.45,1.0428,0.8597,141.749,0,0,-0.1,-0.1);

	this.instance_21 = new lib.bean("synched",0);
	this.instance_21.setTransform(-42.1,0.4,0.9195,0.7333,-158.2519,0,0,-0.1,0);

	this.instance_22 = new lib.bean("synched",0);
	this.instance_22.setTransform(-51.05,0.4,1,1,0,0,0,-0.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.2,-7.6,114.30000000000001,14);


(lib.Scene_1_open_scene = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// open_scene
	this.text = new cjs.Text("Bowl", "bold 21px 'Roboto'");
	this.text.lineHeight = 27;
	this.text.lineWidth = 88;
	this.text.parent = this;
	this.text.setTransform(655.6,310.7);

	this.text_1 = new cjs.Text("Colander", "bold 21px 'Roboto'");
	this.text_1.lineHeight = 27;
	this.text_1.lineWidth = 88;
	this.text_1.parent = this;
	this.text_1.setTransform(351.55,310.7);

	this.text_2 = new cjs.Text("Beans", "bold 21px 'Roboto'");
	this.text_2.lineHeight = 27;
	this.text_2.lineWidth = 88;
	this.text_2.parent = this;
	this.text_2.setTransform(144.95,310.7);

	this.instance = new lib.bowlFront("synched",0);
	this.instance.setTransform(680.15,403.3,1.0037,1);

	this.instance_1 = new lib.bowlBack("synched",0);
	this.instance_1.setTransform(680.1,403.4);

	this.instance_2 = new lib.colanBack("synched",0);
	this.instance_2.setTransform(426.95,386.7,1,1,0,0,0,-14.7,3.1);

	this.instance_3 = new lib.colanFront("synched",0);
	this.instance_3.setTransform(391.05,392.2,1,1,0,0,0,3.2,-21.2);

	this.instance_4 = new lib.bean("synched",0);
	this.instance_4.setTransform(209.45,419.35,4.3529,4.3529,-90,0,0,-0.1,0);

	this.instance_5 = new lib.bean("synched",0);
	this.instance_5.setTransform(177.05,384.15,4.3528,4.3528,29.9992,0,0,-0.1,0);

	this.instance_6 = new lib.bean("synched",0);
	this.instance_6.setTransform(151.7,419.35,4.3529,4.3529,0,0,0,-0.1,0);

	this.text_3 = new cjs.Text("What you need:", "bold 30px 'Roboto'");
	this.text_3.lineHeight = 38;
	this.text_3.lineWidth = 387;
	this.text_3.parent = this;
	this.text_3.setTransform(304.65,231.9);

	this.text_4 = new cjs.Text("Bean Sprouting Tutorial", "normal 700 55px 'Roboto'");
	this.text_4.lineHeight = 75;
	this.text_4.lineWidth = 671;
	this.text_4.parent = this;
	this.text_4.setTransform(121.05,120.7);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_4);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.349)").s().p("Eg0UAjlQjIAAAAjJMAAAhA4QAAjIDIABMBopAAAQDIgBAADIMAAABA4QAADJjIAAg");
	this.shape.setTransform(422.725,296.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_4},{t:this.text_3},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_open_scene, null, null);


(lib.Scene_1_NEWCOLANFRONT_ai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// NEWCOLANFRONT_ai
	this.instance = new lib.NEWCOLANFRONT("synched",0);
	this.instance.setTransform(423.3,-61.1,1,1,0,0,0,2.9,-20.9);
	this.instance._off = true;

	this.instance_1 = new lib.colanFront("synched",0);
	this.instance_1.setTransform(424.5,200.55,1,1,0,0,0,3.2,-21.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).to({x:424.45,y:200.25},18,cjs.Ease.sineOut).to({_off:true},58).wait(486));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(121).to({_off:false},0).to({x:-184.5},13,cjs.Ease.quartIn).to({_off:true},7).wait(14).to({_off:false,x:320.8,y:307.25},0).wait(204).to({startPosition:0},0).to({regX:3.1,regY:-20.9,scaleX:0.8074,scaleY:0.8074,rotation:-54.2091,x:771.75,y:260.55},6).wait(13).to({startPosition:0},0).to({regY:-20.8,scaleX:0.8072,scaleY:0.8072,rotation:0.013,x:707.45,y:336.45},6).wait(79).to({rotation:0.013},0).to({x:283.65,y:331.7},20,cjs.Ease.cubicInOut).wait(124));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bowl_front = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bowl_front
	this.instance = new lib.bowlFront("synched",0);
	this.instance.setTransform(-91,235.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(12).to({startPosition:0},0).to({x:420.25,y:229.6},26,cjs.Ease.sineOut).wait(82).to({startPosition:0},0).to({x:-188.75},13,cjs.Ease.quartIn).to({_off:true},7).wait(14).to({_off:false,x:316.55,y:336.3},0).wait(204).to({startPosition:0},0).to({regX:-0.1,regY:0.2,scaleX:0.8074,scaleY:0.8074,rotation:-54.2091,x:788.75,y:277},6).wait(13).to({startPosition:0},0).to({regX:-0.2,regY:0.3,scaleX:0.8073,scaleY:0.8073,rotation:-54.21,x:914,y:275.9},11,cjs.Ease.cubicIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bowl_back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bowl_back
	this.instance = new lib.bowlBack("synched",0);
	this.instance.setTransform(-90.95,235.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(12).to({startPosition:0},0).to({x:420.3,y:229.8},26,cjs.Ease.sineOut).wait(82).to({startPosition:0},0).to({x:-188.7},13,cjs.Ease.quartIn).to({_off:true},7).wait(14).to({_off:false,x:316.6,y:336.5},0).wait(204).to({startPosition:0},0).to({regX:-0.1,regY:0.2,scaleX:0.8074,scaleY:0.8074,rotation:-54.2091,x:788.95,y:277.05},6).wait(13).to({startPosition:0},0).to({regX:-0.2,regY:0.3,scaleX:0.8073,scaleY:0.8073,rotation:-54.21,x:914.2,y:275.95},11,cjs.Ease.cubicIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_background1_ai = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// background1_ai
	this.instance = new lib.background1("synched",0);
	this.instance.setTransform(427.45,297.55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(155));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Back
	this.instance = new lib.colanBack("synched",0);
	this.instance.setTransform(460.45,-66.9,1,1,0,0,0,-14.7,3.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45).to({_off:false},0).to({y:195.6},18,cjs.Ease.sineOut).wait(58).to({startPosition:0},0).to({x:-148.55},13,cjs.Ease.quartIn).to({_off:true},7).wait(14).to({_off:false,x:356.75,y:302.3},0).wait(204).to({startPosition:0},0).to({regX:-14.8,regY:3.4,scaleX:0.8074,scaleY:0.8074,rotation:-54.2091,x:785.55,y:234.65},6).wait(13).to({startPosition:0},0).to({regY:3.5,scaleX:0.8072,scaleY:0.8072,rotation:0.013,x:736.55,y:332.5},6).wait(79).to({rotation:0.013},0).to({x:312.75,y:327.75},20,cjs.Ease.cubicInOut).wait(124));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.fallingBeans = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.bean("synched",0);
	this.instance.setTransform(0.35,13.4,0.6475,0.676,0,-141.7498,41.7425,0.1,-0.1);

	this.instance_1 = new lib.bean("synched",0);
	this.instance_1.setTransform(-9.9,-13.15,0.6475,0.676,0,-141.7498,41.7425,0.1,-0.1);

	this.instance_2 = new lib.bean("synched",0);
	this.instance_2.setTransform(11.8,-12.55,0.7624,0.6285,-23.2512,0,0,-0.1,0.1);

	this.instance_3 = new lib.bean("synched",0);
	this.instance_3.setTransform(-16.2,-0.45,0.7624,0.6285,-154.0247,0,0,-0.2,0.1);

	this.instance_4 = new lib.bean("synched",0);
	this.instance_4.setTransform(-13.05,8.25,0.58,0.58,-104.9974,0,0,-0.1,-0.1);

	this.instance_5 = new lib.bean("synched",0);
	this.instance_5.setTransform(0.6,-13.25,0.58,0.58,-104.9974,0,0,-0.1,-0.1);

	this.instance_6 = new lib.bean("synched",0);
	this.instance_6.setTransform(4.7,-7.7,0.6475,0.676,0,-141.7498,41.7425,0.1,-0.1);

	this.instance_7 = new lib.bean("synched",0);
	this.instance_7.setTransform(-4.1,-6.55,0.58,0.58,-104.9974,0,0,-0.1,-0.1);

	this.instance_8 = new lib.bean("synched",0);
	this.instance_8.setTransform(-6.55,1.8,0.6475,0.676,0,-141.7498,41.7425,0.1,-0.1);

	this.instance_9 = new lib.bean("synched",0);
	this.instance_9.setTransform(5.45,8.95,0.7624,0.6285,-154.0247,0,0,-0.2,0.1);

	this.instance_10 = new lib.bean("synched",0);
	this.instance_10.setTransform(10.05,-0.45,0.7624,0.6285,-154.0247,0,0,-0.2,0.1);

	this.instance_11 = new lib.bean("synched",0);
	this.instance_11.setTransform(18.55,9.5,0.58,0.58,-104.9974,0,0,-0.1,-0.1);

	this.instance_12 = new lib.bean("synched",0);
	this.instance_12.setTransform(16.35,-5.6,0.7624,0.6285,-23.2512,0,0,-0.1,0.1);

	this.instance_13 = new lib.bean("synched",0);
	this.instance_13.setTransform(1.9,0.35,0.58,0.58,-104.9974,0,0,-0.1,-0.1);

	this.instance_14 = new lib.bean("synched",0);
	this.instance_14.setTransform(-3.6,8.95,0.7624,0.6285,-23.2512,0,0,-0.1,0.1);

	this.instance_15 = new lib.bean("synched",0);
	this.instance_15.setTransform(11.2,9.7,0.6475,0.676,0,-141.7498,41.7425,0.1,-0.1);

	this.instance_16 = new lib.bean("synched",0);
	this.instance_16.setTransform(-13.3,-5.85,0.7624,0.6285,-154.0247,0,0,-0.2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20.4,-17.2,41.8,33.2);


(lib.beansOnBowl = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween4("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.2,-7.6,114.30000000000001,14);


(lib.Scene_1_Falling = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Falling
	this.instance = new lib.fallingBeans("synched",0);
	this.instance.setTransform(408.35,-27.95);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(66).to({_off:false},0).to({y:182.05},7,cjs.Ease.quartIn).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bean = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bean
	this.instance = new lib.bean("synched",0);
	this.instance.setTransform(477.8,192.5,0.6361,0.5244,0,-111.7494,68.2496,0.1,-0.1);

	this.instance_1 = new lib.bean("synched",0);
	this.instance_1.setTransform(433.65,188.6,0.7624,0.6285,0,-171.7499,8.2488,-0.2,-0.1);

	this.instance_2 = new lib.bean("synched",0);
	this.instance_2.setTransform(473.65,194.45,0.5799,0.5799,-59.9993,0,0,-0.1,0.1);

	this.instance_3 = new lib.bean("synched",0);
	this.instance_3.setTransform(462,194.3,0.58,0.58,30.0025,0,0,-0.1,-0.1);

	this.instance_4 = new lib.bean("synched",0);
	this.instance_4.setTransform(467.05,192.75,0.58,0.58,-104.9974,0,0,-0.1,-0.1);

	this.instance_5 = new lib.bean("synched",0);
	this.instance_5.setTransform(460.35,190.2,0.6475,0.676,0,-141.7498,41.7425,0.1,-0.1);

	this.instance_6 = new lib.bean("synched",0);
	this.instance_6.setTransform(443.15,195.8,0.5182,0.4272,-64.0272,0,0,-0.2,0.1);

	this.instance_7 = new lib.bean("synched",0);
	this.instance_7.setTransform(456.45,193.9,0.6188,0.5101,0,-81.7504,98.2512,-0.2,0.1);

	this.instance_8 = new lib.bean("synched",0);
	this.instance_8.setTransform(420.3,190.35,0.7624,0.6285,0,-81.7489,98.2519,-0.2,0.1);

	this.instance_9 = new lib.bean("synched",0);
	this.instance_9.setTransform(447.7,190.35,0.7623,0.6285,130.9744,0,0,-0.2,0);

	this.instance_10 = new lib.bean("synched",0);
	this.instance_10.setTransform(410.7,191.5,0.9173,0.7562,0,179.2415,-0.7587,-0.5,-0.1);

	this.instance_11 = new lib.bean("synched",0);
	this.instance_11.setTransform(415.7,196.55,0.7624,0.6285,0,34.0242,-145.9753,-0.2,0.1);

	this.instance_12 = new lib.bean("synched",0);
	this.instance_12.setTransform(448.8,195.95,0.6353,0.5237,0,-17.7508,162.2483,-0.3,0.1);

	this.instance_13 = new lib.bean("synched",0);
	this.instance_13.setTransform(427.15,196.8,0.7624,0.6285,0,23.2512,-156.7487,-0.1,0.1);

	this.instance_14 = new lib.bean("synched",0);
	this.instance_14.setTransform(431.1,193.65,1.0428,0.8597,0,-141.749,38.2513,-0.1,-0.1);

	this.instance_15 = new lib.bean("synched",0);
	this.instance_15.setTransform(439.15,193.6,0.9195,0.7333,0,158.2519,-21.7483,-0.1,0);

	this.instance_16 = new lib.bean("synched",0);
	this.instance_16.setTransform(410.3,191.5,0.9173,0.7562,-179.2415,0,0,-0.5,-0.1);

	this.instance_17 = new lib.bean("synched",0);
	this.instance_17.setTransform(405.3,196.55,0.7624,0.6285,-34.0242,0,0,-0.2,0.1);

	this.instance_18 = new lib.bean("synched",0);
	this.instance_18.setTransform(398.65,190.55,0.7624,0.6285,-154.0247,0,0,-0.2,0.1);

	this.instance_19 = new lib.bean("synched",0);
	this.instance_19.setTransform(393.85,196.8,0.7624,0.6285,-23.2512,0,0,-0.1,0.1);

	this.instance_20 = new lib.bean("synched",0);
	this.instance_20.setTransform(389.9,193.65,1.0428,0.8597,141.749,0,0,-0.1,-0.1);

	this.instance_21 = new lib.bean("synched",0);
	this.instance_21.setTransform(381.85,193.6,0.9195,0.7333,-158.2519,0,0,-0.1,0);

	this.instance_22 = new lib.bean("synched",0);
	this.instance_22.setTransform(372.9,193.6,1,1,0,0,0,-0.1,0);

	this.instance_23 = new lib.beansOnBowl("synched",0);
	this.instance_23.setTransform(423.95,193.2);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},74).to({state:[{t:this.instance_23}]},47).to({state:[{t:this.instance_23}]},13).to({state:[]},7).to({state:[{t:this.instance_23}]},14).to({state:[{t:this.instance_23}]},204).to({state:[{t:this.instance_23}]},6).to({state:[{t:this.instance_23}]},13).to({state:[{t:this.instance_23}]},6).to({state:[{t:this.instance_23}]},79).to({state:[{t:this.instance_23}]},20).wait(124));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(121).to({_off:false},0).to({x:-185.55},13,cjs.Ease.quartIn).to({_off:true},7).wait(14).to({_off:false,x:319.75,y:299.9},0).wait(204).to({startPosition:0},0).to({regX:-0.1,regY:0.3,scaleX:0.8074,scaleY:0.8074,rotation:-54.2091,x:766.5,y:257.75},6).wait(13).to({startPosition:0},0).to({regY:0.5,scaleX:0.8072,scaleY:0.8072,rotation:0.013,x:706.65,y:330.6},6).wait(79).to({rotation:0.013},0).to({x:282.85,y:325.85},20,cjs.Ease.cubicInOut).wait(124));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.instructionalAnimationShahaf = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,659];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.buttonPlay = this.Play_button.buttonPlay;
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.buttonPlay.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.play();
		});
		
		
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
	}
	this.frame_659 = function() {
		this.credit_plantRoots = this.creditsSection.credit_plantRoots;
		this.credit_colander = this.creditsSection.credit_colander;
		this.credit_mineralWater = this.creditsSection.credit_mineralWater;
		this.credit_clipArt = this.creditsSection.credit_clipArt;
		this.credit_kitchen = this.creditsSection.credit_kitchen;
		this.buttonReplay = this.replay_button.buttonReplay;
		this.___loopingOver___ = true;
		var _this = this;
		/*
		Stop a Movie Clip/Video
		Stops the specified movie clip or video.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.buttonReplay.on('click', function(){
		/*
		Moves the playhead to the specified frame number in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		*/
		_this.gotoAndPlay(1);
		});
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.credit_plantRoots.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://www.freepik.com/vectors/plant-roots', '_blank');
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.credit_colander.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://www.freepik.com/vectors/colander', '_blank');
		});
		
		
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.credit_mineralWater.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://www.freepik.com/vectors/mineral-water', '_blank');
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.credit_clipArt.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://www.freepik.com/vectors/clip-art', '_blank');
		});
		
		
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.credit_kitchen.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('https://www.freepik.com/vectors/kitchen-cabinet', '_blank');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(659).call(this.frame_659).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(420.5,297.5);
	this.___camera___instance.depth = 0;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(352).to({regX:0.1,regY:0.1,scaleX:0.7489,scaleY:0.7489,x:516.7,y:291.55},7).wait(92).to({regX:0,regY:0,scaleX:1,scaleY:1,x:420.5,y:297.5},17).wait(158).to({regX:1.3,regY:1.1,scaleX:0.2352,scaleY:0.2352,x:247.15,y:276.75},11).wait(23));

	// creditsSection_obj_
	this.creditsSection = new lib.Scene_1_creditsSection();
	this.creditsSection.name = "creditsSection";
	this.creditsSection.depth = 0;
	this.creditsSection.isAttachedToCamera = 0
	this.creditsSection.isAttachedToMask = 0
	this.creditsSection.layerDepth = 0
	this.creditsSection.layerIndex = 0
	this.creditsSection.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.creditsSection).wait(659).to({regX:148,regY:206.5,scaleX:4.2523,scaleY:4.2523,x:0.25,y:0.05},0).wait(1));

	// replay_button_obj_
	this.replay_button = new lib.Scene_1_replay_button();
	this.replay_button.name = "replay_button";
	this.replay_button.depth = 0;
	this.replay_button.isAttachedToCamera = 0
	this.replay_button.isAttachedToMask = 0
	this.replay_button.layerDepth = 0
	this.replay_button.layerIndex = 1
	this.replay_button.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.replay_button).wait(659).to({regX:148,regY:206.5,scaleX:4.2523,scaleY:4.2523,x:0.25,y:0.05},0).wait(1));

	// instructiontxt_obj_
	this.instructiontxt = new lib.Scene_1_instructiontxt();
	this.instructiontxt.name = "instructiontxt";
	this.instructiontxt.depth = 0;
	this.instructiontxt.isAttachedToCamera = 0
	this.instructiontxt.isAttachedToMask = 0
	this.instructiontxt.layerDepth = 0
	this.instructiontxt.layerIndex = 2
	this.instructiontxt.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.instructiontxt).wait(558).to({_off:true},47).wait(55));

	// fadeEffect_obj_
	this.fadeEffect = new lib.Scene_1_fadeEffect();
	this.fadeEffect.name = "fadeEffect";
	this.fadeEffect.depth = 0;
	this.fadeEffect.isAttachedToCamera = 0
	this.fadeEffect.isAttachedToMask = 0
	this.fadeEffect.layerDepth = 0
	this.fadeEffect.layerIndex = 3
	this.fadeEffect.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.fadeEffect).wait(627).to({regX:148,regY:206.5,scaleX:4.2523,scaleY:4.2523,x:0.25,y:0.05},10,cjs.Ease.sineIn).to({_off:true},1).wait(22));

	// yadit_obj_
	this.yadit = new lib.Scene_1_yadit();
	this.yadit.name = "yadit";
	this.yadit.depth = 0;
	this.yadit.isAttachedToCamera = 0
	this.yadit.isAttachedToMask = 0
	this.yadit.layerDepth = 0
	this.yadit.layerIndex = 4
	this.yadit.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.yadit).wait(660));

	// front_obj_
	this.front = new lib.Scene_1_front();
	this.front.name = "front";
	this.front.depth = 0;
	this.front.isAttachedToCamera = 0
	this.front.isAttachedToMask = 0
	this.front.layerDepth = 0
	this.front.layerIndex = 5
	this.front.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.front).wait(660));

	// srouts_obj_
	this.srouts = new lib.Scene_1_srouts();
	this.srouts.name = "srouts";
	this.srouts.depth = 0;
	this.srouts.isAttachedToCamera = 0
	this.srouts.isAttachedToMask = 0
	this.srouts.layerDepth = 0
	this.srouts.layerIndex = 6
	this.srouts.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.srouts).wait(660));

	// top_obj_
	this.top = new lib.Scene_1_top();
	this.top.name = "top";
	this.top.depth = 0;
	this.top.isAttachedToCamera = 0
	this.top.isAttachedToMask = 0
	this.top.layerDepth = 0
	this.top.layerIndex = 7
	this.top.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.top).wait(660));

	// stroke_obj_
	this.stroke = new lib.Scene_1_stroke();
	this.stroke.name = "stroke";
	this.stroke.depth = 0;
	this.stroke.isAttachedToCamera = 0
	this.stroke.isAttachedToMask = 0
	this.stroke.layerDepth = 0
	this.stroke.layerIndex = 8
	this.stroke.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.stroke).wait(660));

	// WaterFlow_obj_
	this.WaterFlow = new lib.Scene_1_WaterFlow();
	this.WaterFlow.name = "WaterFlow";
	this.WaterFlow.depth = 0;
	this.WaterFlow.isAttachedToCamera = 0
	this.WaterFlow.isAttachedToMask = 0
	this.WaterFlow.layerDepth = 0
	this.WaterFlow.layerIndex = 9
	this.WaterFlow.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.WaterFlow).wait(411).to({regX:201.7,regY:68.7,scaleX:1.3352,scaleY:1.3352,y:0.1},0).wait(34).to({_off:true},6).wait(209));

	// bowl_front_obj_
	this.bowl_front = new lib.Scene_1_bowl_front();
	this.bowl_front.name = "bowl_front";
	this.bowl_front.depth = 0;
	this.bowl_front.isAttachedToCamera = 0
	this.bowl_front.isAttachedToMask = 0
	this.bowl_front.layerDepth = 0
	this.bowl_front.layerIndex = 10
	this.bowl_front.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bowl_front).wait(359).to({regX:201.7,regY:68.7,scaleX:1.3352,scaleY:1.3352,y:0.1},0).wait(30).to({_off:true},1).wait(270));

	// waterlipse_obj_
	this.waterlipse = new lib.Scene_1_waterlipse();
	this.waterlipse.name = "waterlipse";
	this.waterlipse.depth = 0;
	this.waterlipse.isAttachedToCamera = 0
	this.waterlipse.isAttachedToMask = 0
	this.waterlipse.layerDepth = 0
	this.waterlipse.layerIndex = 11
	this.waterlipse.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.waterlipse).wait(359).to({regX:201.7,regY:68.7,scaleX:1.3352,scaleY:1.3352,y:0.1},0).wait(15).to({_off:true},1).wait(285));

	// Falling_obj_
	this.Falling = new lib.Scene_1_Falling();
	this.Falling.name = "Falling";
	this.Falling.depth = 0;
	this.Falling.isAttachedToCamera = 0
	this.Falling.isAttachedToMask = 0
	this.Falling.layerDepth = 0
	this.Falling.layerIndex = 12
	this.Falling.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Falling).wait(73).to({_off:true},1).wait(586));

	// bean_obj_
	this.bean = new lib.Scene_1_bean();
	this.bean.name = "bean";
	this.bean.depth = 0;
	this.bean.isAttachedToCamera = 0
	this.bean.isAttachedToMask = 0
	this.bean.layerDepth = 0
	this.bean.layerIndex = 13
	this.bean.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bean).wait(359).to({regX:201.7,regY:68.7,scaleX:1.3352,scaleY:1.3352,y:0.1},0).wait(104).to({regX:0,regY:0,scaleX:1,scaleY:1,y:0},20,cjs.Ease.cubicInOut).to({_off:true},124).wait(53));

	// Back_obj_
	this.Back = new lib.Scene_1_Back();
	this.Back.name = "Back";
	this.Back.depth = 0;
	this.Back.isAttachedToCamera = 0
	this.Back.isAttachedToMask = 0
	this.Back.layerDepth = 0
	this.Back.layerIndex = 14
	this.Back.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Back).wait(359).to({regX:201.7,regY:68.7,scaleX:1.3352,scaleY:1.3352,y:0.1},0).wait(104).to({regX:0,regY:0,scaleX:1,scaleY:1,y:0},20,cjs.Ease.cubicInOut).to({_off:true},124).wait(53));

	// NEWCOLANFRONT_ai_obj_
	this.NEWCOLANFRONT_ai = new lib.Scene_1_NEWCOLANFRONT_ai();
	this.NEWCOLANFRONT_ai.name = "NEWCOLANFRONT_ai";
	this.NEWCOLANFRONT_ai.depth = 0;
	this.NEWCOLANFRONT_ai.isAttachedToCamera = 0
	this.NEWCOLANFRONT_ai.isAttachedToMask = 0
	this.NEWCOLANFRONT_ai.layerDepth = 0
	this.NEWCOLANFRONT_ai.layerIndex = 15
	this.NEWCOLANFRONT_ai.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.NEWCOLANFRONT_ai).wait(359).to({regX:201.7,regY:68.7,scaleX:1.3352,scaleY:1.3352,y:0.1},0).wait(104).to({regX:0,regY:0,scaleX:1,scaleY:1,y:0},20,cjs.Ease.cubicInOut).to({_off:true},124).wait(53));

	// bowl_back_obj_
	this.bowl_back = new lib.Scene_1_bowl_back();
	this.bowl_back.name = "bowl_back";
	this.bowl_back.depth = 0;
	this.bowl_back.isAttachedToCamera = 0
	this.bowl_back.isAttachedToMask = 0
	this.bowl_back.layerDepth = 0
	this.bowl_back.layerIndex = 16
	this.bowl_back.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bowl_back).wait(359).to({regX:201.7,regY:68.7,scaleX:1.3352,scaleY:1.3352,y:0.1},0).wait(30).to({_off:true},1).wait(270));

	// window_obj_
	this.window = new lib.Scene_1_window();
	this.window.name = "window";
	this.window.depth = 0;
	this.window.isAttachedToCamera = 0
	this.window.isAttachedToMask = 0
	this.window.layerDepth = 0
	this.window.layerIndex = 17
	this.window.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.window).wait(660));

	// coverForSun_obj_
	this.coverForSun = new lib.Scene_1_coverForSun();
	this.coverForSun.name = "coverForSun";
	this.coverForSun.depth = 0;
	this.coverForSun.isAttachedToCamera = 0
	this.coverForSun.isAttachedToMask = 0
	this.coverForSun.layerDepth = 0
	this.coverForSun.layerIndex = 18
	this.coverForSun.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.coverForSun).wait(660));

	// sun_obj_
	this.sun = new lib.Scene_1_sun();
	this.sun.name = "sun";
	this.sun.depth = 0;
	this.sun.isAttachedToCamera = 0
	this.sun.isAttachedToMask = 0
	this.sun.layerDepth = 0
	this.sun.layerIndex = 19
	this.sun.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sun).wait(660));

	// maskStars (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_261 = new cjs.Graphics().p("AwkAyIAAhiMAhJAAAIAABig");
	var mask_graphics_262 = new cjs.Graphics().p("AwkBcIAAi3MAhJAAAIAAC3g");
	var mask_graphics_263 = new cjs.Graphics().p("AwkCIIAAkPMAhJAAAIAAEPg");
	var mask_graphics_264 = new cjs.Graphics().p("AwkCzIAAllMAhJAAAIAAFlg");
	var mask_graphics_265 = new cjs.Graphics().p("AwkDeIAAm7MAhJAAAIAAG7g");
	var mask_graphics_266 = new cjs.Graphics().p("AwkEJIAAoRMAhJAAAIAAIRg");
	var mask_graphics_267 = new cjs.Graphics().p("AwkE0IAApnMAhJAAAIAAJng");
	var mask_graphics_268 = new cjs.Graphics().p("AwkFfIAAq9MAhJAAAIAAK9g");
	var mask_graphics_269 = new cjs.Graphics().p("AwkGKIAAsTMAhJAAAIAAMTg");
	var mask_graphics_270 = new cjs.Graphics().p("AwkG1IAAtpMAhJAAAIAANpg");
	var mask_graphics_271 = new cjs.Graphics().p("AwkHgIAAu/MAhJAAAIAAO/g");
	var mask_graphics_272 = new cjs.Graphics().p("AwkIMIAAwXMAhJAAAIAAQXg");
	var mask_graphics_273 = new cjs.Graphics().p("AwkI2IAAxsMAhJAAAIAARsg");
	var mask_graphics_274 = new cjs.Graphics().p("AwkJiIAAzDMAhJAAAIAATDg");
	var mask_graphics_275 = new cjs.Graphics().p("AwkKNIAA0ZMAhJAAAIAAUZg");
	var mask_graphics_276 = new cjs.Graphics().p("AwkK4IAA1vMAhJAAAIAAVvg");
	var mask_graphics_277 = new cjs.Graphics().p("AwkLjIAA3FMAhJAAAIAAXFg");
	var mask_graphics_278 = new cjs.Graphics().p("AwkMOIAA4bMAhJAAAIAAYbg");
	var mask_graphics_279 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_280 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_281 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_282 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_283 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_284 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_285 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_286 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_287 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_288 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_289 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_290 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_291 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_292 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_293 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_294 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_295 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_296 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_297 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_298 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_299 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_300 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_301 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_302 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_303 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_304 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_305 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_306 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_307 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_308 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_309 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_310 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_311 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_312 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_313 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_314 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_315 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_316 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_317 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_318 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_319 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_320 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_321 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_322 = new cjs.Graphics().p("AwkMYIAA4wMAhJAAAIAAYwg");
	var mask_graphics_323 = new cjs.Graphics().p("AwkL4IAA3vMAhJAAAIAAXvg");
	var mask_graphics_324 = new cjs.Graphics().p("AwkLXIAA2tMAhJAAAIAAWtg");
	var mask_graphics_325 = new cjs.Graphics().p("AwkK2IAA1sMAhJAAAIAAVsg");
	var mask_graphics_326 = new cjs.Graphics().p("AwkKWIAA0rMAhJAAAIAAUrg");
	var mask_graphics_327 = new cjs.Graphics().p("AwkJ1IAAzpMAhJAAAIAATpg");
	var mask_graphics_328 = new cjs.Graphics().p("AwkJVIAAypMAhJAAAIAASpg");
	var mask_graphics_329 = new cjs.Graphics().p("AwkI0IAAxnMAhJAAAIAARng");
	var mask_graphics_330 = new cjs.Graphics().p("AwkIUIAAwmMAhJAAAIAAQmg");
	var mask_graphics_331 = new cjs.Graphics().p("AwkHzIAAvlMAhJAAAIAAPlg");
	var mask_graphics_332 = new cjs.Graphics().p("AwkHSIAAujMAhJAAAIAAOjg");
	var mask_graphics_333 = new cjs.Graphics().p("AwkGxIAAthMAhJAAAIAANhg");
	var mask_graphics_334 = new cjs.Graphics().p("AwkGRIAAshMAhJAAAIAAMhg");
	var mask_graphics_335 = new cjs.Graphics().p("AwkFwIAArfMAhJAAAIAALfg");
	var mask_graphics_336 = new cjs.Graphics().p("AwkFQIAAqfMAhJAAAIAAKfg");
	var mask_graphics_337 = new cjs.Graphics().p("AwkEvIAApdMAhJAAAIAAJdg");
	var mask_graphics_338 = new cjs.Graphics().p("AwkEOIAAocMAhJAAAIAAIcg");
	var mask_graphics_518 = new cjs.Graphics().p("AwkAyIAAhiMAhJAAAIAABig");
	var mask_graphics_519 = new cjs.Graphics().p("AwkB/IAAj9MAhJAAAIAAD9g");
	var mask_graphics_520 = new cjs.Graphics().p("AwkDNIAAmZMAhJAAAIAAGZg");
	var mask_graphics_521 = new cjs.Graphics().p("AwkEaIAAozMAhJAAAIAAIzg");
	var mask_graphics_522 = new cjs.Graphics().p("AwkFoIAArPMAhJAAAIAALPg");
	var mask_graphics_523 = new cjs.Graphics().p("AwkG1IAAtpMAhJAAAIAANpg");
	var mask_graphics_524 = new cjs.Graphics().p("AwkIDIAAwFMAhJAAAIAAQFg");
	var mask_graphics_525 = new cjs.Graphics().p("AwkJQIAAyfMAhJAAAIAASfg");
	var mask_graphics_526 = new cjs.Graphics().p("AwkKeIAA07MAhJAAAIAAU7g");
	var mask_graphics_527 = new cjs.Graphics().p("AwkLsIAA3WMAhJAAAIAAXWg");
	var mask_graphics_528 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_529 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_530 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_531 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_532 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_533 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_534 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_535 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_536 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_537 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_538 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_539 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_540 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_541 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_542 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_543 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_544 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_545 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_546 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_547 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_548 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_549 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_550 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_551 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_552 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_553 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_554 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_555 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_556 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_557 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_558 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_559 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_560 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_561 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_562 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_563 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_564 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_565 = new cjs.Graphics().p("AwkM5IAA5xMAhJAAAIAAZxg");
	var mask_graphics_566 = new cjs.Graphics().p("AwkMcIAA43MAhJAAAIAAY3g");
	var mask_graphics_567 = new cjs.Graphics().p("AwkL/IAA38MAhJAAAIAAX8g");
	var mask_graphics_568 = new cjs.Graphics().p("AwkLhIAA3BMAhJAAAIAAXBg");
	var mask_graphics_569 = new cjs.Graphics().p("AwkLFIAA2JMAhJAAAIAAWJg");
	var mask_graphics_570 = new cjs.Graphics().p("AwkKnIAA1NMAhJAAAIAAVNg");
	var mask_graphics_571 = new cjs.Graphics().p("AwkKKIAA0TMAhJAAAIAAUTg");
	var mask_graphics_572 = new cjs.Graphics().p("AwkJsIAAzYMAhJAAAIAATYg");
	var mask_graphics_573 = new cjs.Graphics().p("AwkJQIAAyfMAhJAAAIAASfg");
	var mask_graphics_574 = new cjs.Graphics().p("AwkIyIAAxkMAhJAAAIAARkg");
	var mask_graphics_575 = new cjs.Graphics().p("AwkIVIAAwpMAhJAAAIAAQpg");
	var mask_graphics_576 = new cjs.Graphics().p("AwkH4IAAvvMAhJAAAIAAPvg");
	var mask_graphics_577 = new cjs.Graphics().p("AwkHbIAAu1MAhJAAAIAAO1g");
	var mask_graphics_578 = new cjs.Graphics().p("AwkG+IAAt6MAhJAAAIAAN6g");
	var mask_graphics_579 = new cjs.Graphics().p("AwkGgIAAs/MAhJAAAIAAM/g");
	var mask_graphics_580 = new cjs.Graphics().p("AwkGDIAAsFMAhJAAAIAAMFg");
	var mask_graphics_581 = new cjs.Graphics().p("AwkFmIAArLMAhJAAAIAALLg");
	var mask_graphics_582 = new cjs.Graphics().p("AwkFJIAAqRMAhJAAAIAAKRg");
	var mask_graphics_583 = new cjs.Graphics().p("AwkEsIAApXMAhJAAAIAAJXg");
	var mask_graphics_584 = new cjs.Graphics().p("AwkEOIAAocMAhJAAAIAAIcg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(261).to({graphics:mask_graphics_261,x:196.775,y:71.35}).wait(1).to({graphics:mask_graphics_262,x:196.775,y:75.75}).wait(1).to({graphics:mask_graphics_263,x:196.775,y:80.125}).wait(1).to({graphics:mask_graphics_264,x:196.775,y:84.525}).wait(1).to({graphics:mask_graphics_265,x:196.775,y:88.9}).wait(1).to({graphics:mask_graphics_266,x:196.775,y:93.275}).wait(1).to({graphics:mask_graphics_267,x:196.775,y:97.65}).wait(1).to({graphics:mask_graphics_268,x:196.775,y:102.05}).wait(1).to({graphics:mask_graphics_269,x:196.775,y:106.425}).wait(1).to({graphics:mask_graphics_270,x:196.775,y:110.825}).wait(1).to({graphics:mask_graphics_271,x:196.775,y:115.225}).wait(1).to({graphics:mask_graphics_272,x:196.775,y:119.6}).wait(1).to({graphics:mask_graphics_273,x:196.775,y:124}).wait(1).to({graphics:mask_graphics_274,x:196.775,y:128.375}).wait(1).to({graphics:mask_graphics_275,x:196.775,y:132.75}).wait(1).to({graphics:mask_graphics_276,x:196.775,y:137.125}).wait(1).to({graphics:mask_graphics_277,x:196.775,y:141.525}).wait(1).to({graphics:mask_graphics_278,x:196.775,y:145.9}).wait(1).to({graphics:mask_graphics_279,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_280,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_281,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_282,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_283,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_284,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_285,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_286,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_287,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_288,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_289,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_290,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_291,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_292,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_293,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_294,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_295,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_296,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_297,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_298,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_299,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_300,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_301,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_302,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_303,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_304,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_305,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_306,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_307,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_308,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_309,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_310,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_311,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_312,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_313,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_314,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_315,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_316,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_317,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_318,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_319,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_320,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_321,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_322,x:196.775,y:158}).wait(1).to({graphics:mask_graphics_323,x:196.775,y:165.725}).wait(1).to({graphics:mask_graphics_324,x:196.775,y:173.425}).wait(1).to({graphics:mask_graphics_325,x:196.775,y:181.15}).wait(1).to({graphics:mask_graphics_326,x:196.775,y:188.85}).wait(1).to({graphics:mask_graphics_327,x:196.775,y:196.575}).wait(1).to({graphics:mask_graphics_328,x:196.775,y:204.275}).wait(1).to({graphics:mask_graphics_329,x:196.775,y:212}).wait(1).to({graphics:mask_graphics_330,x:196.775,y:219.7}).wait(1).to({graphics:mask_graphics_331,x:196.775,y:227.425}).wait(1).to({graphics:mask_graphics_332,x:196.775,y:235.125}).wait(1).to({graphics:mask_graphics_333,x:196.775,y:242.85}).wait(1).to({graphics:mask_graphics_334,x:196.775,y:250.55}).wait(1).to({graphics:mask_graphics_335,x:196.775,y:258.275}).wait(1).to({graphics:mask_graphics_336,x:196.775,y:265.975}).wait(1).to({graphics:mask_graphics_337,x:196.775,y:273.7}).wait(1).to({graphics:mask_graphics_338,x:196.775,y:281.4}).wait(1).to({graphics:null,x:0,y:0}).wait(179).to({graphics:mask_graphics_518,x:196.775,y:71.35}).wait(1).to({graphics:mask_graphics_519,x:196.775,y:79.25}).wait(1).to({graphics:mask_graphics_520,x:196.775,y:87.15}).wait(1).to({graphics:mask_graphics_521,x:196.775,y:95.025}).wait(1).to({graphics:mask_graphics_522,x:196.775,y:102.925}).wait(1).to({graphics:mask_graphics_523,x:196.775,y:110.825}).wait(1).to({graphics:mask_graphics_524,x:196.775,y:118.725}).wait(1).to({graphics:mask_graphics_525,x:196.775,y:126.625}).wait(1).to({graphics:mask_graphics_526,x:196.775,y:134.5}).wait(1).to({graphics:mask_graphics_527,x:196.775,y:142.4}).wait(1).to({graphics:mask_graphics_528,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_529,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_530,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_531,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_532,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_533,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_534,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_535,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_536,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_537,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_538,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_539,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_540,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_541,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_542,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_543,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_544,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_545,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_546,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_547,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_548,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_549,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_550,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_551,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_552,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_553,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_554,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_555,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_556,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_557,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_558,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_559,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_560,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_561,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_562,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_563,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_564,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_565,x:196.775,y:150.3}).wait(1).to({graphics:mask_graphics_566,x:196.775,y:157.2}).wait(1).to({graphics:mask_graphics_567,x:196.775,y:164.1}).wait(1).to({graphics:mask_graphics_568,x:196.775,y:171}).wait(1).to({graphics:mask_graphics_569,x:196.775,y:177.9}).wait(1).to({graphics:mask_graphics_570,x:196.775,y:184.8}).wait(1).to({graphics:mask_graphics_571,x:196.775,y:191.7}).wait(1).to({graphics:mask_graphics_572,x:196.775,y:198.6}).wait(1).to({graphics:mask_graphics_573,x:196.775,y:205.5}).wait(1).to({graphics:mask_graphics_574,x:196.775,y:212.4}).wait(1).to({graphics:mask_graphics_575,x:196.775,y:219.3}).wait(1).to({graphics:mask_graphics_576,x:196.775,y:226.2}).wait(1).to({graphics:mask_graphics_577,x:196.775,y:233.1}).wait(1).to({graphics:mask_graphics_578,x:196.775,y:240}).wait(1).to({graphics:mask_graphics_579,x:196.775,y:246.9}).wait(1).to({graphics:mask_graphics_580,x:196.775,y:253.8}).wait(1).to({graphics:mask_graphics_581,x:196.775,y:260.7}).wait(1).to({graphics:mask_graphics_582,x:196.775,y:267.6}).wait(1).to({graphics:mask_graphics_583,x:196.775,y:274.5}).wait(1).to({graphics:mask_graphics_584,x:196.775,y:281.4}).wait(76));

	// stars_obj_
	this.stars = new lib.Scene_1_stars();
	this.stars.name = "stars";
	this.stars.depth = 0;
	this.stars.isAttachedToCamera = 0
	this.stars.isAttachedToMask = 0
	this.stars.layerDepth = 0
	this.stars.layerIndex = 20
	this.stars.maskLayerName = 0

	var maskedShapeInstanceList = [this.stars];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.stars).wait(584).to({_off:true},1).wait(75));

	// sky_obj_
	this.sky = new lib.Scene_1_sky();
	this.sky.name = "sky";
	this.sky.depth = 0;
	this.sky.isAttachedToCamera = 0
	this.sky.isAttachedToMask = 0
	this.sky.layerDepth = 0
	this.sky.layerIndex = 21
	this.sky.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sky).wait(660));
	this.sky.addEventListener("tick", AdobeAn.handleFilterCache);

	// background2__obj_
	this.background2_ = new lib.Scene_1_background2_();
	this.background2_.name = "background2_";
	this.background2_.depth = 0;
	this.background2_.isAttachedToCamera = 0
	this.background2_.isAttachedToMask = 0
	this.background2_.layerDepth = 0
	this.background2_.layerIndex = 22
	this.background2_.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.background2_).wait(660));

	// Play_button_obj_
	this.Play_button = new lib.Scene_1_Play_button();
	this.Play_button.name = "Play_button";
	this.Play_button.setTransform(411.9,484.8,1,1,0,0,0,411.9,484.8);
	this.Play_button.depth = 0;
	this.Play_button.isAttachedToCamera = 0
	this.Play_button.isAttachedToMask = 0
	this.Play_button.layerDepth = 0
	this.Play_button.layerIndex = 23
	this.Play_button.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Play_button).to({_off:true},1).wait(659));

	// open_scene_obj_
	this.open_scene = new lib.Scene_1_open_scene();
	this.open_scene.name = "open_scene";
	this.open_scene.setTransform(430.7,296.8,1,1,0,0,0,430.7,296.8);
	this.open_scene.depth = 0;
	this.open_scene.isAttachedToCamera = 0
	this.open_scene.isAttachedToMask = 0
	this.open_scene.layerDepth = 0
	this.open_scene.layerIndex = 24
	this.open_scene.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.open_scene).to({_off:true},1).wait(659));

	// background1_ai_obj_
	this.background1_ai = new lib.Scene_1_background1_ai();
	this.background1_ai.name = "background1_ai";
	this.background1_ai.setTransform(427.6,297.5,1,1,0,0,0,427.6,297.5);
	this.background1_ai.depth = 0;
	this.background1_ai.isAttachedToCamera = 0
	this.background1_ai.isAttachedToMask = 0
	this.background1_ai.layerDepth = 0
	this.background1_ai.layerIndex = 25
	this.background1_ai.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.background1_ai).to({_off:true},155).wait(505));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(151.4,217.9,823.4,378.1);
// library properties:
lib.properties = {
	id: 'A6769F490A15C040B42F41137CA991F7',
	width: 841,
	height: 595,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/instructionalAnimationShahaf_atlas_1.png", id:"instructionalAnimationShahaf_atlas_1"},
		{src:"images/instructionalAnimationShahaf_atlas_2.png", id:"instructionalAnimationShahaf_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A6769F490A15C040B42F41137CA991F7'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;