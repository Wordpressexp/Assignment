// Function to print each magician's name from an array
function show_magicians2(magicians: string[]): void {
    magicians.forEach(name => console.log(name))
}

function make_great1(magicians1 :string []){
  return magicians1.map(name => `The great ${name}`)
}

// // Array of magician names
 let magicians1: string[] = ['Hary potter', 'alice', 'Dynamo','john'];

// // Modify the list by adding "the Great" to each magician's name
 let great_magicians = make_great1(magicians1);

// // Display the modified list
show_magicians2(great_magicians);
