import React, { useEffect, useRef } from "react";

type BlossomSceneConfig = {
  id: string;
  petalsTypes: PetalConfig[];
  numPetals?: number;
  gravity?: number; // 0~1
  windMaxSpeed?: number;
};

interface PetalConfig {
  customClass?: string;
}

interface Petal {
  el: HTMLDivElement;
  x: number;
  y: number;
  z: number;
  xSpeedVariation: number;
  ySpeed: number;
  rotation: {
    axis: "X" | "Y" | "Z";
    value: number;
    speed: number;
    x: number;
  };
}

const BlossomScene: React.FC<BlossomSceneConfig> = ({
  id,
  petalsTypes,
  numPetals = 50,
  gravity = 0.8,
  windMaxSpeed = 4,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const petals = useRef<Petal[]>([]);
  const windMagnitude = useRef(0.2);
  const windDuration = useRef(0);
  const timer = useRef(0);

  const resetPetal = (petal: Petal, width: number, height: number) => {
    petal.x = width * 2 - Math.random() * width * 1.75;
    petal.y = petal.el.offsetHeight * -1;
    petal.z = Math.random() * 200;

    if (petal.x > width) {
      petal.x = width + petal.el.offsetWidth;
      petal.y = (Math.random() * height) / 2;
    }

    // Rotation
    petal.rotation.speed = Math.random() * 10;
    const randomAxis = Math.random();
    if (randomAxis > 0.5) {
      petal.rotation.axis = "X";
    } else if (randomAxis > 0.25) {
      petal.rotation.axis = "Y";
      petal.rotation.x = Math.random() * 180 + 90;
    } else {
      petal.rotation.axis = "Z";
      petal.rotation.x = Math.random() * 360 - 180;
      petal.rotation.speed = Math.random() * 3;
    }

    petal.xSpeedVariation = Math.random() * 0.8 - 0.4;
    petal.ySpeed = Math.random() + gravity;

    return petal;
  };

  const updatePetal = (petal: Petal, width: number, height: number) => {
    const windSpeed =
      (windMagnitude.current / 2) *
      ((height - (2 * petal.y) / 3) / height) *
      Math.sin(((2 * Math.PI) / windDuration.current) * timer.current);
    const xSpeed = windSpeed + petal.xSpeedVariation;

    petal.x -= xSpeed;
    petal.y += petal.ySpeed;
    petal.rotation.value += petal.rotation.speed;

    const transform = `translateX(${petal.x}px) translateY(${petal.y}px) translateZ(${petal.z}px) rotate${petal.rotation.axis}(${petal.rotation.value}deg)`;
    petal.el.style.transform = transform;

    if (petal.x < -10 || petal.y > height + 10) {
      resetPetal(petal, width, height);
    }
  };

  const updateFrame = () => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    petals.current.forEach((petal) => updatePetal(petal, width, height));

    timer.current++;
    requestAnimationFrame(updateFrame);
  };

  const createPetals = () => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    for (let i = 0; i < numPetals; i++) {
      const petalType =
        petalsTypes[Math.floor(Math.random() * petalsTypes.length)];
      const petal: Petal = {
        el: document.createElement("div"),
        x: 0,
        y: 0,
        z: 0,
        xSpeedVariation: 0,
        ySpeed: 0,
        rotation: { axis: "X", value: 0, speed: 0, x: 0 },
      };
      petal.el.className = `petal ${petalType.customClass}`;
      container.appendChild(petal.el);
      resetPetal(petal, width, height);
      petals.current.push(petal);
    }
  };

  useEffect(() => {
    const container = document.getElementById(id) as HTMLDivElement; // Explicit cast
    if (!container) {
      console.error(`[id] ${id} not found`);
      return;
    }
    containerRef.current = container;
    container.style.overflow = "hidden";
    createPetals();
    requestAnimationFrame(updateFrame);

    return () => {
      petals.current.forEach((petal) => {
        if (container.contains(petal.el)) {
          container.removeChild(petal.el);
        }
      });
    };
  }, [id, petalsTypes, numPetals, gravity, windMaxSpeed]);

  return <div id={id} className="absolute top-0 left-0 w-full h-full"></div>;
};

export default BlossomScene;
