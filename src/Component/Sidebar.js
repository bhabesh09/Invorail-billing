import React, { useState } from 'react';
import "./Style/Invorail.css";
import sidebarimg from "../Images/logo.png";
import { IoMdHome } from "react-icons/io";
import { TbFileInvoice } from "react-icons/tb";
import { IoIosContacts } from "react-icons/io";
import { MdConnectWithoutContact } from "react-icons/md";
import { MdAccountBalanceWallet } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('HOME');
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);
  const [isSettingOpen,setIsSettingOPen]  = useState(false)

  const handleClick = (item) => {
    setActiveItem(item);
    if (item === 'INVOICE') {
      setIsInvoiceOpen(!isInvoiceOpen);
    } else {
      setIsInvoiceOpen(false);
    }
  };



  const handleClickSetting = (item) => {
    setActiveItem(item);
    if (item === 'SETTING') {
      setIsInvoiceOpen(!isInvoiceOpen);
    } else {
      setIsInvoiceOpen(false);
    } 
  };

  return (
    <div className="Sidebar">
      <div className='navigation'>
        <ul>
          <li><img src={sidebarimg} alt="logo" /></li>

          <Link to={"/dashboard"} className='linkuderline'>
            <li className={activeItem === 'HOME' ? 'active' : ''} onClick={() => handleClick('HOME')}>
              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <span style={{ fontSize: '24px' }}><IoMdHome className='imagesidebar' /></span>
                <span>HOME</span>
              </div>
            </li>
          </Link>

          <li className={activeItem === 'INVOICE' ? 'active' : ''} onClick={() => handleClick('INVOICE')}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span style={{ fontSize: '24px' }}><TbFileInvoice className='imagesidebar' /></span>
              <span>INVOICE</span>
              <span>{isInvoiceOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
            </div>
          </li>

          {isInvoiceOpen && (
            <div className={`submenu p-3 ${isInvoiceOpen ? 'open' : ''}`} style={{ backgroundColor: 'blue', marginTop: "-10px", borderRadius: "5px" }}>

              <div className={activeItem === 'Invoice' ? 'active' : ''} onClick={() => handleClick('Invoice')}>
                <Link to={"/invoice"} className='p-1 text-white '>Invoice</Link>
              </div>

              <div style={{ marginTop: "10px" }} className={activeItem === 'Recurring Invoices' ? 'active' : ''} onClick={() => handleClick('Recurring Invoices')}>
                <Link to={"/recurring-invoices"} className='p-1 text-white'>Recurring Invoices</Link>
              </div>

              <div style={{ marginTop: "10px", }} className={activeItem === 'Invoices / Templates' ? 'active' : ''} onClick={() => handleClick('Invoices / Templates')}>
                <Link to={"/"} className='p-1 text-white '>Invoices / Templates</Link>
              </div>

            </div>


          )}


          <Link to={"/client"}>
            <li className={activeItem === 'CLIENTS' ? 'active' : ''} onClick={() => handleClick('CLIENTS')}>
              <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                <span style={{ fontSize: '24px' }}><IoIosContacts className='imagesidebar' /></span>
                <span>CLIENTS</span>
              </div>
            </li>
          </Link>


          <li className={activeItem === 'PRODUCTS_SERVICES' ? 'active' : ''} onClick={() => handleClick('PRODUCTS_SERVICES')}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span style={{ fontSize: '24px' }}><MdConnectWithoutContact /></span>
              <span>PRODUCTS / SERVICES</span>
              <span><IoIosArrowForward /></span>
            </div>
          </li>

          <li className={activeItem === 'BALANCE' ? 'active' : ''} onClick={() => handleClick('BALANCE')}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span style={{ fontSize: '24px' }}><MdAccountBalanceWallet /></span>
              <span>BALANCE</span>
              <span><IoIosArrowForward /></span>
            </div>
          </li>

          <li className={activeItem === 'SETTINGS' ? 'active' : ''} onClick={() => handleClick('SETTINGS')}>
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
              <span style={{ fontSize: '24px' }}><TbFileInvoice className='imagesidebar' /></span>
              <span>SETTING</span>
              <span>{isInvoiceOpen ? <IoIosArrowDown /> : <IoIosArrowForward />}</span>
            </div>  
          </li>     

          {isInvoiceOpen && (
            <div className={`submenu p-3 ${isInvoiceOpen ? 'open' : ''}`} style={{ backgroundColor: 'blue', marginTop: "-10px", borderRadius: "5px" }}>

              <div className={activeItem === 'Invoice' ? 'active' : ''} onClick={() => handleClick('Invoice')}>
                <Link to={"/invoice"} className='p-1 text-white '>Invoice</Link>
              </div>

              <div style={{ marginTop: "10px" }} className={activeItem === 'Recurring Invoices' ? 'active' : ''} onClick={() => handleClick('Recurring Invoices')}>
                <Link to={"/recurring-invoices"} className='p-1 text-white'>Recurring Invoices</Link>
              </div>

              <div style={{ marginTop: "10px", }} className={activeItem === 'Invoices / Templates' ? 'active' : ''} onClick={() => handleClick('Invoices / Templates')}>
                <Link to={"/"} className='p-1 text-white '>Invoices / Templates</Link>
              </div>

            </div>


          )}


          <div style={{ paddingTop: "150px" }}>
            <h5 style={{ color: "white" }}>Get Premium Features</h5>
            <h6 style={{ color: "white", marginLeft: "25px", marginTop: "5px" }}>Get Premium Features</h6>
            <button style={{ width: "150px", height: "31px", border: "none", marginTop: "10px", marginLeft: "20px", borderRadius: "9px", background: "#FFF", color: "#06F", fontSize: "16px", fontWeight: "bold" }}>Get Premium Now</button>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
