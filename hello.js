
let apiKey = "1e3e8f230b6064d27976e41163a82b77";
async function fetchapi(city) {
	url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`


	try {
		 response = await fetch(url);
		 result = await response.json();
		console.log(result);
		return result.main.temp;
	} catch (error) {
		alert("invalid city name")

	}
}

change = 0;
change2 = 0;

document.querySelector('.city').addEventListener('click', async (event) => {
	// Check if the clicked element is a list item

	if (event.target.tagName === 'LI') {
		// try {
		if (change == 0) {
			document.body.style.backgroundImage = "url('/images/cloudyy.jpg')";
			document.body.style.backgroundRepeat = "no-repeat";
			// background-size: cover;
			document.body.style.backgroundSize = "cover";
			change = 1;
		}	

		else if (change == 1) {
			document.body.style.backgroundImage = "url('/images/redcloud.jpg')";
			document.body.style.backgroundRepeat = "no-repeat";
			// background-size: cover;
			document.body.style.backgroundSize = "cover";
			change = 2;

		}
		else if (change == 2) {
			document.body.style.backgroundImage = "url('/images/yellow.jpg')";
			document.body.style.backgroundRepeat = "no-repeat";
			// background-size: cover;
			document.body.style.backgroundSize = "cover";
			change = 0;
		}





		city = event.target.innerHTML;	


		temperature = await fetchapi(city); // Fetch weather data
		h1 = document.querySelector('h1');
		temperature = Math.round(temperature * 10) / 10;
		h1.innerHTML = temperature + " deg";
		cityname = document.querySelector('h3');
		cityname.innerHTML = city;
		description = document.querySelector(".description");
		response1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`);
		data1 = await response1.json();
		description.innerHTML = data1.weather[0].description;
		pressure = document.querySelector(".pressure");
		pressure.innerHTML = "Pressure" + ":" + '&nbsp;'.repeat(60) + data1.main.pressure + 'mbar';
		// pressure.innerHTML="Pressure";
		longitude = document.querySelector(".longitude");
		lon = data1.coord.lon;
		lat = data1.coord.lat;
		lon = Math.round(lon * 10) / 10;
		lat = Math.round(lat * 10) / 10;

		longitude.innerHTML = "lon: " + " lat: " + '&nbsp;'.repeat(73) + lon + '&nbsp;'.repeat(5) + lat;
		wind = document.querySelector(".wind");
		wind.innerHTML = `Wind Speed:${'&nbsp;'.repeat(50)}${data1.wind.speed} miles/hr`



	}

})


document.getElementById("search").addEventListener("keydown", async (event) => {
	if (event.key == 'Enter') {
		city = document.getElementById("search").value;


		if (city === "") {
			alert("please enter city name");
			return;
		}
		

		try {
			url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`



			 response = await fetch(url);
			 if (!response.ok){
				throw new Error("error");
			 }
			 result = await response.json();
			
			
			temperature= result.main.temp;
		  



			h1 = document.querySelector('h1');
			temperature = Math.round(temperature * 10) / 10;
			h1.innerHTML = temperature + " deg";
			cityname = document.querySelector('h3');
			cityname.innerHTML = city;
			description = document.querySelector(".description");
			response2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`)
			if (!response2.ok){
				throw new Error("error");
			}
			data2 = await response2.json();
			
			description.innerHTML = data2.weather[0].description;
			pressure = document.querySelector(".pressure");
			pressure.innerHTML = "Pressure" + ":" + '&nbsp;'.repeat(60) + data2.main.pressure + 'mbar';
			// pressure.innerHTML="Pressure";
			longitude = document.querySelector(".longitude");
			lon = data2.coord.lon;
			lat = data2.coord.lat;
			lon = Math.round(lon * 10) / 10;
			lat = Math.round(lat * 10) / 10;

			longitude.innerHTML = "lon: " + " lat: " + '&nbsp;'.repeat(73) + lon + '&nbsp;'.repeat(5) + lat;
			wind = document.querySelector(".wind");
			wind.innerHTML = `Wind Speed:${'&nbsp;'.repeat(50)}${data2.wind.speed} miles/hr`


		}
		catch (error) {

            alert("invalid city name");
		     return;
			

		}
		if (change2 == 0) {
			document.body.style.backgroundImage = "url('cloudyy.jpg')";
			document.body.style.backgroundRepeat = "no-repeat";
			// background-size: cover;
			document.body.style.backgroundSize = "cover";
			change2 = 1;
		}

		else if (change2 == 1) {
			document.body.style.background = "url('redcloud.jpg')";
			document.body.style.backgroundRepeat = "no-repeat";
			// background-size: cover;
			document.body.style.backgroundSize = "cover";
			change2 = 2;

		}
		else if (change2 == 2) {
			document.body.style.background = "url('yellow.jpg')";
			document.body.style.backgroundRepeat = "no-repeat";
			// background-size: cover;
			document.body.style.backgroundSize = "cover";
			change2 = 0;
		}




	}

})








