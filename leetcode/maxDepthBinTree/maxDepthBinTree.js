//Given the root of a binary tree, return its maximum depth.

//A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

function maxDepth(root) {
  if(!root) return 0;

  let maxLeft = maxDepth(root.left);
  let maxRight = maxDepth(root.right);
  return Math.max(maxLeft, maxRight) +1;
}

maxDepth();
