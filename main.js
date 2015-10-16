requirejs.config({
  baseUrl: 'src'
})

require([
  'dat/gui/GUI'
], function(GUI) {


  var obj = {
    x:1,
    name:'test',
    yes: false,
    doit: function  (argument) {
      console.log('bam!')
    }
  }
  // No namespace neces ary 
  var gui = new GUI();
  gui.add(obj,'x')
  gui.add(obj,'x',1,100).name('longPropName')
  gui.add(obj,'yes')
  gui.add(obj,'x')
  gui.add(obj,'x',1,100).name('longPropName')
  gui.add(obj,'yes')
  gui.add(obj,'doit')
  gui.add(obj,'x')
  gui.add(obj,'x',1,100).name('longPropName')
  gui.add(obj,'yes')
  gui.add(obj,'x')
  gui.add(obj,'x',1,100).name('longPropName')
  gui.add(obj,'yes')
  gui.add(obj,'doit')

  // var gui2 = new GUI();
  // gui2.add(obj,'x')
  // gui2.add(obj,'x',1,100).name('longPropName')
  // gui2.add(obj,'yes')


});