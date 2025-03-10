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
import Texty from 'rc-texty';
// import Button from 'antd/lib/button';
import 'rc-texty/assets/index.css';
// import TweenOne from 'rc-tween-one';

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Hey there!', '1', <UserOutlined />),
  // getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Projects', 'sub1', <ProjectOutlined />, [
    getItem('Machine Learning', '3'),
    getItem('App Clones', '4'),
    getItem('Visualizations and animations', '5'),
  ]),
  getItem('Contact Info', '6', <InfoCircleOutlined />),

  // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  // getItem('Files', '9', <FileOutlined />),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [show, setShow] = useState(true)
  const showWelcomeText = () => {
    setShow(!show)
  }
  useEffect(() => {
    setTimeout(showWelcomeText, 800)
  }, [])

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            paddingLeft: '40px',
            background: colorBgContainer,
          }}
        >
          {/* <div className="texty-demo" style={{ marginTop: 16 }}>
          </div> */}
          <Texty>{show && 'Ant Motion'}</Texty>
          {/* {show && (
            <TweenOne
              animation={{
                scale: 1.2,
                opacity: 1,
                duration: 500,
                type: 'from',
                ease: 'easeOutBack'
              }}
            >
              <div style={{ width: '100px', height: '100px', backgroundColor: 'red' }}>
                Animated Element
              </div>
            </TweenOne>
          )} */}
        </Header>
        <Content
          style={{
            margin: '0 16px',
            width: '50%'
            
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              paddingTop: '20px'
            }}
          >
            <p>{About_Me}</p>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;