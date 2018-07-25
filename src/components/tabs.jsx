import React, { Component } from 'react';
import Button from './button';
import Tab from './tab';

export default class Tabs extends Component {
  state = {
    activeTabIndex: 0,
  };

  setActiveTabIndex = idx => {
    this.setState({
      activeTabIndex: idx,
    });
  };

  render() {
    const { items } = this.props;
    const { activeTabIndex } = this.state;
    const activeItem = items[activeTabIndex];

    return (
      <div>
        <div>
          {items.map((item, idx) => (
            <Button
              key={item.id}
              label={`Tab ${idx + 1}`}
              onClick={() => this.setActiveTabIndex(idx)}
              active={activeTabIndex === idx}
            />
          ))}
        </div>
        <Tab {...activeItem} />
      </div>
    );
  }
}
