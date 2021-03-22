function isTreeMirrored(root) {

  if (!root) {
    return true;
  }

  const mirroredTree = (a, b) => {
    if (!a && !b) {
      return true;
    }
    if (!a || !b) {
      return false;
    }
    return mirroredTree(a.left, b.right) && mirroredTree(a.right, b.left);
  };
  return mirroredTree(root.left, root.right);
}

isTreeMirrored();
