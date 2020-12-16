import './App.css';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import React, { useState } from 'react';

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
    label: 'Color blue',
    value: 'blue',
  },
  {
    label: 'Color green',
    value: 'green',
  },
];

function App() {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <br />
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown
        onSelectedChange={setSelected}
        selected={selected}
        options={options}
      />
    </div>
  );
}

export default App;
