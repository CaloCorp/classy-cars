class Vehicle {
  constructor( name, wheelCount, maxSpeed){

    this.name = name
    this.wheelCount = wheelCount
    this.maxSpeed =maxSpeed
    this.speed = 0


  }
accelerate (){
  if (this.speed < this.maxSpeed){
this.speed = this.speed + this.maxSpeed * 1/3
   }
}


}

class Car extends Vehicle {
  constructor (name, maxSpeed ){

super(name, 4, maxSpeed)
  }
drive (){

  return "Vroom. "
}

}


class Ferrari  extends Car{
  constructor(){

    
   super()

   this.name = "Ferrari"
   this.maxSpeed = 180
  }
  drive(){

    return super.drive() + "I'm a Ferrari!"
  }

  accelerate (){
    if (this.speed < this.maxSpeed){
  this.speed = this.speed + this.maxSpeed * 1/2
     }
  }
  
}




module.exports = {
  Vehicle,
  Car,
  Ferrari
}
 