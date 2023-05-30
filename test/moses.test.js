const fetch = require('node-fetch2');
it ("Should get Moses", async()=>{
    const response = await fetch('http://localhost:3000/moses');
    const name = await response.text();
    expect(name).toBe("Hello Moses!");
});