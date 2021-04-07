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

  it('should be applying to multiple points', () => {
    const rotation = RotationFactory.createRotationTransformation();

    const rotationResult = rotation.applyToPoints([
      [5, 0],
      [-5, 0],
    ]);

    expect(rotationResult[0][0]).toBeCloseTo(2.5);
    expect(rotationResult[0][1]).toBeCloseTo(-4.3301);
    expect(rotationResult[1][0]).toBeCloseTo(-2.5);
    expect(rotationResult[1][1]).toBeCloseTo(4.3301);
  });
});
