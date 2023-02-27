const assert = require('assert');
const Maths = require('../Maths');

describe('Basic maths test', function(){
    it('Test if 1 equals 1', function(){
        assert.equal(1, 1);
    });

    it('Test if 2 equals 2', function(){
        assert.equal(2, 2);
    });
});

describe('Maths test', function(){
    it('Test if 1 + 1 = 2',function(){
        assert.equal(Maths.add(1, 1), 2);
    });
    it('Test if 2 - 1 = 1',function(){
        assert.equal(Maths.sub(2, 1), 1);
    });
});