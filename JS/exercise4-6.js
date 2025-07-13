const COL_MIN = 0;
const COL_MAX = 7;
const ROW_MIN = 0;
const ROW_MAX = 6;

const clientPosition = {
  row: 5,
  col: 0,
};

const goalPosition = {
  row: 1,
  col: 7,
};

function getElementByPosition(position) {
  const maze = document.getElementById("maze");
  const element = maze.children[position.row].children[position.col];

  return element;
}

function getNewPositionByKey(key) {
  const newPosition = {
    row: clientPosition.row,
    col: clientPosition.col,
  };
  switch (key) {
    case 37:
      newPosition.col -= 1;
      break;
    case 38:
      newPosition.row -= 1;
      break;
    case 39:
      newPosition.col += 1;
      break;
    case 40:
      newPosition.row += 1;
      break;
    default:
      break;
  }
  return newPosition;
}

function isPositionInRange(position) {
  return (
    position.row >= ROW_MIN &&
    position.row <= ROW_MAX &&
    position.col >= COL_MIN &&
    position.col <= COL_MAX
  );
}

function isPositionWall(position) {
  return getElementByPosition(position).classList.contains("wall");
}

document.addEventListener("keyup", (e) => gameMachanism(e));

function gameMachanism(event) {
  const newPosition = getNewPositionByKey(event.keyCode);
  const isValidPosition =
    isPositionInRange(newPosition) && !isPositionWall(newPosition);
  if (isValidPosition) {
    getElementByPosition(clientPosition).classList.remove("current");
    clientPosition.row = newPosition.row;
    clientPosition.col = newPosition.col;
    getElementByPosition(clientPosition).classList.add("current");
    if (
      clientPosition.row === goalPosition.row &&
      clientPosition.col === goalPosition.col
    ) {
      window.alert("You Escaped!");
    }
  }
}
