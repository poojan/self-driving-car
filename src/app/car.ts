import { Controls } from './controls'

export class Car {
    x: number;
    y: number;
    width: number;
    height: number;
    controls: Controls;
    speed: number;
    acceleration: number;
    maxSpeed: number;
    maxReverseSpeed: number;
    friction: number;
    angle: number;

    constructor(x: number, y: number, width: number, height:number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed = 0;
        this.acceleration = 0.2;
        this.maxSpeed = 3;
        this.maxReverseSpeed = this.maxSpeed/2;
        this.friction = 0.05;
        this.angle = 0;

        this.controls = new Controls();
    }

    update() {
        if (this.controls.forward) {
            this.speed += this.acceleration;
            if (this.speed > this.maxSpeed) this.speed = this.maxSpeed;
        }
        if (this.controls.reverse) {
            this.speed -= this.acceleration;
            if (this.speed < -this.maxReverseSpeed) this.speed = -this.maxReverseSpeed;
        }
        if (this.speed > this.maxSpeed) this.speed = this.maxSpeed;
        if (this.speed < -this.maxReverseSpeed) this.speed = this.maxReverseSpeed;

        if (this.speed > 0) {
            this.speed -= this.friction;
        }
        if (this.speed < 0) {
            this.speed += this.friction;
        }
        if (Math.abs(this.speed) < this.friction) {
            this.speed = 0;
        }
        if (this.controls.left) {
            this.angle += 0.03;
        }
        if (this.controls.right) {
            this.angle -= 0.03;
        }

        this.x -= Math.sin(this.angle) * this.speed;
        this.y -= Math.cos(this.angle) * this.speed;
    }

    draw(ctx: CanvasRenderingContext2D | null) {
        if (!ctx) return;

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(-this.angle);
        
        ctx.beginPath();
        ctx.rect(
            -this.width / 2, 
            -this.height / 2, 
            this.width, 
            this.height
        );
        ctx.fill();

        ctx.restore()
    }
}