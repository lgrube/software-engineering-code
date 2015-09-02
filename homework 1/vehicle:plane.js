//luke grube
var createObject, extendObject,
  sayHello, sayText, makeVehicle, makePlane,
  carPrototype, planePrototype, newCar, newPlane;
// ** Utility function to set inheritance
// Cross-browser method to inherit Object.create()
// Newer js engines (v1.8.5+) support it natively
var objectCreate = function ( arg ) {
  if ( ! arg ) { return {}; }
  function obj() {}
  obj.prototype = arg;
  return new obj();
  };

Object.create = Object.create || objectCreate;

// ** Utility function to extend an object
extendObject = function ( orig_obj, ext_obj ) {
  var key_name;
  for ( key_name in ext_obj ) {
  if ( ext_obj.hasOwnProperty( key_name ) ) {
    orig_obj[ key_name]=ext_obj[ key_name ];
    }
  }
};

// ** object methods...
sayHello = function () {
  console.log( this.hello_text + ' says ' + this.name );
  };

sayText = function ( text ) {
  console.log( this.name + ' says ' + text );
  };

// ** makeMammal constructor
makeVehicle = function ( arg_map ) {
  var vehicle = {
    has_wheels : true,
    has_metal : true,
    fits_atleast_people : 4,
    has_windows : true,
    hello_text : 'vroom',
    name : 'anonymous',
    say_hello : sayHello,
    say_text : sayText
    };
  extendObject( vehicle, arg_map );
  return vehicle;
  };

/*makePlane = function (arg_map) {
  var plane = {
    has_wheels : true,
    has_metal : true,
    fits_atleast_people : 4,
    has_windows : true,
    hello_text : 'vroom',
    name : 'anonymous',
    say_hello : sayHello,
    say_text : sayText
  };
  extendObject( plane, arg_map);
  return plane;
};*/

// ** use mammal constructor to create cat prototype
carPrototype = makeVehicle({
  doesnt_leave_ground : true,
  hello_text : 'vroom of an engine'
  });

planePrototype = makeVehicle({
  leaves_ground : true,
  hello_text : 'jet plane noise'
 });

// ** cat constructor
makeVehicle = function( arg_map ) {
  var vehicle = Object.create( carPrototype );
  extendObject( newCar, arg_map );
  return newCar;
  };

makeVehicle = function( arg_map ) {
  var plane = Object.create( planePrototype );
  extendObject( newPlane, arg_map );
  return newPlane;
  };

// ** cat instance
newCar = makeVehicle({
  name : 'harry',
  weight_lbs : 8600
});

newPlane = makeVehicle ({
  name : 'christmas',
 weight_lbs : 860000
 });

// ** cat instance method invocations
newCar.say_hello();
newCar.say_text('vroom vroom');

newPlane.say_hello();
newPlane.say_text('VROOM VROOM');
