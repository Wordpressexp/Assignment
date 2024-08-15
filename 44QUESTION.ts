// Function to print a summary of a sandwich order
function make_sandwich(...items: string[]): void {
    console.log("Sandwich order summary:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log(""); // Add a blank line for better readability
}

// Call the function with different numbers of arguments
make_sandwich('chicken', 'cheez ', 'mayo');
make_sandwich('bread', 'butter');
make_sandwich('chicken', 'butter', 'mayo', 'egg', 'cheese', 'tomato','bread' , 'butter');
