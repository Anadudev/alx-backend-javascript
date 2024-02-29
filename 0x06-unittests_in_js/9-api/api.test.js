const request = require('request');
const { expect } = require('chai');

/* index page test suits */
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

/* cart page test suits */
describe('Cart Page', () => {
    it('should have correct Status Code and id', () => {
        request('http://localhost:7865', (error, res, body) => {
            expect(res.statusCode).to.equal(200);
        });
    });

    it('should have correct Status Code and id', () => {
        request('http://localhost:7865/cart/12', (error, res, body) => {
            expect(body).to.contain('Payment methods for cart 12');
        });
    });

    it('should return expected content length', () => {
        request('http://localhost:7865/cart/12', (error, res, body) => {
            expect(res.headers['content-length']).to.equal('27');
        });
    });

    it('should have the correct for non number id parameter', () => {
        request('http://localhost:7865/cart/hello', (error, res, body) => {
            expect(res.statusCode).to.equal(404);
        });
    });

    it('should return the correct content-type for valid id ', () => {
        request('http://localhost:7865/cart/12', (error, res, body) => {
            expect(res.headers['content-type']).to.equal('text/html; charset=utf-8');
        });
    });

    it('should return the correct body content for non number id', () => {
        request('http://localhost:7865/cart/hello', (error, res, body) => {
            expect(body).to.contain('Cannot GET /cart/hello');
        });
    });
});