import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { product2 } from '../data/products';
import { ProductImage } from '../../src/components/ProductImage';

describe('ProductImage', () => {
  test('debe mostrar el componente con imagen personalizada', () => {
    const wrapper = renderer.create(<ProductImage img="url" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de mostrar el componente con la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
