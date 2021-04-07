import { Matrix } from '../Matrix/Matrix';
import { TransformationMatrix } from './TransformationMatrix';

export type Point = [number, number];

export abstract class Transformation {
  public abstract createTransformationMatrix(): TransformationMatrix;

  private createPointHomogeneosCoordinate(point: Point) {
    const [xCoordinate, yCoordinate] = point;

    return new Matrix(1, 3, [
      [xCoordinate, yCoordinate, 1],
    ]);
  }

  public apply(point: Point) {
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

  public applyToPoints(points: Point[]) {
    const transformationMatrix = this.createTransformationMatrix();
    const homogeneousPointsMatrix = this.createHomogeneousPointsMatrix(points);

    const result = Matrix.multiplyTwoFactors([homogeneousPointsMatrix, transformationMatrix]);

    const resultingPoints = result.values.map(([xResulting, yResulting]) => (
      [this.resultRounder(xResulting), this.resultRounder(yResulting)]));

    return resultingPoints;
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

  public createHomogeneousPointsMatrix(points: Point[]) {
    const homogeneousPoints = points.map((point) => [point[0], point[1], 1]);
    return new Matrix(points.length, 3, homogeneousPoints);
  }
}
