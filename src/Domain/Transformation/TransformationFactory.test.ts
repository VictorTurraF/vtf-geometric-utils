import { TransformationFactory } from './TransformationFactory';

describe('Transformation factory', () => {
  it('should not be throwing any error on creating a transformation creator', () => {
    expect(TransformationFactory.createTransformationCreator).not.toThrowError();
  });

  it('should be instancing the tranformation creator', () => {
    const tranformationCreator = TransformationFactory.createTransformationCreator();

    expect(tranformationCreator).toBeDefined();
    expect(tranformationCreator.apply).toBeDefined();
  });
});
