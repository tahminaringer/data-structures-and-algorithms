//use recursion

//takes in BTS or root, p and q
function lowestCommonAncestor(root, p, q) {
  //create a variable for the value of root / parent element
  let parElement = root.value;
  //create a variable for the value of p
  let pVal = p.value;
  // create a variable for the value of q
  let qVal = q.value;
  // compare if p and q are greater than the parent element
  if(pVal > parElement && qVal > parElement) {
    // then return and call the function to the right passing it, root.right, p, q
    return lowestCommonAncestor(root.right, p, q);
  }
  // else if both p and q are less than parent element
  else if (pVal < parElement && qVal < parElement) {
    // return and call recursive function passing it root.left, p, q
    return lowestCommonAncestor(root.left, p, q);
    // else the LCA node has been found and return the root
  } else {
    return root;
  }
}

lowestCommonAncestor();
