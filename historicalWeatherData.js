//To get access to historical weather data for the 5 previous days use lattitude longitude date
var unirest = require("unirest");
var req = unirest("GET", "https://community-open-weather-map.p.rapidapi.com/onecall/timemachine");
const args = process.argv.slice(2);
req.query({
	"lat": args[0],
	"lon": args[1],
	"dt": Math.round(new Date(args[2]).getTime()/1000)
});

req.headers({
	"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
	"x-rapidapi-key": "6b65ce9fe8msh121b36d34bdd5efp1ceb7bjsn37c8d7306a5f",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
