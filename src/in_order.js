function inOrderTraverse(node) {
  if (node) {
    preOrderTraverse(node.left);
    console.log(node.value);
    preOrderTraverse(node.right);
  }
}

module.exports = inOrderTraverse;