import { TransformationMatrix } from '../Transformation/TransformationMatrix';

export class TransformationConcreteProduct extends TransformationMatrix {
  public constructor(xAxisRate: number, yAxisRate: number) {
    super([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ]);

    this.values[2][0] = xAxisRate;
    this.values[2][1] = yAxisRate;
  }
}
