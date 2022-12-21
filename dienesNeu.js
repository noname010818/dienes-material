var randomNumber = 0;



$( function() {
    $("#draggableHundreds").draggable();
    $("#droppable").droppable({
      
    });
});

jQuery(".draggableTens").draggable({
  revert: 'invalid'
  ,appendTo: '#droppable'
  ,scroll: false
  // no more helper:clone
});

jQuery(".draggableTens-in-menu").each( function(elem) {
  jQuery(this).draggable("option", "helper", 'clone');

 // can't use .width() and .height() before images load
 var width = parseInt(jQuery(this).css('width'));
 var height = parseInt(jQuery(this).css('height'));
 jQuery(this).draggable("option", "cursorAt",
   {'top': height/2, 'left': width/2});
});

jQuery("#droppable").droppable({
  drop: function(event, ui) {
    jQuery(this).addClass('dropped');

    // if we've got a clone,
    // we need to actually save it and put it where it belongs
    if(ui.draggable.hasClass('draggableTens')){
      var clone = ui.draggable;
      clone.appendTo(this);

      var width = clone.width();
      var height = clone.height();
      clone.offset({'top':event.pageY-height/2 ,'left':event.pageX-width/2 })
    }
  }
});
/*
$( function() {
    $(".draggableTens").draggable({
      helper:"clone"
    });
    $("#droppable").droppable({
      accept: ".draggableTens",
      drop: function(event, ui) {
        var new_signature = $(ui.helper).clone().removeClass('draggableTens');
        new_signature.draggable();
        $(this).append(new_signature);

      }
    });
});
*/
$( function() {
    $("#draggableOnes").draggable();
    $("#droppable").droppable({
      
    });
});


//Aufgabenstellung
window.onload = function() {
  randomNumber =  Math.floor(Math.random() * 1000);
  document.getElementById('exercise').innerHTML = "Stelle die Zahl " + randomNumber + " dar   "+"<button class=\"btn\" style=\"background-color:#00868b\" onClick=\"playSound()\"><i class=\"bi bi-mic-fill\"></i></button><button class=\"btn btn-danger\" onClick=\"deleteLast()\">Letzte Eingabe löschen</button>";
}


function playSound() {
  var msg = new SpeechSynthesisUtterance();
  msg.text = randomNumber;
  msg.volume = 0.5;
  msg.lang = 'de-at';
  window.speechSynthesis.speak(msg);
}
