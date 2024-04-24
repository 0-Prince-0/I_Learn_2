class Info {
    constructor() {
        this.inf = [
            ["gondaliyaprince668@gmail.com", "774623@Prince"],
            ["princemg774@gmail.com", "774623@Prince"],
            ["hello@gmail.com", "Prince"],
            ["gondaliyaprince668@gmail.com", "774623@Prince"],
            ["gondaliyaprince668@gmail.com", "774623@Prince"],
        ];
    }
}

const info = new Info();

function logged() {
    if (check()) {
        event.preventDefault();
        localStorage.setItem('logged',1);
        window.location.href = 'index.html';
    }
}
if(localStorage.getItem('logged') == 1)
{
    document.getElementById("profile").src = "profile.jpg";
}
else
{
    document.getElementById("profile").src = "login_img.png";
}

function create() {
    event.preventDefault();
    window.location.href = 'create.html';
}
function BC() {
    event.preventDefault();
    window.location.href = 'index.html';
}
function PR() {
    event.preventDefault();
    window.location.href = 'pricing.html';
}
function HM() {
    event.preventDefault();
    window.location.href = 'home.html';
}
function AB() {
    event.preventDefault();
    window.location.href = 'about.html';
}

function frgt() {
    event.preventDefault();
    window.location.href = 'frgt.html';
}

function login() {
    event.preventDefault();
    window.location.href = 'login.html';
}

function check() {
    const em = document.getElementById("em").value;
    const ps = document.getElementById("pass").value;
    for (let i = 0; i < info.inf.length; i++) 
    {
            if (em === info.inf[i][0] && ps === info.inf[i][1]) {
            return true;
        }
    }
    alert("Username or password is incorrect!");
    return false;
}
