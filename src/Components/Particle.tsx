import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 

const Particle = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: { value: "#000000" }, 
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#ffffff" }, 
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1, 
              straight: false,
            },
            number: {
              density: { enable: true, area: 800 },
              value: 50, 
            },
            opacity: { value: 0.8 }, 
            shape: { type: "star" }, 
            size: { value: { min: 2, max: 4 } }, 
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Particle;



