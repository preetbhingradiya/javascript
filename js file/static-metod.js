class animal {
  constructor(name) {
    //always d eclare static function can use calss
    this.name = animal.capital(name);  
  }
  walk() {
    console.log("Animal " + this.name + " is walking");
  }
  static capital(name) {
    return name.charAt(0).toUpperCase() + name.substr(1, name.lenght);
 }


}

let d = new animal("dog");
d.walk();

console.log(d instanceof animal);  //chaek the calss it belong th variable