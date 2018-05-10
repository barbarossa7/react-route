import React,{ Component } from 'react';
import { Menu, Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router'
import './antd.css'

 const SubMenu = Menu.SubMenu;

export default class App extends Component{

  render() {
    return (
       <div>
        <div className="ant-layout-aside">
          <aside className="ant-layout-sider">
            <div className="ant-layout-logo"></div>
            <Menu mode="inline" theme="dark"
              defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
              <SubMenu key="sub1" title={<span><Icon type="user" />lord</span>}>
                <Menu.Item key="1"><Link to='/'>Duck</Link></Menu.Item>
                <Menu.Item key="2"><Link to='/marquis'>marquis</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />sir</span>}>
                <Menu.Item key="5"><Link to='/count'>count</Link></Menu.Item>
                <Menu.Item key="6"><Link to='/viscount'>viscount</Link></Menu.Item>
                <Menu.Item key="7"><Link to='/baron'>baron</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />导航三</span>}>
                <Menu.Item key="9">选项9</Menu.Item>
                <Menu.Item key="10">选项10</Menu.Item>
                <Menu.Item key="11">选项11</Menu.Item>
                <Menu.Item key="12">选项12</Menu.Item>
              </SubMenu>
            </Menu>
          </aside>
          <div className="ant-layout-main">
            <div className="ant-layout-header"></div>
            <div className="ant-layout-breadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>应用列表</Breadcrumb.Item>
                <Breadcrumb.Item>某应用</Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="ant-layout-container">
              <div className="ant-layout-content">
                <div>
                    { this.props.children}
                </div>
              </div>
            </div>
            <div className="ant-layout-footer">

            </div>
          </div>
        </div>
      </div>
    )
  }
}
