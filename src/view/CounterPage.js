import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'


// 通过inject 注入要获取的store对象
@inject('counter')
 // @observer 将组件装饰为观察者
@observer
class CounterPage extends Component {
  componentDidMount(){
    const { getData, getDataByFlow } = this.props.counter
    console.log(this.props)
    // getData && getData()
    getDataByFlow()
  }
  render() {
    const { counter } = this.props
    console.log(counter)
    return (
      <div>
        <button onClick={counter.increment}>+</button>
        count: {counter.count}
        completedPrice: {counter.completedPrice}
        <button onClick={counter.decrement}>-</button>
        <input type="text" value={counter.name} onChange={(e) => counter.changeName(e.target.value)}></input>
        <div>
          {counter.users.map(item => {
            return  <div>{item.login}</div>
          })}
        </div>
      </div>
    )
  }
}

export default CounterPage
