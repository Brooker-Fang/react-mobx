import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'


// 通过inject 注入要获取的store对象
@inject('counter')
 // @observer 将组件装饰为观察者
@observer
class CounterPage extends Component {
  render() {
    const { counter } = this.props
    console.log(counter)
    return (
      <div>
        <button onClick={counter.increment}>+</button>
        count: {counter.count}
        completedPrice: {counter.completedPrice}
        <button onClick={counter.decrement}>-</button>
      </div>
    )
  }
}

export default CounterPage
