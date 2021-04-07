import { Rotation } from './Rotation';
import { RotationMatrix } from './RotationMatrix';

export class RotationFactory {
  public static createRotationMatrix() {
    return new RotationMatrix(60);
  }

  public static createRotationTransformation() {
    return new Rotation(60);
  }

  public static create90degreesRotation() {
    return new Rotation(90);
  }
}
