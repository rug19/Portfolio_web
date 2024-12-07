import { useEffect, useRef } from "react";

const Particle = () => {
  const canvasRef = useRef(null);

  const calculateParticles = () => {
    if (window.innerWidth <= 768) return 40; // Para dispositivos móveis
    if (window.innerWidth <= 1024) return 75; // Para tablets
    return 100; // Para desktops
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const particlesArray = [];
    let numberOfParticles = calculateParticles();
    const linkDistance = 150;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      numberOfParticles = calculateParticles();
      initParticles(); // Recria partículas com o novo número
    };

    window.addEventListener("resize", handleResize);

    const mouse = {
      x: null,
      y: null,
      radius: 100,
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    class Particle {
      constructor(x, y, size, color, speedX, speedY, depth) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speedX = speedX;
        this.speedY = speedY;
        this.depth = depth;
      }

      update() {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - distance) / mouse.radius;
          const forceX = Math.cos(angle) * force * 5;
          const forceY = Math.sin(angle) * force * 5;

          this.x += forceX;
          this.y += forceY;
        }

        this.x += this.speedX * this.depth;
        this.y += this.speedY * this.depth;

        if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    const initParticles = () => {
      particlesArray.length = 0;
      for (let i = 0; i < numberOfParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 4 + 1;
        const depth = Math.random() * 0.3 + 0.7;
        const color = `rgba(0, 225, 135, ${depth})`;
        const speedX = (Math.random() * 0.5 - 0.25) * depth;
        const speedY = (Math.random() * 0.5 - 0.25) * depth;
        particlesArray.push(new Particle(x, y, size, color, speedX, speedY, depth));
      }
    };

    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < linkDistance) {
            ctx.strokeStyle = `rgba(0, 225, 135, ${
              (1 - distance / linkDistance) * particlesArray[a].depth
            })`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      connectParticles();
      requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    />
  );
};

export default Particle;
