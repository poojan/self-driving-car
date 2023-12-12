import { Controls } from './controls'

export class Car {
    x: number;
    y: number;
    width: number;
    height: number;
    controls: Controls;

    constructor(x: number, y: number, width: number, height:number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.controls = new Controls();
    }

    update() {
        const speed = 2;

        if (this.controls.forward) this.y -= speed;
        if (this.controls.reverse) this.y += speed;
    }

    draw(ctx: CanvasRenderingContext2D | null) {
        if (!ctx) return;

        ctx.beginPath();
        ctx.rect(
            this.x - this.width / 2, 
            this.y - this.height / 2, 
            this.width, 
            this.height
        );
        ctx.fill();
    }
}