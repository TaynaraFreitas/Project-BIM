const calculate = document.getelementById('calculate');

function BIM () {
    const name = document.getelementById('Name').value;  // get element of id and his atributte value
    const height = document.getelementById('Height').value; 
    const weight = document.getelementById('Weight').value;
    const result = document.getelementById('Result');

    if(name !== '' && height !== '' && weight !== '') {
    
        const valueBIM = (weight / (height * height)).toFixed(1);

        let classification = '';
      
        if (valueBIM < 18,5){
            classification = 'underweight.';
        } 
           else if(valueBIM < 25){
            classification = 'ideal weight.';
           }
           else if(valueBIM < 30){
            classification = 'mildly overweight.';
           }
           else if(valueBIM < 35){
            classification = 'with degree of obesity I.';
           }
           else if(valueBIM < 40){
            classification = 'with degree of obesity II';
           }
           else{
            classification = 'with degree of obesity III,care of you health.';
           }
            result.textContent = `${name} your BIM is ${valueBIM} and you are ${classification}`;
        }
     else{
         result.textContent = 'Attention, fill in all the fields!';
        }
 
    }
 
calculate.addEventListener('click', BIM); // I saying that calculate listen when someone click and do a function BIM





  