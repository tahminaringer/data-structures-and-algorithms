// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

// Example 1:
// Input: l1 = [1,2,4], l2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: l1 = [], l2 = []
// Output: []

// Example 3:
// Input: l1 = [], l2 = [0]
// Output: [0]

var mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }

  const head = l1.val >= l2.val ? l2 : l1;
  let cur = head;

  if (l1.val >= l2.val) l2 = l2.next;
  else l1 = l1.next;

  while (l1 || l2) {
    if (!l1 || (l2 && l1.val > l2.val)) {
      cur.next = l2;
      cur = cur.next;
      l2 = l2.next;
    } else {
      cur.next = l1;
      cur = cur.next;
      l1 = l1.next;
    }
  }
  return head;
};

mergeTwoLists();
