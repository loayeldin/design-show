const  form = document.getElementById('register-form') ;
const sing = document.getElementById('signup') ;
const username = document.querySelector('#username') ;
const email = document.querySelector('#email') ;
const password = document.querySelector('#password') ;
const password2 = document.querySelector('#password-confirm') ;

  
//validation form 

//show error message
function showError(input , message){
    const formControl = input.parentElement ; 
    // console.log(formControl)
    formControl.classList.add('error');
    const small =formControl.querySelector('small');
    small.innerText= message;
}
// Get fieldname
function getFieldName(input) {
    
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }


//check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input) {
        if (input.value.trim() === ''){
            showError(input , `${getFieldName(input)} is required`)
        }
    });
}

// Check email is valid

function checkEmail(input) {
    
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) { 
    //   showSuccess(input);
    } else {
      showError(input, 'Email is not valid');
    }
  }

  //check lenth
  function checkLenth(input,min,max){
    if(input.value.length < min){
        showError(input,`${getFieldName(input)}  must be at least  ${min} character`)
      }
       else if (input.value.length > max){
          
          showError(input,`${getFieldName(input)}  must be less than  ${max} character`)
    }
    
}

// check mathong passwodrs
function checkPasswordsMatch(input1 , input2){
    if(input1.value !== input2.value){
        showError(input2, "Passwords not match")
    }
}

//event lestener 
form.addEventListener('submit' , function(e) {

    $('.form-group-label').fadeOut(400)
        // console.log("sasa")
        e.preventDefault();
        
        console.log(email)
        checkEmail(email);
        checkLenth(username,3,20);
        checkLenth(password,6,20);
        checkPasswordsMatch(password,password2)
        checkRequired( [username  , password , password2] );
        
    })
    
   