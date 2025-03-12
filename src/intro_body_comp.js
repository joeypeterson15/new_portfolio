import { forwardRef, SVGProps, useState } from "react";
import { AnimatePresence, motion, usePresenceData, wrap } from "motion/react"
// import './styles.tsx'
import { About_Me } from "./text/intro_page.js";
import { container, iconsProps, box, button } from "./styles.tsx";

function ArrowLeft() {
    return (
        <svg {...iconsProps}>
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
        </svg>
    )
}

function ArrowRight() {
    return (
        <svg {...iconsProps}>
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}

const Slide = forwardRef(function Slide(
    { color, link },
    ref
) {
    const direction = usePresenceData()
    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{
                opacity: 1,
                x: 0,
                transition: {
                    delay: 0.2,
                    type: "spring",
                    visualDuration: 0.3,
                    bounce: 0.4,
                },
            }}
            exit={{ opacity: 0, x: direction * -50 }}
            style={{ ...box, backgroundColor: color }}
        >
            <h2 style={{paddingLeft: '15px'}}>
                <span>{link['link']}</span>
                {link['text'] && 
                    <p>{About_Me}</p>
                }

            </h2>
        </motion.div>
    )
})

export default function UsePresenceData() {
    const links = [
        {
            'link': 'About',
            'color': 'rgba(236, 34, 37, 0.5)',
            'text': About_Me
            
        },
        {
            'link': 'Projects',
            'color': '#0cdcf7',
            'text': ''

        },
        
    ]
    // let linksIndex = 0

    
    // const [selectLink]
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [direction, setDirection] = useState(1)

    function setSlide(newDirection) {
        console.log('new direction: ', newDirection)

        if (selectedIndex >= 1 && newDirection == 1){
            setSelectedIndex(0)
        }
        else if (selectedIndex <= 0 && newDirection == -1){
            setSelectedIndex(1)
        } else {
            setSelectedIndex(selectedIndex + newDirection)
        }
            
        setDirection(newDirection)
    }

    const color = links[selectedIndex]['color']
    // const color = 'red'

    return (
        <div style={container}>
            <motion.button
                initial={false}
                animate={{ backgroundColor: color }}
                aria-label="Previous"
                style={button}
                onClick={() => setSlide(-1)}
                whileFocus={{ outline: `2px solid ${color}` }}
                whileTap={{ scale: 0.9 }}
            >
                <ArrowLeft />
            </motion.button>
            <AnimatePresence
                custom={direction}
                initial={false}
                mode="popLayout"
            >
                <Slide key={selectedIndex} color={color} link={links[selectedIndex]}/>
                    
            </AnimatePresence>
            <motion.button
                initial={false}
                animate={{ backgroundColor: color }}
                aria-label="Next"
                style={button}
                onClick={() => setSlide(1)}
                whileFocus={{ outline: `2px solid ${color}` }}
                whileTap={{ scale: 0.9 }}
            >
                <ArrowRight />
            </motion.button>
        </div>
    )
}