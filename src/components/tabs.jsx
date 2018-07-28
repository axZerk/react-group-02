import React, { Component } from 'react';
import Tab from './tab';
import './tabs.css';

export default class Tabs extends Component {
  state = {
    activeTabIndex: 0,
  };

  setActiveTab = idx => {
    this.setState({
      activeTabIndex: idx,
    });
  };

  render() {
    console.log(`Render in Tabs - ${Date.now()}`);

    const { activeTabIndex } = this.state;
    const { items } = this.props;
    const activeItem = items[activeTabIndex];

    return (
      <div className="tabs">
        <div>
          {items.map((item, idx) => (
            <button key={item.id} onClick={() => this.setActiveTab(idx)}>
              {item.name}
            </button>
          ))}
        </div>
        <hr />
        <Tab {...activeItem} />
      </div>
    );
  }
}
