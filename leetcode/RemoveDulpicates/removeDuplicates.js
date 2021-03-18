function removeDuplicates(head) {

  if (!head) {
    return null;
  }

  let currentNode = this.head;
  let prev = null;

  while (currentNode) {
    if (currentNode === prev) {
      currentNode = prev.next.next;
    } else {
      prev = currentNode;
      currentNode = currentNode.next;
    }
  }
  return head;
}

removeDuplicates();
