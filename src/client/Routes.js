import React from 'react';
import PhotoOfTheDayPage  from './pages/PhotoOfTheDayPage';
import App from './App';

export default [
    {
        ...App,
        routes:[
            {
                ...PhotoOfTheDayPage
            }
        ]
    }
];