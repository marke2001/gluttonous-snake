export default class Snake {
    constructor() {
        this.elment = document.getElementById("snake");
        this.header = document.querySelector("#snake >div");
        this.foodes = this.elment.getElementsByTagName('div');
    }
    //获取蛇头的坐标
    get X() {
        return this.header.offsetLeft;
    }
    get Y() {
        return this.header.offsetTop;
    }
    //设置蛇头坐标
    set X(value) {
        if (this.X === value)
            return;
        if (value < 0 || value > 290) {
            throw new Error("撞墙了");
        }
        //禁止蛇橫向移動
        if (this.foodes[1] && this.foodes[1].offsetLeft === value) {
            if (this.X < value) {
                value = this.X - 10;
            }
            else {
                value = this.X + 10;
            }
        }
        this.removeme();
        this.header.style.left = value + 'px';
        //檢查是否撞到自己
        this.changhedbody();
    }
    set Y(value) {
        if (this.Y === value)
            return;
        if (value < 0 || value > 290) {
            throw new Error("撞墙了");
        }
        //禁止蛇橫向移動
        if (this.foodes[1] && this.foodes[1].offsetTop === value) {
            if (this.Y < value) {
                value = this.Y - 10;
            }
            else {
                value = this.Y + 10;
            }
        }
        this.removeme();
        this.header.style.top = value + "px";
        //檢查是否撞到自己
        this.changhedbody();
    }
    //蛇身体的增加
    addsnake() {
        this.elment.insertAdjacentHTML("beforeend", '<div></div>');
    }
    //身體移動
    removeme() {
        for (let i = this.foodes.length - 1; i > 0; i--) {
            //獲取前面一個的坐標
            let X = this.foodes[i - 1].offsetLeft;
            let Y = this.foodes[i - 1].offsetTop;
            //賦值到當前的
            this.foodes[i].style.left = X + 'px';
            this.foodes[i].style.top = Y + 'px';
        }
    }
    //檢查是否裝到自己
    changhedbody() {
        for (let i = 1; i < this.foodes.length; i++) {
            let ifval = this.foodes[i];
            if (this.X === ifval.offsetLeft && this.Y === ifval.offsetTop) {
                throw new Error('撞到自己了！');
            }
        }
    }
}
