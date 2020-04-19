
class Person {
  
  constructor(name = 'noone',age = 0){
    this.name=name
    this.age=age
  }
  
  getGreeting(){
      return `Hello, ${this.name}`
  }

  getDescription(){
      return `Name ${this.name} is ${this.age} years old`
  }
}

class Student extends Person {

  getDescription(){
      return `Name ${this.name} is ${this.age} years old. Major ${this.major}`
  }
  constructor(name,age,major){
     super(name,age)
     this.major=major
  }

  hasMajor(){
      return !!this.major
  }
}

class Traveler extends Person {
    constructor(name,age,homeLocation){
        super(name,age)
        this.homeLocation=homeLocation
    }

    hasHomeLocation(){
        return !!this.homeLocation
    }

    getDescription(){
        let desc=super.getDescription()
        if(this.hasHomeLocation()){
            desc+=` .Home location is ${this.homeLocation}`
        }
        return desc
    }
}

const me = new Traveler('AK',30, 'Physics')
console.log(me.getDescription())

const other = new Traveler()
console.log(other.getDescription())