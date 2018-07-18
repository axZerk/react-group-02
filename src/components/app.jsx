import React from 'react';
import Product from './product';
import Panel from './panel';
import TechList from './tech-list';

const tech = [
  { id: 'id-1', name: 'JS' },
  { id: 'id-2', name: 'React' },
  { id: 'id-3', name: 'React Router' },
  { id: 'id-4', name: 'Redux' },
];

const App = () => (
  <div>
    <h1>Cool App Header</h1>

    <Panel title="Tech List">
      <TechList items={tech} />
    </Panel>

    <Panel title="Panel 1">
      <Product
        imgUrl="https://placeimg.com/320/240/arch"
        alt="cool alt"
        name="Raging waffles 12313123"
        price={50}
        soldOut
      >
        Some amazing text
      </Product>
    </Panel>

    <Panel title="Panel 2">
      <Product
        imgUrl="https://placeimg.com/320/240/arch"
        alt="cool alt"
        name="Coll Stuff"
        price={666}
      />
    </Panel>
  </div>
);

export default App;
