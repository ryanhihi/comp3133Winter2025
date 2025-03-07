var Customer1 = /** @class */ (function () {
    function Customer1(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer1.prototype.greeter = function () {
        console.log("Hello ".concat(this.firstName, " ").concat(this.lastName));
    };
    return Customer1;
}());
var customer1 = new Customer1("Ryan", "Tran");
customer1.greeter();
