import React, { Component } from 'react';
import Tab from './tab';
import Button from '../shared-ui/button';
import styles from './styles.css';

export default class Tabs extends Component {
  state = {
    activeTabIndex: 0,
  };

  shouldComponentUpdate(nextProps, nextState) {
    const shouldUpdate = this.state.activeTabIndex !== nextState.activeTabIndex;

    return shouldUpdate;
  }

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
      <div className={styles.tabs}>
        <div>
          {items.map((item, idx) => (
            <Button
              key={item.id}
              onClick={() => this.setActiveTab(idx)}
              active={idx === activeTabIndex}
              label={item.name}
            />
          ))}
        </div>
        <hr />
        <Tab {...activeItem} />
      </div>
    );
  }
}
