'use strict';


let renerAnim = function(){
  let paper = require('paper');

  let viewPort = $('<\canvas>').attr({'id': 'viewPort'}).css({'position': 'fixed', 'top': '0', 'left': '0', 'width': '100%',
  'height': '100%'});

  $('body').append(viewPort);

  var canvas = document.getElementById('viewPort');
  // Create an empty project and a view for the canvas:
  paper.setup(canvas);
  // Create a Paper.js Path to draw a line into it:
  var path = new paper.Path();
  // Give the stroke a color
  path.strokeColor = 'black';
  var start = new paper.Point(100, 100);
  // Move to start and draw a line from there
  path.moveTo(start);
  // Note that the plus operator on Point objects does not work
  // in JavaScript. Instead, we need to call the add() function:
  path.lineTo(start.add([ 200, -50 ]));
  // Draw the view now:
  paper.view.draw();
};

export default renerAnim;
