function preOrderTraverse(node) {
  // base case
  if (!node) return;

  // visit the current node
  console.log(node.value);

  // go to the left node
  preOrderTraverse(node.left);

  // go to the right node
  preOrderTraverse(node.right);
}