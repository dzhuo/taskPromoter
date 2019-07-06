import db from '@/utils/db';
import * as  classObjs  from './data';
class DataHandler {
    db = db;
    isBatch = false;
    tableObj = null;
    tableObjs = [];
    classS = [];
    deteleTemplateSQl = "";
    SelectTemplateSQl = "";
    UpdateTemplateSQl = "";
    constructor(handlObj) {
        if(handlObj instanceof Array){
            this.tableObjs = handlObj;
            this.isBatch = true;
        }else{
            this.tableObj = handlObj
            this.isBatch = false;
        }
    }
    getClass(obj){
        for(classObj in classObjs){
            if(obj  instanceof classObj)
            return classObj
        }
        throw new Error('处理的对象未定义')
    }
    getDb(obj){
        console.log(classObjs);
        console.log(this.db);;
    }

    groupBy(){

    }
    join(){

    }
    update() {
        
    }
    insert(){

    }
    query(){

    }
    delete(){

    }
    execute(sql){

    }
}

export default DataHandler; 