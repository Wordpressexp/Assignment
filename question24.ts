// Question 24
let names_1 : string = "Anza"
let names_2 : string = "Anza sarwar"
let names_3 : string = "anza"
if (names_1 == names_3){
 console.log("names are equal")
}
else {
 console.log("names are not equal")
};
if (names_1 !=names_2 ){
console.log("names are equal")
} else{
console.log("names are not equal")
} ; 


let age_1 : number = 17;
let age_2 : number = 22
if(age_1 == 17) {
  console.log("eligible for vote ")
}

if (age_1 !== 22){
 console.log("eligible for vote in older catogory")
};
if (age_1 <= age_2){ //less
  console.log("younger")
}
if (age_2 >= age_1){ //greater
console.log("older")



}
if (age_1 == 17 && age_2 == 22){
  console.log("person is elogible for vote")
}
if (age_2 != 17 || age_1 != 22){
  console.log("person is elogible  not for vote")
}

let country: string[] =  ["Pakistan" , "india" , "Brazil" , "china"];
if(country.includes("Pakistan")){
console.log("pakistan  is in country  list")
};
if (!country.includes ("china")){
 console.log("america is not includes in an array ")
};