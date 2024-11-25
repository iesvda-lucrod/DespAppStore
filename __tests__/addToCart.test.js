 //Mocking localstorage as it its part of the browser api
    global.localStorage = {
    getItem: () => { return null },
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
};

//Mocking DOM and document
const { JSDOM } = require("jsdom");
const dom = new JSDOM('<!DOCTYPE html><html><body><div id="cart-summary"></div></body></html>');
global.document = dom.window.document;
global.window = dom.window;

//Test
//import { addToCart, getCartSummary } from "../cart.js";

const { addToCart, getCartSummary } = require("../cart.js");
console.log("ATC", addToCart);
describe('addToCart', () => {
    it('should add a product to the cart', () => {
        addToCart(1); // Add product with id 1 to the cart
        const cart = getCartSummary();
        expect(cart).toHaveLength(1);
        expect(cart[0].id).toBe(1);
    });
});
