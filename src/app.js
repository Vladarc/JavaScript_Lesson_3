// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

// Функция для вывода на экран информации об автомобиле;

const aboutCar = {

    manufacturer: "United States",
    model: 'BMW',
    year: 2010,
    speedAvg: 60,

    show() {

        let display = `
         <ul style="list-style:none"> 
         <li>Manufacturer: <b>${this.manufacturer}</b></li>
         <li>Model: <b>${this.model}</b></li>
         <li>Year: <b>${this.year}</b></li>
         <li>Speed: <b>${this.speedAvg}</b></li>
         </ul>
         `;
        document.write(display);
    },
    caclTime(distance = 500, speed = this.speedAvg) {


        if (0 == distance || speed == 0) {
            document.write('Значения не валидны ');
        }

        let time = distance / speed;
        let tmp = Math.floor(time / 4);

        let out = `
        Необходимое время для преодоления расстояния: ${distance} км, необходимо ${Math.floor(time + tmp)} часов `;

        document.write(out);



    }

}

// aboutCar.caclTime()
// aboutCar.show()








// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

const firstFraction = {
    numerator: 15,
    denominator: 9
}
const sectondaryFraction = {
    numerator: 12,
    denominator: 4
}




const nod = (a, b) => {
    if (!b) {
        return a;
    }
    return nod(b, a % b);
};

const isValid = (ob1, ob2) => {
    if (Object.keys(ob1).length == 0 ||
        Object.keys(ob2).length == 0) {
        return false
    }
    return true
}



//  сложенние и вычитание 
const sumAndSubtraction = (fractionOne = {}, fractionTwo = {},operator) => {

    if (!isValid(fractionOne, fractionTwo)) {
        return "Isn't valid value"
    }

    const { numerator: numObjOne, denominator: denObjOne } = fractionOne;

    const { numerator: numObjTwo, denominator: denObjTwo } = fractionTwo;


    let denominator         = 0,
        firstNumeratorCalc  = 0,
        secondNumenatorCalc = 0,
        result              = 0
       

        if( operator === "+" || operator === "plus" ){
        denominator = denObjOne * denObjTwo;
        firstNumeratorCalc = (numObjOne * denObjTwo) + (numObjTwo * denObjOne);
        let calc = nod(firstNumeratorCalc, denominator)
        result = ` ${firstNumeratorCalc / calc} / ${denominator / calc} `
        } else {
           
            firstNumeratorCalc  = numObjOne * denObjTwo
            secondNumenatorCalc = numObjTwo * denObjOne
            denominator         = denObjOne * denObjTwo
            result              = firstNumeratorCalc - secondNumenatorCalc
            Math.sign(result) == -1 ? result = ` - ${Math.abs(result)} / ${denominator}` : 
                result = ` ${result} / ${denominator}`                 
            
        }
    







    return result

}
//  Результаты 
console.log("Сумма дробей",sumAndSubtraction(firstFraction, sectondaryFraction,"+"))
console.log("Вычитание дробей",sumAndSubtraction(firstFraction, sectondaryFraction,"-"))
// console.log( sum( {},{} ) )    


// Умножение и Деление
const multiplicationAndDivision = (fractionOne = {}, fractionTwo = {},operator) => {

    if (!isValid(fractionOne, fractionTwo)) {
        return "Isn't valid value"
    }

    const { numerator: numObjOne, denominator: denObjOne } = fractionOne;

    const { numerator: numObjTwo, denominator: denObjTwo } = fractionTwo;

    let numerator      = 0,
        denominator    = 0,
         result        = 0

    if( operator === '*' || operator === "mult" ){
        
        numerator = numObjOne * numObjTwo,
        denominator = denObjOne * denObjTwo,
        result = `${numerator} / ${denominator}`
    } else {

        numerator = numObjOne * denObjTwo,
        denominator = numObjTwo * denObjOne,
        result = `${numerator} / ${denominator}`

     }





    return result

}
//  Результаты 
console.log("Умножение дробей",multiplicationAndDivision(firstFraction,sectondaryFraction,'*'))
console.log("Деление дробей",multiplicationAndDivision(firstFraction,sectondaryFraction))



// cокращение дробей
const reduction = (obj) => {
    if (Object.keys(obj).length == 0) {
    
        return "Isn't valid value"
    }

    const { numerator: numObjOne, denominator: denObjOne } = obj;

    let reducing = nod(numObjOne, denObjOne),
        result = `${numObjOne / reducing} / ${denObjOne / reducing}`


    return result

}
//  Результаты 
console.log("Сокращение дроби",reduction(firstFraction))






























































