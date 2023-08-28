

document.addEventListener("DOMContentLoaded", function () {
	const searchButton = document.getElementById("searchButton");

	searchButton.addEventListener("click", function () {
		const cityInput = document.getElementById("cityInput").value;
		if (cityInput.trim() !== "") {
			fetchWeatherData(cityInput);
		}
	});
});



function fetchWeatherData(cityInput) {
	

	const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${cityInput}`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '68748e336dmshefa74e149c0b66cp190546jsn938fd5266b8d',
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
		}
	};

	fetch(url, options)
		.then(response => response.json())
		.then(data => {
			
			const locationElement = document.getElementById('location');
			const currentElement = document.getElementById('current');

			locationElement.textContent = `Location: ${data.location.name}, ${data.location.region}, ${data.location.country}`;
			currentElement.textContent = `Temperature: ${data.current.temp_c}°C`;
		})
		.catch(error => {
			console.error("Error fetching weather data:", error);
		});
}