import React, { Component } from 'react';
import faker from 'faker';
import List from './list';
import Button from './button';

export default class App extends Component {
  state = {
    items: [],
  };

  addItem = () => {
    this.setState(prevState => ({
      items: [
        ...prevState.items,
        { id: faker.random.uuid(), text: faker.lorem.words(6) },
      ],
    }));
  };

  removeItem = id => {
    this.setState(prevState => ({
      items: prevState.items.filter(item => item.id !== id),
    }));
  };

  render() {
    const { items } = this.state;

    return (
      <div>
        <Button label="Add Item" onClick={this.addItem} />
        <hr />
        <List items={items} onDelete={this.removeItem} />
      </div>
    );
  }
}
