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
    const transformedPoint = [result.values[0][0], result.values[0][1]];

    return transformedPoint;
  }
}
