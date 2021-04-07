import { Matrix } from '../Matrix/Matrix';
import { Transformation } from '../Transformation/Transformation';
import { TranslationMatrix } from '../Translation/TranslationMatrix';

type Point = [number, number];

export abstract class SelfTransformation extends Transformation {
  private calculateMidpoint(points: Point[]) {
    const sumOfPoints = points.reduce((lastSumOfPoints, point) => (
      [lastSumOfPoints[0] + point[0], lastSumOfPoints[1] + point[1]]
    ));

    const [sumOfX, sumOfY] = sumOfPoints;

    const midpoint = [
      sumOfX / points.length,
      sumOfY / points.length,
    ];

    return midpoint;
  }

  public applyToPoints(points: Point[]) {
    const midpoint = this.calculateMidpoint(points);
    const homogeneousPointsMatrix = this.createHomogeneousPointsMatrix(points);

    const translationToOriginMatrix = new TranslationMatrix(-midpoint[0], -midpoint[1]);
    const transformationMatrix = this.createTransformationMatrix();
    const translationToLastPositionMatrix = new TranslationMatrix(midpoint[0], midpoint[1]);

    const selfTransformationMatrix = Matrix.multiplyManyFactors([
      translationToOriginMatrix,
      transformationMatrix,
      translationToLastPositionMatrix,
    ]);

    const resultingMatrix = Matrix.multiplyTwoFactors([
      homogeneousPointsMatrix,
      selfTransformationMatrix,
    ]);

    const resultingPoints = resultingMatrix.values.map(([xResulting, yResulting]) => (
      [this.resultRounder(xResulting), this.resultRounder(yResulting)]));

    return resultingPoints as Point[];
  }
}
