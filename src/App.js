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
    </div>

  );
};
export default App;