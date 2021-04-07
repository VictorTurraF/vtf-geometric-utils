import { MatricialProductError } from './MatricialProductError';

/**
 * @extends MatricialProductError
 */
export class TooFewFactorsError extends MatricialProductError {
  public constructor() {
    super();

    this.message = 'Too few factors given to matricial product, '
      + 'consider using Matrix.multiplyTwoFactors()';
  }
}
