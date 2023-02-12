// Step -1: Add event handler on Submit Button
document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('Submit button clicked')

    // Step -2: Get the email inside the email input field

    // Always remember to use .value to get text form input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // Step -3: Set password
    // 3.a: Set id on the html element
    // 3.b: Get the element
    // 3.c: Get the value from the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(password, email);

    // DANGER: Do not verify email password on the client side
    // Step-4: Verify email and password and go through it.
    if ( email === 'baap@er-bank.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else {
        alert('Wrong email or password')
    }
})