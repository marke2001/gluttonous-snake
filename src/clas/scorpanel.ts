//记分牌类

export default class scorpanel {
    score = 0;
    level = 1;

    //限制等级的最高级
    maxlevel = 10;
    //多少分升级
    tolevel = 10;

    scoreElm: HTMLElement;
    levelElm: HTMLElement;

    constructor() {

        this.scoreElm = document.getElementById("score")!;
        this.levelElm = document.getElementById("level")!;

    }

    //分数++
    addscore() {
        // this.score++;
        this.scoreElm.innerText = ++this.score + '';
        if (this.score % this.tolevel == 0) {
            this.addlevel()
        }
    }


    //等级++
    addlevel() {
        if (this.level < this.maxlevel) {
            this.levelElm.innerText = ++this.level + "";
        }
    }

}
