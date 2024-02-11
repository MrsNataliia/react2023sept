// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового
// юзера постовим запитом на https://jsonplaceholder.typicode.com/users

import React from 'react';

import {UsersContainer} from "./components/UsersContainer";


const App = () => {
    return (
        <div>
           <UsersContainer/>
        </div>
    );
};

export {App};
