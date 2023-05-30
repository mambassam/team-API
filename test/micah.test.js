const fetch = require('node-fetch2');
it ("Should get Micah", async()=>{
    const response = await fetch('http://localhost:3000/micah');
    const name = await response.text();
    expect(name).toBe("Hello Micah!");
});