import React from 'react';
import Button from './button';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './list.css';

const List = ({ items, onDelete }) => (
  <TransitionGroup component="ul" className="List">
    {items.map(item => (
      <CSSTransition key={item.id} timeout={300} classNames="fade" mountOnEnter>
        <li className="List-item">
          {item.text}
          <Button label="Delete" onClick={() => onDelete(item.id)} />
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

export default List;
