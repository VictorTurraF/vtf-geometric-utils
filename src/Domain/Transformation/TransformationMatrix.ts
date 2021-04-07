import { Matrix, NumericMatrix } from '../Matrix/Matrix';

export abstract class TransformationMatrix extends Matrix {
  public constructor(values: NumericMatrix) {
    super(3, 3, values);
  }
}
