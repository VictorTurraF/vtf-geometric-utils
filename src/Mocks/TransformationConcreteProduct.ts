import { TransformationMatrix } from '../Transformation/TransformationMatrix';

export class TransformationConcreteProduct extends TransformationMatrix {
  public rate: { xAxis: number, yAxis: number };

  public constructor(xAxisRate: number, yAxisRate: number) {
    super([
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1],
    ]);

    this.rate = {
      xAxis: xAxisRate,
      yAxis: yAxisRate,
    };
  }

  assignRate() {
    this.values[2][0] = this.rate.xAxis;
    this.values[2][1] = this.rate.yAxis;
  }
}
