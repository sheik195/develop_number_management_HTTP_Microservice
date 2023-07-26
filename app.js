const express = require('express')
const app = express()

app.use(express.json());

app.get("/", async (req, res) => {
  
  const url = req.query.url;
  let values = url.map((val) => {
    return val.split('/').pop();
  });
  let result = [];

  for (let i = 0; i < values.length; i++) {
    if (values[i]==="prime") { 
      for (let j = 1; j <= 25; j++) { 
        let count = 0;
        for (let m = 2; m < j; m++) {
          if (j % m == 0) {
            count++;
          }
        }
        if (count == 0) {
          result.push(j);
        }
      }
    } else if (values[i] === "odd") {
      for (let j = 1; j <= 25; j++) {
        if (j % 2 == 1) {
          result.push(j);
        }
      }
    } else if (values[i] === "even") {
      for (let j = 1; j <= 25; j++) {
        if (j % 2 == 0) {
          result.push(j);
        }
      }
    }
    else if(values[i]==="rand")
    {
        let rand= Math.floor(Math.random() * (100 - 1)) + 1;
        result.push(rand);
    }
    else if(values[i]==="fibo")
    {
        let a=0;
        let b=1;
        while(1)
        {
            let c=a+b;
            if(c>25)
            {
                break;
            }
            else
            {
                result.push(c);
            }
            a=b;
            b=c;
        }
    }
  }
  const set = new Set(result);
  const arr = Array.from(set);
  const results = arr.sort((a, b) => a - b); 
  console.log(results);
  res.json({
    numbers: results
  });
})

app.listen(3000, () => {
  console.log("server running at 3000");
});
