interface Address {
  street: string;
  country: string;
  city: string;
}

interface Hero1 {
  name: string;
  age: number;
  location: Address;
  showLocation: () => string;
}

const superHero1: Hero1 = {
  name: "Spiderman",
  age: 23,
  location: {
    street: "Main St",
    country: "USA",
    city: "NY",
  },
  showLocation() {
    return (
      this.name +
      " - " +
      this.location.street +
      ", " +
      this.location.city +
      ", " +
      this.location.country
    );
  },
};

console.log(superHero1.showLocation());
