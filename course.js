class Course {
    constructor() {
        this.inf = [
            ["C", "1.png" , "Learn C Programming"],
            ["Python", "2.png", "Learn Python Programming"],
            ["Java", "3.png", "Learn Java Programming"],
            ["Web Devlopement", "4.png", "Learn Web devlopment"],
            ["Swift", "5.png", "Learn Swift Programming"],
            ["C++", "6.png", "Learn C++ Programming"],
            ["DSA", "7.png", "Learn DSA"],
            ["Blender", "8.png", "Learn Blender"],
            ["Figma", "9.png", "Learn Figma"],
            ["App Devlopment", "10.png", "Learn App devlopment"],
        ];
    }
}
const crs = new Course();
function cclicked(val) {
    event.preventDefault();
    window.location.href = 'c.html';
    localStorage.setItem('x', val);
}

var x = localStorage.getItem('x');

document.getElementById("ctitle").innerText = crs.inf[x-1][0] +  " Course";
document.getElementById("cimg").src = crs.inf[x-1][1] ;
document.title = crs.inf[x-1][2]; 
document.querySelector("link[rel='icon']").href = crs.inf[x-1][1];
