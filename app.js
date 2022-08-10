randomNumber()
let res = ''

async function randomNumber() {
    document.getElementById('card').className = 'hide'
    document.getElementById('resetButton').className = 'blind'
    document.getElementById('LedSecondNumber').className = 'hide'
    document.getElementById('LedThirdNumber').className = 'hide'
    axios.get(`https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300`)
    //   axios.get(`https://us-central1-ss-`)
    .then(response =>{
        res = response.data;
        console.log(res);
        document.getElementById('card').className = 'show card'
        document.getElementById('loader').className = 'hide'
    })  .catch(function (error) {
        console.log(error.response.data.StatusCode);
    document.getElementById('loader').className = 'hide'
    document.getElementById('error').className = 'show'
  })
}

let result = document.getElementById('result') ;

function send(){
    let number = document.getElementById('number').value
    document.getElementById('number').value = ''
    
    let firstDigit = String(number)[0]
    let secondDigit = String(number)[1]
    let thirDigit = String(number)[2]

    let firstNumberString = ''

    switch(firstDigit){
        case '1':
        firstNumberString = 'One'
        break;
        case '2':
        firstNumberString = 'Two'
        break;
        case '3':
        firstNumberString = 'Three'
        break;
        case '4':
        firstNumberString = 'Four'
        break;
        case '5':
        firstNumberString = 'Five'
        break;
        case '6':
        firstNumberString = 'Six'
        break;
        case '7':
        firstNumberString = 'Seven'
        break;
        case '8':
        firstNumberString = 'Eight'
        break;
        case '9':
        firstNumberString = 'Nine'
        break;
        case '0':
        firstNumberString = 'Zero'
        break;
    }
    document.getElementById('LedFirstNumber').className = 'number'+ firstNumberString+ ''

    
    let secondNumberString = ''
       if(!secondDigit){
        document.getElementById('LedSecondNumber').className = 'hide'
        console.log('yvbn')
    }else{
    switch(secondDigit){
        case '1':
        secondNumberString = 'One'
        break;
        case '2':
        secondNumberString = 'Two'
        break;
        case '3':
        secondNumberString = 'Three'
        break;
        case '4':
        secondNumberString = 'Four'
        break;
        case '5':
        secondNumberString = 'Five'
        break;
        case '6':
        secondNumberString = 'Six'
        break;
        case '7':
        secondNumberString = 'Seven'
        break;
        case '8':
        secondNumberString = 'Eight'
        break;
        case '9':
        secondNumberString = 'Nine'
        break;
        case '0':
        secondNumberString = 'Zero'
        break;
        }
       document.getElementById('LedSecondNumber').className = 'number'+ secondNumberString+ ''
    }

    
    let thirdNumberString = ''

    if(!thirDigit){
        document.getElementById('LedThirdNumber').className = 'hide'
    }else{
    switch(thirDigit){
        case '1':
        thirdNumberString = 'One'
        break;
        case '2':
        thirdNumberString = 'Two'
        break;
        case '3':
        thirdNumberString = 'Three'
        break;
        case '4':
        thirdNumberString = 'Four'
        break;
        case '5':
        thirdNumberString = 'Five'
        break;
        case '6':
        thirdNumberString = 'Six'
        break;
        case '7':
        thirdNumberString = 'Seven'
        break;
        case '8':
        thirdNumberString = 'Eight'
        break;
        case '9':
        thirdNumberString = 'Nine'
        break;
        case '0':
        thirdNumberString = 'Zero'
        break;
        }
       document.getElementById('LedThirdNumber').className = 'number'+ thirdNumberString+ ''
    }
        
        if(res.value > Number(number)){
        result.className = "default"
        result.innerHTML = 'É maior';
        }
    
        if(res.value < Number(number) ){
            result.className = "default"
            result.innerHTML = 'É menor';
        }
    
        if((res.value) ===  Number(number)){
        console.log('acerto')
        result.innerHTML = 'Você acertou!!!';
        result.className = "sucess"
        document.getElementById('LedFirstNumber').className = 'number'+ firstNumberString+ 'Sucess'
        if(secondNumberString === '') {
        document.getElementById('resetButton').className = 'resetButton'
        return
        }
        document.getElementById('LedSecondNumber').className = 'number'+ secondNumberString+ 'Sucess'
        if(thirdNumberString === '') {
            document.getElementById('resetButton').className = 'resetButton'
            return
        }
        document.getElementById('LedThirdNumber').className = 'number'+ thirdNumberString+ 'Sucess'
        
        document.getElementById('resetButton').className = 'resetButton'
    }
}

function reset(){
    randomNumber()
    document.getElementById('resetButton').className = 'blind'
    document.getElementById('LedFirstNumber').className = 'numberZero'
    result.innerHTML = ''
}