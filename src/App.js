import React from 'react';
import './style.css';
import Function, { Function1, FunctionArgs } from './FunctionComponent';
import FirstClass from './ClassComponent';
import { EventHandlerTest } from './EventHandler';
import { PersonList } from './ListKeys';

export default function App() {
  return (
    <div>
      <header>
        <Function></Function>
        <Function1 />
        <FunctionArgs FirstName="SelvaKumar" LastName="Chandra"></FunctionArgs>
        <FirstClass Message="Welcome"></FirstClass>
        <EventHandlerTest />
        <PersonList />
      </header>
    </div>
  );
}
