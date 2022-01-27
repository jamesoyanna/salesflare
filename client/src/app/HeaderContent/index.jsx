import React from 'react';
//import { useDispatch } from 'react-redux';

import { Avatar, Menu, Dropdown } from 'antd';

import {
  AppstoreOutlined,
  LogoutOutlined,
  BellOutlined,
} from '@ant-design/icons';
import avatar from '@/style/images/avatar.png';

//import { logout } from '@/redux/auth/actions';
import history from '@/utils/history';
import uniqueId from '@/utils/uinqueId';

export default function HeaderContent() {
  //const dispatch = useDispatch();
  const profileDropdown = (
    <div className="profileDropdown whiteBox shadow" style={{ minWidth: '200px' }}>
      <div className="pad15">
        <Avatar size="large" className="last" src={avatar} style={{ float: 'left' }} />
        <div className="info">
          <p className="strong">James Oyanna</p>
          <p>james@gmail.com</p>
        </div>
      </div>
      <div>
        <Menu>
          <Menu.Item
            icon={<LogoutOutlined />}
            key={`${uniqueId()}`}
            onClick={() => history.push('/logout')}
          >
            logout
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
  return (
    <div className="headerIcon" style={{ position: 'absolute', right: 0, zIndex: '99' }}>
      <Dropdown overlay={profileDropdown} trigger={['click']} placement="bottomRight">
        {/* <Badge dot> */}
        <Avatar className="last" src={avatar} />
        {/* </Badge> */}
      </Dropdown>

      <Avatar icon={<AppstoreOutlined />} />

      <Avatar icon={<BellOutlined />} />
    </div>
  );
}
