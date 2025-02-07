// Smooth Scrolling for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Lightbox Modal
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('.gallery-img').src;
        const caption = item.querySelector('.caption').textContent;

        const modalImage = document.getElementById('modalImage');
        const modalCaption = document.getElementById('modalCaption');

        modalImage.src = imgSrc;
        modalCaption.textContent = caption;

        const modal = new bootstrap.Modal(document.getElementById('imageModal'));
        modal.show();
    });
});

// Particle Canvas Script
document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = window.innerWidth < 768 ? 50 : 100;

    class Particle {
        constructor() {
            this.reset();
            this.velocity = {
                x: (Math.random() - 0.5) * 0.5,
                y: (Math.random() - 0.5) * 0.5,
            };
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.alpha = Math.random() * 0.5 + 0.1; // Reduced opacity for dark mode
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 255, 136, ${this.alpha})`; // Neon green color for contrast
            ctx.fill();
        }

        update() {
            this.x += this.velocity.x;
            this.y += this.velocity.y;

            if (
                this.x < 0 ||
                this.x > canvas.width ||
                this.y < 0 ||
                this.y > canvas.height
            ) {
                this.reset();
            }
        }
    }

    function init() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
            particle.update();
            particle.draw();
        });

        drawConnections();
        requestAnimationFrame(animate);
    }

    function drawConnections() {
        particles.forEach((p1) => {
            particles.forEach((p2) => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(0, 255, 136, ${0.2 - (distance / 100) * 0.2})`; // Neon green lines
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            });
        });
    }

    window.addEventListener('resize', init);
    init();
    animate();

    // Add interactive mouse effect
    canvas.addEventListener('mousemove', (e) => {
        particles.forEach((particle) => {
            const dx = e.clientX - particle.x;
            const dy = e.clientY - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                particle.x += dx * 0.01;
                particle.y += dy * 0.01;
            }
        });
    });
});