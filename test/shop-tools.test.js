var lib1=require('../src/shop-tools')


var expect = require('chai').expect;
    describe('test assertion', function() {
    it('insert Correct?', function() {
        expect({banana:1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6 }).to.eql(lib1.getPrices());
    })
});