//grab google daily search trends
//use that for search

const googleTrends = require("google-trends-api");

const trends = googleTrends
  .dailyTrends({
    geo: "US",
  })
  .then((results) => results)
  .catch((err) => console.log("Oh no there was an error", err));

// googleTrends
//   .interestOverTime({ keyword: "Women's march" })
//   .then(function (results) {
//     console.log("These results are awesome", results);
//   })
//   .catch(function (err) {
//     console.error("Oh no there was an error", err);
//   });

console.log(trends);