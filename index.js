function receivesAFunction(callback) {
    callback()
  }

  function returnsANamedFunction() {
    return function named() {
      console.log("I am Ruba.")
    }
  }

  function returnsAnAnonymousFunction() {
    return function() {
      console.log('hello')
    }
  }
