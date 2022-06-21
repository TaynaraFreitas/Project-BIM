const calculate = document.getElementById('calculate');

function BIM () {
    const name = document.getElementById('name').value;  // get element of id and his atributte value
    const height = document.getElementById('height').value; 
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');
    debugger

    if(name !== '' && height !== '' && weight !== '') {
    
        const valueBIM = (weight / (height * height)).toFixed(1);

        let classification = '';
      
        if (valueBIM < 18.5){
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





  