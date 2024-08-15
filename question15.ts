// QUESTION:15
let guest: string[] = ["Ali","anza","hadiqa","golu"];
let cannotAttend1: string = "anza";
console.log(cannotAttend1  +  " can not attend the dinner");

let newGuest1:string ="Hina";
guestArr[guestArr.indexOf(cannotAttend1)]=newGuest1;
console.log(guest);

guestArr.map((items) => (console.log(`Dear,${items} invited to the dinner`)));