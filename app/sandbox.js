function checkLove(){
    let yourName = document.getElementById('yourName').value;
    let partnersName = document.getElementById('partnersName').value;

    if(yourName == ''){
        alert('Please enter your name.');
    }
    else if(yourName.length <=2){
        alert('Minimum character length is 3.')
    }
    else if(!isNaN(yourName)){
        alert('Numbers are not allowed.')
    }
    else if(partnersName == ''){
        alert('Please enter your name.');
    }
    else if(partnersName.length <=2){
        alert('Minimum character length is 3.')
    }
    else if(!isNaN(partnersName)){
        alert('Numbers are not allowed.')
    }
    else{
        let result = Math.random() * 100;
        result = Math.floor(result);
        let showMainResult = document.getElementById('main-result');
        let showComment = document.getElementById('comment');
        showMainResult.innerHTML = yourName + ' loves ' + partnersName + ' at ' + result + '%';

        if(result >=90){
            showComment.innerHTML = 'Lengendary love, you will get a noble prize for this love.';
        }
        else if(result >=80){
            showComment.innerHTML = 'Your love is unconditional.';       
        }
        else if(result >=70){
            showComment.innerHTML = 'Amazing love, try to write a poem for your baby.';     
        }
        else if(result >=60){
            showComment.innerHTML = 'Love condition is good.';
        }
        else if(result >=50){
            showComment.innerHTML = 'Show-off couple, selfie addicts do not have much love.';
        }
        else if(result >=40){
            showComment.innerHTML = 'Average love, but still not good.';        
        }
        else if(result >=30){
            showComment.innerHTML = 'Depressive love, try to understand each other.';         
        }
        else{
            showComment.innerHTML = 'Your are a failer.';
        }
    }
}
    