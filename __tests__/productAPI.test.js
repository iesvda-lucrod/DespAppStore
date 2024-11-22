const fetch = require('node-fetch');

test('fetch products from API', async () => {
   const response = await fetch('http://localhost:3000/products');
   const data = await response.json();
   expect(response.ok).toBeTruthy();
   expect(data).toBeInstanceOf(Array);
   expect(data.length).toBeGreaterThan(0);
});
