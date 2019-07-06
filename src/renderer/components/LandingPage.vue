<style scoped>
.layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    height: 100%;
}
.layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
.layout-logo-left {
    width: 90%;
    height: 30px;
    background: #fff;
    border-radius: 3px;
    margin: 15px auto;
}
.menu-icon {
    transition: all 0.3s;
}
.rotate-icon {
    transform: rotate(-90deg);
}
.menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width 0.2s ease 0.2s;
}
.menu-item i {
    transform: translateX(0px);
    transition: font-size 0.2s ease, transform 0.2s ease;
    vertical-align: middle;
    font-size: 16px;
}
.collapsed-menu span {
    width: 0px;
    transition: width 0.2s ease;
}
.collapsed-menu i {
    transform: translateX(5px);
    transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
    vertical-align: middle;
    font-size: 22px;
}
.menuLine {
    display: block;
    border-top: 1px #dcdee2 solid;
    width: 100%;
    height: 5px;
    background: #f8f8f9;
    position: absolute;
    bottom: 0;
    left: 0;
}
</style>
<template style="height:100%">
    <div class="layout">
        <Layout :style="{height:'100%'}">
            <Sider
                ref="side1"
                hide-trigger
                collapsible
                :collapsed-width="78"
                v-model="isCollapsed"
                :style="{borderRight: '2px #dcdee2 solid'}"
            >
                <Menu theme="light" width="auto" :class="menuitemClasses">
                    <router-link to="/index">
                        <MenuItem name="index">
                            <Icon type="md-aperture"/>
                            <span>主页</span>
                        </MenuItem>
                    </router-link>
                    <router-link to="/task">
                        <MenuItem name="task">
                            <Icon type="ios-flag"/>
                            <span>任务</span>
                        </MenuItem>
                    </router-link>
                    <router-link to="/script">
                        <MenuItem name="script">
                            <Icon type="ios-document"/>
                            <span>脚本</span>
                        </MenuItem>
                    </router-link>
                    <router-link to="/note">
                        <MenuItem name="note">
                            <Icon type="md-list-box"/>
                            <span>记事本</span>
                        </MenuItem>
                    </router-link>
                </Menu>
            </Sider>

            <Layout :style="{ height: '100%'}">
                <Header :style="{padding: 0}" class="layout-header-bar" style="z-index: 900;">
                    <Row type="flex" justify="end">
                        <Col span="2">
                            <Icon
                                @click.native="collapsedSider"
                                :class="rotateIcon"
                                :style="{margin: '0 20px'}"
                                type="md-menu"
                                size="24"
                            ></Icon>
                            <div class="menuLine"></div>
                        </Col>
                        <Col span="22">
                            <Menu theme="light" width="auto" mode="horizontal">
                                <router-link v-for="(item, itemIndex) in menuList" :to="item.route" v-bind:key="itemIndex">
                                    <Badge :count="item.count" :offset="[10, 10]" >
                                        <MenuItem :name="item.name">
                                            <Icon :type="item.iconType"/>
                                            <span>{{ item.content }}</span>
                                        </MenuItem>
                                    </Badge>
                                </router-link>
                            </Menu>
                        </Col>
                    </Row>
                </Header>
                <Content
                    :style="{margin: '1px',padding:'3px', background: '#efefef', height: 'calc(100% - 66px)', border:'1px soild #666'}"
                >
                    <Spin fix v-if="spinShow">
                        <div class="loader">
                            <svg class="circular" viewBox="25 25 50 50">
                                <circle
                                    class="path"
                                    cx="50"
                                    cy="50"
                                    r="20"
                                    fill="none"
                                    stroke-width="5"
                                    stroke-miterlimit="10"
                                ></circle>
                            </svg>
                        </div>
                    </Spin>
                    <router-view></router-view>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
export default {
    data() {
        return {
            spinShow: false,
            isCollapsed: false
        };
    },
    computed: {
        menuList() {
            return this.$store.state.Menu.rightMenu;
        },
        rotateIcon() {
            return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
        },
        menuitemClasses() {
            return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
        }
    },
    methods: {
        collapsedSider() {
            this.$refs.side1.toggleCollapse();
        }
    }
};
</script>
<style scoped>
.content-body{
    background-color: #efefef;
}
</style>