const response = await fetch('http://localhost:3000/Lorenzo');

const name = await response.text();

const fetch = require('node-fetch2')
it ("Should test validity of token", async ()=> {
    let token = "";
    
    const options = {
        method: "POST",
        headers:{ 
            "content": "application/json"
        
        },
        body:JSON.stringify({
            userName:"lorenzo.torres95@gmail.com",
            password :"Alberto1995!"
        })
    }
    const response = await fetch("https://dev.stedi.me/login",options);
    token = await response.text()
    expect(token.length).toBe(36);
    expect(name).toBe("Lorenzo");
});



