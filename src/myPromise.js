//new module to test promises

module.exports = function(data) {
  return new Promise(function(resolve,reject) {
    if ( data === "resolve" ) resolve( data );
    if ( data === "error" ) reject( data );
  })
}
