const express = require("express");
var bodyParser = require("body-parser");

const route = require("./routes/route.js");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", route);
// this was HW from yesterday
app.get("/films/:filmId", function (req, res) {
  const films = [
    { id: 1, name: "The Shining" },
    { id: 2, name: "Incendices" },
    { id: 3, name: "Rang De Basanti" },
    { id: 4, name: "Finding Demo" },
  ];
  const value = req.params.filmId;
  const len = films.length;
  //const b=0;
  for (let i = 0; i < len; i++) {
    if (films[i].id == value) {
      res.send(films[i]);
    }
  }
  res.send("The movies does not exist with this = " + value);
});

// Modified above assignment to show use of query params too
app.get("/search", function (req, res) {
	const films = [
	  { id: 1, name: "The Shining" },
	  { id: 2, name: "Incendices" },
	  { id: 3, name: "Rang De Basanti" },
	  { id: 4, name: "Finding Demo" },
	];

	const value = req.query.pqr;
	console.log(req.query.pqr)

	const len = films.length;
	//const b=0;
	for (let i = 0; i < len; i++) {
	  if (films[i].id == value) {
		res.send(films[i]);
	  }
	}
	 res.send(  { msg: "The movies does not exist "  }  );
  });




 // take input in a post request and add it to an array and return the new array
  app.post("/postReq1", function (req, res) {

	let arr= [ "hi", "functionUp", 23, "cool"]

	let input= req.body 

	arr.push(input)

	res.send(  { data: arr  }  );


  });
  

  	// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7] : 4 is missing
  app.get("/sol1", function (req, res) {
	//logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
	let arr= [1,2,3, 5,6,7]

	let total = 0;
	for (var i in arr) {
		total += arr[i]; //total = total + arr[i]
	}

	let lastDigit= arr.pop()
	let consecutiveSum= lastDigit * (lastDigit+1) / 2 
	let missingNumber= consecutiveSum - total

	res.send(  { data: missingNumber  }  );
  });



  









	// -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33, 34, 35, 37, 38]: 36 is missing
  app.get("/sol2", function (req, res) {
	//logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
	let arr= [33, 34, 35,     37, 38]
	let len= arr.length

	let total = 0;
	for (var i in arr) {
		total += arr[i];
	}

	let firstDigit= arr[0]
	let lastDigit= arr.pop()
	let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2 
	let missingNumber= consecutiveSum - total
	
	res.send(  { data: missingNumber  }  );
  });


app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});
