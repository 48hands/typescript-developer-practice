const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

// Help with interface when extracting values
const car1 = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.map(
  (car: string): string => {
    return car.toUpperCase();
  }
);

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2013-10-10'];
importantDates.push('2013-10-10');
importantDates.push(new Date());
console.log(importantDates);
