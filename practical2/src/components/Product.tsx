import React from 'react';

interface Name {
  name?: string;
}

const Product = (prop: Name) => {
  return <h2>{prop.name}</h2>;
}

export default Product;
