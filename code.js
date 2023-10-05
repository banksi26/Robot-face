var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bcolor = rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255));
var rcolor = rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255));
var size = randomNumber(10, 45);
var sides = randomNumber(3, 10);
background(bcolor);
fill(rcolor);
rect(75, 150, 250, 250);
fill("white");
ellipse(200, 275, 50, 50);
ellipse(200, 200, 50, 50);
fill("black");
ellipse(200, 200, size, size);
ellipse(200, 275, size, size);
stroke("black");
fill("grey");
arc(200, 325, 100, 100, 0, 180);
line(150, 100, 150, 150);
line(250, 100, 250, 150);
fill(rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255)));
regularPolygon(150, 100, sides, 25);
regularPolygon(250, 100, sides, 25);
line(150, 200, 150, 150);
line(250, 200, 250, 150);
line(100, 200, 150, 200);
line(300, 200, 250, 200);
line(100, 200, 150, 400);
line(300, 200, 250, 400);
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
