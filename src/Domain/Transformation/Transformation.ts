import { Matrix } from '../Matrix/Matrix';
import { TransformationMatrix } from './TransformationMatrix';

export abstract class Transformation {
  public abstract createTransformationMatrix(): TransformationMatrix;

  private createPointHomogeneosCoordinate(point: [number, number]) {
    const [xCoordinate, yCoordinate] = point;

    return new Matrix(1, 3, [
      [xCoordinate, yCoordinate, 1],
    ]);
  }

  public apply(point: [number, number]) {
    const transformationMatrix = this.createTransformationMatrix();
    const homogeneousPoint = this.createPointHomogeneosCoordinate(point);

    const result = Matrix.multiplyTwoFactors([homogeneousPoint, transformationMatrix]);
    const [xResulting, yResulting] = result.values[0];

    const transformedPoint = [
      this.resultRounder(xResulting),
      this.resultRounder(yResulting),
    ];

    return transformedPoint;
  }

  public resultRounder(value: number) {
    const absoluteValue = Math.abs(value);
    const roundedValue = Math.round(value);
    const roundedAbsoluteValue = Math.round(absoluteValue);

    const difference = Math.abs(absoluteValue - roundedAbsoluteValue);

    if (difference < 0.000000000000001) {
      return roundedValue;
    }
    return value;
  }
}
