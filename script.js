let moods = JSON.parse(localStorage.getItem("moods")) || []

function saveMood(mood) {

  if (mood === "Good") {
  document.body.style.background = "#b8ffb8"
  document.body.style.color = "#111"
}

  if (mood === "Okay") {
  document.body.style.background = "#fff3b8"
  document.body.style.color = "#111"
}

  if (mood === "Bad") {
  document.body.style.background = "#ffb8b8"
  document.body.style.color = "#111"
}

  let currentTime = new Date().toLocaleString()

  moods.push(`${mood} - ${currentTime}`)

  localStorage.setItem("moods", JSON.stringify(moods))

  displayMoods()
}

function displayMoods() {

  let moodList = document.getElementById("moodList")

  moodList.innerHTML = ""

  for (let i = 0; i < moods.length; i++) {

    moodList.innerHTML += `
      <li>
        ${moods[i]}
        <button onclick="deleteMood(${i})">❌</button>
      </li>
    `
  }
}

function deleteMood(index) {

  moods.splice(index, 1)

  localStorage.setItem("moods", JSON.stringify(moods))

  displayMoods()
}

displayMoods()
