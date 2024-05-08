// Ques # 31
let userName : string[] = [];
if (userName.length === 0){
    console.log("We need to find some users!");
}
else {

};
// Ques #32
let currentUsers : string [] =["user1" , "Admin" , "user3"];
let new_users : string[] = ["user5", "user6","admin", "user9"];
new_users.forEach (newUser => {
    if (currentUsers.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase() )){
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.` );
    }
    
});
// Ques # 33
let numbers : number[] = [1,2,3,4,5,6,7,8,9];
let suffix = "th"
numbers.forEach(number => {

    if (number === 1){
        console.log(`${number} st`);
    } else if (number === 2 ){
        console.log(`${number} nd`);
    } else if (number === 3){
        console.log(`${number} rd`);
    } else {
        console.log(`${number} ${suffix}`);
    }
});