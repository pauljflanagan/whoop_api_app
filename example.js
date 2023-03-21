// write a code to extract user data using the WHOOP API

// Step 1: Get an access token
// You'll need an access token to query the WHOOP API. 
// Check the WHOOP API documentation on how to do this.

// Step 2: Make a GET request for user data using the WHOOP API. 
// You can customize the data you want by adding query params to the endpoint URL.

const accessToken = 'your_access_token';
const endpointUrl = 'https://api-7.whoop.com/users/PaulFlanagan@protonmail.com/data';

// Replace {userID} with the ID of the user whose data you want to retrieve.

const queryParams = {
  start: '2021-01-01',
  end: '2021-01-07',
  dataType: 'strain',
  format: 'json'
};

const url = new URL(endpointUrl);
Object.keys(queryParams).forEach(key => url.searchParams.append(key, queryParams[key]));

const options = {
  headers: {
    'Authorization': `Bearer ${accessToken}`
  }
};

fetch(url, options)
  .then(response => response.json())
  .then(data => {
    // Step 3: Handle the user data in your application
    // Here you can do whatever you want with the data you've retrieved.
  })
  .catch(error => {
  // Step 4: Handle any errors
  console.error('Error fetching data:', error);
});