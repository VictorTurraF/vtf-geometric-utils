import { TranslationFactory } from './TranslationFactory';

describe('Translation factory', () => {
  it('should creating Translations without throwing any error', () => {
    expect(TranslationFactory.createDiagonalTranslator).not.toThrowError();
    expect(TranslationFactory.createNegativeDiagonalTranslator).not.toThrowError();

    expect(TranslationFactory.createHorizontalTranslator).not.toThrowError();
    expect(TranslationFactory.createNegativeHorizontalTranslator).not.toThrowError();

    expect(TranslationFactory.createVerticalTranslator).not.toThrowError();
    expect(TranslationFactory.createNegativeVerticalTranslator).not.toThrowError();
  });
});
