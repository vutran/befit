import { h } from 'preact';
import * as utils from '../src/utils';
import App from '../src/App';

describe('utils', () => {
    it('should increment', () => {
        expect(
            utils.increment(1),
        ).toBe(2);
        expect(
            utils.increment(123),
        ).toBe(124);
    });
    it('should decrement', () => {
        expect(
            utils.decrement(123),
        ).toBe(122);
        expect(
            utils.decrement(100),
        ).toBe(99);
    });
    it('should square', () => {
        expect(
            utils.square(2),
        ).toBe(4);
        expect(
            utils.square(5),
        ).toBe(25);
    });
});
