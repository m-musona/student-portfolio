export class Particle {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 4 + 1;
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;
        this.color = "rgba(0,0,0,0.3)";
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // wrap around screen edges
        if(this.x > this.canvas.width) this.x = 0;
        if(this.x < 0) this.x = this.canvas.width;
        if(this.y > this.canvas.height) this.y = 0;
        if(this.y < 0) this.y = this.canvas.height;
    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        this.ctx.fill();
    }
    
}
