interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: 'Matt',
}

const passenger2: Passenger = {
  name: 'Jonny',
  children: ['Alice', 'Pepito']
}


function printChildren(passenger: Passenger) {
  let howManyChildren = passenger.children?.length || 0

  console.log(howManyChildren);
}

printChildren(passenger1)
printChildren(passenger2)
