import * as React from 'react';
import { Link } from 'dva/router';
import './World.css';

class World extends React.Component<{}, {}> {
  render() {
    return (
      <div styleName="normal">
        Hello
        <Link to="/count" >Count</Link>
      </div>
    );
  }
}
export default World;

