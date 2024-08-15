// Function to print each magician's name from an array
function show_magicians3(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Function to add "the Great" to each magician's name
function make_great(magicians: string[]): string[] {
    // Create a newarray to avoid modifying the original one
    let great_magicians2: string[] = [];
    for (let magician of magicians) {
        great_magicians2.push(`${magician} the Great`);
    }
    return great_magicians2;
}

// Array of magician names
let magicians2: string[] = ['Hary potter', 'alice', 'Dynamo','john'];

// Make a copy of the original array and modify the copy
let great_magicians2: string[] = make_great(magicians2);

// Display the original list of magicians
console.log("Original Magicians:");
show_magicians3(magicians2);

// Display the modified list of magicians with "the Great"
console.log("\nGreat Magicians:");
show_magicians3(great_magicians2);




