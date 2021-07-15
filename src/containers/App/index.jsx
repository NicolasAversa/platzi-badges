import React from 'react';
import { Button, Title } from './styles';

const App = () => {
  const mami = () => {
    alert('Hola mami');
  };

  return (
    <article className="mx-auto w-1/3 shadow p-8 rounded-lg bg-white">
      <Title>Hi! I am here!</Title>
      <p>Normal text</p>
      <Button type="button" primary className="font-bold px-4 py-2 hover:text-white" onClick={() => { mami(); }}>Mother button</Button>
    </article>
  );
};

export default App;
