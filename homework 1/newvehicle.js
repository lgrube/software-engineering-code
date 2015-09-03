//luke grube
var createObject, extendObject,
  sayHello, sayText, makeVehicle,
  carPrototype, makeCar, testCar, planePrototype, makePlane, testPlane;
// ** Utility function to set inheritance
// Cross-browser method to inherit Object.create()
// Newer js engines (v1.8.5+) support it natively
var objectCreate = function ( arg ) {
  if ( ! arg ) { return {}; }
  function obj() {};
  obj.prototype = arg;
  return new obj;
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
  print( this.hello_text + ' says ' + this.name );
  };

sayText = function ( text ) {
  print( this.name + ' says ' + text );
  };

// ** makeMammal constructor
makeVehicle = function ( arg_map ) {
  var vehicle = {
    has_wheels : true,
    has_windows : true,
    people_count : 4,
    has_gas_engine : true,
    hello_text : 'grunt',
    name : 'anonymous',
    say_hello : sayHello,
    say_text : sayText
    };
  extendObject( vehicle, arg_map );
  return vehicle;
  };

// ** use mammal constructor to create cat prototype
carPrototype = makeVehicle({
  has_lights : true,
  hello_text : 'vroom vroom'
  });

// ** cat constructor
makeCar = function( arg_map ) {
  var car = Object.create( carPrototype );
  extendObject( car, arg_map );
  return car;
  };

// ** cat instance
testCar = makeCar({
  name : 'Harry',
  weight_lbs : 860
  });

// ** cat instance method invocations
testCar.say_hello();
testCar.say_text('vroom');

planePrototype = makeVehicle({
  flight : true,
  hello_text : 'VROOM VROOM'
 });

makePlane = function( arg_map ) {
  var plane = Object.create( planePrototype );
  extendObject( plane, arg_map );
  return plane;
  };

testPlane = makePlane({
  name : 'christmas',
  weight_lbs : 86000
  });

testPlane.say_hello();
testPlane.say_text('VROOM VROOM');
