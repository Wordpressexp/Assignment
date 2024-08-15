// Function to print each magician's name from an array
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician names
let magicians: string[] = ['David Copperfield', 'alice', 'Dynami'];

// Call the function with the array
show_magicians(magicians);
