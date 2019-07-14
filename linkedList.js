/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  let head = null;
  let tail = null;

  return {
    getHead() {
      return head;
    },
    getTail() {
      return tail;
    },
    add(value) {
      //adds object, if theres no object, then sets object to default object
      let newObj = {};
      newObj.value = value;
      newObj.next = null;
      if (!head && !tail) {
        // if theres no head or tail existing then add to defaultObj (head and tail is referenced to the same node)
        head = newObj;
        tail = newObj;
      } else {
        //if there is a head and tail then do this
        tail.next = newObj; // assigns new tail
        tail = newObj; //assigns the
      }
      return newObj;
    },
    get(number) {
      //   console.log(head.next);
      //   console.log(tail);
      let current = head; //head is head of linked-list
      let counter = 0; //counter is the index of where the node is (0 is the first head)
      if (number === 0) {
        return current;
      }
      while (counter < number && current !== null) {
        // update current until reaches number
        current = current.next;
        counter++;
      }
      if (current === null) {
        //if current returns false, means its the tail
        return false;
      }
      return current; //gives me the node i want

      //   console.log(counter);
    },
    remove(number) {
      //num = 2 for example
      // find current head you want to remove, reassign previous to next head.
      let current = this.get(number); // 'this' refers to this module/function
      let previous = this.get(number - 1);
      let next = this.get(number + 1);
      if (current === false) {
        return false;
      }
      if (number === 0) {
        head = head.next;
        // console.log(head);
      } else {
        previous.next = current.next;
      }
      if (current.next === null) {
        tail = previous;
      }
    },
    insert(value, number) {}
  };
}
