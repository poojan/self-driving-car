import '../style/main.css'
import { Car } from './car';

const canvas = document.getElementById('canvas') as HTMLCanvasElement;
canvas.height = window.innerHeight;
canvas.width = 200;

const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
const car = new Car(100, 100, 30, 50);
car.draw(ctx);

