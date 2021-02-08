const animalPicturesDirectory = "./images/animals";

const animalList = {
  beaver: require(`${animalPicturesDirectory}/beaver.png`),
  bee: require(`${animalPicturesDirectory}/bee.png`),
  butterfly: require(`${animalPicturesDirectory}/butterfly.png`),
  cat: require(`${animalPicturesDirectory}/cat.png`),
  chicken: require(`${animalPicturesDirectory}/chicken.png`),
  cow: require(`${animalPicturesDirectory}/cow.png`),
  crab: require(`${animalPicturesDirectory}/crab.png`),
  crocodile: require(`${animalPicturesDirectory}/crocodile.png`),
  dog: require(`${animalPicturesDirectory}/dog.png`),
  dolphin: require(`${animalPicturesDirectory}/dolphin.png`),
  elephant: require(`${animalPicturesDirectory}/elephant.png`),
  fish: require(`${animalPicturesDirectory}/fish.png`),
  fox: require(`${animalPicturesDirectory}/fox.png`),
  frog: require(`${animalPicturesDirectory}/frog.png`),
  giraffe: require(`${animalPicturesDirectory}/giraffe.png`),
  goat: require(`${animalPicturesDirectory}/goat.png`),
  gorilla: require(`${animalPicturesDirectory}/gorilla.png`),
  grasshopper: require(`${animalPicturesDirectory}/grasshopper.png`),
  horse: require(`${animalPicturesDirectory}/horse.png`),
  kangaroo: require(`${animalPicturesDirectory}/kangaroo.png`),
  lion: require(`${animalPicturesDirectory}/lion.png`),
  llama: require(`${animalPicturesDirectory}/llama.png`),
  macaw: require(`${animalPicturesDirectory}/macaw.png`),
  monkey: require(`${animalPicturesDirectory}/monkey.png`),
  octopus: require(`${animalPicturesDirectory}/octopus.png`),
  owl: require(`${animalPicturesDirectory}/owl.png`),
  penguin: require(`${animalPicturesDirectory}/penguin.png`),
  pig: require(`${animalPicturesDirectory}/pig.png`),
  rabbit: require(`${animalPicturesDirectory}/rabbit.png`),
  rat: require(`${animalPicturesDirectory}/rat.png`),
  duck: require(`${animalPicturesDirectory}/rubber-duck.png`),
  seal: require(`${animalPicturesDirectory}/seal.png`),
  shark: require(`${animalPicturesDirectory}/shark.png`),
  snail: require(`${animalPicturesDirectory}/snail.png`),
  snake: require(`${animalPicturesDirectory}/snake.png`),
  spider: require(`${animalPicturesDirectory}/spider.png`),
  tiger: require(`${animalPicturesDirectory}/tiger.png`),
  whale: require(`${animalPicturesDirectory}/whale.png`),
  woodpecker: require(`${animalPicturesDirectory}/woodpecker.png`),
};

export const chooseAnimalAtRandom = (animalsToExclude = []) => {
  const allAnimals = Object.keys(animalList);
  const filteredAnimals = allAnimals.filter(
    (animal) => !animalsToExclude.includes(animal)
  );

  const NoOfAnimals = filteredAnimals.length;
  const indexAtRandom = Math.floor(Math.random() * NoOfAnimals);

  return filteredAnimals[indexAtRandom];
};

export const getAnimalPicture = (animal) => {
  return animalList[animal];
};
