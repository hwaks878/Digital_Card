// Change background color in the browser console
const htmlBody = document.querySelector("body");

const randomClickFunction = function () {
  const colors = [
    "#002942",
    "#0ca7d8",
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "#fff",
    "#0d76b0",
    "#fcbf49",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  htmlBody.style.backgroundColor = randomColor;
  console.log("The user clicked and set the color to " + randomColor);
};

// Click on the body to trigger the change color
htmlBody.onclick = randomClickFunction;

// const nestedObject = {
//   layer1: {
//     layer2: {
//       layer3: {
//         targetValue: 20,
//       },
//     },
//   },
// };

// const objectVariable = {
//   property1 : 'i am property 1',
//   property2 : 'i am property 2',
//   property3 : [20,30,40]
// }
// console.log(objectVariable.property3[2]);
