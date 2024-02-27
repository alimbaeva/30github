function undoRedo(object) {
  const history = [];
  let currentIndex = -1;
  
  return {
    set: function(key, value) {
      history.push({ ...object });
      currentIndex++;
      object[key] = value;
      object = {...object}
      console.log(history)
      console.log(object)
    },
    get: function(key) {
      return object[key];
    },
    
    del: function(key) {
      history.push({ ...object });
      currentIndex++;
  
      delete object[key];
      object = {...object}
      console.log(object)
    },
    undo: function() {
      if (currentIndex >= 0) {
        Object.assign(object, history[currentIndex]);
        currentIndex--;  
      }
      object = {...object}
      console.log(object)
    },
    redo: function() {
      if (currentIndex+1 === history.length - 1) {
        Object.assign(object, history[currentIndex+1]);
        currentIndex++;  
        object = {...object}
      } else {
        throw new Error("No operation to redo");
      }
      console.log(object)
    }
  };
}

var obj = {
  x: 1,
  y: 2
};
var unRe = undoRedo(obj);
// console.log(obj, '1')
// console.log(unRe.set('y', 10))
// console.log(obj, '12')
// console.log(unRe.undo())
// console.log(obj, '123')
// console.log(unRe.redo())
// console.log(obj, '1234')
unRe.set('y', 10)
// unRe.undo()
// unRe.redo()
unRe.del('y')
unRe.set('z', 30)