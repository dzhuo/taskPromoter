import fse from 'fs-extra';
import path from 'path';
import sq3 from 'sqlite3';
import logger from './logger';
import { docDir } from './settings';
// 将数据存至系统用户目录，防止用户误删程序
export const dbPath = path.join(docDir, 'data.sqlite3');
fse.ensureFileSync(dbPath);

const sqlite3 = sq3.verbose();
const db = new sqlite3.Database(dbPath);
db.serialize(() => {
  /**
   * 任务表 TAKES
   * id 主键
   * name 任务名称
   * level 任务等级
   * type  任务类型 
   * task_state 任务状态
   * worker 工作者
   * deadline 截止时间
   * start_date 开始时间
   * finish_date 结束时间
   * estimated_time 预计时间
   * used_time 使用时间
   * progress 进度
   * create_date 创建时间
   * update_date 最近更新时间
   * state 数据状态
   */
  db.get("SELECT count(*) as flag FROM sqlite_master WHERE type='table' AND name='TAKES';",
    (err, res) => {
      if (!err && !res.flag) {
        db.run(`
          CREATE TABLE TAKES(
            id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            name VARCHAR(255) NOT NULL,
            level INTEGER,
            type VARCHAR(20),
            task_state INTEGER,
            worker VARCHAR(20),
            deadline DATE ,
            start_date DATE ,
            finish_date DATE ,
            estimated_time INTEGER ,
            used_time INTEGER ,
            progress INTEGER ,
            create_date DATE NOT NULL,
            update_date DATE ,
            state INTEGER
          )`
          , err => {
            console.log(err);
          });
      }
    }
  )

  /**
   * 工程模块表 
   * id 主键
   * name 模块名称
   * pId 父模块ID
   * create_date 创建时间
   * update_date 最近更新时间
   * state 数据状态
   */
  db.get("SELECT count(*) as flag FROM sqlite_master WHERE type='table' AND name='PROJECT_MODULES';",
    (err, res) => {
      if (!err && !res.flag) {
        db.run(`
          CREATE TABLE PROJECT_MODULES(
            id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
            name VARCHAR(255) NOT NULL,
            pId INTEGER ,
            create_date DATE NOT NULL,
            update_date DATE ,
            state INTEGER
          )`
          , err => {
            console.log(err);
          });
      }
    }
  )





  // db.run(`CREATE TABLE GOODS_DETAIL_LIST(
  //   id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  //   goods_id INTEGER NOT NULL, 
  //   count DECIMAL(15,3) NOT NULL,
  //   actual_sell_unit_price DECIMAL(15,2) NOT NULL,
  //   actual_buy_unit_price DECIMAL(15,2) NOT NULL,
  //   amount DECIMAL(15,2) NOT NULL,
  //   remark VARCHAR(255) NOT NULL,
  //   latest INTEGER NOT NULL,
  //   create_time INTEGER NOT NULL,
  //   update_time INTEGER NOT NULL,
  //   FOREIGN KEY (goods_id) REFERENCES GOODS(id)
  //   )`, err => {
  //   logger(err);
  // });
});

export default db;
