import { TransformationMatrix } from '../Transformation/TransformationMatrix';

export class RotationMatrix extends TransformationMatrix {
  public constructor(degree: number) {
    super([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 1],
    ]);

    const radians = this.degreesToRadians(degree);

    const cosine = Math.cos(radians);
    const sine = Math.sin(radians);

    this.values[0][0] = cosine;
    this.values[0][1] = (sine * -1);
    this.values[1][0] = sine;
    this.values[1][1] = cosine;
  }

  private degreesToRadians(degree: number) {
    return degree * (Math.PI / 180);
  }
}
