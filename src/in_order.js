function inOrderTraverse(node) {
  // base case
  if (!node) return;

  // go to left node
  inOrderTraverse(node.left);

  // visit the current node
  console.log(node.value);

  // go to right node
  inOrderTraverse(node.right);
}

module.exports = inOrderTraverse;