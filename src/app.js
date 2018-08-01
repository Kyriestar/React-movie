import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      movieList: {
        data: [
          {
            name: "movie1",
            content: "movie1",
            url: "http://104.199.137.98/hls/Django.mp4"
          },
          {
            name: "movie2",
            content: "moive2",
            url: "http://104.199.137.98/hls/JL.mp4"
          }
        ]
      },
      tvList: ["电视剧1", "电视剧2", "电视剧3"],
      showWhat: 1, //1 代表的header上点击的是电影
      currentContent: "",
      showPlayer: false
    };
  }
  handleHearderClick(id) {
    this.setState({
      showWhat: id //代表点击的是电影
    });
  }

  handlelistClick(e) {
    this.setState({
      showPlayer: false
    });
    setTimeout(() => {
      console.log(e);
      let index = e.key;
      let arr = this.state.movieList.data;
      console.log(arr[index].url);
      this.setState({
        currentContent: arr[index].url,
        showPlayer: true
      });
    }, 500);
  }
  renderPlayer() {
    if (this.state.showPlayer) {
      return (
        <video align="center" width="1080" controls="controls">
          <source src={this.state.currentContent} />
        </video>
      );
    } else {
      return <span />;
    }
  }

  renderList() {
    if (this.state.showWhat === 1) {
      return this.state.movieList.data.map((item, index) => {
        return (
          <Menu.Item key={index} onClick={e => this.handlelistClick(e)}>
            {item.name}
          </Menu.Item>
        );
      });
    } else if (this.state.showWhat === 2) {
      return this.state.tvList.map((item, index) => {
        return (
          <Menu.Item key={index} onClick={e => this.handlelistClick(e)}>
            {item}
          </Menu.Item>
        );
      });
    }
  }

  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1" onClick={id => this.handleHearderClick(1)}>
              电影
            </Menu.Item>
            <Menu.Item key="2" onClick={id => this.handleHearderClick(2)}>
              电视剧
            </Menu.Item>
            <Menu.Item key="3">apply</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Layout style={{ padding: "24px 0", background: "#fff" }}>
            <Sider width={200} style={{ background: "#fff" }}>
              <Menu
                mode="inline"
                // defaultSelectedKeys={["0"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
              >
                {this.renderList()}
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 700 }}>
              {this.renderPlayer()}
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Mood Design ©2018 Created by Xiaoxing
        </Footer>
      </Layout>
    );
  }
}
