import React, { useState } from 'react';
import { Layout, Menu, Drawer, Button,Avatar } from 'antd';
import { MenuOutlined,ArrowLeftOutlined,UserOutlined,HeartOutlined,BellOutlined,AppstoreOutlined,NodeIndexOutlined,BookOutlined,HourglassOutlined,AccountBookOutlined,SettingOutlined,QuestionCircleOutlined,LogoutOutlined } from '@ant-design/icons';
import '../../index.css'
import Searchbar from './Searchbar';
import MenuItem from 'antd/es/menu/MenuItem';
import { useAppContext } from '../../Context/AppContext';

const { Header } = Layout;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {userInfo}=useAppContext()
  if (!userInfo) {
    return <p>Loading...</p>; 
  }
  // Hamburger menü açma/kapama fonksiyonu
  const showDrawer = () => setVisible(true);
  const closeDrawer = () => setVisible(false);
  const menuItems = [
    { key: '1', icon: <AppstoreOutlined style={{ fontSize: '22px' }} />, label: 'All Products' },
    { key: '2', icon: <NodeIndexOutlined style={{ fontSize: '22px' }} />, label: 'Dermatologist' },
    { key: '3', icon: <BookOutlined style={{ fontSize: '22px' }} />, label: 'Community Story' },
    { key: '4', icon: <HourglassOutlined style={{ fontSize: '22px' }} />, label: 'Skin Problem Predictor' },
    { key: '5', icon: <AccountBookOutlined style={{ fontSize: '22px' }} />, label: 'Content Library' },
    { key: '6', icon: <UserOutlined style={{ fontSize: '22px' }} />, label: 'Profile' },
    { key: '7', icon: <SettingOutlined style={{ fontSize: '22px' }} />, label: 'App Settings' },
    { key: '8', icon: <QuestionCircleOutlined style={{ fontSize: '22px' }} />, label: 'Help Center' },
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
          display: 'flex',     
          justifyContent: 'space-between',
          alignItems:'center', 
          backgroundColor:'#ffff'
        }}
      >
        <Button
          className="hamburger-btn"
          type="text" 
          icon={<MenuOutlined style={{ color: 'black' }} />} 
          onClick={showDrawer}
          style={{
            zIndex: 200,
            backgroundColor: 'transparent', 
            border: 'none', 
          }}
        />
        {/* Şirket ismi */}
        <div className="h-full text-xl font-bold text-inventraColor flex justify-center items-center" >
          Inventra
        </div>
        {/*Arama Özelliği */}
        <Searchbar/>

        {/*İkonlar */}
        <div className='flex gap-x-5'>
         <HeartOutlined className='text-2xl cursor-pointer hover:opacity-80' />
         <BellOutlined className='text-2xl cursor-pointer hover:opacity-80' />

        </div>

        <Drawer
          placement="left"
          onClose={closeDrawer}
          visible={visible}
          bodyStyle={{ padding: 0 }}
          closable={false} 
        >
          
          <Button
            type="link"
            onClick={closeDrawer}
            style={{ fontSize: '16px', color: 'black', paddingLeft: '20px',marginTop:'10px' }}
          >
            <ArrowLeftOutlined />Back
          </Button>
          <div className='flex flex-col gap-y-4 px-5 mt-3'>
            <Avatar shape="square" size={64} icon={<UserOutlined />} />
            <p className='text-2xl'>Buse</p>
            <hr className='w-full'/>

          </div>

          <Menu mode="inline">
          {menuItems.map((item) => (
              <Menu.Item key={item.key}>
                <div className="flex gap-x-4">
                  {item.icon}
                  <p>{item.label}</p>
                </div>
              </Menu.Item>
          ))}
          <MenuItem style={{marginTop:'30px'}}>
          <div className="flex gap-x-4">
                  <LogoutOutlined/>
                <p>Log out</p>
            </div> 
          </MenuItem>
          </Menu>
        </Drawer>

        <Menu
          theme="dark"
          mode="horizontal"
          style={{
            display: 'none', 
          }}
        >
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">About</Menu.Item>
          <Menu.Item key="3">Services</Menu.Item>
          <Menu.Item key="4">Contact</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default Navbar;
