import { Transformation } from '../Transformation/Transformation';
import { TransformationConcreteProduct } from './TransformationConcreteProduct';

export class TransformationConcreteCreator extends Transformation {
  public createTransformationMatrix() {
    return new TransformationConcreteProduct(2, 3);
  }
}
