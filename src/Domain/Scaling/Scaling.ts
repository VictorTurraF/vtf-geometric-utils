import { Transformation } from '../Transformation/Transformation';
import { ScalingMatrix } from './ScalingMatrix';

export class Scaling extends Transformation {
  public constructor(
    public xRate: number,
    public yRate: number,
  ) {
    super();
  }

  public createTransformationMatrix() {
    return new ScalingMatrix(this.xRate, this.yRate);
  }
}
