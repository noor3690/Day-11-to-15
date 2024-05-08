// Ques # 37
function shirt(size, message) {
    if (size === void 0) { size = 'medium'; }
    if (message === void 0) { message = 'Life is the another name of suffering'; }
    console.log("Making a ".concat(size, " t-shirt with the message '").concat(message, "' printed on it."));
}
shirt();
shirt('large');
shirt('Small', 'The day is beautiful');
// Ques # 38
function describeCity(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describeCity('Karachi');
describeCity('Lahore');
describeCity('Tokyo', 'Japan');
// Ques # 39
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
var names = city_country('Lahore', 'Pakistan');
console.log(names);
var contryName = city_country('Tokyo', 'Japan');
console.log(contryName);
var contry_Name = city_country('Paris', 'France');
console.log(contry_Name);
