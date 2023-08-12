// convert the temperature from celcius to farenhite

function tempInFarenhite(_temp:number):number{
    return _temp * (9/5) + 32;
};
var cToFTemperature = tempInFarenhite(78);
cToFTemperature = cToFTemperature + 10;
console.log(cToFTemperature);

var cToFTemperature2 = tempInFarenhite(56);
cToFTemperature2 = cToFTemperature2 + 30;
console.log(cToFTemperature2);

// write a program that calculates the percentage
function obtainedMarks(obtainedMarks:number, totalMarks:number) :number{
    return (obtainedMarks/totalMarks) * 100;
};
var percentageObtained = obtainedMarks(1044, 1100);
console.log(percentageObtained);

//write a program that calculates that converts given number of days to week and days such as 17 days =
// 2 weeks 3 days 
function weekConversion(days:number) :number{
    return days/7;
};
var daysToWeek = weekConversion(365);
console.log(daysToWeek);

// write a program that calculates the discount for a product based on its price . If the price
// is $100 app a 10% discount other wise 5%


function discount(currentPrice:number) :number {
    if(currentPrice > 100){
        return (currentPrice * 90)/100;
    }
    else if (currentPrice < 100){
        return (currentPrice * 95)/100;
    }else{
        return currentPrice;
    };
};

var discountForDifferentProducts = discount(110);
console.log(discountForDifferentProducts);


var givenPrice:number = 100;
var discount10Percentage:number = (givenPrice*90)/100;
var discount5Percentage:number = (givenPrice*95)/100;
if(givenPrice > 100){
    console.log("Price after Discount is " , discount10Percentage);
} else{
    console.log("Price after Discount is" , discount5Percentage);
};

// write a program that takes temprature ans check it, if it is cold , suggest the user to wear warm clothes
// and so on according to the weather
var temp:number = 20;
if(temp <= 12){
    console.log("Wear the Sweater");
} else if(temp <= 5){
    console.log("Wear the Jackets");
}else if (temp <= 0){
    console.log("Wear the overcoat + jacket + sweater");
}else{
    console.log("Wear the normal clothes");
};

// Develop a program that determines the day of the week. Ask the user for a number (1-7)
var dayOfTheWeek = 4;
switch(dayOfTheWeek){
    case 1:
        console.log("Monday");
        break;

        case 2:
            console.log("Tuesday");
            break;

            case 3:
                console.log("Wednesday");
                break;

                case 4:
                    console.log("Thursday");
                    break;

                    case 5: 
                    console.log("Friday");
                    break;

                    case 6:
                        console.log("Satursday");
                        break;

                        default:
                            console.log("Sunday");
                            break;
}

// Write a program that checks is a given number is divisible by 3 or 5 or both or not divisible by anyone and show the output accordingly
var num:number = 20;
if(num%3 === 0){
    console.log("Number is divisible by 3");
}else if(num%5 === 0){
    console.log("Number is divisible by 5");
}else if(num%3 == 0 && num%5 == 0){
    console.log("Number is divided by 3 and 5");
}else{
    console.log("Number is neither divided by 3 nor by 5");
};

// write a program that checks if the given number is leap year or not
var year:number = 366;
if(year == 366){
    console.log("Its a leap year");
}else{
    console.log("its not a leap year");
};

// Write a program that takes the number of units consumed by a user if it is greater than 100 then add 10%
// taxation if greater than 200 then add 15% taxation if greater than 500 then add 25% TextTrack, where 
// // the tax amount will be calculated by the amount of bill 
var unit:number = 600;
var unitPrice:number = 15;
var amountOfTheBill:number = unit * unitPrice;
if (unit > 100){
    console.log((amountOfTheBill*110)/100);
} else if(unit > 200){
    console.log((amountOfTheBill*115)/100);
}else{
    console.log((amountOfTheBill*125)/100);
};

// Create a program that deter,mines the category of user provided age. if the age is between 0 and 12
// print "child". if its between 13 and 19, print "teenager" , otherwise print "Adult". 

var age:number = 15;
if(age == 0 && age<=12){
    console.log("Child");
}else if(age>12 && age<=19){
    console.log("Teenager");
}else{
    console.log("Adult");
};


