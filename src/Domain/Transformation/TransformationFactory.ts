import { TransformationConcreteCreator } from '../../Shared/Mocks/TransformationConcreteCreator';

export class TransformationFactory {
  public static createTransformationCreator() {
    return new TransformationConcreteCreator();
  }
}
