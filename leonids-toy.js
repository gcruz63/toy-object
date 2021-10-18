// const toys = [
//     {
//         id: 1,
//         name: "Tiger",
//         maker: "BeanieBaby",
//         price: 350,
//         weight: 1.5
//     },
//     {
//         id: 2,
//         name: "RoboDog",
//         maker: "Kmart",
//         price: 500,
//         weight: 5
//     },
//     {
//         id: 3,
//         name: "Bat",
//         maker: "Batman",
//         price: "Justice",
//         weight: 5
//     }
// ]
// //for (const toy of toys) {
// //  console.log(`name is ${toy.name}`)
// //}
// const dolls = {
//     id: 4,
//     name: "Barbie",
//     maker: "Wal-Mart",
//     price: 600,
//     weight: 2
// }
// toys.push(dolls)

// const bbGuns = {
//     id: 5,
//     name: "Red rider",
//     maker: "Daisy",
//     price: 1000,
//     weight: 3
// }
// toys.push(bbGuns)
// // the price of toys only
// //  for (const toy of toys) {
// //     console.log(`price is ${toy.price}`)
// // }

// // lists all variables
// //for (const toy of toys) {
// //    console.log(`This ${toy.name} is found at ${toy.maker} and the price is ${toy.price}`)
// //}

// const toyToFind = 5
// for (const toy of toys) {
//     if (toy.id === toyToFind) {
//         toy.price = toy.price * 4
//         console.log(`The ${toy.name} cost ${toy.price} dollars`)
//     }
// }

const phones = [
    {
        id: 1,
        name: "iPhone",
        maker: "Apple, Inc.",
        operatingSystem: "iOS",
        price: 900,
        weight: 1.2
    },
    {
        id: 2,
        name: "Galaxy",
        maker: "Samsung",
        operatingSystem: "Android",
        price: 600,
        weight: 1.4
    }
]

const addPhoneToInventory = (phoneObject) => {
    /*
        Step 1: Get maximum id current in array
    */
    // Get index of last item in array
    const lastIndex = phones.length - 1

    // Get the last object in the array
    const currentLastPhone = phones[lastIndex]

    // Get id property value of last phone
    const maxId = currentLastPhone.id


    /*
        Step 2: Increase the current max id by 1
    */
    const idForNewPhone = maxId + 1


    /*
        Step 3: Add the id property to the phone object
    */
    phoneObject.id = idForNewPhone


    /*
        Step 4: Add the phone object to the array
    */
    phones.push(phoneObject)
}

const pixel = {
    name: "Pixel",
    maker: "Google",
    operatingSystem: "Android",
    price: 399,
    weight: 1.2
}

addPhoneToInventory(pixel)

for (const phone of phones) {
    console.log(`The ${phone.maker} ${phone.name} costs ${phone.price} dollars. It weighs ${phone.weight} grams.`)
}

console.log(phones)


/*
    Commented out the "find" code
 */

// const phoneToFind = 2
//
// for (const phone of phones) {
//     if (phone.id === phoneToFind) {
//         phone.weight = phone.weight + 0.4
//         console.log(`The ${phone.maker} ${phone.name} costs ${phone.price} dollars. It weighs ${phone.weight} grams.`)
//     }
// }


