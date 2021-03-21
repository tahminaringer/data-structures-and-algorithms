function removeDuplicates(head) {

  if (head === null) {
    return head;
  }

  let currentNode = head;

  while (currentNode !== null && currentNode.next !== null) {
    if (currentNode.next.val === currentNode.val) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }
  return head;
}

removeDuplicates();
