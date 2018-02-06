function getNewCar() {
  return {
    city: 'Toronto',
    passengers: 0,
    gas: 100,
  }
}

function addCar(cars, new_car) {
  cars.push(new_car);
  return ('Adding new car to fleet. Fleet size is now ' + cars.length);
}

function pickUpPassenger(car) {
  car['passengers'] += 1;
  car['gas'] -= 10;
}

function getDestination(car) {
  if (car['city'] === 'Toronto') {
    return 'Mississauga';
  } else if (car['city'] === 'Mississauga') {
    return 'London';
  } else if (car['city'] === 'London') {
    return 'Toronto';
  }
}

function fillUpGas(car) {
  var oldGas = car['gas'];
  car['gas'] = 100;
  return ('Filled up to ' + getGasDisplay(car['gas']) + ' on gas from ' + getGasDisplay(oldGas));
}

function getGasDisplay(gasAmount) {
  return (gasAmount + '%');
}

function drive(car, cityDistance) {
  if (car['gas'] < cityDistance) {
    return fillUpGas(car);
  }

  car['city'] = getDestination(car);
  car['gas'] -= cityDistance;
  return (
    'Drove to ' +
    car['city'] +
    '. Remaining gas: ' +
    getGasDisplay(car['gas'])
  )
}
car = getNewCar();
console.log(drive(car, 50));
console.log(car);
