import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import './style.css'
@inject('cartStore')
@observer
class BuyCartPage extends Component {
  render() {
    const { cartStore } = this.props
    const { appleBasket, eatAppleBasket, appleBasketWeight, eatAppleBasketWeight, addApp, eatApp } = cartStore
    console.log(this.props)
    return (
      <div className="container">
        <h1>苹果篮子</h1>
        <div className='info'>
          <div>
            <div className="info-title">当前</div>
            <div>{appleBasket.length}个苹果，{appleBasketWeight}克</div>
          </div>
          <div>
            <div className="info-title">已吃掉</div>
            <div>{eatAppleBasket.length}个苹果，{eatAppleBasketWeight}克</div>
          </div>
        </div>
        <div className={'basket-wrap'}>
          { appleBasket.length > 0 ?
            appleBasket.map((item) => {
              return <div key={item.id} className="apple-item">
                  <div>
                    <div className={'info-title'}>红苹果-{item.id}号</div>
                    <div>{item.weight}克</div>
                  </div>
                  <button onClick={() => eatApp(item.id)} className='item-btn'>吃掉</button>
              </div>
            })
            : <div>篮子空空如也</div>
          }
        </div>
        <div className='add-btn-wrap'>
          <button className='item-btn' onClick={addApp}>摘苹果</button>
        </div>
      </div>
    )
  }
}

export default BuyCartPage
