import {User, UserProps} from './src/models/User';
import { Collection } from './src/models/Collection';

const collection = User.buildUserCollection();

collection.on('change', () => {
    console.log(collection);
});

collection.fetch();