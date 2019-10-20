//导入mock包
import Mock from 'mockjs'

//通过Mock.mock（）来模拟API接口
Mock.mock('/api/getlist',{
    status:200,
    message:'获取数据成功',
    data:[1,2,3,4]
})