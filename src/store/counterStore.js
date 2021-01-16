/* 
  1 创建store对象 存储默认状态
  2 从mobx 引入Provide组件，包裹所有要使用到store对象的 组件
  3 组件获取store对象中的状态
*/
import axios from 'axios';
import { observable, configure, action, computed, runInAction, flow, autorun } from 'mobx'
// 通过配置强制程序使用action函数 更改状态，
// 即只能使用action包裹后的函数，才能更改状态
configure({enforceActions: 'observed'})
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
  constructor() {
    // autorun用于监测数据发生变化后，执行某些操作
    autorun(()=> {
      this.filterName(this.name)
    })
  }
  @observable count = 0;
  @observable users = [];
  @observable name = ''
  // 计算属性
  @computed get completedPrice() {
    return this.count * 10;
  }
  
  // increment = () => {
  //   this.count = this.count + 1
  // }
  // decrement = () => {
  //   this.count = this.count - 1
  // }
  // action包裹后的函数，才能更改状态
  // bound更正this指向
  @action.bound increment () {
    this.count = this.count + 1
  }
  @action.bound decrement () {
    this.count = this.count - 1
  }
  // 异步方式一
  @action.bound async getData() {
    let { data } = await axios.get("https://api.github.com/users")
    // 当函数中有异步操作时，不能直接去更改数据 如this.users = data
    // 要把赋值操作 包裹到runInAction里
    console.log(data)
    runInAction(() => {
      this.users = data
    })
  }
  // 异步方式二: 用flow包裹
  getDataByFlow = flow(function* () {
    let { data } = yield axios.get("https://api.github.com/users")
    this.users = data
  }).bind(this)

  @action.bound changeName(name) {
    this.name = name
  }
  @action.bound filterName(name) {
    this.users = this.users.filter(item => item.login.indexOf(name) !== -1)
  }
}
const counter = new CounterStore()
export default counter