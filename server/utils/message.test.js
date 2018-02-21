var expect = require('expect');
var {generateMessage} = require('./message');


describe('generateMessage', () => {
   it('should generate correct message object', () => {
     var from = 'Admin';
     var text = 'This should send a message';
     var message = generateMessage(from, text);

         expect(message.text).toBe(text);
         expect(message.from).toBe(from);
         expect(message.createdAt).toBeA('number');
          
   });
});
