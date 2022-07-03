const weight = prompt('Enter your weight in kiligrams');
const height =  prompt('Enter your height in meters');
let bmi = weight / (height*height);
let overBMI = bmi - 25;

if (bmi <=25) {
    alert('No, your weight is normal');
    console.log('No, your weight is normal');
}
else {

    alert('Yes, your BMI is more than normal by ' + overBMI);
    console.log('Yes, your BMI is more than normal by ' + overBMI);
}




