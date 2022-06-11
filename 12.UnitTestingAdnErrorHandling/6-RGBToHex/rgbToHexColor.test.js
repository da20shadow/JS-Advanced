const rgbToHexColor = require('./rgbToHexColor');
const { expect } = require('chai');

describe('Test the RGB to HEX Color function', () => {

    it('should return undefined if args are not integers', function () {
        expect(rgbToHexColor('110',120,105)).to.be.equal(undefined);
        expect(rgbToHexColor(110,'120',105)).to.be.equal(undefined);
        expect(rgbToHexColor(110,120,'105')).to.be.equal(undefined);
        expect(rgbToHexColor(1.10,120,90)).to.be.equal(undefined);
        expect(rgbToHexColor(110,1.20,90)).to.be.equal(undefined);
        expect(rgbToHexColor(110,150,1.90)).to.be.equal(undefined);
    });

    it('should return undefined if args are less than 0 or greater than 255', function () {
        expect(rgbToHexColor(-210,200,105)).to.be.equal(undefined);
        expect(rgbToHexColor(210,-200,105)).to.be.equal(undefined);
        expect(rgbToHexColor(210,200,-105)).to.be.equal(undefined);
        expect(rgbToHexColor(290,200,105)).to.be.equal(undefined);
        expect(rgbToHexColor(250,290,105)).to.be.equal(undefined);
        expect(rgbToHexColor(250,200,305)).to.be.equal(undefined);
    });

    it('should return undefined if args are invalid', function () {
        expect(rgbToHexColor(undefined,200,105)).to.be.equal(undefined);
        expect(rgbToHexColor(150,undefined,105)).to.be.equal(undefined);
        expect(rgbToHexColor(150,255,undefined)).to.be.equal(undefined);
        expect(rgbToHexColor(150,255,null)).to.be.equal(undefined);
        expect(rgbToHexColor(150,null,155)).to.be.equal(undefined);
        expect(rgbToHexColor(null,255,245)).to.be.equal(undefined);
        expect(rgbToHexColor()).to.be.equal(undefined);
    });

    it('should return #4287f5 when rgb is 66, 135, 245', function () {
        expect(rgbToHexColor(66, 135, 245)).to.be.equal('#4287F5');
        expect(rgbToHexColor(255, 158, 170)).to.be.equal('#FF9EAA');
        expect(rgbToHexColor(128, 31, 43)).to.be.equal('#801F2B');
        expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
    });
})