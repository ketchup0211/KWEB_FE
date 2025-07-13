function tryLevelUp() {
  const LEVEL_UP_PROB = [100, 60, 36, 22, 13, 8, 5, 3, 2, 1];
  const currentLevelContainer = document.getElementById("current-level");
  const trialContainer = document.getElementById("attempts");
  const gaugeBar = document.getElementById("gauge-bar");

  let currentLevel = parseInt(
    document.getElementById("current-level").innerText
  );
  let trial = parseInt(document.getElementById("attempts").innerText);

  if (currentLevel === 5) {
    alert("The End!");
    currentLevelContainer.innerText = 0;
    trialContainer.innerText = 0;
    gaugeBar.style.width = "0";
    return 0;
  }

  if (getRandomBinaryResult(LEVEL_UP_PROB[currentLevel])) {
    currentLevelContainer.innerText = currentLevel + 1;
    gaugeBar.style.width = (currentLevel + 1) * 10 + "%";
    gaugeBar.style.backgroundColor = "blue";
  }
  trialContainer.innerText = trial + 1;
}

function getRandomBinaryResult(prob) {
  return Math.random() * 100 < prob ? true : false;
}
