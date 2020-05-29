// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:

// Функция для вывода на экран информации об автомобиле;

const aboutCar = {

    manufacturer:"United States",
    model:'BMW',
    year:2010,
    speedAvg:60,

    show(){

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
    caclTime(distance = 500,speed = this.speedAvg) {
   
        
        if( 0 == distance || speed == 0 ){
            document.write('Значения не валидны ');
        }  
        
        let time = distance / speed;
        let tmp  = Math.floor(time / 4);

        let out = `
        Необходимое время для преодоления расстояния: ${distance} км, необходимо ${Math.floor(time + tmp)} часов `;
        
        document.write(out);



    }

}

// aboutCar.caclTime()
// aboutCar.show()








// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

const firstFraction = {
    numerator:15,
    denominator:9
}
const sectondaryFraction = {
    numerator:12,
    denominator:4
}




const nod = ( a, b ) => {
    if ( ! b ) {
        return a;
    }
    return nod( b, a % b );
};   

const sum = ( fractionOne= {},fractionTwo = {} ) => {

    if( Object.keys( fractionOne ).length == 0  ||
        Object.keys( fractionTwo ).length == 0  ) {
           return "Don't valid value"
       }
       
       const  {numerator:numObjOne,denominator:denObjOne} = fractionOne;

       const  {numerator:numObjTwo,denominator:denObjTwo} = fractionTwo;
   

       let denominator                  = 0,
       out                              = null,
       firstNumerator                   = 0,
       calc                             = 0

       denominator    =       denObjOne * denObjTwo;
       firstNumerator =  ( numObjOne *  denObjTwo ) + ( numObjTwo * denObjOne );
       calc           =  nod(firstNumerator,denominator)
       out            = ` ${firstNumerator / calc} / ${denominator / calc} `
                        
       return    out      

    }      
    
    console.log(sum( firstFraction,sectondaryFraction ))    
    // console.log( sum( {},{} ) )    





              
                       
 
    

                      
    
const subtraction = ( fractionOne = {},fractionTwo = {} ) => {

    if(Object.keys( fractionOne ).length == 0  ||
       Object.keys( fractionTwo ).length == 0  ) {
           return "Don't valid value"
       }
   

    const  {numerator:numObjOne,denominator:denObjOne} = fractionOne;

    const  {numerator:numObjTwo,denominator:denObjTwo} = fractionTwo;

    let firstNumeratorCalc  =  0,
        secondNumenatorCalc =  0,
        denominator         =  0,
        result              =  0,
        out                 = null



        firstNumeratorCalc      =  numObjOne * denObjTwo
        secondNumenatorCalc     =  numObjTwo * denObjOne
        denominator             =  denObjOne * denObjTwo
        result                  = firstNumeratorCalc - secondNumenatorCalc
        
            

        if( Math.sign( result ) == -1 ){
            out = ` - ${Math.abs(result)} / ${denominator}`
          
          
            return out     
           
        } else {
            out = ` ${result} / ${denominator}`
           
            return out
        }   
    }          
    
// console.log(subtraction(firstFraction,sectondaryFraction))
// console.log(subtraction({},{}))


const multiplication = ( fractionOne = {},fractionTwo = {} ) => {
   
    if(Object.keys(fractionOne).length == 0  ||
       Object.keys(fractionTwo).length == 0  ) {
        return "Don't valid value"
    }

    const  {numerator:numObjOne,denominator:denObjOne} = fractionOne;

    const  {numerator:numObjTwo,denominator:denObjTwo} = fractionTwo;

    let numerator  =  numObjOne * numObjTwo,
    denominator    =  denObjOne * denObjTwo,
    result         =  `${numerator} / ${denominator}`
    
    return result 

}

console.log( multiplication( firstFraction,sectondaryFraction ) )     
 

const division  = ( fractionOne = {},fractionTwo = {} ) => {

    if(Object.keys( fractionOne ).length == 0  ||
    Object.keys( fractionTwo ).length == 0  ) {
     return "Don't valid value"
    }

    const  {numerator:numObjOne,denominator:denObjOne} = fractionOne;

    const  {numerator:numObjTwo,denominator:denObjTwo} = fractionTwo;

    let numerator = numObjOne * denObjTwo,
    denominator   = numObjTwo * denObjOne,
    result        = `${numerator} / ${denominator}`

    return result
} 
console.log( division( firstFraction,sectondaryFraction ) )

const reduction = ( obj )=> {
    if( Object.keys(obj).length == 0 ) {
       return "Don't valid value"
    }
    
    const  {numerator:numObjOne,denominator:denObjOne} = obj;

    let reducing = nod( numObjOne,denObjOne ),
    result       = `${numObjOne / reducing} / ${denObjOne / reducing}`


    return result
    
}

  console.log( reduction( firstFraction ) )          
        
    


    

 
 





  


        
   
            
        
      

            
            
    
    


 

       
         
         
           
         

        
       
   
        
        

       
        
       
       
       
    




     

    






    
 