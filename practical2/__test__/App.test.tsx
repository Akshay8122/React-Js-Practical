
import Product from '../src/components/Product';
import React from 'react';
import { render,screen } from "@testing-library/react";

test('should render New component and Check Equality', () => {
   render(<Product name="Akshay"/>);
   const element = screen.getByText("Akshay");
   expect(element).toEqual; 
});

const mul = (a: unknown, b: unknown) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a * b;
  }
};

describe('Multiply function',() => {

  test('should Multiply 3 and 5 using mul function', () => {
    const result: number = mul(3, 5);
    expect(result).toBe(15);
  });
  
  test('should not Multiply if any of two values are not number', () => {
    const result: number = mul(3, "5");
    expect(result).toBeUndefined();
    expect(result).toBeFalsy();
  });
  
})


