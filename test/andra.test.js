const fetch = require('node-fetch2');
it ("Should get Andra", async()=>{
    const response = await fetch('http://localhost:3000/andra');
    const name = await response.text();
    expect(name).toBe("Hello Andra!");
});
