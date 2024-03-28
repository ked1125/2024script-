function add(a, b) {
  return a + b;
}

let sum = add(10, 20);
console.log(sum);

var car = {
  name: "sonata",
  speed: 10,
  color: "white",
  door: 4,
  start: function () {
    return this.speed;
  },
};

console.log(car.name);
