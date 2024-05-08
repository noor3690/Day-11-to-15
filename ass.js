// Ques # 31
var userName = [];
if (userName.length === 0) {
    console.log("We need to find some users!");
}
else {
}
;
// Ques #32
var currentUsers = ["user1", "Admin", "user3"];
var new_users = ["user5", "user6", "admin", "user9"];
new_users.forEach(function (newUser) {
    if (currentUsers.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
// Ques # 33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var suffix = "th";
numbers.forEach(function (number) {
    if (number === 1) {
        console.log("".concat(number, " st"));
    }
    else if (number === 2) {
        console.log("".concat(number, " nd"));
    }
    else if (number === 3) {
        console.log("".concat(number, " rd"));
    }
    else {
        console.log("".concat(number, " ").concat(suffix));
    }
});
