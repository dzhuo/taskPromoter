<template>
  <div>
    <Button type="primary" @click="addTask()">增加</Button>
    <Table :columns="columns" :data="data">
      <template slot-scope="{ row, index }" slot="name">
        <Input type="text" v-model="editName" v-if="editIndex === index" />
        <span v-else>{{ row.name }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="age">
        <Input type="text" v-model="editAge" v-if="editIndex === index" />
        <span v-else>{{ row.age }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="birthday">
        <Input type="text" v-model="editBirthday" v-if="editIndex === index" />
        <span v-else>{{ getBirthday(row.birthday) }}</span>
      </template>

      <template slot-scope="{ row, index }" slot="address">
        <Input type="text" v-model="editAddress" v-if="editIndex === index" />
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns: [
        {
          title: '姓名',
          slot: 'name'
        },
        {
          title: '年龄',
          slot: 'age'
        },
        {
          title: '出生日期',
          slot: 'birthday'
        },
        {
          title: '地址',
          slot: 'address'
        },
        {
          title: '操作',
          slot: 'action'
        }
      ],
      data: [

      ],
      editIndex: -1,  // 当前聚焦的输入框的行数
      editName: '',  // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
      editAge: '',  // 第二列输入框
      editBirthday: '',  // 第三列输入框
      editAddress: '',  // 第四列输入框
    }
  },
  created() {

    this.$db.remove({
      'name': null
    }, {
        multi: true
      }, (err, ret) => {
        if (!err) {
          console.log("remove success")
          console.log(ret)
        }
      })

    this.getTasks();
  },
  methods: {
    handleEdit(row, index) {
      this.editName = row.name;
      this.editAge = row.age;
      this.editAddress = row.address;
      this.editBirthday = this.getBirthday(row.birthday);
      this.editIndex = index;
      this.editId = row.id;
    },
    handleSave(index) {
      console.log(index);

      let par = {
        id: this.editId,
        meta: 'task',
        name: this.editName,
        age: this.editAge,
        birthday: this.editBirthday,
        address: this.editAddress,
      }
      this.$db.insert(par, (err, ret) => {
        if (!err) {
          console.log("insert success :" + index)
          this.data[index].id = this.editId;
          this.data[index].name = this.editName;
          this.data[index].age = this.editAge;
          this.data[index].birthday = this.editBirthday;
          this.data[index].address = this.editAddress;
          this.editIndex = -1;
        }
      })
  },
  getTasks() {
    this.$db.find({ 'meta': 'task', '_id': { $ne: null } }, (err, docs) => {
      console.log(err, docs)
      if (err) {
        this.$message({
          type: 'error',
          message: '内部错误！获取数据失败'
        })
      } else {
        this.data = docs
        // console.log(this.lists)
      }
    })
  },
  getBirthday(birthday) {
    const date = new Date(parseInt(birthday));
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  },
  addTask() {
    this.data.push({ 
      name:"",
      age:"",
      birthday: (new Date()).getTime() ,
      address:""
      });
  }
}
}
</script>