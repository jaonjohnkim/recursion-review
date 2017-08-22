// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//You should use :
// document.body
// element.childNodes
// element.classList

//document.body.childNodes : gives us the entire array of nodes
//document.body.childNodes[index].classList : returns an array of the class names
//document.body.childNodes[index].childNodes : if nested child nodes

var getElementsByClassName = function(className) {
  //input : string that specifies class
  //output : an array of nodes that have the className
  let output = [];
  let doc = document.body.childNodes;


  let classCheck = function (node) {
    
    if (node.classList) {
      let nodeArray = Array.from(node.classList);
      if (nodeArray.includes(className)) {
        output.push(node);
      }
    }
    
    if (node.childNodes) {
      for (let j = 0; j < node.childNodes.length; j++) {
        classCheck(node.childNodes[j]);
      }
    }
  };
  
  for (let i = 0; i < doc.length; i++) {
    classCheck(doc[i]);
  }
  
  return output;
};
