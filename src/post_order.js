function postOrderTraverse(node) {
  // base case
  if (!node) return;

  // go to left node
  postOrderTraverse(node.left);

  // go to right node
  postOrderTraverse(node.right);

  // visit the current node
  console.log(node.value);
}