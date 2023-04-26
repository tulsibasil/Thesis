function openani(){
	window.open("animation.html")
}

function openpent(){
	window.open("sculpture.html")
}

function openweb(){
	window.open("https://tulsibasil.github.io/surveillance/surveillance.html")
}

function openzine(){
	window.open("zine.html")
}

function openpst(){
  window.open("posters.html")
}

function opengall(){
  window.open("gallery.html")
}


const ani = document.querySelector("#ani");
const data = document.querySelector("#data");

ani.addEventListener("mouseover", function() {
  data.style.color = "black"; // Change the color of #data to red
});
ani.addEventListener("mouseout", function() {
  data.style.color = ""; // Reset the color of #data to its original value
});

data.addEventListener("mouseover", function() {
  ani.style.transform = "scale(1.2)"; // Scale up #ani by 1.2
});

data.addEventListener("mouseout", function() {
  ani.style.transform = ""; // Reset the scale of #ani to its original value
});


const web = document.querySelector("#web");
const inter = document.querySelector("#inter");

web.addEventListener("mouseover", function() {
  inter.style.color = "black"; // Change the color of #data to red
});
web.addEventListener("mouseout", function() {
  inter.style.color = ""; // Reset the color of #data to its original value
});

inter.addEventListener("mouseover", function() {
  web.style.transform = "scale(1.2)"; // Scale up #ani by 1.2
});

inter.addEventListener("mouseout", function() {
  web.style.transform = ""; // Reset the scale of #ani to its original value
});




const pent = document.querySelector("#pent");
const invert = document.querySelector("#invert");

pent.addEventListener("mouseover", function() {
  invert.style.color = "black"; // Change the color of #data to red
});
pent.addEventListener("mouseout", function() {
  invert.style.color = ""; // Reset the color of #data to its original value
});

invert.addEventListener("mouseover", function() {
  pent.style.transform = "scale(1.2)"; // Scale up #ani by 1.2
});

invert.addEventListener("mouseout", function() {
  pent.style.transform = ""; // Reset the scale of #ani to its original value
});



const zine = document.querySelector("#zine");
const z = document.querySelector("#z");

z.addEventListener("mouseover", function() {
  zine.style.color = "black"; // Change the color of #data to red
});
z.addEventListener("mouseout", function() {
  zine.style.color = ""; // Reset the color of #data to its original value
});

zine.addEventListener("mouseover", function() {
  z.style.transform = "scale(1.2)"; // Scale up #ani by 1.2
});

zine.addEventListener("mouseout", function() {
  z.style.transform = ""; // Reset the scale of #ani to its original value
});


const post = document.querySelector("#post");
const pst = document.querySelector("#pst");

pst.addEventListener("mouseover", function() {
  post.style.color = "black"; // Change the color of #data to red
});
pst.addEventListener("mouseout", function() {
  post.style.color = ""; // Reset the color of #data to its original value
});

post.addEventListener("mouseover", function() {
  pst.style.transform = "scale(1.2)"; // Scale up #ani by 1.2
});

post.addEventListener("mouseout", function() {
  pst.style.transform = ""; // Reset the scale of #ani to its original value
});


const gall = document.querySelector("#gall");
const gal = document.querySelector("#gal");

gall.addEventListener("mouseover", function() {
  gal.style.color = "black"; // Change the color of #data to red
});
gall.addEventListener("mouseout", function() {
  gal.style.color = ""; // Reset the color of #data to its original value
});

gal.addEventListener("mouseover", function() {
  gall.style.transform = "scale(1.2)"; // Scale up #ani by 1.2
});

gal.addEventListener("mouseout", function() {
  gall.style.transform = ""; // Reset the scale of #ani to its original value
});


  var audio = document.getElementById("audio");
  var playBtn = document.getElementById("play-btn");
  playBtn.addEventListener("click", function() {
    if (audio.paused) {
      audio.play();
      playBtn.innerHTML = "Pause audio";
    } else {
      audio.pause();
      playBtn.innerHTML = "Play audio";
    }
  });

