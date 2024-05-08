// Ques # 37
function shirt(size: string = 'medium', message : string = 'Life is the another name of suffering'){
    console.log(`Making a ${size} t-shirt with the message '${message}' printed on it.`);
}
shirt();
shirt('large');
shirt('Small' , 'The day is beautiful');    
// Ques # 38
function describeCity(city : string, country: string = 'Pakistan'){
    console.log(`${city} is in ${country}.`)
}
describeCity('Karachi');
describeCity('Lahore');
describeCity('Tokyo' , 'Japan');

// Ques # 39
function city_country(city : string, country: string){
    return `${city}, ${country}`
}/
let names = city_country('Lahore', 'Pakistan');
console.log(names);
let contryName = city_country('Tokyo', 'Japan');
console.log(contryName);
let contry_Name = city_country('Paris', 'France');
console.log(contry_Name);
