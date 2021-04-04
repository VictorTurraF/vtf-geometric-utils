import { Matrix, NumericMatrix } from '../Matrix/Matrix';
import { TransformationMatrixContract } from './TransformationMatrixContract';

export abstract class TransformationMatrix extends Matrix implements TransformationMatrixContract {
  public constructor(values: NumericMatrix) {
    super(3, 3, values);
  }

  public abstract assignRate(): void;
}
