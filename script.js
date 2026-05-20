let moods = JSON.parse(localStorage.getItem("moods")) || []

function saveMood(mood) {

  moods.push(mood)
localStorage.setItem("moods", JSON.stringify(moods))
  displayMoods()
}

function displayMoods() {

  let moodList = document.getElementById("moodList")

  moodList.innerHTML = ""

  for (let i = 0; i < moods.length; i++) {

    moodList.innerHTML += `<li>${moods[i]}</li>`

  }
}
displayMoods()
