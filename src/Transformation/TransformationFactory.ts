import { TransformationConcreteCreator } from '../Mocks/TransformationConcreteCreator';

export class TransformationFactory {
  public static createTransformationProduct() {
    return new TransformationConcreteCreator();
  }
}
