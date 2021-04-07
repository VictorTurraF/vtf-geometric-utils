import { TransformationMatrix } from '../Transformation/TransformationMatrix';

export class TranslationMatrix extends TransformationMatrix {
  public constructor(xAxis: number, yAxis: number) {
    super([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ]);

    this.values[2][0] = xAxis;
    this.values[2][1] = yAxis;
  }
}
