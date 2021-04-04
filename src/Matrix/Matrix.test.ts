import { InconpatibleMatricesError } from '../Errors/IncompatibleMatricesError';
import { TooFewFactorsError } from '../Errors/TooFewFactorsError';
import { MatrixSizeError } from '../Errors/MatrixSizeError';
import { Matrix } from './Matrix';
import { MatrixFactory } from './MatrixFactory';

describe('Matrix class', () => {
  it('should not create a matrix if this one is irregular', () => {
    expect(MatrixFactory.createIrregularMatrix).toThrow(MatrixSizeError);
  });

  it('should create a matrix if this one is regular', () => {
    expect(MatrixFactory.createRegularMatrix).not.toThrow(MatrixSizeError);
    expect(MatrixFactory.createRegularMatrix).toBeDefined();
    expect(MatrixFactory.createRegularMatrix().values).toEqual([
      [1, 2, 3],
      [1, 2, 3],
    ]);
  });

  it('should mapping columns correctly', () => {
    const regularMatrix = MatrixFactory.createRegularMatrix();
    const mapCallback = jest.fn();

    regularMatrix.mapColumn(mapCallback);

    expect(mapCallback.mock.calls[0][0]).toEqual([1, 1]);
    expect(mapCallback.mock.calls[1][0]).toEqual([2, 2]);
    expect(mapCallback.mock.calls[2][0]).toEqual([3, 3]);

    expect(mapCallback.mock.calls[0][1]).toBe(0);
    expect(mapCallback.mock.calls[1][1]).toBe(1);
    expect(mapCallback.mock.calls[2][1]).toBe(2);

    expect(mapCallback.mock.calls[0][2]).toEqual(regularMatrix.values);
    expect(mapCallback.mock.calls[1][2]).toEqual(regularMatrix.values);
    expect(mapCallback.mock.calls[2][2]).toEqual(regularMatrix.values);

    expect(mapCallback).toBeCalledTimes(3);
  });
});

describe('Multiply two matrices method', () => {
  it('should not throwing any error', () => {
    const firstFeactorMatrix = MatrixFactory.create3RowsBy2ColumnsMatrix();
    const secondFeactorMatrix = MatrixFactory.create2RowsBy3ColumnsMatrix();

    const muliply = () => Matrix.multiplyTwoFactors([firstFeactorMatrix, secondFeactorMatrix]);
    expect(muliply).not.toThrow(MatrixSizeError);
    expect(muliply).not.toThrow(InconpatibleMatricesError);
    expect(muliply).not.toThrowError();
  });

  it('should thrown an error if the matrice sizes weren\'t compatible', () => {
    const firstFeactorMatrix = MatrixFactory.createRegularMatrix();
    const secondFeactorMatrix = MatrixFactory.create2RowsBy3ColumnsMatrix();

    const multiply = () => Matrix.multiplyTwoFactors([firstFeactorMatrix, secondFeactorMatrix]);

    expect(multiply).toThrow(InconpatibleMatricesError);
  });

  it('should multiply correctly two matrices (3x2 * 2x3)', () => {
    const firstFeactorMatrix = MatrixFactory.create3RowsBy2ColumnsMatrix();
    const secondFeactorMatrix = MatrixFactory.create2RowsBy3ColumnsMatrix();

    const resultingMatrix = Matrix.multiplyTwoFactors([firstFeactorMatrix, secondFeactorMatrix]);

    expect(resultingMatrix).toBeInstanceOf(Matrix);
    expect(resultingMatrix.NUMBER_OF_COLUMNS).toBe(3);
    expect(resultingMatrix.NUMBER_OF_LINES).toBe(3);
    expect(resultingMatrix.values).toEqual([
      [-4, 4, 18],
      [-2, 0, 4],
      [-9, -2, 13],
    ]);
  });

  it('should multiply correctly two matrices (2x3 * 3x2)', () => {
    const firstFeactorMatrix = MatrixFactory.create2RowsBy3ColumnsMatrix();
    const secondFeactorMatrix = MatrixFactory.create3RowsBy2ColumnsMatrix();

    const resultingMatrix = Matrix.multiplyTwoFactors([firstFeactorMatrix, secondFeactorMatrix]);

    expect(resultingMatrix).toBeInstanceOf(Matrix);
    expect(resultingMatrix.NUMBER_OF_COLUMNS).toBe(2);
    expect(resultingMatrix.NUMBER_OF_LINES).toBe(2);
    expect(resultingMatrix.values).toEqual([
      [-1, 17],
      [-8, 10],
    ]);
  });
});

describe('Verify if multiplication is possible method', () => {
  it('should inform the can not multiply two incompatible matrices', () => {
    const firstFeactorMatrix = MatrixFactory.create2RowsBy3ColumnsMatrix();
    const secondFeactorMatrix = MatrixFactory.createRegularMatrix();

    const canMultipy = () => Matrix.canMultipy([firstFeactorMatrix, secondFeactorMatrix]);
    expect(canMultipy()).toBe(false);
  });

  it('should inform that can not multiply three incompatible matrices', () => {
    const firstMatrix = MatrixFactory.create2RowsBy3ColumnsMatrix();
    const secondMatrix = MatrixFactory.create3RowsBy2ColumnsMatrix();
    const thirdMatrix = MatrixFactory.create3RowsBy2ColumnsMatrix();

    const canMultipy = () => Matrix.canMultipy([firstMatrix, secondMatrix, thirdMatrix]);
    expect(canMultipy()).toBe(false);
  });

  it('should inform that can mutiply two compatible matrices', () => {
    const firstFeactorMatrix = MatrixFactory.create3RowsBy2ColumnsMatrix();
    const secondFeactorMatrix = MatrixFactory.create2RowsBy3ColumnsMatrix();

    const canMultipy = () => Matrix.canMultipy([firstFeactorMatrix, secondFeactorMatrix]);
    expect(canMultipy()).toBe(true);

    expect(firstFeactorMatrix.values).toBeDefined();
    expect(firstFeactorMatrix.values).toBeDefined();
  });

  it('should inform that can multiply three compatible matrices', () => {
    const firstMatrix = MatrixFactory.create3RowsBy2ColumnsMatrix();
    const secondMatrix = MatrixFactory.create2RowsBy2ColumnsMatrix();
    const thirdMatrix = MatrixFactory.create2RowsBy3ColumnsMatrix();

    const canMultipy = () => Matrix.canMultipy([firstMatrix, secondMatrix, thirdMatrix]);
    expect(canMultipy()).toBe(true);
  });
});

describe('Multiply tree matrices method', () => {
  it('should throw an error if matrices sizes weren\'t compatibles', () => {
    const firstMatrix = MatrixFactory.create3RowsBy2ColumnsMatrix();
    const secondMatrix = MatrixFactory.create2RowsBy3ColumnsMatrix();
    const thirdMatrix = MatrixFactory.create2RowsBy2ColumnsMatrix();

    const multiply = () => Matrix.multiplyManyFactors([firstMatrix, secondMatrix, thirdMatrix]);
    expect(multiply).toThrow(InconpatibleMatricesError);
  });

  it('should throw an error if passed two matrices', () => {
    const firstMatrix = MatrixFactory.create3RowsBy2ColumnsMatrix();
    const secondMatrix = MatrixFactory.create2RowsBy3ColumnsMatrix();

    const multiply = () => Matrix.multiplyManyFactors([firstMatrix, secondMatrix]);
    expect(multiply).toThrow(TooFewFactorsError);
  });

  it('should not thowing any error', () => {
    const firstMatrix = MatrixFactory.create3RowsBy2ColumnsMatrix();
    const secondMatrix = MatrixFactory.create2RowsBy3ColumnsMatrix();
    const thirdMatrix = MatrixFactory.create3RowsBy2ColumnsMatrix();

    const multiply = () => Matrix.multiplyManyFactors([firstMatrix, secondMatrix, thirdMatrix]);
    expect(multiply).not.toThrow(InconpatibleMatricesError);
    expect(multiply).not.toThrow(TooFewFactorsError);
    expect(multiply).not.toThrowError();
  });

  it('should muliply correctly the matrices', () => {
    const firstMatrix = MatrixFactory.create3RowsBy2ColumnsMatrix();
    const secondMatrix = MatrixFactory.create2RowsBy3ColumnsMatrix();
    const thirdMatrix = MatrixFactory.create3RowsBy2ColumnsMatrix();

    const resultingMatrix = Matrix.multiplyManyFactors([
      firstMatrix,
      secondMatrix,
      thirdMatrix,
    ]);

    expect(resultingMatrix).toBeInstanceOf(Matrix);
    expect(resultingMatrix.NUMBER_OF_COLUMNS).toBe(2);
    expect(resultingMatrix.NUMBER_OF_LINES).toBe(3);
    expect(resultingMatrix.values).toEqual([
      [-26, 64],
      [-8, 10],
      [-31, 23],
    ]);
  });
});
