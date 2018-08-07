import React from 'react';
import {Layout, Menu, Icon} from 'antd';
import {NavLink, Route, Switch, Redirect} from 'react-router-dom';
import TeamRouter from '../LayoutRouter/teamRouter';
import StudentRouter from '../LayoutRouter/studentRouter';

import './index.css';

const {Header, Sider, Content} = Layout;

class AppLayout extends React.Component {


    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        let {match} = this.props;
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo"/>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['teams']}
                    >
                        <Menu.Item key="teams">
                            <Icon type="user"/>
                            <NavLink to='/score/teams' className="link">队伍</NavLink>
                        </Menu.Item>
                        <Menu.Item key="students">
                            <Icon type="video-camera"/>
                            <NavLink to='/score/students'>学生</NavLink>
                        </Menu.Item>

                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{background: '#fff', padding: 0}}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280}}>
                        <Switch>
                            <Route path={`${match.path}`} exact component={TeamRouter}/>
                            <Route path={`${match.path}/teams`} component={TeamRouter}/>
                            <Route path={`${match.path}/students`} component={StudentRouter} />
                            <Redirect to={`${match.url}`}/>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default AppLayout;