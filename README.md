# vtf-geometric-utils
Bibliteca JavaScript/TypeScript de transformações geométricas e utilitários para matrizes.

## Instalação

### Requisitos
- Node JS. Qualquer versão entre a 10.x e 15.x
- Yarn package manager

### Passos
1. Clone o repositório:
```
git clone https://github.com/VictorTurraF/vtf-geometric-utils.git
```

2. Na raíz do repositório execute o `yarn` para instalar as dependências:
```
yarn install
```

3. No aquivo `src/index.js` você pode inserir seus códigos. Nele já possui três exemplos utilizando as transformações básicas

4. Para rodar o arquivo `index.js`, execute o seguinte comando na raiz do projeto:
```
yarn start:dev
```

## Sobre
As classes presentes neste projeto permitem realização de diversos tipos de transformações, contendo as básicas, e também pequenas variações delas:

- Translação
- Rotação
- Escalonamento

> E também mais duas variações pré implementadas

A arquitetura do projeto permite a criação de novos tipos de transformações geometricas, por meio de abstrações de classes.

>Por exemplo, é possível criar uma nova transformação que realize ambas __Rotação__ e __Translação__ apenas estendendo a classe `Transformation`, e as utilizando as classes `RotationMatrix` e `TranslationMatrix`   

## Exemplos
### Uso

Imagine que você quer rotacionar em 45 graus um quadrado dados os seus pontos:
```
A = (2, 2)
B = (2, 4)
C = (4, 2)
D = (4, 4)
```

Basta fazer da seguinte forma:
```js
const { SelfRotation } = require('./Domain/SelfRotation/SelfRotation');

const squarePoints = [
  [2, 2],
  [2, 4],
  [4, 2],
  [4, 4],
];

const rotation = new SelfRotation(45);
const rotationResult = rotation.applyToPoints(squarePoints);

console.log(rotationResult)

/* Irá mostar no console algo como:
 *
 * [[1.5857..., 3], 
 *  [3, 4.4142...],
 *  [3, 1.5857...], 
 *  [4.4142..., 3]] 
 */
```