import { User } from "./src/models/User";


const user = new User({ id: 1});

user.set({ name: 'NEW NAME', age: 214});

user.save();
