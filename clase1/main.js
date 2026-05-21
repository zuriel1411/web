var alto = document.getElementById("alto");
var ancho = document.getElementById("ancho");
var color = document.getElementById("color");
var figura = document.getElementById("figura");
var radius = document.getElementById("radius");
var anchoborde = document.getElementById("anchoborde");
var colorborde = document.getElementById("colorborde");
var tipoborde = document.getElementById("tipoborde");

alto.oninput = () => {
  figura.style.height = alto.value + "px";
  document.getElementById("valto").textContent = alto.value;
}
ancho.oninput = () => {
  figura.style.width = ancho.value + "px";
  document.getElementById("vancho").textContent = ancho.value;
}
color.onchange = () => {
  figura.style.background = color.value;
}

radius.oninput = () => {
  figura.style.borderRadius = radius.value + "%";
  document.getElementById("vradio").textContent = radius.value;
}

anchoborde.oninput = () => {
  figura.style.borderWidth = anchoborde.value + "px";
  document.getElementById("vanchoborde").textContent = anchoborde.value;
}

colorborde.onchange = () => {
  figura.style.borderColor = colorborde.value;
}

tipoborde.onchange = () => {
  figura.style.borderStyle = tipoborde.value;
}