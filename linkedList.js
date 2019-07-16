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
        tail = newObj; //assigns the next key to null
      }
      return newObj;
    },
    get(number) {
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
    },
    remove(number) {
      // find current head you want to remove, reassign previous to next head.
      let current = this.get(number); // 'this' refers to this module/function
      let previous = this.get(number - 1);
      if (current === false) {
        return false;
      }
      if (number === 0) {
        head = head.next;
      } else {
        previous.next = current.next;
      }
      if (current.next === null) {
        tail = previous;
      }
    },
    insert(value, number) {
      let newObj = this.add(value);
      let current = this.get(number);
      let previous = this.get(number - 1);

      if (number === 0) {
        newObj.next = current;
        head = newObj;
      } else {
        newObj.next = current;
        previous.next = newObj;
      }
    }
  };
}
