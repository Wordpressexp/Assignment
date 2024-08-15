let current_users: string[] = ['alice', 'bob', 'charlie', 'david', 'emma']; // List of current usernames
let new_users: string[] = ['John', 'bob', 'Sarah', 'ALICE', 'Michael']; // List of new usernames

new_users.forEach(new_user_name => {

    let ourCondition= (current_users.some (current_one_user => current_one_user.toLowerCase()  ===  new_user_name))
    if(ourCondition){
    console.log(`Sorry ${new_user_name} is already taken!`)
   }else{
    console.log(`This username ${new_user_name} is available`)
   }
})

