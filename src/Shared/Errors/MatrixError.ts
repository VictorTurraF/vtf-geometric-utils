/**
 * Matrix error base class
 */
export class MatrixError extends Error {
  public constructor() {
    super();

    this.name = 'Matrix error';
    this.message = 'Error on handle an matrix object';
  }
}
