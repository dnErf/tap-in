// https://leetcode.com/problems/average-of-levels-in-binary-tree/
// Array.prototype.shift() -> removes the first element from an array and return that removed element

// implementation code
const averageOfLevels = function (root) {
  let 
    queue = [root], 
    result = [];
  while (queue.length) {
    let
      size = queue.length,
      sum = 0,
      i = 0;
    for (; i < size; i++) {
      let node = queue.shift();
      sum += node.val;
      if (node.left)
        queue.push(node.left);
      if (node.right)
        queue.push(node.right);
    }
    result.push(sum / size);
  }
  return result;
}

// pseudo code
const p_AvarageOfLevels = function (root) {
  // initialize a queue array variable with the tree root in it so that we could easily loop tru each node
  // declare a container for the array of results that we will get once we traverse each node
  // start a loop while there is a length for the queue array
    // initialize a variable for the sum and the length of the queue
    // loop for each element on the queue
      // get the first node element (shift()) 
      // add the value of the node to the sum
      // check if there is a left or right node and push it on the queue
    // push the average of the sum to the result container
  // return the array of the averages
}