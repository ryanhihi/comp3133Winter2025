const { expect } = require('chai');
const { add, mul, div, sub } = require ('../app/calculator');

describe('Test Calculator', function() {
    //Add function Tests
    it("should return 7 for add(5, 2)", function () {
        expect(add(5,2)).to.equal(7);
    });

    it("fails for add(5, 2) expecting 8", function () {
        expect(add(5, 2)).to.not.equal(8);
    });

    //Subtraction test
    it("should return 3 for sub(5, 2)", function () {
        expect(sub(5, 2)).to.equal(3)
    });

    it("should fail for sub(5, 2) expecting 10", function () {
        expect(sub(5, 2)).to.not.equal(10)
    });

    //Multiplication test
    it("should return 10 for mul(5, 2)", function () {
        expect(mul(5, 2)).to.equal(10);
    });

    it("should fail for mul(6, 7) expecting 81", function () {
        expect(mul(6, 7)).to.not.equal(81);
    });

    //Division Test
    it("return 10 for div div(80, 8)", function () {
        expect(div(80, 8)).to.equal(10);
    });

    it("fail for div(10, 2) expecting 2", function () {
        expect(div(10, 2)).to.not.equal(2);
    });

})