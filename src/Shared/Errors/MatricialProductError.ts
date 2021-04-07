import { MatrixError } from './MatrixError';

/**
 * Exception generate by matricial product static methods
 */
export class MatricialProductError extends MatrixError {
  public constructor() {
    super();

    this.name = 'Matricial product error';
    this.message = 'Error on calculating matricial product';
  }
}
