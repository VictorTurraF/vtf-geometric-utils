import { SelfScaling } from './SelfScaling';

describe('Self Scaling class', () => {
  it('should not throwing any error when creating the self scaling', () => {
    const createSelfScaling = () => new SelfScaling(2, 2);

    expect(createSelfScaling).not.toThrowError();
    expect(createSelfScaling()).toHaveProperty('xRate');
    expect(createSelfScaling()).toHaveProperty('yRate');
  });

  it('should applying a self scaling to multiples points', () => {
    const selfScaling = new SelfScaling(2, 2);

    expect(selfScaling.applyToPoints([
      [2, 2],
      [2, 4],
      [4, 2],
      [4, 4],
    ])).toEqual([
      [1, 1],
      [1, 5],
      [5, 1],
      [5, 5],
    ]);
  });
});
