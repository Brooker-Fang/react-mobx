import React, { Component } from 'react'
import { inject } from 'mobx-react'
@inject('cartStore')
class BuyCartPage extends Component {
  render() {
    const { cartStore } = this.props
    const { appleCart, eatAppleWeight } = cartStore
    console.log(this.props)
    return (
      <div>
        <h1>苹果篮子</h1>
        <div></div>
      </div>
    )
  }
}

export default BuyCartPage
