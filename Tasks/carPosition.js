const A1 = {
  x: 2,
  y: 1,
  v: 5,
};

const A2 = {
  x: 3,
  y: 3,
  v: 2,
};

const A3 = {
  x: 4,
  y: 3,
  v: 10,
};

const A4 = {
  x: 3,
  y: 3,
  v: 3,
};

const A5 = {
  x: 30,
  y: 30,
  v: 3,
};

function timeArrivalToPosition(arrOfPoints) {
  const result = {
    x: 0,
    y: 0,
    time: 0,
  };

  for (let i = 0; i < arrOfPoints.length; i++) {
    result.time += timeBySingleStep(result, arrOfPoints[i]);
    result.x = arrOfPoints[i].x;
    result.y = arrOfPoints[i].y;
    console.log(result, arrOfPoints[i]);
  }

  return { ...result, time: result.time.toFixed(2) };

  function timeBySingleStep(prevPont, nextPoint) {
    const distX = Math.abs(prevPont.x - nextPoint.x);
    const distY = Math.abs(prevPont.y - nextPoint.y);
    const dist = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));
    return dist / nextPoint.v;
  }
}

console.log(timeArrivalToPosition([A1, A2, A3, A4, A5]));
