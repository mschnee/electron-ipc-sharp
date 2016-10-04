import 'mocha';
import { expect } from 'chai';

import { RestClient } from '../../../RestClient/index';

const client = new RestClient({
    endpoint: `http://localhost/${40500}`,
    fetchFn: fetch
});

describe('default', () => {
    describe('get', () => {
        it('/', done => {
            client.get<string>('').then(r => {
                expect(r).to.equal('get');
                done();
            }).catch(r => {
                done(r);
            });
        });
    });

    describe('put', ()  => {
        it('/', done => {
            client.put<string>('', {}).then(r => {
                expect(r).to.equal('put');
                done();
            }).catch(r => {
                done(r);
            });
        });
    });

    describe('post', () => {
        it('/', done => {
            client.post<string>('', {}).then(r => {
                expect(r).to.equal('post');
                done();
            }).catch(r => {
                done(r);
            });
        });
    });

    describe('delete', () => {
        it('/', done => {
            client.delete<string>('').then(r => {
                expect(r).to.equal('delete');
                done();
            }).catch(r => {
                done(r);
            });
        });
    });
});
