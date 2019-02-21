import React from 'react'
import {connect} from 'react-redux'
import {addGun, removeGun, addGunAsync} from './index.redux'
class App extends React.Component{
  // constructor(props){
  //   super(props)
  // }
  render(){
    const store = this.props.store
    const num = store.getState()
    const addGun = this.props.addGun
    const removeGun = this.props.removeGun
    const addGunAsync = this.props.addGunAsync
    return (
      <div>
        <h1>现在有{num}把机枪</h1>
        <button onClick={addGun()}>申请武器</button>
        <button onClick={removeGun()}>上交武器</button>
        <button onClick={addGunAsync()}>拖两天再给</button>
      </div>
    )
  }
}
const mapStatetoProps=(state)=>{
  return {num: state}
}
const actionCreators = {addGun, removeGun, addGunAsync}
App = connect(mapStatetoProps,actionCreators)(App)
export default App