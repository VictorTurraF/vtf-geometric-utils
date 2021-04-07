import { MatrixSizeError } from '../../Shared/Errors/MatrixSizeError';
import { RotationFactory } from './RotationFactory';

describe('Rotation factory class', () => {
  it('should not throw any error on creating a Rotation transformation matrix', () => {
    const createMatrix = () => RotationFactory.createRotationMatrix();

    expect(createMatrix).not.toThrow(MatrixSizeError);
    expect(createMatrix).not.toThrowError();
  });

  it('should not throw any error on create the Rotation transformation', () => {
    expect(RotationFactory.createRotationTransformation).not.toThrowError();
  });

  it('should instancing the rotation matrix with correct values', () => {
    const rotationMatrix = RotationFactory.createRotationMatrix();

    expect(rotationMatrix).toBeDefined();
    expect(rotationMatrix.values).toBeDefined();

    expect(rotationMatrix.values[0][0]).toBeCloseTo(0.5);
    expect(rotationMatrix.values[0][1]).toBeCloseTo(-0.866, 3);
    expect(rotationMatrix.values[1][0]).toBeCloseTo(0.866, 3);
    expect(rotationMatrix.values[1][1]).toBeCloseTo(0.5);

    expect(rotationMatrix.values[0][2]).toBe(0);
    expect(rotationMatrix.values[1][2]).toBe(0);
    expect(rotationMatrix.values[2][2]).toBe(1);
    expect(rotationMatrix.values[2][0]).toBe(0);
    expect(rotationMatrix.values[2][1]).toBe(0);
  });

  it('should instancing the rotation tranformation with correct values', () => {
    const rotation = RotationFactory.createRotationTransformation();

    expect(rotation.degree).toBe(60);
    expect(rotation.apply).toBeDefined();
    expect(rotation.createTransformationMatrix).toBeDefined();

    expect(() => rotation.createTransformationMatrix()).not.toThrow(MatrixSizeError);
    expect(() => rotation.createTransformationMatrix()).not.toThrowError();
  });
});
