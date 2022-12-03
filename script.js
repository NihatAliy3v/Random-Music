let btn = document.querySelector(".btn");
let link = document.querySelector(".link");
let activeColor = document.querySelector(".active-color");

const arr = [
    {
        name:"Tom Odell - Another love",
        link:"https://youtu.be/z35t8mJPS9k",
        color: "linear-gradient(to right, #b79891, #94716b)",
    },
    {
        name:"XXXTENTACION - Revenge (Lyrics)",
        link:"https://youtu.be/RJnMWK9mrgQ",
        color: "linear-gradient(to right, #1f1c2c, #928dab)",
    },
    {
        name:"Beach House - Space Song (lyrics)",
        link:"https://youtu.be/KlqI5MvkYvE",
        color: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
    },
    {
        name:"Heat Waves - Glass Animals ( Slowed And Reverb )",
        link:"https://youtu.be/xzrDUeBCtWo",
        color:"linear-gradient(to right, #6d6027, #d3cbb8)",
    },
    {
        name:"Remembrance (Official Music Video)",
        link:"https://youtu.be/C-wu2VcYNCA",
        color: "linear-gradient(to right, #485563, #29323c)",
    },
    {
        name:"Madrigal - Seni Dert Etmeler (Official Audio)",
        link:"https://youtu.be/h5oHhGlWKf0",
        color: "linear-gradient(to right, #1e130c, #9a8478)",
    },
    {
        name:"XXXTENTACION - Everybody Dies In Their Nightmares (Lyrics)",
        link:"https://youtu.be/WIglwWHamm8",
        color: "linear-gradient(to right, #948e99, #2e1437)",
    },
    {
        name:"Deeperise - Raf ft. Jabbar (Official Video)",
        link:"https://youtu.be/9I16FhnSa-c",
        color: "linear-gradient(to right, #3c3b3f, #605c3c)",
    },
    {
        name:"Evgeny Grinko - Valse",
        link:"https://youtu.be/VYCOg-yglNM",
        color: "linear-gradient(to right, #6441a5, #2a0845)",
    },
    {
        name:"Billie Eilish, Khalid - lovely",
        link:"https://youtu.be/V1Pl8CzNzCw",
        color:"linear-gradient(to right, #feac5e, #c779d0, #4bc0c8)",
    },
];

let noRepeat;
let number;
btn.addEventListener("click",function(){
    number = Math.random();
    number = parseInt(number*10)
    if(number==noRepeat){
        number=parseInt(number/2);
    }
    link.href = arr[number].link;
    link.textContent= arr[number].name;
    activeColor.style.background = arr[number].color;
    noRepeat = number;
});



