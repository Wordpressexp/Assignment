let usernames1: string[] = ['alice', 'bob', 'charlie', 'admin', 'david']; 


 usernames1 = []; 

if(usernames1.length === 0){
  console.log(' Your array in empty we need to find some users!')
}else{
    usernames1.forEach(oneuser => {
        if(oneuser  === 'admin'){
            console.log(`Hello ${oneuser} , would you like to see a status report?`);
    
        }else{
            console.log(`Hello ${oneuser} , thank you for logging in again`)
        }
    
    })
    
        
}
 



    