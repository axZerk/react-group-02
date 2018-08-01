import React from 'react';
import { compose } from 'recompose';
import Dish from './dish';
import List from './list';
import './app.css';
import articles from '../articles';
import withLog from './hoc/withLog';
import withToggle from './hoc/withToggle';
import withStorage from './hoc/with-storage';
import Togglable from './render-props/togglable';
import ScrollPosition from './render-props/scroll-position';

const styles = {
  app: { textAlign: 'center' },
  spacer: { height: '1000px' },
  message: { fontSize: '80px' },
};

const App = ({ title }) => (
  <div className="App">
    <h1>{title}</h1>
    <Togglable>
      {({ visible, toggle }) => (
        <div>
          {visible && (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              saepe praesentium modi, porro quibusdam delectus voluptates
              inventore optio quae earum.
            </p>
          )}
          <button onClick={toggle}>Toggle</button>
        </div>
      )}
    </Togglable>
    <div style={styles.spacer} />
    <ScrollPosition>
      {position => <h1 style={styles.message}>{position}</h1>}
    </ScrollPosition>
    <div style={styles.spacer} />
    {/* <Dish />
    <List items={articles} /> */}
  </div>
);

export default App;

// export default compose(
//   withToggle,
//   withStorage,
//   withLog,
// )(App);

// export default withToggle(withStorage(withLog(App)));
