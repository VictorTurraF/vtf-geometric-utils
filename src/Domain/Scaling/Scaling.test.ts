import { ScalingFactory } from './ScalingFactory';

describe('Scaling transformation class', () => {
  it('should escaling a point correctly', () => {
    const scaling = ScalingFactory.createScalingTransformation();

    expect(scaling.apply([2, 2])).toEqual([4, 6]);
    expect(scaling.apply([2, 4])).toEqual([4, 12]);
  });

  it('should scaling verticaly a point', () => {
    const scaling = ScalingFactory.createVerticalScaling();

    expect(scaling.apply([2, 2])).toEqual([2, 4]);
  });

  it('should scaling horizontaly a point', () => {
    const scaling = ScalingFactory.createHorizontalScaling();

    expect(scaling.apply([2, 2])).toEqual([4, 2]);
  });
});
