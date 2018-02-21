var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');


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

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
     var from = 'Admin';
     var latitude = 1;
     var longitude = 1;
     var url = 'https://www.google.com/maps?q=1,1';
     var message = generateLocationMessage(from, latitude, longitude);
     expect(message.url).toBe(url);
     expect(message.from).toBe(from);
     expect(message.createdAt).toBeA('number');

  });

});
