/* eslint-disable no-console */
const { SelfRotation } = require('./Domain/SelfRotation/SelfRotation');
const { SelfScaling } = require('./Domain/SelfScaling/SelfScaling');
const { Translation } = require('./Domain/Translation/Translation');

const squarePoints = [
  [2, 2],
  [2, 4],
  [4, 2],
  [4, 4],
];

// Rotação de um objeto
const rotation = new SelfRotation(45);
const rotationResult = rotation.applyToPoints(squarePoints);
console.log('Resultado da rotação do quadrado', rotationResult);

// Escalonamento de um objeto
const scaling = new SelfScaling(2, 2);
const scalingResult = scaling.applyToPoints(squarePoints);
console.log('Resultado do escalonamento do quadrado', scalingResult);

// Translação de um objeto
const translation = new Translation(1, 2);
const translationResult = translation.applyToPoints(squarePoints);
console.log('Resultado da tranlação do quadrado', translationResult);
