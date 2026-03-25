//记分牌类
export default class scorpanel {
    constructor() {
        this.score = 0;
        this.level = 1;
        //限制等级的最高级
        this.maxlevel = 10;
        //多少分升级
        this.tolevel = 10;
        this.scoreElm = document.getElementById("score");
        this.levelElm = document.getElementById("level");
    }
    //分数++
    addscore() {
        // this.score++;
        this.scoreElm.innerText = ++this.score + '';
        if (this.score % this.tolevel === 0) {
            this.addlevel();
        }
    }
    //等级++
    addlevel() {
        if (this.level < this.maxlevel) {
            this.levelElm.innerText = ++this.level + "";
        }
    }
}
