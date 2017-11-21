var lib1=require('../src/shop-tools')


var expect = require('chai').expect;
    describe('test assertion', function() {
    it('insert Correct (object)?', function() {
        expect({banana:1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6 }).to.eql(lib1.getPrices());
    })

    it('insert 2 Correct (count)?', function() {
        expect( [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato', 'potato', 'tomato', 'potato' ].length).to.eql(lib1.countArticles());
    })

});