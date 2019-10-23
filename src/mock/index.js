//导入mock包
import Mock from 'mockjs'

//通过Mock.mock（）来模拟API接口
Mock.mock('/api/getlist',{
    status:200,
    message:'获取数据成功',
    "data|15":[
        {"newsid|+1":1,
        "newsImages":"@Image('100x40','#c33', '#ffffff','小北鼻')",
        "newstitles":"@ctitle(15)",
        "newszan|1-100":3
    
    }
    ]
}),

Mock.mock('/api/getallcontent',{
    status:200,
    message:'获取数据成功',
    "data|12":[
        {"contentids|+1":1,
        "contentname":"@ctitle(4)",
        "contentdata":"@datetime('yyyy-MM-dd  HH:mm:ss')",
        "contentcomms":"@ctitle(14)",
    
    }
    ]
})