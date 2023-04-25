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




