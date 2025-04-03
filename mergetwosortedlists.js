class ListNode{
    constructor(val = 0, next = null){
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(list1, list2){
    dummy = new ListNode(); 
    current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next
        } else{
            current.next = list2;
            list2 = list2.next
        }
        current = current.next;
    }
    current.next = list1 !== null ? list1 : list2;
        
    return dummy.next;
}

let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));

let mergedList = mergeTwoLists(list1, list2);

function printList(node) {
  let result = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  console.log(result.join(" -> "));
}

printList(mergedList);