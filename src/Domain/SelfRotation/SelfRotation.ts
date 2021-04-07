import { RotationMatrix } from '../Rotation/RotationMatrix';
import { SelfTransformation } from '../SelfTransformation/SelfTransformation';

export class SelfRotation extends SelfTransformation {
  public constructor(
    public degree: number,
  ) {
    super();
  }

  public createTransformationMatrix() {
    return new RotationMatrix(this.degree);
  }
}
