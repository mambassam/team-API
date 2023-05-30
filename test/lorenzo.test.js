const fetch = require('node-fetch2')
it ("Should get Lorenzo", async()=>{
    const response = await fetch('http://localhost:3000/Lorenzo');
    const name = await response.text();
    expect(name).toBe("Hello Lorenzo!");
});