// QUESTION16
let guestArr: string[] = ["Ali" , "Hadiqa" ,"golu" , "Hina" ];
let cannotAttend:string= "Hadiqa";

let newGuest: string="umaima";
guestArr[guestArr.indexOf(cannotAttend)]=newGuest;
console.log(guestArr);

guestArr.map((items) =>(console.log(`Dear ${items}, I found a big dinner table so i have invited more people`)));

// QUES16 (part2)
let guestbeg:string="hamza";
guestArr.unshift(guestbeg);
console.log(guestArr);

// QUES16 (part3)middle
let middle : string="Fatima";
let middleIndex= guestArr.length/3
guestArr.splice(middleIndex,0,middle)
console.log(guestArr);



// QEUS16(part4) append

guestArr.push("anza")
console.log(guestArr);


// QUES16 (part5)
guestArr.map((items)=>(console.log(`DEAR ${items},your invited in the more people list on dinner`)));