'use client';

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useId } from "react";

export default function StarryBackground(){
    const uniqueId = useId();
    return(
        <Particles 
            init ={loadSlim}
            id={`tsparticles-${uniqueId}`}
            options={{
                fullScreen: { enable: false },
                background: { color: "transparent" },
                particles: {
                    number: { value: 200},
                    size: { value: { min: 1, max: 2 } },
                    move: { enable: true, speed: 0.2, outModes: "bounce" },
                    opacity: { value: { min: 0.3, max: 0.8 }, random: true },
                    color: { value: '#ffffff'},
                    shape: { type: "circle" },
                },
            }}
            className="absolute inset-0 w-full h-full z-0" 
        />
    );
}