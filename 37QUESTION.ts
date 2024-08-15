// Function to create a shirt with a specified size and message, defaulting to large and "I love TypeScript"
function T_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`The shirt size is ${size} and it has the message: "${message}".`);
}

// Call the function with default size and message
T_shirt(); // Large shirt with default message

// Call the function with a specific size and the default message
T_shirt('Medium'); // Medium shirt with default message

// Call the function with a specific size and a different message
T_shirt('Small', 'Learning TypeScript is fun!'); // Small shirt with a different message
