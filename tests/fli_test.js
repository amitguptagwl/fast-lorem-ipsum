var fli = require("../index");

describe("Lorem Ipsum Generator", function () {

    it("should generate lorem ipsum N chars long string ", function () {
        var str = fli("10c");
        var expected = "lorem ipsu";
        expect(str).toEqual(expected);

        var str = fli(10,"c");
        expect(str).toEqual(expected);
    });

    it("should generate lorem ipsum N words long string ", function () {
        var str = fli("10w");
        var expected = "lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam";
        expect(str).toEqual(expected);

        var str = fli(10,"w");
        expect(str).toEqual(expected);
    });
});