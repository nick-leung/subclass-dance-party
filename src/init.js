$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    
    var dancer = dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.addDancerButton2').on('click', function(event) {
   
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name2');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.addDancerButton3').on('click', function(event) {
   
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name3');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('.addDancerButton4').on('click', function(event) {
    var lineUpHeight = 400;
    var dancerArray = window.dancers;
    for (var i = 0; i < dancerArray.length; i++) {
      var currentHorizontal = dancerArray[i].left;
      dancerArray[i].setPosition(lineUpHeight, currentHorizontal);
    }
  });

  $('.addDancerButton5').on('click', function(event) { // send this

    //$("span.sean").css({top: 285, left: 1000}); 
    var dancerArray = window.dancers;
    for (var i = 0; i < dancerArray.length; i++) {
      if (dancerArray[i].constructor.name === 'addSean') {
        dancerArray[i].setPosition(285, 1000);
      }
    }
  });

  $(document).mousemove(function(e){
    var dancerArray = window.dancers;
    for (var i = 0; i < dancerArray.length; i++) {
      if (dancerArray[i].constructor.name === 'addBall') {
        dancerArray[i].setPosition(e.pageY, e.pageX);
      }
    }
  });

  $('.addDancerButton6').on('click', function(event) {
    var dancerArray = window.dancers;
    var maxDistance = 400;
    for (var i = 0; i < dancerArray.length; i++) {
      var firstDancer = dancerArray[i];
      if (firstDancer.constructor.name == 'addSean') {
        for (var j = 0; j < dancerArray.length; j++) {
          var secondDancer = dancerArray[j];
          if (secondDancer.constructor.name == 'addBall') {
            if (distanceBetweenPoints(firstDancer.left, firstDancer.top, secondDancer.left, secondDancer.top) < maxDistance) {
              secondDancer.$node.addClass('sean');
            }
          }
        }
      }
    }
  });
  
  var distanceBetweenPoints = function(x, y, x2, y2) {
    return Math.sqrt(Math.pow(Math.abs(x-x2), 2) + Math.pow(Math.abs(y-y2), 2));
  }

});
