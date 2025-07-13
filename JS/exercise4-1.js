const setRandomBgColor = () => {
  const colorBox = document.getElementById("color-box");
  const Red = Math.random() * 255;
  const Green = Math.random() * 255;
  const Blue = Math.random() * 255;

  const color = "rgb(" + Red + "," + Green + "," + Blue + ")";
  colorBox.style.backgroundColor = color;
};
