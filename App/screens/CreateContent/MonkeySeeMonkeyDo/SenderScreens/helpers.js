import {chooseAnimalAtRandom} from "../../../../assets/animalList";
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
