/* 
  1 创建store对象 存储默认状态
  2 从mobx 引入Provide组件，包裹所有要使用到store对象的 组件
  3 组件获取store对象中的状态
*/
import { observable, action, makeObservable, computed } from 'mobx'

// 通过类创建 store对象,然后实例化对象
class CounterStore {
  /* mobx6 的写法
    constructor() {
    makeObservable(this, {
        count: observable,
        completedPrice: computed,
        increment: action
    });
  } */

  @observable count = 0;
  get completedPrice() {
    return this.count * 10;
  }
  increment = () => {
    this.count = this.count + 1
  }
  decrement = () => {
    this.count = this.count - 1
  }
  // @action.bound increment () {
  //   this.count = this.count + 1
  // }
  // @action.bound decrement () {
  //   this.count = this.count - 1
  // }
}
const counter = new CounterStore()
export default counter