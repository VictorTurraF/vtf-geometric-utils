import { TransformationConcreteCreator } from '../Mocks/TransformationConcreteCreator';

export class TransformationFactory {
  public static createTransformationCreator() {
    return new TransformationConcreteCreator();
  }
}
