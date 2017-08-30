$(document).ready(function() {
  window.dancers = [];

  var dancerNumber = 0;

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


    var dancer = new dancerMakerFunction(
      $('div.danceFloor').height() * Math.random(),
      ($('div.danceFloor').width() - 27) * Math.random(),
      Math.random() * 1000,
      dancerNumber
    );
    $('div.danceFloor').append(dancer.$node);
    window.dancers.push(dancer);
    dancerNumber++;
  });

  $('body').on('mouseover', '.dancer', function(event) {
    var directions = ['left', 'right', 'top', 'bottom'];
    var index = Math.floor(4 * Math.random());
    var direction = directions[index];
    var move = {};
    move[direction] = '+=27px';
    $(this).animate(move);
  });

  $('body').on('click', '.dancer', function(event) {

    var location = {};
    location.top = $('div.danceFloor').height() * Math.random() + 'px';
    location.left = ($('div.danceFloor').width() - 27) * Math.random() + 'px';

    $(this).animate(location, 'slow');
  });

  $('.lineUpButton').on('click', function() {
    var top = 0;
    var left = 0;
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineUp(top, left);
      left += 29;
      if (left > $('div.danceFloor').width() - 27) {
        left = 0;
        top += 29;
      }
    }
  });


});

