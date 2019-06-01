<template>
  <div>
    <Row>
      <Col span="18" :style="{padding: '5px'}">
        <Row>
          <Card>
            <p slot="title">
              任务完成概况
              <small style="color: rgb(101, 113, 128);margin-left:5px">{{nowtime}}</small>
            </p>
            <Row>
              <Col span="6">
                <i-circle
                  :size="150"
                  :trail-width="4"
                  :stroke-width="5"
                  :percent="75"
                  stroke-linecap="square"
                  stroke-color="#43a3fb"
                >
                  <div class="demo-Circle-custom">
                    <h5>进行中任务</h5>
                    <p style="font-size:20px">12</p>
                    <span>
                      未完成占比
                      <i>75%</i>
                    </span>
                  </div>
                </i-circle>
              </Col>
              <Col span="6">
                <i-circle
                  :size="150"
                  :trail-width="4"
                  :stroke-width="5"
                  :percent="75"
                  stroke-linecap="square"
                  stroke-color="#43a3fb"
                >
                  <div class="demo-Circle-custom">
                    <h5>待开始任务</h5>
                    <p style="font-size:20px">12</p>
                    <span>
                      未完成占比
                      <i>75%</i>
                    </span>
                  </div>
                </i-circle>
              </Col>
              <Col span="6">
                <i-circle
                  :size="150"
                  :trail-width="4"
                  :stroke-width="5"
                  :percent="75"
                  stroke-linecap="square"
                  stroke-color="#43a3fb"
                >
                  <div class="demo-Circle-custom">
                    <h5>今日有效工时</h5>
                    <p style="font-size:20px">4</p>
                    <span>
                      效率
                      <i>100%</i>
                    </span>
                  </div>
                </i-circle>
              </Col>
              <Col span="6">
                <i-circle
                  :size="150"
                  :trail-width="4"
                  :stroke-width="5"
                  :percent="75"
                  stroke-linecap="square"
                  stroke-color="#43a3fb"
                >
                  <div class="demo-Circle-custom">
                    <h5>昨日有效工时</h5>
                    <p style="font-size:20px">4</p>
                    <span>
                      效率
                      <i>50%</i>
                    </span>
                  </div>
                </i-circle>
              </Col>
            </Row>
          </Card>
        </Row>
        <Row style="margin-top:5px">
          <Card dis-hover>
            <p slot="title">
              主要工程进度
              <small style="color: rgb(101, 113, 128);margin-left:5px">深圳进行特种设备不见面审批</small>
            </p>
            <Row>
              <Col span="6" :style="{textAlign:'center',marginLeft:'-12px'}">
                <Row>
                  <i-circle
                    :size="100"
                    :trail-width="5"
                    :stroke-width="5"
                    :percent="71"
                    stroke-linecap="square"
                    stroke-color="#43a3fb"
                  >
                    <div class="demo-Circle-custom">
                      <h5>当前进度</h5>
                      <p style="font-size:20px">71%</p>
                    </div>
                  </i-circle>
                </Row>
                <Row :style="{marginTop:'10px'}">
                  <Col span="8">
                    <span class="lable-title">进行中</span>
                    <span class="lable-num"></span>2
                  </Col>
                  <Col span="8">
                    <span class="lable-title">待开始</span>
                    <span class="lable-num"></span>2
                  </Col>
                  <Col span="8">
                    <span class="lable-title">已完成</span>
                    <span class="lable-num"></span>10
                  </Col>
                </Row>
              </Col>
              <Col span="18">
                <p>进行中任务进度</p>
                <Progress :percent="66" status="active">
                  <span>66%</span>
                </Progress>
                <p>昨日任务完成数</p>
                <Progress :percent="100">
                  <span>4/4</span>
                </Progress>
                <p>今日任务完成数</p>
                <Tooltip content="已完成一个任务，正在进行第二个任务" style="width: 100%">
                  <Progress :percent="60" :success-percent="30" status="active">
                    <span>1/3</span>
                  </Progress>
                </Tooltip>
              </Col>
            </Row>
          </Card>
        </Row>
        <Row>
          <Card>
            <p slot="title">
              今日工作时长
              <small style="color: rgb(101, 113, 128);margin-left:5px">{{workTime}}</small>
            </p>
            <Button type="primary" @click="showState">showState</Button>
            <Button type="primary" @click="handleStart">changeMenu</Button>
          </Card>
        </Row>
      </Col>
      <Col span="6" :style="{padding: '5px'}">
        <Card dis-hover>
          <p slot="title">近期使用记录</p>
          <Timeline>
            <TimelineItem>
              <p>
                <span class="record-time">6月01日 14:18</span>
                <span class="record-content">
                  <span class="finish-task">完成</span>任务
                  <a class="task-title">不见面审批开发</a>
                </span>
              </p>
            </TimelineItem>
            <TimelineItem>
              <p>
                <span class="record-time">6月01日 14:18</span>
                <span class="record-content">
                  <span style="suspend-task">暂停</span>任务
                  <a class="task-title">不见面审批开发</a>
                </span>
              </p>
            </TimelineItem>
            <TimelineItem>
              <p>
                <span class="record-time">6月01日 14:18</span>
                <span class="record-content">
                  <span style="delay-task">延期</span>任务
                  <a class="task-title">不见面审批开发</a>
                </span>
              </p>
            </TimelineItem>
            <TimelineItem>
              <p>
                <span class="record-time">6月01日 14:18</span>
                <span class="record-content">
                  <span style="suspend-task">暂停</span>任务
                  <a class="task-title">不见面审批开发</a>
                </span>
              </p>
            </TimelineItem>
            <TimelineItem>
              <p>
                <span class="record-time">6月01日 14:18</span>
                <span class="record-content">
                  <span style="suspend-task">暂停</span>任务
                  <a class="task-title">不见面审批开发</a>
                </span>
              </p>
            </TimelineItem>
            <TimelineItem>
              <p>
                <span class="record-time">6月01日 14:18</span>
                <span class="record-content">
                  <span style="suspend-task">暂停</span>任务
                  <a class="task-title">不见面审批开发</a>
                </span>
              </p>
            </TimelineItem>
            <TimelineItem>
              <p>
                <span class="record-time">6月01日 14:18</span>
                <span class="record-content">
                  <span style="suspend-task">暂停</span>任务
                  <a class="task-title">不见面审批开发</a>
                </span>
              </p>
            </TimelineItem>
          </Timeline>
        </Card>
      </Col>
    </Row>
  </div>
</template>
<script>
const timeFormater = require("time-formater");
export default {
  data() {
    return {
      time: new Date(),
      rightMenu: [],
      workTime:""
    };
  },
  mounted(){
    this.countWorkTime();
  },
  computed: {
    nowtime: () => {
      return timeFormater(new Date()).format("YYYY年MMMDo");
    }
  },
  methods: {
    showState() {
      console.log(this.$config);
    },
    countWorkTime() {
        let remain = 28800 // 8小时
        let countdown = timeFormater.countdown(remain)
        let token = '剩余：H小时m分钟s秒'
      function step(vue) {
        vue.workTime = countdown.format(token);
        requestAnimationFrame(function() {
        step(vue)
        });
      }
      step(this);
    },
    handleStart() {
      this.$store.dispatch("setRightMenu", {
        rightMenu: [
          {
            count: 0,
            content: "概况",
            name: "dashboard",
            route: "/task/dashboard",
            iconType: "ios-american-football-outline"
          },
          {
            count: 0,
            content: "进行中",
            name: "taksList",
            route: "/task/taksList",
            iconType: "ios-american-football-outline"
          },
          {
            count: 0,
            content: "待开始",
            name: "waiting",
            route: "/task/waiting",
            iconType: "md-aperture"
          },
          {
            count: 0,
            content: "已完成",
            name: "finish",
            route: "/task/finish",
            iconType: "md-list-box"
          }
        ]
      });
    }
  }
};
</script>
<style scoped>
h5 {
  margin-bottom: 5px;
}
p {
  margin-bottom: 5px;
}
span {
  margin-bottom: 5px;
}
.record-time {
  display: inline-block;
  padding: 0 5px;
  font-size: 12px;
  color: #8e939a;
  width: 100px;
}
.record-content {
  padding: 0 15px;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.finish-task {
}
.suspend-task {
}
.delay-task {
}
.lable-title {
  padding: 0 5px;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.lable-num {
  padding: 0 5px;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
</style>

