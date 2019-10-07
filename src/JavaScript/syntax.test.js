import functions from './syntax';
import { exportAllDeclaration } from '@babel/types';

test('check number', () => {
    expect(functions.number(5)).toBe(null)
})