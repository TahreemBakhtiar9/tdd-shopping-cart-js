const {getItems} = require('../src/Cart.js');

describe('Cart', () => {
    it('should initialize as empty', () => {
        //arrange
        let assert = [];
        //act
        cart = getItems();
        //assert
        expect(cart).toEqual(assert);
    })
})