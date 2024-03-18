function processArray(arr) {
    const even = [];
    const odd = [];
    const alphanumeric = [];
 
    arr.forEach(element => {
     
        if (element % 2 === 0) {
          even.push(element);
        } else if(/^\d*[13579]$/.test(element)) {
          odd.push(element);
        }else {
        if (/^[a-zA-Z0-9]+$/.test(element)) {
          alphanumeric.push(element);
        }
      }
    });
 
    return { even, odd, alphanumeric };
  }
 
 
 

 
const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json());

// app.get()
app.post("/bfhl", async function (req, res) {
   try {const data = req.body;
    //"data": [“a”,”1”,”334”,”4”,”R”]
    console.log(typeof data.data)
    // const arr = JSON.parse(data.data);
    const result = processArray(data.data);
   
    console.log('Even:', result.even);
    console.log('Odd:', result.odd);
    console.log('Alphanumeric:', result.alphanumeric);
    res.send({
        is_success: true,
        user_id: "arushi_0001", email : "arushi0284.be21@chitkara.edu.in",
        roll_number:"2110990284",
        odd_numbers: result.odd,
        even_numbers: result.even,
        alphabets: result.alphanumeric
        })}catch(e){
            console.log(e)
            res.send({is_success:false})
        }
})

app.get("/", function (req, res) {
    res.send({ is_success: true })
})

app.listen(3000, function () {
    console.log("running")
})

module.exports = app;

