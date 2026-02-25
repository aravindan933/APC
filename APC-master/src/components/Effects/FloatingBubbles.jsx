import { motion } from 'framer-motion';

const FloatingBubbles = () => {
    const bubbles = Array.from({ length: 15 });

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
            {bubbles.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bg-blue-400/20 rounded-full blur-xl"
                    initial={{
                        width: Math.random() * 100 + 50,
                        height: Math.random() * 100 + 50,
                        x: Math.random() * 100 + '%',
                        y: '110%',
                    }}
                    animate={{
                        y: '-10%',
                        x: (Math.random() * 100) + '%',
                    }}
                    transition={{
                        duration: Math.random() * 20 + 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 20,
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingBubbles;
