//Given, Method Function
const ellipse = {
  width: 10,
  height: 5,
  getArea() {
    return Math.PI * this.width * this.height;
  },
  getPerimeter() {
    return 2 * Math.PI * Math.sqrt((this.width ** 2 + this.height ** 2) / 2);
  },
  getEccentricity() {
    return Math.sqrt(1 - (this.height / this.width) ** 2);
  },
};

//TestCase
answer = [157.07963267948966, 49.6729413289805, 0.8660254037844386];
solution = [
  ellipse.getArea(),
  ellipse.getPerimeter(),
  ellipse.getEccentricity(),
];
const allPass = answer.every((val, idx) => val === solution[idx]);

console.log(allPass);
