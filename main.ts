// Ques # 40
function myAlbum (artistName : string, albumTitle : string) {
     return {artistName , albumTitle}
    

}
let album1 = myAlbum('Furqan', 'Days Together');
let album2 = myAlbum('Ali', 'Over The Years');
let album3 = myAlbum('Ayaz', 'Mausame-e-Dil');

console.log(album1);
console.log(album2);
console.log(album3);

// // Number of tracks
function myAlbum2 (artistName : string, albumTitle : string, numberOfTracks? : number) {
     return {artistName , albumTitle, numberOfTracks }
    
}
let album4 = myAlbum2('Furqan', 'Days Together', 30);
let album5 = myAlbum2('Ali', 'Over The Years', 45);
let album6 = myAlbum2('Ayaz', 'Mausame-e-Dil');

console.log(album4);
console.log(album5);
console.log(album6);

//  Ques # 41
let magicians : string[] = ['Rubab', 'Iqra', 'Fareeha Api'];
function showMagicians( magicians : string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
showMagicians(magicians);

// Ques 42
function make_great(magicians : string[]) {
    for (let i=0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' THE GREAT';
    } 
}

   
make_great(magicians);
showMagicians(magicians);