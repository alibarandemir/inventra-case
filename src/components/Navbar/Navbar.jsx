import React, { useState } from 'react';
import { Layout, Menu, Drawer, Button, Avatar } from 'antd';
import {
  MenuOutlined,
  ArrowLeftOutlined,
  UserOutlined,
  HeartOutlined,
  BellOutlined,
  AppstoreOutlined,
  NodeIndexOutlined,
  BookOutlined,
  HourglassOutlined,
  AccountBookOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import '../../index.css';
import Searchbar from './Searchbar';
import MenuItem from 'antd/es/menu/MenuItem';
import { useAppContext } from '../../Context/AppContext';

const { Header } = Layout;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { userInfo } = useAppContext();
  if (!userInfo) {
    return <p>Loading...</p>;
  }

  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);

  const menuItems = [
    { key: '1', icon: <AppstoreOutlined />, label: 'All Products' },
    { key: '2', icon: <NodeIndexOutlined />, label: 'Dermatologist' },
    { key: '3', icon: <BookOutlined />, label: 'Community Story' },
    { key: '4', icon: <HourglassOutlined />, label: 'Skin Problem Predictor' },
    { key: '5', icon: <AccountBookOutlined />, label: 'Content Library' },
    { key: '6', icon: <UserOutlined />, label: 'Profile' },
    { key: '7', icon: <SettingOutlined />, label: 'App Settings' },
    { key: '8', icon: <QuestionCircleOutlined />, label: 'Help Center' },
  ];

  return (
    <Layout>
      <Header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100,
          padding: '0 20px',
          paddingRight:'100px',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#fff'
        }}
        className="flex items-center justify-between"
      >
        {/* Şirket ismi ve hamburger menü */}
        <div className="flex items-center gap-x-4">
          <Button
            className="hamburger-btn"
            type="text"
            icon={<MenuOutlined style={{ color: 'black' }} />}
            onClick={showDrawer}
            style={{ backgroundColor: 'transparent', border: 'none' }}
          />
          <div className="text-xl font-bold text-inventraColor">Inventra</div>
        </div>

        {/* Arama çubuğu */}
        <div className="flex-1 px-4 max-w-md">
          <Searchbar />
        </div>

        {/* İkonlar */}
        <div className="flex gap-x-4">
          <HeartOutlined className="text-2xl cursor-pointer hover:opacity-80" />
          <BellOutlined className="text-2xl cursor-pointer hover:opacity-80" />
        </div>

        {/* Drawer menüsü */}
        <Drawer
          placement="left"
          onClose={closeDrawer}
          open={visible}
          bodyStyle={{ padding: 0 }}
          closable={false}
        >
          <Button
            type="link"
            onClick={closeDrawer}
            style={{ fontSize: '16px', color: 'black', paddingLeft: '20px', marginTop: '10px' }}
          >
            <ArrowLeftOutlined />Back
          </Button>
          <div className="flex flex-col gap-y-4 px-5 mt-3">
            <Avatar shape="square" size={64} icon={<UserOutlined />} />
            <p className="text-2xl">Buse</p>
            <hr className="w-full" />
          </div>

          <Menu mode="inline">
            {menuItems.map((item) => (
              <Menu.Item key={item.key}>
                <div className="flex gap-x-4 items-center">
                  {item.icon}
                  <p>{item.label}</p>
                </div>
              </Menu.Item>
            ))}
            <MenuItem style={{ marginTop: '30px' }}>
              <div className="flex gap-x-4 items-center">
                <LogoutOutlined />
                <p>Log out</p>
              </div>
            </MenuItem>
          </Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
