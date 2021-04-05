import { TranslationFactory } from './TranslationFactory';
import { TranslationMatrix } from './TranslationMatrix';

describe('Translation class', () => {
  it('should instancing the translation object', () => {
    const translation = TranslationFactory.createDiagonalTranslator();

    expect(translation).toBeDefined();
    expect(translation.xVariation).toBe(2);
    expect(translation.yVariation).toBe(3);
  });

  it('should creating the correce product instance', () => {
    const translation = TranslationFactory.createDiagonalTranslator();
    const translationMatrix = translation.createTransformationMatrix();

    expect(translationMatrix).toBeDefined();
    expect(translationMatrix).toBeInstanceOf(TranslationMatrix);
  });

  it('should creating the correct transformation matrix for translation', () => {
    const translation = TranslationFactory.createDiagonalTranslator();
    const transformationMatrix = translation.createTransformationMatrix();

    expect(transformationMatrix.values).toEqual([
      [1, 0, 0],
      [0, 1, 0],
      [2, 3, 1],
    ]);
  });

  it('should doing a positive horizontal translation', () => {
    const translation = TranslationFactory.createHorizontalTranslator();

    expect(translation.apply([3, 8])).toEqual([8, 8]);
  });

  it('should doing a negative horizontal translation', () => {
    const translation = TranslationFactory.createNegativeHorizontalTranslator();

    expect(translation.apply([3, 8])).toEqual([-2, 8]);
  });

  it('should doing a positive vertical translation', () => {
    const translation = TranslationFactory.createVerticalTranslator();

    expect(translation.apply([3, 8])).toEqual([3, 13]);
  });

  it('should doing a negative vertical translation', () => {
    const translation = TranslationFactory.createNegativeVerticalTranslator();

    expect(translation.apply([3, 8])).toEqual([3, 3]);
  });

  it('should doing a positive diagonal translation', () => {
    const translation = TranslationFactory.createDiagonalTranslator();

    expect(translation.apply([3, 8])).toEqual([5, 11]);
  });

  it('should doing a positive diagonal translation', () => {
    const translation = TranslationFactory.createNegativeDiagonalTranslator();

    expect(translation.apply([3, 8])).toEqual([1, 5]);
  });
});
