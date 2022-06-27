const myInformation = {
  name: "Simon Orow",
  age: 22,
  birthday: "September 30th",
  pinneapplePizza: true,
  lifeEvents: [
    "I was born in Baghdad, Iraq",
    "I love soccer",
    "I ate pinneapple pizza",
    "Dogs are cool",
  ],
};
console.log(myInformation);

if (myInformation.pinneapplePizza) {
  console.log(
    `My name is ${myInformation.name} and I like pinneapple on pizza. I am currently ${myInformation.age} years old and my birthday is on ${myInformation.birthday}.`
  );
} else {
  console.log(
    `My name is ${myInformation.name} and I'm not into pineapples on pizza. I am currently ${myInformation.age} years old and my birthday is on ${myInformation.birthday}.`
  );
}

for (let i = 0; i < myInformation.lifeEvents.length; i++) {
  console.log(myInformation.lifeEvents[i]);
}

let counter = 0;

while (true) {
  let randomNumber = randomIntFromInterval(1, 10);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
