import { motion } from 'framer-motion';

const BoilingBubbles = () => {
    const bubbles = Array.from({ length: 18 });

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 5 }}>
            {bubbles.map((_, i) => {
                const size = Math.random() * 5 + 3;        // tiny: 3px–8px
                const duration = Math.random() * 5 + 4;   // 4s–9s slow rise
                const delay = Math.random() * 8;
                const startX = Math.random() * 100;

                return (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: size,
                            height: size,
                            left: `${startX}%`,
                            bottom: 0,
                            backgroundColor: 'rgba(255,255,255,0.18)',
                            border: '1px solid rgba(255,255,255,0.25)',
                        }}
                        animate={{
                            y: [0, -window.innerHeight],
                            opacity: [0, 0.45, 0.3, 0],
                        }}
                        transition={{
                            duration,
                            repeat: Infinity,
                            ease: 'easeIn',
                            delay,
                        }}
                    />
                );
            })}
        </div>
    );
};

export default BoilingBubbles;
