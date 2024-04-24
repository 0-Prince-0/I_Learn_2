const txt = [
    "Learn C Programming",
    "Learn Python Programming",
    "Learn Java Programming",
    "Learn Web devlopment",
    "Learn Swift Programming",
    "Learn C++ Programming",
    "Learn DSA",
    "Learn Blender",
    "Learn Figma",
    "Learn App devlopment",
];
const rvs = [
    34,56,36,78,21,49,54,25,54,67
];
const str = [
    4,5,3,4,3,5,4,3,4,4
]
const like = [
    25.4,51.4,31.3,65.8,12.1,45.9,49.5,19.6,48.6,59.7
]

for(let i=0; i<10; i++)
{
    document.getElementById("ct"+ (i+1).toString()).innerText=txt[i];
    document.getElementById("cr"+(i+1).toString()).innerText=rvs[i] + "K Reviews"
    document.getElementById("cl"+(i+1).toString()).innerText=like[i] + "K Likes"
    document.getElementById("cli"+(i+1).toString()).src=(i+1) + ".png"
    for(let j =0; j<5; j++)
    {
        document.getElementById("ci"+(i+1).toString()+(j+1).toString()).src = "str_null.png"
    }
    for(let j =0; j<str[i]; j++)
    {
        document.getElementById("ci"+(i+1).toString()+(j+1).toString()).src = "str_full.png"
    }
}
// if(localStorage.getItem('logged') == 1)
// {
//     document.getElementById("profile").src = "profile.jpg";
// }
// else
// {
//     document.getElementById("profile").src = "login_img.png";
// }
