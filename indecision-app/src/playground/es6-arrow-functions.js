// arguments 
const add = (a,b) => {
    return a+b;
}


// this keyword - no longer bound 

// const user = {
//     name: 'AK',
//     cities: ['Riga','Berlin'],
//     printPlacesLived()  {
      
//       const cityMessages = this.cities.map((city)=>"AK lived in:"+city)

//       return cityMessages

//       this.cities.forEach((item) => {
//           console.log(this.name +" lived in " + item)
//       })
//     }
// }

// console.log(user.printPlacesLived())

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply(){
       return this.numbers.map((n)=>n*this.multiplyBy)
    }
}

console.log(multiplier.multiply())