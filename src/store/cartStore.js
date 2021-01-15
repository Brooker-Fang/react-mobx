class CartStore{
  appleCart = []; // 当前苹果篮
  eatAppleWeight = []; // 吃掉的苹果篮
  addApp = () => {
    this.appleCart.push({})
  }
}
export default new CartStore()