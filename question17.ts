// Question 17

let guests : string [] = ["Ali" , "Hina" , "Hamza" ,"bilal"];

console.log("Due to limited space , only two people  can be invited for dinner.");

while (guests.length > 2)  {
   const removeGuest = guests.pop ();
   console.log(`Sorry , ${removeGuest} , you're no longer invited to dinner.`);

}
guests.forEach((guests)=> {
    console.log(`Dear ${guests} your still invited to dinner`);

});
guests.pop();
guests.pop();


console.log("final guest list" , guests);