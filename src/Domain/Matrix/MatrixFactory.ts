import { Matrix } from './Matrix';

export class MatrixFactory {
  public static createRegularMatrix() {
    return new Matrix(2, 3, [
      [1, 2, 3],
      [1, 2, 3],
    ]);
  }

  public static createIrregularMatrix() {
    return new Matrix(2, 3, [
      [1, 2, 3],
      [1, 2],
    ]);
  }

  public static create2RowsBy3ColumnsMatrix() {
    return new Matrix(2, 3, [
      [1, 2, 3],
      [-2, 0, 4],
    ]);
  }

  public static create2RowsBy2ColumnsMatrix() {
    return new Matrix(2, 2, [
      [1, 5],
      [2, 2],
    ]);
  }

  public static create3RowsBy2ColumnsMatrix() {
    return new Matrix(3, 2, [
      [2, 3],
      [0, 1],
      [-1, 4],
    ]);
  }
}
