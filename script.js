const form = document.querySelector('form')
// console.log(form);
const result = document.querySelector('#results')

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    if(height == '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please enter a valid Height ${height}`
    }
    else if(weight == '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please enter a valid Weight ${weight}`
    }   
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        if(bmi <= 18.6){
            result.innerHTML = `<span>You are Under Weight, BMI = ${bmi}</span>`;
        }
        else if(bmi > 18.6 && bmi <= 24.9){
            result.innerHTML = `<span>You are in Normal Range, BMI = ${bmi}</span>`;
        }
        else{
            result.innerHTML = `<span>You are Over Weight, BMI = ${bmi}</span>`;
        }
        
    }
})