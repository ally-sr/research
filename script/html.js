window.onload = function () {
    if (location.href.indexOf("code") !== -1) {
        const code = location.href.substring(location.href.indexOf("code") + 5, location.href.length);
        const req = new XMLHttpRequest();
        req.open("POST", "http://localhost:64386/user");
        req.send(code);
        req.onload = () => { 
            if (req.status === 500) {
                document.getElementById('welcome_txt').innerText = `There was an error with that. Please try logging in again. Error Code: ${req.status}`;
            } else if (req.status === 200) {
                document.getElementById("welcome_txt").innerText = `Welcome, ${req.responseText}!`
            } else {
                document.getElementById('welcome_txt').innerText = `An error occured. Please try logging in again. Error Code: ${req.status}`;
            }

        }
    }
}