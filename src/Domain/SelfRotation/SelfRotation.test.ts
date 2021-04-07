import { SelfRotation } from './SelfRotation';

describe('SelfRotation class', () => {
  it('should not throwing any erron when rotaion', () => {
    const selfRotation = new SelfRotation(45);

    const applySelfRotation = () => selfRotation.applyToPoints([
      [2, 2],
      [2, 4],
      [4, 2],
      [4, 4],
    ]);

    expect(applySelfRotation).not.toThrowError();
  });

  it('should appying a self rotation to multiples points', () => {
    const selfRotation = new SelfRotation(45);

    const result = selfRotation.applyToPoints([
      [2, 2],
      [2, 4],
      [4, 2],
      [4, 4],
    ]);

    expect(result).toHaveLength(4);
    expect(result[0][0]).toBeCloseTo(1.5857);
    expect(result[0][1]).toBeCloseTo(3);
    expect(result[1][0]).toBeCloseTo(3);
    expect(result[1][1]).toBeCloseTo(4.4142);
    expect(result[2][0]).toBeCloseTo(3);
    expect(result[2][1]).toBeCloseTo(1.5857);
    expect(result[3][0]).toBeCloseTo(4.4142);
    expect(result[3][1]).toBeCloseTo(3);
  });
});
