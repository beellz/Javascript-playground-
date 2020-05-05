function houseKeeper (name , age , location, workPermit) {
this.name = name;
this.age = age ;
this.location = location;
this.workPermit = workPermit;
this.clean = function () {
console.log("cleaning");
};
}
var houseKeeper1 = new houseKeeper("timmiy" , 19 , "mira Road" , "true");
houseKeeper1.clean();
console.log(houseKeeper1);
