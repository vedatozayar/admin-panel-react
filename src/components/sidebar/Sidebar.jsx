import React, { useContext } from 'react';
import './Sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InsertChartOutlinedSharpIcon from '@mui/icons-material/InsertChartOutlinedSharp';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../../contex/darkModeContext';
const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>VedatAdmin</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <DashboardIcon className='icon' />
            <span>Dashboard</span>
          </li>
          <p className='title'>LISTS</p>
          <Link to='/users' style={{ textDecoration: 'none' }}>
            <li>
              <Person2OutlinedIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>
          <Link to='/products' style={{ textDecoration: 'none' }}>
            <li>
              <Inventory2OutlinedIcon className='icon' />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardOutlinedIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL</p>
          <li>
            <InsertChartOutlinedSharpIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon className='icon' />
            <span>Notrifications</span>
          </li>
          <p className='title'>SERVICE</p>
          <li>
            <HealthAndSafetyOutlinedIcon className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <AdminPanelSettingsOutlinedIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <SettingsSuggestOutlinedIcon className='icon' />
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AssignmentIndOutlinedIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon className='icon' />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div
          className='colorOption'
          onClick={() => dispatch({ type: 'LIGHT' })}
        ></div>
        <div
          className='colorOption'
          onClick={() => dispatch({ type: 'DARK' })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
