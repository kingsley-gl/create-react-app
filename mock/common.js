import Mock from 'mockjs'

export default Mock.mock('/data', 'get',{
    success: true,
    message: 'test'
})
