class NormalPerson {
  constructor(public name: string, public address: string) {}
}

class Hero extends NormalPerson {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string
  ) {
      super(realName, 'Seattle');
  }
}

const char1 = new Hero('Ironman', 38, 'Tony')
console.log(char1);


