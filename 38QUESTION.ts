// Function to describe a city and its country
function describe_city(city: string, country: string = 'Pakistan'): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city('karachi'); // Default country is USA
describe_city('lahore'); // Specific country
describe_city('berlin', 'Gemany'); // Specific country
