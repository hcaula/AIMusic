module.exports = function(app){
  var controller = {};

  controller.helloWorld = function(req, res){
    console.log("Hello World!");
  };

  controller.hi = function(req, res){
    console.log('hi');
    var ret = {
      title: 'Express'
    };
    res.render("index", ret);
  };

  return controller;
}
