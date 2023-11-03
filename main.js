// Hent ut listen vi har laget
let taskList = document.querySelector("#task-list")

/**
 * Lager en ny Todo Items ved å lese av input feltet
 */
function createNewTask() {
  // ===========================================================
  // = Hent ut verdiene du trenger å lagre de i egne variabler =
  // ===========================================================

  // Finn titel input elementet
  let inputTitle = document.querySelector("#task-title")
  // Lese av verdien i input feltet og lagre den
  let taskTitle = inputTitle.value
  
  let taskDeadline = "04.02.25"

  // ==============================================================
  // = Sett opp HTML komponentet og bruk variablene du har lagret =
  // ==============================================================

  // Først lage li elementet
  let liElement = document.createElement("li")
  // Vi kan bruke innerHTML for å sette opp mer kompleks HTML
  liElement.innerHTML = `
    <div class="task">
      <h2>${taskTitle}</h2>
      <p>Deadline: ${taskDeadline}</p>
      <button>Delete Task</button>
    </div>
  `

  // ===================================================
  // = Legg til funksjonalitet ved hjelp av funksjoner =
  // ===================================================

  // Sett opp en ny funksjon inne i funksjonen
  function deleteTask() {
    liElement.remove()
  }
  // Finn knappen inne i liElementet vårt
  let deleteButton = liElement.querySelector("button")
  // Legg til funksjonen her inne
  deleteButton.addEventListener("click", deleteTask)
  

  // =======================================================
  // = Legg til det ferdige komponentet i hoved dokumentet =
  // =======================================================

  // Vi kan legge ting i DOMet via append() / appendChild()
  taskList.append(liElement)
}

let addTaskButton = document.querySelector("#task-add")
addTaskButton.addEventListener("click", createNewTask)