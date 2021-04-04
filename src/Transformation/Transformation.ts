import { Matrix } from '../Matrix/Matrix';
import { TransformationMatrix } from './TransformationMatrix';

export abstract class Transformation {
  public abstract createTransformationMatrix(): TransformationMatrix;

  private createPointHomogeneosCoordinate(point: [number, number]) {
    return new Matrix(1, 3, [
      [point[0], point[1], 1],
    ]);
  }

  public apply(point: [number, number]) {
    const transformationMatrix = this.createTransformationMatrix();
    const homogeneousPoint = this.createPointHomogeneosCoordinate(point);

    transformationMatrix.assignRate();

    const result = Matrix.multiplyTwoFactors([homogeneousPoint, transformationMatrix]);
    const transformedPoint = [result.values[0][0], result.values[0][1]];

    return transformedPoint;
  }
}
