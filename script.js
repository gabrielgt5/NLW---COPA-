const btnGrenn = document.querySelector(".btn-green")
const btnYellow = document.querySelector(".btn-yellow")
const btnBlue = document.querySelector(".btn-blue")

function createGame(player1, hours, player2) {
  return ` 
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do Brasil" />
      <strong>${hours}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da Sérvia" />
    </li>`
}

let delay = -0.4
function creatCard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="card" style="animation-delay: ${delay}s">    
    <h2>${date}<span>${day}</span></h2>
    <div class= "grupo" >Grupo G</div>
      <ul>
        ${games}
      </ul>
  </div>`
}

function trocaTemaG() {
  btnGrenn
  let bodyTheme = document.querySelector("body")
  bodyTheme.setAttribute("class", "green")
}

function trocaTemaY() {
  if (btnGrenn) {
    let bodyTheme = document.querySelector("body")
    bodyTheme.setAttribute("class", "yellow")
  }
}

function trocaTemaB() {
  if (btnGrenn) {
    let bodyTheme = document.querySelector("body")
    bodyTheme.setAttribute("class", "blue")
  }
}

document.querySelector("#cards").innerHTML =
  creatCard(
    "24/11",
    "quinta",
    createGame("suica", "06:00", "camarao") +
      createGame("brazil", "15:00", "serbia")
  ) +
  creatCard(
    "28/11",
    "segunda",
    createGame("camarao", "06:00", "serbia") +
      createGame("brazil", "12:00", "suica")
  ) +
  creatCard(
    "02/12",
    "sexta",
    createGame("serbia", "15:00", "suica") +
      createGame("camarao", "15:00", "brazil")
  )

btnGrenn.addEventListener("click", trocaTemaG)
btnYellow.addEventListener("click", trocaTemaY)
btnBlue.addEventListener("click", trocaTemaB)
