// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  
  //types = string, number, boolean, undefined, null

  //arrays

  //objects
  if (typeof obj === 'string') {
    return '"' + obj + '"'; 
  }

  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return obj + '';
  }
  
  

  //
  if ( Array.isArray(obj) ) {
    if (obj.length === 0) {
      return '[]';
    }

    let newArray = [];
    for (var i = 0; i < obj.length; i++) {
      newArray.push(stringifyJSON(obj[i]));
    }

    return '[' + newArray.join(',') + ']';
  }
  
  if (typeof obj === 'object') {
    if (Object.keys(obj).length === 0) {
      return '{}';
    }
    
    let newObj = [];
    for (var key in obj) {
      let keyStr = stringifyJSON(key);
      let valueStr = stringifyJSON(obj[key]);
      if (typeof valueStr === 'function' || typeof valueStr === 'undefined') {
        continue;
      }
      newObj.push(keyStr + ':' + valueStr);
      
    }
    return '{' + newObj.join(',') + '}';

  }  //end of obj


};
