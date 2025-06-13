(() => {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    let W, H;
    function resize() {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;
    }
    window.addEventListener('resize', resize);
    resize();
    
    // 紙吹雪の色配列
    const colors = ['#FF595E', '#FFCA3A', '#8AC926', '#1982C4', '#6A4C93'];
    
    // 紙吹雪粒子クラス
    class ConfettiParticle {
        constructor() {
            this.x = Math.random() * W;
            this.y = Math.random() * H - H;
            this.size = Math.random() * 12 + 8;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.speed = Math.random() * 3 + 2;
            this.angle = Math.random() * 360;
            this.rotationSpeed = (Math.random() - 0.5) * 0.15;  // 回転少し早め
            this.opacity = 1;
            this.swing = Math.random() * 2 + 1;
            this.swingAngle = 0;
        }
        update() {
            this.y += this.speed;
            this.swingAngle += 0.1;
            this.x += Math.sin(this.swingAngle) * this.swing;
            
            this.angle += this.rotationSpeed;
            
            if(this.y > H) {
                this.y = -this.size;
                this.x = Math.random() * W;
            }
        }
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.angle);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            
            // 四角い紙吹雪
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            
            ctx.restore();
        }
    }
    
    // パーティクル群生成
    const confettiCount = 150;
    const confettis = [];
    for(let i=0; i<confettiCount; i++) {
        confettis.push(new ConfettiParticle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, W, H);
        confettis.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }
    animate();
})();