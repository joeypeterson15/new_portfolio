import React, { useEffect, useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  ProjectOutlined,
  TeamOutlined,
  UserOutlined,
  InfoCircleOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { About_Me } from './text/intro_page';
import { AnimatePresence, motion, wrap } from "motion/react"
// import { AnimatePresence, motion, usePresenceData, wrap } from "motion/react"
import { container, box, button } from './styles.tsx';
import 'rc-texty/assets/index.css';
import './App.css'
import UsePresenceData from './intro_body_comp.js';
// import { motion, usePresenceData, wrap } from "motion/react"
// import { AnimatePresence, motion, usePresenceData, wrap } from "motion/react"

import { forwardRef, SVGProps } from "react"

const { Header, Content, Footer, Sider } = Layout;


const App = () => {
  const items = [1, 2, 3, 4, 5, 6]
  const [selectedItem, setSelectedItem] = useState(items[0])
  const [direction, setDirection] = useState(1)

   const color = `var(--hue-${selectedItem})`
  
  function setSlide(newDirection) {
    const nextItem = wrap(1, items.length, selectedItem + newDirection)
    setSelectedItem(nextItem)
    setDirection(newDirection)
  }
  
  // const Slide = forwardRef(function Slide(
  //   { color },
  //   ref
  // ) {
  //   const direction = usePresenceData()
  //   return (
  //       <motion.div
  //           ref={ref}
  //           initial={{ opacity: 0, x: direction * 50 }}
  //           animate={{
  //               opacity: 1,
  //               x: 0,
  //               transition: {
  //                   delay: 0.2,
  //                   type: "spring",
  //                   visualDuration: 0.3,
  //                   bounce: 0.4,
  //               },
  //           }}
  //           exit={{ opacity: 0, x: direction * -50 }}
  //           style={{ ...box, backgroundColor: color }}
  //       />
  //   )
  // })
  
  // function ArrowLeft() {
  //   return (
  //       <svg>
  //           <path d="m12 19-7-7 7-7" />
  //           <path d="M19 12H5" />
  //       </svg>
  //   )
  // }
  
  // function ArrowRight() {
  //   return (
  //       <svg>
  //           <path d="M5 12h14" />
  //           <path d="m12 5 7 7-7 7" />
  //       </svg>
  //   )
  // }
  const [isVisible, setIsVisible] = useState(false)

  const showWelcomeAnim = () => {
    setIsVisible(!isVisible)
  };

  useEffect(() => {
    setTimeout(showWelcomeAnim, 800)
  }, [])

  return (
    <div>
      <AnimatePresence id='animate_div' initial={false}>
          {isVisible ? (
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="box"
            >
            <h1 data-text="Welcome to my portfolio! My name is Joey Peterson and I'm a passionate software engineer">Welcome to my portfolio! My name is Joey Peterson and I'm a passionate software engineer</h1>
            </motion.div>
          ) : null}
      </AnimatePresence>
      <UsePresenceData />
      {/* <div style={container}>
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
                <Slide key={selectedItem} color={color} />
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
        </div> */}
    </div>

  );
};
export default App;