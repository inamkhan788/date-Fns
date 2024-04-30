//************First Mini Assigment*********** */
let date1 = dateFns.format(new Date (2024,3,20,13,45,30) ,"MM/dd/yyyy HH:mm:ss");
let date2 = dateFns.format(new Date (2024,3,20,13,45) ,"EE dd/M/yyyy HH:mm:ss");
let date3 = dateFns.format(new Date (2024,3,20,13,45,30) ,"yyyy-MM-dd HH:mm EE");
let date4 = dateFns.format(new Date ,"MMMM do,yyyy hh:mm:ss a");
let date5 = dateFns.format(new Date ,"dd MMMM yyyy 'at' hh:mma");

console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);
console.log(date5);