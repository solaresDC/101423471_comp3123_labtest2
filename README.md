## OpenWeather password: Weather1

## Documentation

Im doing the retrive of infromation inside the useEffect, therefeore evry time the city changes, inside the parameters it will trigger a call on the API call `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}` using axios by giving the city and my appid

Im changing the state/value of the city using a function that takes the new value and later on calls thr usestate function to properly change the value of city

Then Im returning style elements with the fetched information

In the JSX I have a form that checks the input when we are typing and rerendering but most importantly without ever refreshing the page to not lose our state , Im also returning a div that contains all the individual info im displaying as text in addition to the image of how the weather looks like. Also a display any errors as a paragraph if I have any.

And for styling I decieded to use two different styles for to different divs, of course nested divs, one div to style the entire page and the nested div to separate the form and showed data
