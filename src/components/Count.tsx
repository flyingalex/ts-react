import * as React from 'react';
import { connect } from 'dva';
import './Count.css';

type Props = {
  count: number;
  children?: React.ReactNode;
  dispatch: (object: Object) => any;
};

class Count extends React.Component<Props, {}> {
  render() {
    return (
      <div styleName="normal">
        <h1 styleName="title">Dva boilerplate with typescript</h1>
          Count:{this.props.count}
        <hr />
        <button onClick={() => { this.props.dispatch({ type: 'count/add' }) }}>Add</button>
        <button onClick={() => { this.props.dispatch({ type: 'count/minus' }) }}>Minus</button>
      </div>
    );
  }
}

export default connect(({ count }: { count: number }) => ({
  count,
}))(Count);
