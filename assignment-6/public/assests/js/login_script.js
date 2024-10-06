async function login(event) {
    event.preventDefault(); 

    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const userType = document.getElementById('userType').value;
    console.log(usernameInput, passwordInput, userType);

    if (!userType) {
        alert('Please select a user type.');
        return;
    }

    try {

        const response = await fetch('https://script.google.com/macros/s/AKfycbxLRsw-4ZzSpomobadNSTGbzQCi6bU6pQECcVvpOljbywDhrbvFPKIyJ8-ypVojwavdlA/exec'); 
        const data = await response.json();

        console.log('API Response:', data); 

      
        let validUser = false;

  
        data.forEach(user => {
        
            console.log(user.userType, user.username, user.password);
            if (
                user.userType === userType &&
                user.username === usernameInput &&
                user.password === passwordInput
            ) {
                validUser = true;
            }
        });

        if (validUser) {
            
            if (userType === 'Receptionist') {
                window.location.href = 'dashboard';
            } else {
              
               
                window.location.href = 'appointment'; 
            }
        } else {
         
            alert('Invalid login credentials. Please check your username, password, or user type.');
        }
    } catch (error) {
        console.error('Error fetching the API data:', error);
        alert('An error occurred while processing your request. Please try again later.');
    }
}

document.getElementById('loginForm').addEventListener('submit', login);
