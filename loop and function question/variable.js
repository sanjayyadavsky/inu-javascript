// 1. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type.


// var x = "sanjay " ;
// console.log(typeof x)

// var x = true 
// console.log(typeof x)

// var x 
// console.log(typeof x)

// var x = 
// console.log(typeof x);


// 2. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.

// let first_Name = "sanjay";
// let las_tNamae = "Yadav";
// let marital_mtatus = "Married";
// let country = "Nepal";
// let age = "23";

// console.log(`hay my name is ${first_Name} ${las_tNamae} and i am ${age} years old and from ${country}, and i am ${marital_mtatus} too`);

// 3. Decalre a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method.

// let Name = "Sanjay Yadav"
// console.log(Name.toLocaleUpperCase());

// 4. Check if the string contains a word Script using includes() method.
// let Typeof = "Script, Boolen";
// console.log(Typeof.includes("Script")); (method;- arry.method i.e inscludes())

// 5. Split the string into an array using split() method
// let x  = "the quick brown fox jump over the lazy dog"
// console.log(x.split( " "))

// 6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
// let x = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// let newarr = x.split( ", " )
// let Arry = [];
// Arry.push(x)
//  console.log(typeof Arry)
// console.log(Arry);

// var companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// var companyArray = companies.split(', ');
// console.log(companyArray);

// 7. Use lastIndexOf to determine the position of the last occurrence of a script.
// var companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// console.log(companies.lastIndexOf("Apple"))
// console.log(companies.indexOf("Apple"))


// 8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.
// var x = "You cannot end a sentence with because because because is a conjunction";
// console.log(x.search("because"))

// 9. Use trim() to remove any trailing whitespace at the beginning and the end of a string.
// var companies = '       Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon  ';
// var newArr = [];
// newArr.push(companies.trim());
// console.log(newArr);


// 10. Boolean value is either true or false.
//     - Write three JavaScript statement which provide truthy value.
//     - Write three JavaScript statement which provide falsy value.



// 11. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

let a = 4;
let b = 3;

//- 4 > 3 

// console.log(a>3); //this is true because the value 4 is grater than 3

//4 >= 3
// console.log(a >= b) //this statment is true because the 4 is grater than 3 but not equal to but one condition is true

//     - 4 < 3
//  console.log(a<b)

 //     - 4 == 4
//  console.log(a == a) //this statment is true bcz the  value is equal

 // 4 <= 3
// console.log( a <= b); //thsi statment is false bcz nither of condition is true

//     - 4 === 4

// console.log( a === a) //this statment is true bcz the both data type and value both are equal 

//4 != 4 
// console.log(a != a) // this statment is false bcz the 4 is equal to 4 

// - 4 !== 4
// console.log( a !== a) //this statment is false bcz the 4 is equal to 4 and the data type is also equal

//     - 4 != '4'
// console.log( a != "4") //this statment is false bcz the the value is equal 

// // 4 == '4'
// console.log(a == a) //this statment is true 

// //     - 4 === '4'

// console.log(a === '4') //the statment is fale bcz there data type is differnt 


//     - Find the length of python and jargon and make a falsy comparison statement.

// let python = "python ";
// let jargon = "jargon"; 
// console.log(jargon.length > python.length)


// 12. Use the Date object to do the following activities


// let Today = new Date()
//    console.log(Today)
//     - What is the year today?
//  console.log(Today.getFullYear())

//     - What is the month today as a number?
// console.log(Today.getMonth()+1) //i have added 1 bcz the it start with index


//     - What is the date today?
// console.log(Today.getDate())


//     - What is the day today as a number?
// console.log(Today.getWeek())

//     - What is the hours now?
// console.log(Today.getHours())

//     - What is the minutes now?
// console.log(Today.getMinutes())



//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

// let newToday = new Date(1970, 1, 0);
// let pastyear = newToday.getFullYear();
// let currentyear = Today.getFullYear();
 
// function totalsec(){
//     let subyear = currentyear - pastyear;
//    return subyear*12*7*24*60*60
// }
// console.log(totalsec())


// 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// let H = prompt("Enter the height of triangle");
// let B = prompt("enter the base");
// let  area = 0.5*B*H
// console.log(area);


// 14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// const x1 = 2;
// const y1 = 2;
// const x2 = 6;
// const y2 = 10;

// const slope = (y2 - y1) / (x2 - x1);

// console.log(`The slope between (${x1},${y1}) and (${x2},${y2}) is ${slope}.`);


// 15. Calculate the slope, x-intercept and y-intercept of y = 2x -2
// const equation = 'y = 2x-2';
// const sloop = 2;
// const yIntercept = 2;
// const xIntercept = 1;
// console.log(sloop)
// console.log(yIntercept)
// console.log(xIntercept)


// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

// const r = prompt(' Enter the radiour of the given circle');
// pi = 3.14;
// circle = pi*r*2
// console.log(circle)

// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

// let time = new Date()
 
// let year = time.getFullYear();
// let month = time.getMonth();
// let day = time.getDay();
// let hours = time.getHours();
// let minutes = time.getMinutes();


// let date = time.toLocaleDateString();
// let timeR = time.toLocaleTimeString();
// let deuration = time.
//     - YYYY-MM-DD HH:mm
// console.log(`${year}/${month}/${day} ${hours}:${minutes}`);
// - DD-MM-YYYY HH:mm
// console.log(`${day}-${month}-${year} ${hours}:${minutes}`)
// - DD/MM/YYYY HH:mm
// console.log(`${day}/${month}/${year} ${hours}:${minutes}`)

// 18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn.

// let age = prompt("Enter your age:");

// if (age >= 18) {
//   console.log("You are old enough to drive");
// } else if (age < 18) {
//   function waitAge() {
//     let remainingAge = 18 - age;
//     return remainingAge;
//   }
//   console.log("You are not old enough to drive. Please wait " + waitAge() + " years.");
// } else {
//   console.log("Wrong value given");
// }


// let YourAge = prompt("Hay please enter your age");
// if(YourAge >= 18){
//     console.log('Your age is ' + YourAge + ' So, you can drive')
// } else if (YourAge < 18) {
//     function wait(){
//         let remaining_Age = 18-YourAge;
//         return remaining_Age;
//     }
//     console.log("No you can't drive as your age is " + wait())
// }else{
//     console.log('Invalid age ')
// }


// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// let num = 4;
// if (num % 2 === 0) {
//   console.log(num + " is even");
// } else {
//   console.log(num + " is odd");
// }

// 20. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F


// let grade = prompt('Enter your grade')
// if (grade >= 80 && grade <= 100 ){
//     console.log("your grade is 'A'  as you have score" + " " + grade )
// } else if (grade >= 70 && grade <= 89){
//     console.log("your grade is 'B'  as you have score" + " " + grade )
// } else if (grade >= 60 && grade <= 69){
//     console.log("your grade is 'C'  as you have score" + " " + grade )
// }else if (grade >= 50 && grade <= 59){
//     console.log("your grade is 'D'  as you have score" + " " + grade )
// }else if (grade >= 0 && grade <= 49){
//     console.log("your grade is 'F'  as you have score" + " " + grade )
// } else{
//     console.log(" Invalid Score" )
// };


// 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer
// let month = "July";
// let season;
// if (month === "December" || month === "January" || month === "February") {
//   season = "Winter";
// } else if (month === "March" || month === "April" || month === "May") {
//   season = "Spring";
// } else if (month === "June" || month === "July" || month === "August") {
//   season = "Summer";
// } else if (month === "September" || month === "October" || month === "November") {
//   season = "Autumn";
// } else {
//   season = "Invalid input";
// }
// console.log("The season for " + month + " is " + season);


// 22. Write a program which tells the number of days in a month.
// function daysInMonth(month, year) {
//   if (month < 1 || month > 12) {
//     return -1; // Invalid month
//   }
//   if (year < 1) {
//     return -1; // Invalid year
//   }

//   var days = -1;
//   var daysPerMonth = [
//     -1, // placeholder value for index 0 (no month has 0 days)
//     31, // January
//     28, // February
//     31, // March
//     30, // April
//     31, // May
//     30, // June
//     31, // July
//     31, // August
//     30, // September
//     31, // October
//     30, // November
//     31  // December
//   ];

//   if (month === 2) {
//     if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//       days = 29;
//     }
//   } else {
//     days = daysPerMonth[month];
//   }

//   return days;
// }

// console.log(daysInMonth(8 , 2023 ))

// 22. Write a program which tells the number of days in a month.
// let year = parseInt(prompt("Enter year"))
// let month =parseInt(prompt("Enter month number")) //here i have converted the value into number bcz the prompt tkes the value in string and here we need number value

// console.log(NumberOfMonth(year, month));

// function NumberOfMonth(year, month){
//   switch(month){
//   case 1: // January
//   case 3: // March
//   case 5: // May
//   case 7: // July
//   case 8: // August
//   case 10: // October
//   case 12: // December
//   return 31;
//   case 4: // April
//   case 6: // June
//   case 9: // September
//   case 11: // November
//     return 30;
//     case 2: // February
//     if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//       return 29;
//     } else {
//       return 28;
//     }
//     default:
//     return -1;
//   }
// }


  // The bewlo program will test if the given year is leapYear year or not

// let year = parseInt(prompt("Enter Year"));
// console.log(leapYear())
// function leapYear(year){
//     if((year % 4 == 0 && year % 100 !=0) || year % 400 == 0){
//       return "this is leep Year"
//     } else{
//       return "This is not a leep Year"
//     }
   
// }


// 23. Write a program which tells the number of days in a month, now consider leap year.
 

// let year = parseInt(prompt("Enter year"))
// let month =parseInt(prompt("Enter month number")) //here i have converted the value into number bcz the prompt tkes the value in string and here we need number value

// console.log(NumberOfMonth(year, month));
//   function NumberOfMonth(year, month){
//   switch(month){
//     case 1: // January
//     case 3: // March
//     case 5: // May
//     case 7: // July
//     case 8: // August
//     case 10: // October
//     case 12: // December
//     return 31;
    
//     case 4: // April
//     case 6: // June
//     case 9: // September
//     case 11: // November
//       return 30;
//     case 2 :
//       if((year % 4 ==0 && year % 100 != 0)||  year % 4 == 0){
//         return 29;
//       }else{
//         return 28;
//       }
//       default :
//       return "INVALID DATE"
// }
// }

// 24. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
// import countries from ' . /countries ';
// import web_techs from ' . /web_techs ';
// let countries = require('./countries');
// let web_techs = require('./web_techs');

// import countries from "./countries";
// import web_techs from "./web_techs";

// console.log(countries)
// console.log(web_techs)



// 25. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//     - remove 'Honey' if you are allergic to honey
//     - modify Tea to 'Green Tea'
// var shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey', 'sanjay'];
// shoppingCart.splice()
// shoppingCart.push( 'suger')
// shoppingCart.unshift('Meat')
// shoppingCart.splice(4,2); 
// shoppingCart[3]= "Green Tea"
// console.log(shoppingCart)

//26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

// let countries = ['USA', 'Canada', 'Mexico', 'Brazil', 'Argentina']

// if(countries.indexOf('Ethiopia')){
//   console.log('ETHIOPIA')
// }else{
//   countries.push('Ethiopia'); // If it doesn't exist, add it to the array
//   console.log(countries);
// }


// if(countries.includes('Ethiopia') !== -1){
//   console.log('ETHIOPIA')
// }else{
//   countries.push('Ethiopia')
//   console.log(countries);
// }


// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// let NewArray = ages.sort(); // this property is used to sort the arry and arrange the array in aseccding 
// console.log(NewArray)
// let min = NewArray[NewArray.length -1]
// console.log(min)
// console.log((NewArray[0])+ " this minimum value")

// let midValue = (NewArray.length / 2)
// let median = NewArray[midValue]
// console.log(median)

// Find the average age(all items divided by number of items)

// const sum = ages.reduce((total, age) => total + age); n
// const count = ages.lenght ;
// const average = sum/count
// console.log(average)

// 28. Use for loop to iterate from 0 to 100 and print only prime numbers.
  // for ( let i = 0; i <= 100; i++){
  //   if (i % 2 == 0){
  //    console.log(i);
  //   }
  // }


// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let evenSum = 0;
// let oddSum = 0;
// for(let i =0; i<1000; i++){
//   if(i%2 === 0){
//     evenSum += i;
//   }else{
//     oddSum += i;
//   }
// }
// console.log(evenSum);
// console.log(oddSum);

// 30. Write a script which generates a random hexadecimal number.
// const randomNumber = (Math.random()*11);
// const roundoff = Math.floor(randomNumber);
// console.log(roundoff)

// 32. Array Questions
    // - Extract all the countries contain the word 'land' from the countries array and print it as array
    // - Find the country containing the hightest number of characters in the countries array
    // - Extract all the countries contain the word 'land' from the countries array and print it as array
    // - Extract all the countries containing only four characters from the countries array and print it as array
    // - Extract all the countries containing two or more words from the countries array and print it as array
    // - Reverse the countries array and capitalize each country and stored it as an array

    const countryList = [
      "Afghanistan",
      "Albania",
      "Algeria",
      "American Samoa",
      "Andorra",
      "Angola",
      "Anguilla",
      "Antarctica",
      "Antigua and Barbuda",
      "Argentina",
      "Armenia",
      "Aruba",
      "Australia",
      "Austria",
      "Azerbaijan",
      "Bahamas (the)",
      "Bahrain",
      "Bangladesh",
      "Barbados",
      "Belarus",
      "Belgium",
      "Belize",
      "Benin",
      "Bermuda",
      "Bhutan",
      "Bolivia (Plurinational State of)",
      "Bonaire, Sint Eustatius and Saba",
      "Bosnia and Herzegovina",
      "Botswana",
      "Bouvet Island",
      "Brazil",
      "British Indian Ocean Territory (the)",
      "Brunei Darussalam",
      "Bulgaria",
      "Burkina Faso",
      "Burundi",
      "Cabo Verde",
      "Cambodia",
      "Cameroon",
      "Canada",
      "Cayman Islands (the)",
      "Central African Republic (the)",
      "Chad",
      "Chile",
      "China",
      "Christmas Island",
      "Cocos (Keeling) Islands (the)",
      "Colombia",
      "Comoros (the)",
      "Congo (the Democratic Republic of the)",
      "Congo (the)",
      "Cook Islands (the)",
      "Costa Rica",
      "Croatia",
      "Cuba",
      "Curaçao",
      "Cyprus",
      "Czechia",
      "Côte d'Ivoire",
      "Denmark",
      "Djibouti",
      "Dominica",
      "Dominican Republic (the)",
      "Ecuador",
      "Egypt",
      "El Salvador",
      "Equatorial Guinea",
      "Eritrea",
      "Estonia",
      "Eswatini",
      "Ethiopia",
      "Falkland Islands (the) [Malvinas]",
      "Faroe Islands (the)",
      "Fiji",
      "Finland",
      "France",
      "French Guiana",
      "French Polynesia",
      "French Southern Territories (the)",
      "Gabon",
      "Gambia (the)",
      "Georgia",
      "Germany",
      "Ghana",
      "Gibraltar",
      "Greece",
      "Greenland",
      "Grenada",
      "Guadeloupe",
      "Guam",
      "Guatemala",
      "Guernsey",
      "Guinea",
      "Guinea-Bissau",
      "Guyana",
      "Haiti",
      "Heard Island and McDonald Islands",
      "Holy See (the)",
      "Honduras",
      "Hong Kong",
      "Hungary",
      "Iceland",
      "India",
      "Indonesia",
      "Iran (Islamic Republic of)",
      "Iraq",
      "Ireland",
      "Isle of Man",
      "Israel",
      "Italy",
      "Jamaica",
      "Japan",
      "Jersey",
      "Jordan",
      "Kazakhstan",
      "Kenya",
      "Kiribati",
      "Korea (the Democratic People's Republic of)",
      "Korea (the Republic of)",
      "Kuwait",
      "Kyrgyzstan",
      "Lao People's Democratic Republic (the)",
      "Latvia",
      "Lebanon",
      "Lesotho",
      "Liberia",
      "Libya",
      "Liechtenstein",
      "Lithuania",
      "Luxembourg",
      "Macao",
      "Madagascar",
      "Malawi",
      "Malaysia",
      "Maldives",
      "Mali",
      "Malta",
      "Marshall Islands (the)",
      "Martinique",
      "Mauritania",
      "Mauritius",
      "Mayotte",
      "Mexico",
      "Micronesia (Federated States of)",
      "Moldova (the Republic of)",
      "Monaco",
      "Mongolia",
      "Montenegro",
      "Montserrat",
      "Morocco",
      "Mozambique",
      "Myanmar",
      "Namibia",
      "Nauru",
      "Nepal",
      "Netherlands (the)",
      "New Caledonia",
      "New Zealand",
      "Nicaragua",
      "Niger (the)",
      "Nigeria",
      "Niue",
      "Norfolk Island",
      "Northern Mariana Islands (the)",
      "Norway",
      "Oman",
      "Pakistan",
      "Palau",
      "Palestine, State of",
      "Panama",
      "Papua New Guinea",
      "Paraguay",
      "Peru",
      "Philippines (the)",
      "Pitcairn",
      "Poland",
      "Portugal",
      "Puerto Rico",
      "Qatar",
      "Republic of North Macedonia",
      "Romania",
      "Russian Federation (the)",
      "Rwanda",
      "Réunion",
      "Saint Barthélemy",
      "Saint Helena, Ascension and Tristan da Cunha",
      "Saint Kitts and Nevis",
      "Saint Lucia",
      "Saint Martin (French part)",
      "Saint Pierre and Miquelon",
      "Saint Vincent and the Grenadines",
      "Samoa",
      "San Marino",
      "Sao Tome and Principe",
      "Saudi Arabia",
      "Senegal",
      "Serbia",
      "Seychelles",
      "Sierra Leone",
      "Singapore",
      "Sint Maarten (Dutch part)",
      "Slovakia",
      "Slovenia",
      "Solomon Islands",
      "Somalia",
      "South Africa",
      "South Georgia and the South Sandwich Islands",
      "South Sudan",
      "Spain",
      "Sri Lanka",
      "Sudan (the)",
      "Suriname",
      "Svalbard and Jan Mayen",
      "Sweden",
      "Switzerland",
      "Syrian Arab Republic",
      "Taiwan",
      "Tajikistan",
      "Tanzania, United Republic of",
      "Thailand",
      "Timor-Leste",
      "Togo",
      "Tokelau",
      "Tonga",
      "Trinidad and Tobago",
      "Tunisia",
      "Turkey",
      "Turkmenistan",
      "Turks and Caicos Islands (the)",
      "Tuvalu",
      "Uganda",
      "Ukraine",
      "United Arab Emirates (the)",
      "United Kingdom of Great Britain and Northern Ireland (the)",
      "United States Minor Outlying Islands (the)",
      "United States of America (the)",
      "Uruguay",
      "Uzbekistan",
      "Vanuatu",
      "Venezuela (Bolivarian Republic of)",
      "Viet Nam",
      "Virgin Islands (British)",
      "Virgin Islands (U.S.)",
      "Wallis and Futuna",
      "Western Sahara",
      "Yemen",
      "Zambia",
      "Zimbabwe",
      "Åland Islands"
    ];
const land_countries = countryList.filter(country => country.toLocaleLowerCase().includes('land') )
console.log(land_countries)

