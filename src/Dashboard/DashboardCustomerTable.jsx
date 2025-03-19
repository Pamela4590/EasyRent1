import React, { useState } from 'react';
import "./Dashboardstyles/DashboardCustomerTable.css"
import { FiMenu, FiSearch, FiBell, FiSettings, FiHelpCircle } from 'react-icons/fi';
import { 
  FaRegUser, FaShoppingCart, FaHeart, FaEnvelope, 
  FaCommentAlt, FaFolder, FaCalendarAlt, FaChartBar,
  FaLock, FaFileInvoice, FaDollarSign, FaQuestionCircle, 
  FaBook, FaExclamationTriangle
} from 'react-icons/fa';

const DashboardCustomersTable = () => {
  const [customers] = useState([
    {
      id: 1,
      name: 'Adam Taylor',
      email: 'taylor-adam@example.com',
      registered: 'May 15, 2021',
      country: 'Russia',
      group: 'Default',
      spent: '$34,392.10',
      avatar: 'https://i.pravatar.cc/30?img=1'
    },
    {
      id: 2,
      name: 'Anna Wilson',
      email: 'wilson-anna@example.com',
      registered: 'February 26, 2021',
      country: 'Italy',
      group: 'Wholesaler',
      spent: '$25,486.20',
      avatar: 'https://i.pravatar.cc/30?img=2'
    },
    {
      id: 3,
      name: 'Brian Wood',
      email: 'wood-brian@example.com',
      registered: 'August 17, 2021',
      country: 'Germany',
      group: 'Default',
      spent: '$1,332.58',
      avatar: 'https://i.pravatar.cc/30?img=3'
    },
    {
      id: 4,
      name: 'Charlotte Jones',
      email: 'jones-charlotte@example.com',
      registered: 'December 31, 2021',
      country: 'Canada',
      group: 'Default',
      spent: '$5,192.42',
      avatar: 'https://i.pravatar.cc/30?img=4'
    },
    {
      id: 5,
      name: 'Ethan Young',
      email: 'young-ethan@example.com',
      registered: 'September 28, 2021',
      country: 'Russia',
      group: 'Wholesaler',
      spent: '$594.97',
      avatar: 'https://i.pravatar.cc/30?img=5'
    },
    {
      id: 6,
      name: 'Helena Garcia',
      email: 'garcia-helena@example.com',
      registered: 'February 23, 2021',
      country: 'China',
      group: 'Default',
      spent: '$5,702.02',
      avatar: 'https://i.pravatar.cc/30?img=6'
    },
    {
      id: 7,
      name: 'Isabel Williams',
      email: 'williams-isabel@example.com',
      registered: 'October 2, 2021',
      country: 'China',
      group: 'Default',
      spent: '$35,762.74',
      avatar: 'https://i.pravatar.cc/30?img=7'
    },
    {
      id: 8,
      name: 'Jacob Lee',
      email: 'lee-jacob@example.com',
      registered: 'May 12, 2021',
      country: 'Ukraine',
      group: 'Wholesaler',
      spent: '$911.27',
      avatar: 'https://i.pravatar.cc/30?img=8'
    },
    {
      id: 9,
      name: 'Jessica Moore',
      email: 'moore-jessica@example.com',
      registered: 'June 26, 2021',
      country: 'USA',
      group: 'Default',
      spent: '$28,522.35',
      avatar: 'https://i.pravatar.cc/30?img=9'
    }
  ]);

  return (
    // <div className="app-container">
    //   Envato Market Header
    //   <header className="envato-header">
    //     <div className="envato-logo">
    //       <img src="/api/placeholder/120/30" alt="Envato Market" />
    //     </div>
    //     <button className="buy-now-btn">Buy now</button>
    //   </header>
      
    //   {/* App Header */}
    //   <div className="app-header">
    //     <div className="app-brand">
    //       <span className="app-name">STROYKA</span>
    //       <span className="admin-badge">ADMIN</span>
    //     </div>
    //     <button className="menu-toggle">
    //       <FiMenu />
    //     </button>
    //     <div className="search-bar">
    //       <FiSearch className="search-icon" />
    //       <input type="text" placeholder="Search for the truth" />
    //     </div>
    //     <div className="header-actions">
    //       <button className="language-btn">
    //         <img src="/api/placeholder/24/16" alt="German flag" />
    //       </button>
    //       <button className="notification-btn">
    //         <FiBell />
    //         <span className="notification-badge">1</span>
    //       </button>
    //       <div className="user-profile">
    //         <img src="/api/placeholder/32/32" alt="User avatar" />
    //         <div className="user-info">
    //           <div className="user-name">Konstantin Veselovsky</div>
    //           <div className="user-email">stroyka@example.com</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
      
      <div className="app-container">
        {/* Sidebar */}
        {/* <nav className="sidebar">
          <div className="sidebar-section">
            <div className="sidebar-header">APPLICATION</div>
            <ul className="sidebar-menu">
              <li className="sidebar-item">
                <a href="#dashboard" className="sidebar-link">
                  <FaRegUser className="sidebar-icon" />
                  <span>Dashboard</span>
                </a>
              </li>
              <li className="sidebar-item expandable">
                <a href="#catalog" className="sidebar-link">
                  <FaShoppingCart className="sidebar-icon" />
                  <span>Catalog</span>
                </a>
              </li>
              <li className="sidebar-item expandable">
                <a href="#customers" className="sidebar-link">
                  <FaRegUser className="sidebar-icon" />
                  <span>Customers</span>
                </a>
              </li>
              <li className="sidebar-item expandable active">
                <a href="#orders" className="sidebar-link">
                  <FaShoppingCart className="sidebar-icon" />
                  <span>Orders</span>
                </a>
                <ul className="sidebar-submenu">
                  <li><a href="#orders-list">Orders List</a></li>
                  <li><a href="#order-details">Order Details</a></li>
                </ul>
              </li>
              <li className="sidebar-item expandable">
                <a href="#marketing" className="sidebar-link">
                  <FaHeart className="sidebar-icon" />
                  <span>Marketing</span>
                </a>
              </li>
              <li className="sidebar-item expandable">
                <a href="#inbox" className="sidebar-link">
                  <FaEnvelope className="sidebar-icon" />
                  <span>Inbox</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#chat" className="sidebar-link">
                  <FaCommentAlt className="sidebar-icon" />
                  <span>Chat</span>
                  <span className="badge">8</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#file-manager" className="sidebar-link">
                  <FaFolder className="sidebar-icon" />
                  <span>File Manager</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#calendar" className="sidebar-link">
                  <FaCalendarAlt className="sidebar-icon" />
                  <span>Calendar</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#analytics" className="sidebar-link">
                  <FaChartBar className="sidebar-icon" />
                  <span>Analytics</span>
                </a>
              </li>
              <li className="sidebar-item expandable">
                <a href="#settings" className="sidebar-link">
                  <FiSettings className="sidebar-icon" />
                  <span>Settings</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="sidebar-section">
            <div className="sidebar-header">PAGES</div>
            <ul className="sidebar-menu">
              <li className="sidebar-item expandable">
                <a href="#authentication" className="sidebar-link">
                  <FaLock className="sidebar-icon" />
                  <span>Authentication</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#invoice" className="sidebar-link">
                  <FaFileInvoice className="sidebar-icon" />
                  <span>Invoice</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#pricing-table" className="sidebar-link">
                  <FaDollarSign className="sidebar-icon" />
                  <span>Pricing Table</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#faq" className="sidebar-link">
                  <FaQuestionCircle className="sidebar-icon" />
                  <span>FAQ</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#terms" className="sidebar-link">
                  <FaBook className="sidebar-icon" />
                  <span>Terms And Conditions</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#help-center" className="sidebar-link">
                  <FiHelpCircle className="sidebar-icon" />
                  <span>Help Center</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a href="#not-found" className="sidebar-link">
                  <FaExclamationTriangle className="sidebar-icon" />
                  <span>Not Found</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
         */}
        {/* Main Content */}
        <main className="main-content">
          {/* Customers Table */}
          <div className="content-container">
            <div className="search-container">
              <FiSearch className="search-icon" />
              <input type="text" placeholder="Start typing to search for customers" />
            </div>
            
            <div className="customers-table">
              <table>
                <thead>
                  <tr>
                    <th className="checkbox-column">
                      <input type="checkbox" id="select-all" />
                    </th>
                    <th className="name-column sortable">
                      Name
                      <span className="sort-indicator">*</span>
                    </th>
                    <th className="registered-column sortable">
                      Registered
                      <span className="sort-indicator"></span>
                    </th>
                    <th className="country-column sortable">
                      Country
                      <span className="sort-indicator"></span>
                    </th>
                    <th className="group-column sortable">
                      Group
                      <span className="sort-indicator"></span>
                    </th>
                    <th className="spent-column sortable">
                      Spent
                      <span className="sort-indicator"></span>
                    </th>
                    <th className="actions-column"></th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map(customer => (
                    <tr key={customer.id}>
                      <td className="checkbox-column">
                        <input type="checkbox" id={`select-${customer.id}`} />
                      </td>
                      <td className="name-column">
                        <div className="customer-info">
                          <img src={customer.avatar} alt={`${customer.name}'s avatar`} className="customer-avatar" />
                          <div className="customer-details">
                            <div className="customer-name">{customer.name}</div>
                            <div className="customer-email">{customer.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="registered-column">{customer.registered}</td>
                      <td className="country-column">{customer.country}</td>
                      <td className="group-column">{customer.group}</td>
                      <td className="spent-column">{customer.spent}</td>
                      <td className="actions-column">
                        <button className="action-btn">⋮</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    
  );
}

export default DashboardCustomersTable;



