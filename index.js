function receivesAFunction(callback,Spy){
    return callback(Spy)
}

function returnsANamedFunction() {
    return function namedFunction() {
      console.log("I am a named function!");
    };
  }

  function returnsAnAnonymousFunction() {
    return function () {
      console.log("I am an anonymous function!");
    };
  }
  