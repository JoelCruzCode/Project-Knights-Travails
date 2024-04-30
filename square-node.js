function SquareNode(data) {
  let [row, column] = data;
  let visited;
  let top = null;
  let left = null;
  let right = null;
  let bottom = null;

  return { data, row, column, visited, top, left, right, bottom };
}
