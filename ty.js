var animals = {
    name: "Zebra",
    habitat: "Tsavo",
    lifespan: 45
  }
  var animals2 = {
    name: "lion",
    habitat: "Savana",
    lifespan: 30
  }
var lifespanSum = function(){
        return animals.lifespan + animals2.lifespan;
}
console.log(lifespanSum());