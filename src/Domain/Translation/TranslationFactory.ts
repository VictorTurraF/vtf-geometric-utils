import { Translation } from './Translation';

export class TranslationFactory {
  public static createHorizontalTranslator() {
    return new Translation(5, 0);
  }

  public static createVerticalTranslator() {
    return new Translation(0, 5);
  }

  public static createDiagonalTranslator() {
    return new Translation(2, 3);
  }

  public static createNegativeDiagonalTranslator() {
    return new Translation(-2, -3);
  }

  public static createNegativeHorizontalTranslator() {
    return new Translation(-5, 0);
  }

  public static createNegativeVerticalTranslator() {
    return new Translation(0, -5);
  }
}
