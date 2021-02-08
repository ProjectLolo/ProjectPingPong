import { Alert } from "react-native";
import { chooseAnimalAtRandom } from "../../../../assets/animalList";

export const generateAnimalsAtRandom = (
  numberOfAnimalsToReturn,
  animalsToExclude = []
) => {
  const animalsToReturn = [chooseAnimalAtRandom(animalsToExclude)];

  for (let i = 0; i < numberOfAnimalsToReturn - 1; i++) {
    animalsToExclude.push(animalsToReturn[i]);

    animalsToReturn.push(chooseAnimalAtRandom(animalsToExclude));
  }

  return animalsToReturn;
};

export const shuffle = (array) => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export const checkCorrectAnswer = (animal, correct) => {
  //take animal from monkeypong
  if (animal !== correct) {
    return Alert.alert("oopsie, try again");
  } else {
    return Alert.alert("GOOD JOB!!!!", "That is correct!");
  }

  //check pressed animal
  //if monkeypong !== pressed = red background
  //if monkeypong === pressed = correct
};
