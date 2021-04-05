import { Transformation } from '../Transformation/Transformation';
import { TranslationMatrix } from './TranslationMatrix';

export class Translation extends Transformation {
  public constructor(
    public xVariation: number,
    public yVariation: number,
  ) {
    super();
  }

  public createTransformationMatrix() {
    return new TranslationMatrix(
      this.xVariation,
      this.yVariation,
    );
  }
}
