type CarInfo = {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow additional properties
  };
  
  function createCar(manufacturer: string, model: string, ...additionalInfo: [key: string, value: any][]): CarInfo {
    // Initialize the car object with required properties
    const car: CarInfo = {
      manufacturer,
      model
    };
  
    // Add additional properties to the car object
    additionalInfo.forEach(([key, value]) => {
      car[key] = value;
    });
  
    return car;
  }
  
  // Example usage
  const myCar = createCar('Toyota', 'Corolla', ['color', 'red'], ['features', ['GPS', 'Leather seats']]);
  
  console.log(myCar);
  