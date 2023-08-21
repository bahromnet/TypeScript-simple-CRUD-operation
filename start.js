var car = /** @class */ (function () {
    function car() {
    }
    car.prototype.Run = function (name) {
        console.log(this.Name + " " + name);
    };
    return car;
}());
var matiz = new car();
matiz.Name = "Onix";
matiz.Run("bomedi");
