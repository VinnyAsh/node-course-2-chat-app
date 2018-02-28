[{
  id: '234523345',
  name: 'name',
  room: 'prototype'
}]

// addUser(id, name, room)
// removeUser(id)
// getUser()
// getUserList(room)

// class Person {
//   // constructor functions
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription() {
//     return `${this.name} is ${this.age} years old`;
//   }
// }

// var me = new Person('Vince', 61);
// var description = me.getUserDescription();
// console.log(description);

class Users {
   constructor () {
      this.users = [];
   }

   addUser (id, name, room) {
       var user = {id,name,room};
        this.users.push(user);
        return user;
   }

   removeUser (id) {
       //return user that was removed

      var user = this.getUser(id);
      if (user) {
        this.users = this.users.filter((user) => user.id !== id);
      }
      return user;
   }

   getUser (id) {
      return this.users.filter((user) => user.id === id)[0];
  }

   getUserList (room) {
     // will return an array of strings
     var users = this.users.filter((user) => user.room === room);
     var namesArray = users.map((user) => user.name);
     return namesArray;
     }
}


module.exports = {Users};
