import { h } from 'preact';
import * as utils from '../src/utils';
import App from '../src/App';

describe('utils', () => {
    it('should convert the Date instance to a time string', () => {
        expect(utils.toTime(new Date('01/01/2016 11:15:00')))
            .toBe('11:15');
        expect(utils.toTime(new Date('12/30/2015 11:59:59')))
            .toBe('11:59');
    });
});
