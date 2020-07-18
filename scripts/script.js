console.log("Editing visitor count");

fetch('https://j3ltixjff4.execute-api.us-east-1.amazonaws.com/test/visitor')
	//.then(response => response.json())
	//.then(data => console.log(data))
	.then(function(response)
	{
		return response.json()
	})
	.then(function(myCounterJson)
	{
		console.log("Visitor Count: " + myCounterJson.visitorCount);
		document.querySelector("#visitor-text").innerHTML = "Total Visitors: " + myCounterJson.visitorCount;
	});