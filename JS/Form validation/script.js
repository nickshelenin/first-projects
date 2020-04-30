const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('form');
errorElement = document.getElementById('error')

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    if(email.value === '' || email.value == null) {
        email.style.borderBottom = '3px red solid'
    } else {
        email.style.borderBottom = 'none';
    }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailformat))
    {
    document.form1.text1.focus();
    return true;
    }
    else
    {
    email.style.borderBottom = '3px red solid'
    document.form1.text1.focus();
    return false;
    }




    if(message.value === '' || message.value == null) {
        message.style.borderBottom = '3px red solid'
    } else {
        message.style.borderBottom = 'none';
    }


})