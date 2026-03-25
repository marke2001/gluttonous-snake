//控制器


import Food from "./food";
import scorpanel from "./scorpanel";
import Snake from "./snake";


export default class GemContro {
    Food: Food;
    scorpanel: scorpanel;
    Snake: Snake;

    //方向
    dereactione = '';
    //停止
    lives = true;

    constructor() {
        this.Food = new Food();
        this.scorpanel = new scorpanel();
        this.Snake = new Snake();
        this.init()
    }

    init() {
        document.addEventListener('keydown', this.keydownHandel.bind(this))
        this.run()
    }

    //按键函数
    keydownHandel(event: KeyboardEvent) {



        // console.log(isarr.includes(searchElement[(event.key as string)]) )

        if (event.key == 'ArrowUp' || event.key == 'Up'|| event.key == 'ArrowDown' || event.key == 'Down' || event.key == 'ArrowLeft' || event.key == 'Left' || event.key == 'ArrowRight' || event.key == 'Right') {
            this.dereactione = event.key
        }



    }

    //控制蛇运动
    run() {
        //获取蛇的坐标
        let X = this.Snake.X
        let Y = this.Snake.Y


        switch (this.dereactione) {
            case "ArrowUp":
            case "Up":
                // 向上移动 top 减少
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                // 向下移动 top 增加
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                // 向左移动 left 减少
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                // 向右移动 left 增加
                X += 10;
                break;
        }

        //修改坐标值
        this.changEDit(X, Y)

        try {
            this.Snake.X = X;
            this.Snake.Y = Y;
        } catch (e: any) {
            alert(e.message + "GameOver")
            this.lives = false

        }
        this.lives && setTimeout(this.run.bind(this), 300 - (this.scorpanel.level - 1) * 30);

    }

    changEDit(X: number, Y: number) {
        if (this.Food.X === X && Y === this.Food.Y) {
            this.Food.change()
            this.scorpanel.addscore()
            this.Snake.addsnake()
        }

    }

}


