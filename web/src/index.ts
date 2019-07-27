import { User } from './models/User';

const user = User.buildUser({ name: 'newer name', age: 0, id: 1 });
console.log(user.get('name'));

user.on('save', () => {
  console.log(user);
});

user.fetch();
user.isAdminUser();
