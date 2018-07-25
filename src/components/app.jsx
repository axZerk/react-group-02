import React, { Component } from 'react';
import Button from './button';
import Modal from './modal';
import Article from './article';
import Tabs from './tabs';
import tabs from '../tabs.json';

export default class App extends Component {
  state = {
    isModalOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

  render() {
    const { isModalOpen } = this.state;

    return (
      <div>
        <h1>Styling React Components</h1>

        <Tabs items={tabs} />

        <hr />

        <Button label="Open Modal" onClick={this.toggleModal} />

        <Modal onClose={this.toggleModal} isOpen={isModalOpen}>
          <Article />
        </Modal>
      </div>
    );
  }
}
