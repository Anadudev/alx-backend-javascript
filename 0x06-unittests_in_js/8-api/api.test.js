const request = require('request');
const { expect } = require('chai');

describe('Index Page', () => {
    it('should respond with correct status code', () => {
        request('http://localhost:7865', (error, res, body) => {
            expect(res.statusCode).to.equal(200);
        });
    });

    it('should have the correct body content', () => {
        request('http://localhost:7865', (error, res, body) => {
            expect(body).to.contain('Welcome to the payment system');
        });
    });

    it('should have the correct  Content-Length', () => {
        request('http://localhost:7865', (error, res, body) => {
            expect(res.headers['content-length']).to.equal('29');
        });
    });

    it('should have the correct Content-Type', () => {
        request('http://localhost:7865', (error, res, body) => {
            expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
        });
    });
});
