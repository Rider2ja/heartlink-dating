let profile = 0;


let users = [

{
name:"Sophie, 19",
img:"https://i.pravatar.cc/300?1",
info:"🎵 Musik 🎮 Gaming 🌍 Reisen"
},

{
name:"Max, 20",
img:"https://i.pravatar.cc/300?2",
info:"🏀 Basketball 🎬 Filme"
},

{
name:"Lena, 18",
img:"https://i.pravatar.cc/300?3",
info:"📚 Lesen 🎨 Kunst"
}

];


function showProfile(){

document.getElementById("name").innerHTML =
users[profile].name;


document.getElementById("bild").src =
users[profile].img;


document.getElementById("info").innerHTML =
users[profile].info;

}



function like(){

alert("❤️ Like gesendet!");

next();

}


function dislike(){

alert("Nächstes Profil");

next();

}


function next(){

profile++;

if(profile >= users.length){

profile=0;

}

showProfile();

}
