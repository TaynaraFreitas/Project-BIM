const Calculate = document.getelementById('Calculate');

function BIM () {
    const Name = document.getelementById('Name').value;  // get element of id and his atributte value
    const Height = document.getelementById('Height').value; 
    const Weight = document.getelementById('Weight').value;
    const Result = document.getelementById('Result');

    if(Name !== '' && Height !== '' && Weight !== '') {
    
        const valueBIM = (Weight / (Height * Height)).toFixed(1);

        let classification = '' ;
      
        if (valueBIM < 18,5) {
            classification = 'underweight.' ;
        } 
           else if(valueBIM < 25) {
            classification = 'ideal weight.' ;
           }
           else if(valueBIM < 30) {
            classification = 'mildly overweight.' ;
           }
           else if(valueBIM < 35) {
            classification = 'with degree of obesity I.' ;
           }
           else if(valueBIM < 40) {
            classification = 'with degree of obesity II' ;
           }
           else{
            classification = 'with degree of obesity III,care of you health.' ;
           }
            Result.textContent = `${Name} your BIM is ${valueBIM} and you are ${classification}`;
        }
     else{
         Result.textContent = 'Attention, fill in all the fields!' ;
        }
 
    }
 
Calculate.addEventListener('click',BIM); // I saying that calculate listen when someone click and do a function BIM

//var h = window.prompt('Type your height:')
//var peso = window.prompt('Type your weight:')
//var IMC = peso/(h**2)
//window.alert('IMC é:' + IMC)
//var h = window.prompt('Type your height:')
//var peso = window.prompt('Type your weight:')
//var IMC = peso/(h**2)
//window.alert('IMC é: ' + IMC)





  