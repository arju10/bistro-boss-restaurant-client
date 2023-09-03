import { useState } from 'react';
import orderCoverImg from '../../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import useMenu from './../../../hook/useMenu';
import OrderTab from './../OrderTab/OrderTab';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();

    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover img={orderCoverImg} title="Order Food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} style={{ backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', padding: '20px', borderRadius: '10px' }}>
                <TabList style={{ display: 'flex', justifyContent: 'center', gap: '16px' }} >
                    <Tab style={tabIndex === 0 ? activeTabStyle : tabStyle}>Salad</Tab>
                    <Tab style={tabIndex === 1 ? activeTabStyle : tabStyle}>Pizza</Tab>
                    <Tab style={tabIndex === 2 ? activeTabStyle : tabStyle}>Soup</Tab>
                    <Tab style={tabIndex === 3 ? activeTabStyle : tabStyle}>Dessert</Tab>
                    <Tab style={tabIndex === 4 ? activeTabStyle : tabStyle}>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

const tabStyle = {
    padding: '10px 20px',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: '0.3s',
    color: '#555',
    backgroundColor: '#f7f7f7',
    border: 'none',
    ':hover': {
        backgroundColor: '#e0e0e0',
        color: '#222',
    },
    ':focus': {
        outline: 'none',
    }
};

const activeTabStyle = {
    ...tabStyle,
    backgroundColor: '#F7BE81',
    color: '#fff'
};

export default Order;