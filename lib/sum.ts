
export function sum(input: number[]): number {

    if (Array.isArray(input)) {
        return input.filter(isNumber).reduce((count: number, current: number) => {
            return count + current;
        }, 0);
    }

    if (arguments.length > 1) {
        return sum(Array.from(arguments).filter(isNumber));
    }

    return isNumber(input) ? input : 0;
}

export const sumOf = sum;

function isNumber (test: any): test is number {
    return typeof test === 'number' && test === test;
}
