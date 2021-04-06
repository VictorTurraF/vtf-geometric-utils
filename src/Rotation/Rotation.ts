import { Transformation } from '../Transformation/Transformation';
import { RotationMatrix } from './RotationMatrix';

export class Rotation extends Transformation {
  public constructor(public degree: number) {
    super();
  }

  public createTransformationMatrix() {
    return new RotationMatrix(this.degree);
  }
}
