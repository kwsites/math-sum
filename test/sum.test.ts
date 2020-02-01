import { sum, sumOf } from '../lib/sum';

test('sum is aliased for ease of importing', () => {
    expect(sumOf).toBe(sum);
});

test('summed numbers from array', () => {

    expect(sum([123, 456])).toBe(579);
    expect(sum([-10, 10])).toBe(0);
    expect(sum([1.5, -2.5])).toBe(-1);

});

test('summed numbers ignore NaN', () => {

    expect(sum([NaN, 456])).toBe(456);
    expect(sum([-10, NaN])).toBe(-10);

});

test('summed numbers allow for numbers rather than an array of numbers', () => {

    expect(sum(456 as any)).toBe(456);
    expect(sum(NaN as any)).toBe(0);

});

test('summed numbers allow for spread rather than array of numbers', () => {

    const sumSpread = sum as any;
    expect(sumSpread(456, -56)).toBe(400);

});
