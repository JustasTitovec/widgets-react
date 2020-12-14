import './App.css';
import Accordion from './components/Accordion';

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

function App() {
  return (
    <div>
      <br />
      <Accordion items={items} />
    </div>
  );
}

export default App;
