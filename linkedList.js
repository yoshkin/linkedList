import Node from './node';

const reverse = (linkedList) => {
  let reversedList = null;
  let current = linkedList;

  while (current) {
    reversedList = new Node(current.getValue(), reversedList);
    current = current.getNext();
  }
  
  return reversedList;
};

export default reverse;
