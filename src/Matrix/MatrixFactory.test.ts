import { MatrixFactory } from './MatrixFactory';

describe('Matrix facotry', () => {
  it('should not throw any on use matrix creators', () => {
    expect(MatrixFactory.create2RowsBy2ColumnsMatrix).not.toThrowError();
    expect(MatrixFactory.create3RowsBy2ColumnsMatrix).not.toThrowError();
    expect(MatrixFactory.createRegularMatrix).not.toThrowError();
    expect(MatrixFactory.create2RowsBy2ColumnsMatrix).not.toThrowError();
  });

  it('should throw errors for incorrect creators', () => {
    expect(MatrixFactory.createIrregularMatrix).toThrowError();
  });
});
