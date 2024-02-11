// Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар
// постовим запитом на https://jsonplaceholder.typicode.com/comments

import React from 'react';

import {PostContainer} from "./components/PostContainer";

const App = () => {
    return (
        <div>
            <PostContainer/>
        </div>
    );
};

export {App};

