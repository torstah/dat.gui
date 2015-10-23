define([
], function() {
  
  function is_touch_device() {
   return (('ontouchstart' in window)
        || (navigator.MaxTouchPoints > 0)
        || (navigator.msMaxTouchPoints > 0));
  }
   
  var isTouch = is_touch_device();

  //console.log('isTouch',isTouch)

  window.isTouch = isTouch;

  var pointerStart,
      pointerEnd,
      pointerMove,
      pointerClick;

  if (isTouch) {
    pointerStart = 'touchstart';
    pointerEnd  = 'touchend';
    pointerMove = 'touchmove';
    pointerClick = 'touchstart';
  } else {
    pointerStart = 'mousedown';
    pointerEnd  = 'mouseup';
    pointerMove = 'mousemove';
    pointerClick = 'click';
  } 


  return { 
    start: pointerStart,
    end: pointerEnd,
    move: pointerMove,
    isTouch: isTouch,
    click: pointerClick
  };
    
});