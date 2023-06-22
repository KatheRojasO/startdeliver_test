const axios = require('axios');

/* Mock API endpoints. "api1Url" and "api2Url" variables store
the URLs for API 1 and API 2 respectively */
const api1Url = 'https://api1.example.com';
const api2Url = 'https://api2.example.com';

/*API keys. api1Key and api2Key variables store the API keys for 
API 1 and API 2 respectively.*/

const api1Key = 'example-api-key-1';
const api2Key = 'example-api-key-2';

/* Fetch customers from API 1. This function fetches customers from API 1
 using an HTTP GET request. It includes the API key in the request headers for authorization.*/
 
async function fetchCustomersFromApi1() {
  try {
    const response = await axios.get(api1Url, {
      headers: { "Content-type": "application/json", Authorization: api1Key} // Set API key in Authorization header
    });
    return response.data; // Return the fetched customer data
  } catch (error) {
    console.error('Error fetching customers from API 1:', error);
    throw error;
  }
}

/*  Save customers to API 2. This function saves customers to API 2
 using an HTTP POST request. It also includes the API key in the request headers for authorization.*/

async function saveCustomersToApi2(customers) {
  try {
    const response = await axios.post(api2Url, customers, {
      headers: { "Content-type": "application/json", Authorization: api2Key} // Set API key in Authorization header
    });
    return response.data; // Return the saved customer data
  } catch (error) {
    console.error('Error saving customers to API 2:', error);
    throw error;
  }
}

/* Sync customers between APIs. This calls the fetchCustomersFromApi1 function 
to fetch customers from API 1, and then calls the saveCustomersToApi2 function to 
save them to API 2.*/

async function syncCustomers() {
  try {
    const customers = await fetchCustomersFromApi1(); // Fetch customers from API 1
    const savedCustomers = await saveCustomersToApi2(customers); // Save customers to API 2
    console.log('Customers synced successfully:', savedCustomers);
  } catch (error) {
    console.error('Error syncing customers:', error);
  }
}

// Start the customer sync
syncCustomers();
