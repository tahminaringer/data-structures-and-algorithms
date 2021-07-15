// Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.

// Return the number of good nodes in the binary tree.

var goodNodes = function (root, count = 0) {
  const dfs = (node, maxVal) => {
    if (node.val >= maxVal) {
      count++;
      maxVal = node.val;
    }
    if (node.left) {
      dfs(node.left, maxVal);
    }
    if (node.right) {
      dfs(node.right, maxVal);
    }
  };
  dfs(root, count);
  return count;
};
