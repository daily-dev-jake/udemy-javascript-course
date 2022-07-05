// Coding challenge 1

const markMass = 95;
const markHeight = 1.88;

const johnMass = 85;
const johnHeight = 1.76;


function bmi1(mass,height){
    return mass / height ** 2;
}

function bmi2(mass,height){
    return mass / (height * height);
}

const markBmi1 = bmi1(markMass,markHeight);
const markBmi2 = bmi2(markMass,markHeight);
const johnBmi1 = bmi1(johnMass,johnHeight);
const johnBmi2 = bmi2(johnMass,johnHeight);

const markHigherBMI = markBmi1 > johnBmi1;

console.log(`Mark weighs ${markMass} kg and is ${markHeight} m tall, with BMI of ${markBmi1} or ${markBmi2}`)
console.log(`John weighs ${johnMass} kg and is ${johnHeight} m tall, with BMI of ${johnBmi1} or ${johnBmi2}`)

console.log(`Mark has higher BMI is ${markHigherBMI}`)
