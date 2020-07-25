<template>
    <Content>
        <div :style="query_box_style">
            <Drawer
                title="工程模块筛选"
                :closable="false"
                v-model="queryByModule"
                :transfer="false"
                :width="500"
                :inner="true"
                :scrollable="true"
            >
                <queryBox></queryBox>
            </Drawer>
        </div>
        <Button @click="showQueryBox" type="primary">Open</Button>
        <Table :columns="columns" :data="data">
            <template slot-scope="{ row, index }" slot="name">
                <Input type="text" v-model="editName" v-if="editIndex === index"/>
                <span v-else>{{ row.name }}</span>
            </template>

            <template slot-scope="{ row, index }" slot="age">
                <Input type="text" v-model="editAge" v-if="editIndex === index"/>
                <span v-else>{{ row.age }}</span>
            </template>

            <template slot-scope="{ row, index }" slot="birthday">
                <Input type="text" v-model="editBirthday" v-if="editIndex === index"/>
                <span v-else>{{ getBirthday(row.birthday) }}</span>
            </template>

            <template slot-scope="{ row, index }" slot="address">
                <Input type="text" v-model="editAddress" v-if="editIndex === index"/>
                <span v-else>{{ row.address }}</span>
            </template>

            <template slot-scope="{ row, index }" slot="action">
                <div v-if="editIndex === index">
                    <Button @click="handleSave(index)">保存</Button>
                    <Button @click="editIndex = -1">取消</Button>
                </div>
                <div v-else>
                    <Button @click="handleEdit(row, index)">操作</Button>
                </div>
            </template>
        </Table>
    </Content>
</template>
<script>
import queryBox from "./components/queryBox";
import DataHandler from "@/object/db/DataHandler.js";
export default {
    components: { queryBox },
    data() {
        return {
            queryByModule: false,
            queryBox: "query_box",
            columns: [
                {
                    title: "姓名",
                    slot: "name"
                },
                {
                    title: "年龄",
                    slot: "age"
                },
                {
                    title: "出生日期",
                    slot: "birthday"
                },
                {
                    title: "地址",
                    slot: "address"
                },
                {
                    title: "操作",
                    slot: "action"
                }
            ],
            data: [
                // {
                //     name: "王小明",
                //     age: 18,
                //     birthday: "919526400000",
                //     address: "北京市朝阳区芍药居"
                // },
                // {
                //     name: "张小刚",
                //     age: 25,
                //     birthday: "696096000000",
                //     address: "北京市海淀区西二旗"
                // },
                // {
                //     name: "李小红",
                //     age: 30,
                //     birthday: "563472000000",
                //     address: "上海市浦东新区世纪大道"
                // },
                // {
                //     name: "周小伟",
                //     age: 26,
                //     birthday: "687024000000",
                //     address: "深圳市南山区深南大道"
                // }
            ],
            editIndex: -1, // 当前聚焦的输入框的行数
            editName: "", // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
            editAge: "", // 第二列输入框
            editBirthday: "", // 第三列输入框
            editAddress: "" // 第四列输入框
        };
    },
    computed: {
        query_box_style: function() {
            return this.queryByModule
                ? {
                      "z-index": "999",
                      position: "absolute",
                      width: "100%",
                      height: "100%"
                  }
                : {
                      position: "relative"
                  };
        }
    },
    methods: {
        handleEdit(row, index) {
            this.editName = row.name;
            this.editAge = row.age;
            this.editAddress = row.address;
            this.editBirthday = row.birthday;
            this.editIndex = index;
        },
        handleSave(index) {
            this.data[index].name = this.editName;
            this.data[index].age = this.editAge;
            this.data[index].birthday = this.editBirthday;
            this.data[index].address = this.editAddress;
            this.editIndex = -1;
        },
        getBirthday(birthday) {
            const date = new Date(parseInt(birthday));
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            return `${year}-${month}-${day}`;
        },
        showQueryBox() {
            this.queryByModule = true;
        },
        queryTaskList(){
           // console.log((new DataHandler([1,2,3,54])).getDb());
             var countSQL = "SELECT * FROM TAKES;"
                this.$db.get(countSQL, (err, res) => {
                if (err) {
                    this.$Notice.error({
                        title: '任务列表查询失败',
                        desc: err,
                    });
                } else {
                   console.log(res)
                }
            });
        }
    },
    created(){
      this.queryTaskList();
    },
};
</script>
<style scope>
</style>