function hoizontal(matrix) {
  let size = matrix.xSize();
  for (let x = 0; x < size; x++) {
    let count = 1;
    let previous = null;
    for (let y = 0; y < size; y++) {
      let current = matrix.get(x, y);
      if (null == previous) {
        previous = current;
      }
      else {
        if (current === previous) {
          count++;
          if (count >= size) {
            return current;
          }
        }
      }
    }
  }
  return false;
}

function vertical(matrix) {
  let size = matrix.xSize();
  for (let y = 0; y < size; y++) {
    let count = 1;
    let previous = null;
    for (let x = 0; x < size; x++) {
      let current = matrix.get(x, y);
      if (null == previous) {
        previous = current;
      }
      else {
        if (current === previous) {
          count++;
          if (count >= size) {
            return current;
          }
        }
      }
    }
  }
  return false;
}

function diagionalTopLeft2BottomRight(matrix) {
  let size = matrix.xSize();
  let count = 1;
  let previous = null;
  for (let x = 0; x < size; x++) {
    let y = x;
    let current = matrix.get(x, y);
    if (null == previous) {
      previous = current;
    }
    else {
      if (current === previous) {
        count++;
        if (count >= size) {
          return current;
        }
      }
    }
  }
  return false;
}

function diagionalTopRight2BottomLeft(matrix) {
  let size = matrix.xSize();
  let count = 1;
  let previous = null;
  for (let x = 0; x < size; x++) {
    let y = (size - 1) - x;
    let current = matrix.get(x, y);
    if (null == previous) {
      previous = current;
    }
    else {
      if (current === previous) {
        count++;
        if (count >= size) {
          return current;
        }
      }
    }
  }
  return false;
}

module.exports = (matrix) => {
  let results = false;
  if (results === false) {
    results = hoizontal(matrix);
  }
  if (results === false) {
    results = vertical(matrix);
  }
  if (results === false) {
    results = diagionalTopLeft2BottomRight(matrix);
  }
  if (results === false) {
    results = diagionalTopRight2BottomLeft(matrix);
  }
  return results;
};
