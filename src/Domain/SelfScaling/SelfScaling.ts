import { ScalingMatrix } from '../Scaling/ScalingMatrix';
import { SelfTransformation } from '../SelfTransformation/SelfTransformation';

export class SelfScaling extends SelfTransformation {
  public constructor(
    public xRate: number,
    public yRate: number,
  ) {
    super();
  }

  createTransformationMatrix() {
    return new ScalingMatrix(this.xRate, this.yRate);
  }
}
