import React, { Component } from 'react';
import Tab from './tab';

export default class Tabs extends Component {
  state = { activeTabIndex: 0 };

  setActiveTab = idx => {
    this.setState({
      activeTabIndex: idx,
    });
  };

  render() {
    const { activeTabIndex } = this.state;
    const { items } = this.props;
    const activeItem = items[activeTabIndex];

    return (
      <div>
        <div>
          {items.map((item, idx) => (
            <button key={item.id} onClick={() => this.setActiveTab(idx)}>
              {item.name}
            </button>
          ))}
        </div>
        <Tab {...activeItem} />
      </div>
    );
  }
}
