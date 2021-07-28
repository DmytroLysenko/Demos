function logItem(item) {
  console.log(item);
}

const listItem = ["one", "two", "three", "four", "five"];

function listItemOperation(list, operation) {
  if (list.length !== 1) {
    listItemOperation(list.slice(1), operation)
  } 
  return operation(list[0])
}

listItemOperation(listItem, logItem);
