// Code your solution in this file!
function distanceFromHqInBlocks(start){
  const distance = 42;
  if(start > distance){
  return (start - distance);
} else if (start < distance){
  return (distance - start)
}
}

function distanceFromHqInFeet(start){
  return (distanceFromHqInBlocks(start)*264);
}

function distanceTravelledInFeet(start, distance){
  if(start > distance){
    return ((start - distance)*264);
} else if (start < distance){
    return ((distance - start)*264);
  
}
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance < 400) {
      return 0;
  } else if (distance <= 2000) {
      return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
      return 25;
  } else {
      return 'cannot travel that far'
  }
}

