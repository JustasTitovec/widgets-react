import './App.css';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import React, { useState } from 'react';
import Translate from './components/Translate';

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
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <br />
      <Translate />
    </div>
  );
}

export default App;
