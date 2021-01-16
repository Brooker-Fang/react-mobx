import { action, observable, computed, configure} from 'mobx'

configure({enforceActions: 'observed'})
class CartStore{
  @observable appleBasket = []; // 当前苹果篮
  @observable eatAppleBasket = []; // 吃掉的苹果篮
  @action.bound addApp (){
    this.appleBasket.push({
      id: this.appleBasket.length + this.eatAppleBasket.length + 1,
      weight: parseInt(1 + Math.random() * 1000, 10)
    })
  }
  @action.bound eatApp(id){
    let index = this.appleBasket.findIndex(item => item.id === id)
    this.eatAppleBasket.push(this.appleBasket[index])
    this.appleBasket.splice(index, 1)
  }
  @computed get appleBasketWeight() {
    return this.appleBasket.reduce((val,item) => { 
      return val + item.weight
    }, 0)
  }
  @computed get eatAppleBasketWeight() {
    return this.eatAppleBasket.reduce((val,item) => { 
      return val + item.weight
    }, 0)
  }
}
export default new CartStore()