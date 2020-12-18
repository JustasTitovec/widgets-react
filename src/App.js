import './App.css';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import React, { useState } from 'react';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'What is react',
    content: 'React is Javascript framework',
  },
  {
    title: 'Why use React',
    content: 'React is favorite JS framework among engineers',
  },
  {
    title: 'How do you use React',
    content: 'Use react by creating components',
  },
];

const options = [
  {
    label: 'Color Red',
    value: 'red',
  },
  {
    label: 'Color Blue',
    value: 'blue',
  },
  {
    label: 'Color Green',
    value: 'green',
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="app">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/list">
        <Search />
      </Route>

      <Route path="/dropdown">
        <Dropdown
          label="Select a color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>

      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}

export default App;
