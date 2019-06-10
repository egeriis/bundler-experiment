import { cube } from 'math';

const numbers = [1,2,3,5,8];

export default function() {
  return numbers.map(n => cube(n));
}
