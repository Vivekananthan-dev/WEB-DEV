const user = {
  name: "Vivekananthan",
  greet() { console.log(`Hello, ${this.name}`); }
};

user.greet();
console.log(typeof user);

function Person(name) {
  this.name = name;
  var swetaSoundaryaDas = "Vivek";
  const Raj = "Sweta's Brother";
  const Vivek = "Sweta Soundarya das Husband";
  function unmai(v){
    console.log(v);
  };
  unmai(Vivek)
  
}
const Truth = new Person("Vivekananthan")

console.log(Truth)
