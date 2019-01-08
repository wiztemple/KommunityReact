import { clearStorage, isLoggedIn } from '../utils/localStorage';

describe('utils test:', () => {
    it('should return true', () => {
        expect(clearStorage('token')).toEqual(undefined);
    })

    it('should return true', () => {
        localStorage.setItem('token', 'dummy');
        isLoggedIn();
        clearStorage('token');
        isLoggedIn();
    });
});
