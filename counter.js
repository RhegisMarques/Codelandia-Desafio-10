// Função para atualizar o contador a cada segundo
function updateCounter() {
  var now = new Date();
  var future = new Date("2024-12-31T23:59:59"); // Data futura para o contador

  var difference = future - now;
  var seconds = Math.floor(difference / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);

  hours %= 24;
  minutes %= 60;
  seconds %= 60;

  document.getElementById("counter").innerHTML = days + "D - " + hours + "Hs - " + minutes + "min - " + seconds + "seg";
}

// Chamada inicial da função
updateCounter();

// Atualiza o contador a cada segundo
setInterval(updateCounter, 1000);
