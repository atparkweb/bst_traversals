function preOrderTraverse(node) {
  if (node) {
    console.log(node.value);
    preOrderTraverse(node.left);
    preOrderTraverse(node.right);
  }
}