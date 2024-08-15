// Function to create an album object with artist name, album title, and optional number of tracks
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    // Create the album object
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };

    // Add number of tracks if provided
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Create and print three album objects
console.log(make_album('Adele', '25'));
console.log(make_album('alice', 'Folklore'));
console.log(make_album('Ed Sheeran', 'Divide', 12));
