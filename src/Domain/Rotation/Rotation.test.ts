import { RotationFactory } from './RotationFactory';
import { RotationMatrix } from './RotationMatrix';

describe('Rotation transformation class', () => {
  it('should be creating the correct product', () => {
    const rotation = RotationFactory.createRotationTransformation();

    expect(rotation.createTransformationMatrix()).toBeInstanceOf(RotationMatrix);
  });

  it('should be applying the tranformation given an point', () => {
    const rotation = RotationFactory.create90degreesRotation();

    expect(rotation.apply([5, 1])).toEqual([1, -5]);
  });
});
