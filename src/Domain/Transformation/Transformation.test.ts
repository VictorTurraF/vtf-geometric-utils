import { InconpatibleMatricesError } from '../../Shared/Errors/IncompatibleMatricesError';
import { MatrixSizeError } from '../../Shared/Errors/MatrixSizeError';
import { TransformationConcreteProduct } from '../../Shared/Mocks/TransformationConcreteProduct';
import { TransformationFactory } from './TransformationFactory';

describe('Transformation class', () => {
  it('should not be throwing error when creating your respective product', () => {
    const tranformationCreator = TransformationFactory.createTransformationCreator();

    expect(tranformationCreator.createTransformationMatrix).not.toThrow(MatrixSizeError);
    expect(tranformationCreator.createTransformationMatrix).not.toThrowError();
  });

  it('should be creating the correct instance of your product', () => {
    const tranformationCreator = TransformationFactory.createTransformationCreator();

    expect(tranformationCreator.createTransformationMatrix())
      .toBeInstanceOf(TransformationConcreteProduct);
  });

  it('should not be throwing matrix errors on appling transformation correctly', () => {
    const tranformationCreator = TransformationFactory.createTransformationCreator();

    expect(() => tranformationCreator.apply([1, 1])).not.toThrow(MatrixSizeError);
    expect(() => tranformationCreator.apply([1, 1])).not.toThrow(InconpatibleMatricesError);
  });

  it('should not be throwing any error on appling transformation', () => {
    const tranformationCreator = TransformationFactory.createTransformationCreator();

    expect(() => tranformationCreator.apply([1, 1])).not.toThrowError();
  });

  it('should be returning a correct result of applying transformation', () => {
    const tranformationCreator = TransformationFactory.createTransformationCreator();

    expect(tranformationCreator.apply([2, 1])).toEqual([4, 4]);
  });

  it('should be applying transformation for multiples points', () => {
    const transformationCreator = TransformationFactory.createTransformationCreator();

    expect(transformationCreator.applyToPoints([
      [2, 2],
      [5, 5],
    ]))
      .toEqual([
        [4, 5],
        [7, 8],
      ]);
  });
});
