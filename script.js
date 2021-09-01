let loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click',function(){
    userName = document.getElementById('username').value;
    password = document.getElementById('password').value;
    if(userName === 'tanvirtaher7@gmail.com' && password === 'tanvirtaher7@gmail.com')
    {
        window.location.href ="home.html";
    }
    else{
        alert('Please enter correct username and password')
    }
}) 

