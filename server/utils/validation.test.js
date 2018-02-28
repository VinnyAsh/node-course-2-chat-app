const expect = require('expect');

//import isRealString
const {isRealString} = require('./validation');


// isRealString
   // should reject non-string values
describe('isRealString',  () => {
   it('should reject non-string values', () => {
     var res = isRealString(98);
    expect(res).toBe(false);

   });

   it('should reject with only spaces', () => {
     var res = isRealString('   ');
       expect(res).toBe(false);
   });

   it('should allow strings with non-space characters', () => {
     var res = isRealString(' sdf ');
       expect(res).toBe(true);
   });
});
