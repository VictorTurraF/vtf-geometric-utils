import { Transformation } from '../Transformation/Transformation';
import { TransformationConcreteProduct } from './TransformationConcreteProduct';

export class TransformationConcreteCreator extends Transformation {
  createTransformationMatrix() {
    return new TransformationConcreteProduct(2, 3);
  }
}
