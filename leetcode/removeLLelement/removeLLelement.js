function removeValue(head, val) {
  let currentNode = head;

  while (currentNode !== null && currentNode.val === val) {
    currentNode = currentNode.next;
  }

  while (currentNode !== null && currentNode.next !== null) {
    if (currentNode.next.val == val) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }
  return head;
}

removeValue();
