import { InconpatibleMatricesError } from '../../Shared/Errors/IncompatibleMatricesError';
import { MatrixSizeError } from '../../Shared/Errors/MatrixSizeError';
import { TooFewFactorsError } from '../../Shared/Errors/TooFewFactorsError';

export type NumericMatrix = number[][];
export type MapColumnsCallBack<T> = (column: number[], index: number, matrix: NumericMatrix) => T;

export class Matrix {
  public values: NumericMatrix;

  public constructor(
    public readonly NUMBER_OF_LINES: number,
    public readonly NUMBER_OF_COLUMNS: number,
    values: NumericMatrix,
  ) {
    if (this.isValidValues(values)) {
      this.values = values;
    } else {
      throw new MatrixSizeError();
    }
  }

  private isValidValues(values: NumericMatrix) {
    if (values.length !== this.NUMBER_OF_LINES) {
      return false;
    }

    return values.every((line) => (
      line.length === this.NUMBER_OF_COLUMNS
    ));
  }

  public static multiplyManyFactors(factors: Matrix[]) {
    const MIN_ALLOWED_FACTORS = 3;

    if (factors.length < MIN_ALLOWED_FACTORS) {
      throw new TooFewFactorsError();
    }

    if (!this.canMultipy(factors)) {
      throw new InconpatibleMatricesError();
    }

    return factors
      .reduce((matricialProduct, factor) => (
        Matrix.multiplyTwoFactors([matricialProduct, factor])
      ));
  }

  public static canMultipy(factors: Matrix[]) {
    for (let position = 0; position < factors.length - 1; position += 1) {
      const factor = factors[position];
      const nextFactor = factors[position + 1];

      if (factor.NUMBER_OF_COLUMNS !== nextFactor.NUMBER_OF_LINES) {
        return false;
      }
    }

    return true;
  }

  public static multiplyTwoFactors(factors: [Matrix, Matrix]): Matrix {
    if (!this.canMultipy(factors)) {
      throw new InconpatibleMatricesError();
    }

    const [leftFactor, rightFactor] = factors;
    const resultingMatrix = leftFactor.values.map((leftLine) => (
      rightFactor.mapColumn((rightColumn) => (
        leftLine.reduce((sum, value, index) => (
          sum + (value * rightColumn[index])
        ), 0)
      ))
    ));

    return new Matrix(
      leftFactor.NUMBER_OF_LINES,
      rightFactor.NUMBER_OF_COLUMNS,
      resultingMatrix,
    );
  }

  public static getMatrixColumn(matrix: Matrix, columnIndex: number): number[] {
    return matrix.values.map((line) => line[columnIndex]);
  }

  public mapColumn<T>(callback: MapColumnsCallBack<T>) {
    const result: T[] = [];

    for (let columnIndex = 0; columnIndex < this.NUMBER_OF_COLUMNS; columnIndex += 1) {
      const column = Matrix.getMatrixColumn(this, columnIndex);
      const mappedColumn = callback(column, columnIndex, this.values);
      result.push(mappedColumn);
    }

    return result;
  }
}
