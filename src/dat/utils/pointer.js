define([
], function() {
  
  function is_touch_device() {
   return (('ontouchstart' in window)
        || (navigator.MaxTouchPoints > 0)
        || (navigator.msMaxTouchPoints > 0));
  }
   
  var isTouch = is_touch_device();

  var pointerStart,
      pointerEnd,
      pointerMove

  if (isTouch) {
    pointerStart = 'touchstart';
    pointerEnd  = 'touchend';
    pointerMove = 'touchmove';
  } else {
    pointerStart = 'mousedown';
    pointerEnd  = 'mouseup';
    pointerMove = 'mousemove';
  }


  return { 
    start: pointerStart,
    end: pointerEnd,
    move: pointerMove,
    isTouch: isTouch

  };
    
});