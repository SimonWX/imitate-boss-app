import React from "react";
import { connect } from "react-redux";
import { addGun, removeGun, addGunAsync } from "./index.redux";

@connect(
  // 你需要state什么属性放在props里 test
  state => ({ num: state.counter }),
  // 你要什么方法，放在props里，自动dispatch
  { addGun, removeGun, addGunAsync }
)
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>现在有机枪{this.props.num}把</h1>
        <button onClick={this.props.addGun}>申请武器</button>
        <button onClick={this.props.removeGun}>上交武器</button>
        <button onClick={this.props.addGunAsync}>拖两天再上交</button>
      </div>
    );
  }
}

export default App;
