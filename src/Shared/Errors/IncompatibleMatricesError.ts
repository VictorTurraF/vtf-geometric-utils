import { MatricialProductError } from './MatricialProductError';

export class InconpatibleMatricesError extends MatricialProductError {
  public constructor() {
    super();

    this.message = 'Incompatible matrices given to calculate the matricial product, '
      + 'the first matrix should have a column size equals to line size o second matrix. '
      + 'Similarly when you want multipy several matrices .';
  }
}
