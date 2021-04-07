import { RotationMatrix } from './RotationMatrix';

describe('Rotation transformation matrix class', () => {
  it('should instancing correctly an 45(deg) transformation matrix', () => {
    const rotationMatrix = new RotationMatrix(45);

    expect(rotationMatrix.values[0][0]).toBeCloseTo(0.707, 3);
    expect(rotationMatrix.values[0][1]).toBeCloseTo(-0.707, 3);
    expect(rotationMatrix.values[1][0]).toBeCloseTo(0.707, 3);
    expect(rotationMatrix.values[1][1]).toBeCloseTo(0.707, 3);
  });

  it('should instancing correctly an -45(deg) transformation matrix', () => {
    const rotationMatrix = new RotationMatrix(-45);

    expect(rotationMatrix.values[0][0]).toBeCloseTo(0.707, 3);
    expect(rotationMatrix.values[0][1]).toBeCloseTo(0.707, 3);
    expect(rotationMatrix.values[1][0]).toBeCloseTo(-0.707, 3);
    expect(rotationMatrix.values[1][1]).toBeCloseTo(0.707, 3);
  });

  it('should instance correctly an 230(deg) transformation matrix', () => {
    const rotationMatrix = new RotationMatrix(230);

    expect(rotationMatrix.values[0][0]).toBeCloseTo(-0.643, 3);
    expect(rotationMatrix.values[0][1]).toBeCloseTo(0.766, 3);
    expect(rotationMatrix.values[1][0]).toBeCloseTo(-0.766, 3);
    expect(rotationMatrix.values[1][1]).toBeCloseTo(-0.643, 3);
  });

  it('should instance correctly an 230(deg) transformation matrix', () => {
    const rotationMatrix = new RotationMatrix(-230);

    expect(rotationMatrix.values[0][0]).toBeCloseTo(-0.643, 3);
    expect(rotationMatrix.values[0][1]).toBeCloseTo(-0.766, 3);
    expect(rotationMatrix.values[1][0]).toBeCloseTo(0.766, 3);
    expect(rotationMatrix.values[1][1]).toBeCloseTo(-0.643, 3);
  });

  it('should instance correctly an 90(deg) transformation matrix', () => {
    const rotationMatrix = new RotationMatrix(90);

    // 10 decimal of precision is so close
    expect(rotationMatrix.values[0][0]).toBeCloseTo(0, 10);
    expect(rotationMatrix.values[0][1]).toBeCloseTo(-1, 10);
    expect(rotationMatrix.values[1][0]).toBeCloseTo(1, 10);
    expect(rotationMatrix.values[1][1]).toBeCloseTo(0, 10);
  });

  it('should instance correctly an -90(deg) transformation matrix', () => {
    const rotationMatrix = new RotationMatrix(-90);

    // 10 decimal of precision is so close
    expect(rotationMatrix.values[0][0]).toBeCloseTo(0, 10);
    expect(rotationMatrix.values[0][1]).toBeCloseTo(1, 10);
    expect(rotationMatrix.values[1][0]).toBeCloseTo(-1, 10);
    expect(rotationMatrix.values[1][1]).toBeCloseTo(0, 10);
  });
});
