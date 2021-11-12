function postOrderTraverse(node) {
  if (node) {
    preOrderTraverse(node.left);
    preOrderTraverse(node.right);
    console.log(node.value);
  }
}