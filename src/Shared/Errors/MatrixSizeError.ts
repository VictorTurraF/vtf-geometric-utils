import { MatrixError } from './MatrixError';

export class MatrixSizeError extends MatrixError {
  public constructor() {
    super();

    this.name = 'Matrix size error';
    this.message = 'Invalid matrix provided to Matrix constructor. '
      + 'The matrix should be compatible with itself number of lines and columns';
  }
}
