var createObject, extendObject,
  sayHello, sayText, makeMammal,
  dogPrototype, makeDog, kujoDog;
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
makeMammal = function ( arg_map ) {
  var mammal = {
    is_warm_blooded : true,
    has_fur : true,
    leg_count : 4,
    has_live_birth : true,
    hello_text : 'grunt',
    name : 'anonymous',
    say_hello : sayHello,
    say_text : sayText
    };
  extendObject( mammal, arg_map );
  return mammal;
  };

// ** use mammal constructor to create dog prototype
dogPrototype = makeMammal({
  has_pointy_ears : true,
  hello_text : 'woof'
  });

// ** dog constructor
makeDog = function( arg_map ) {
  var dog = Object.create( dogPrototype );
  extendObject( dog, arg_map );
  return dog;
  };

// ** dog instance
kujoDog = makeDog({
  name : 'Kujo',
  weight_lbs : 20.0
  });

// ** dog instance method invocations
kujoDog.say_hello();
kujoDog.say_text('woof...');

