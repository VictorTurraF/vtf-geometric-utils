import { Scaling } from './Scaling';

export class ScalingFactory {
  public static createScalingTransformation() {
    return new Scaling(2, 3);
  }

  public static createVerticalScaling() {
    return new Scaling(1, 2);
  }

  public static createHorizontalScaling() {
    return new Scaling(2, 1);
  }
}
