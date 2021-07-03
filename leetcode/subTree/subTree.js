// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself

var isSubtree = function(root, subRoot) {
  if (!root || !subRoot) {
    return false;
  }
  if (!root && !subRoot) {
    return true;
  }
  if (!subRoot) {
    return true;
  }
  if (!root) {
    return false;
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

isSubtree();
