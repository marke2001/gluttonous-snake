//食物
class Food {
    constructor() {
        //获取页面中food元素
        this.element = document.getElementById('et');
    }
    //获取食物的坐标 x  y
    get X() {
        return this.element.offsetLeft;
    }
    get Y() {
        console.log(this.element.offsetHeight);
        return this.element.offsetTop;
    }
    //随机食物位置
    change() {
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = left + 'px';
    }
}
export default Food;
