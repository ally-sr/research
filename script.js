const init = () => {
    const inputUser = document.querySelector('input[type="text"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.btnLogin');

    if (submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();

            fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    email: inputUser.value,
                    password: inputPassword.value,
                })
            }), then((response) => {
                return response.json();
            }), then((data) => {
                console.log(data)
            }) 
        })
    }
}

window.onload = init;