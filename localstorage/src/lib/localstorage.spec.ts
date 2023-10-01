import { localstorage } from './localstorage';

describe('localstorage', () => {
    it('should work', () => {
        expect(localstorage()).toEqual('localstorage');
    })
})