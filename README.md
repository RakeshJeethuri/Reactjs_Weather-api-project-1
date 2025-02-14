Weather App
![image](https://github.com/user-attachments/assets/4e852210-1ef5-45ff-a88b-b66daf5bbc67)


A simple weather application built using React.js that fetches real-time weather data from the OpenWeatherMap API.

Features

Search for the weather of any city

Displays temperature, humidity, and wind speed

Uses icons to represent weather conditions

Default weather information for London on load

Technologies Used

React.js

OpenWeatherMap API

HTML, CSS

Installation

Clone the repository

npm start

API Key Setup

This application uses OpenWeatherMap API. Replace key in Weather.js with your own API key:

const key = 'YOUR_API_KEY_HERE';

File Structure

weather-app/
│── src/
│   ├── components/
│   │   ├── Weather.js
│   ├── assets/
│   │   ├── search.png
│   │   ├── clear.png
│   │   ├── drizzle.png
│   │   ├── cloud.png
│   │   ├── humidity.png
│   │   ├── rain.png
│   │   ├── snow.png
│   │   ├── wind.png
│   ├── App.js
│   ├── index.js
│── public/
│── package.json
│── README.md

Usage

Enter a city name in the search bar.

Click the search icon to fetch and display the weather data.

Contributing

Feel free to fork this repository and submit pull requests.
