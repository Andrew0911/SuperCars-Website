const uuid = require("uuid");
const carRepository = require('../repository/carRepository');

module.exports.getAllcars = () => {
    const carList = carRepository.readJSONFile();
    return carList;
}

module.exports.addcar = (newcar) => {
    const carList = carRepository.readJSONFile();
    newcar.id=uuid.v4.apply();
    carList.push(newcar);
    carRepository.writeJSONFile(carList)
    return newcar
}

module.exports.updatecar = (carID, carName, carImg) => {
    const carList = carRepository.readJSONFile();
  
    let foundcar=null;
    for (let i=0; i<carList.length; i++) 
        if (carList[i].id===carID) {
            carList[i].name=carName;
            carList[i].img=carImg;
            foundcar=carList[i];
            break;
        }
  
    carRepository.writeJSONFile(carList);
    return foundcar;
}

module.exports.removecar = (id) => {
    const carList = carRepository.readJSONFile();
    
    for (let i=0; i<carList.length; i++) 
        if (carList[i].id===id) {
            carList.splice(i, 1);  //  remove car
            foundcar=carList[i];
            break;
        }
    
    carRepository.writeJSONFile(carList);
    return foundcar
}