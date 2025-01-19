console.log("Week01 - Buffer Examples")

// let b1 = new Buffer("Hello World")
let b1 = Buffer.from("A Hello World")
console.log(b1)
console.log(b1.toString())
console.log(b1[0])
console.log(b1.length)
b1[13] = 'Z'
console.log(b1[13])

//alloc
let b2 = Buffer.alloc(10)
console.log(b2)
b2[0] = 65
b2[1] = 0x42
// b2[2] = '\u065'
console.log(b2)
console.log(b2.toString())
console.log(b2.length)

let b3 = Buffer.from('💐')
console.log(b3)
console.log(b3.toString())
console.log(b3[0])
console.log(b3.toString('ascii'))
console.log(b3.toString('utf8'))
console.log(b3.toString('ucs2'))
console.log(b3.toString('base64'))

let b4 = Buffer.alloc(10)
b3.copy(b4)
console.log(b4.toString())

let b5 = Buffer.alloc(10)
b5.write("ABC 🎁")

b5.copy(b4, 4, 4, 10)
console.log(b4)
console.log(b4.toString())

const aBuffer = [b3, b4, b5]
let b6 = Buffer.concat(aBuffer)
console.log(b6.toString())

// let b7 = Buffer.alloc(10, 'A')
// let b7 = Buffer.alloc(10, 'ABC')
// let b7 = Buffer.alloc(10, 'ABCDEFGHIJKL')
let b7 = Buffer.alloc(10)
b7.fill('A')
console.log(b7.toString())

// for(c of b6){
//     console.log(c)
// }

for(c of b6.entries()){
    console.log(c)
}

const jsonObj = b6.toJSON()
console.log(jsonObj)

let arrayBuffer = new ArrayBuffer(jsonObj.data.length)
console.log(arrayBuffer)

let b8 = Buffer.from(arrayBuffer, 0, arrayBuffer.length)
console.log(b8.toString())

console.log(Buffer.isBuffer(b7))