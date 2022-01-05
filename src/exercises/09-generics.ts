function whatTypeAmI<T>(args: T) {
  return args
}

let imString = whatTypeAmI('hello world')
let imNumber = whatTypeAmI(8)
let imBoolean = whatTypeAmI(true)

let soyNumero = whatTypeAmI<number>(120)
