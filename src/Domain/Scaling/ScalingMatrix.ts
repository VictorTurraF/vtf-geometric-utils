import { TransformationMatrix } from '../Transformation/TransformationMatrix';

export class ScalingMatrix extends TransformationMatrix {
  public constructor(xRate: number, yRate: number) {
    const matrix = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 1],
    ];

    matrix[0][0] = xRate;
    matrix[1][1] = yRate;

    super(matrix);
  }
}
