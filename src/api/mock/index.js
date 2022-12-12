import Mock,{mock,Random} from 'mockjs';

Mock.mock('/api/comment', 'get', (req, res) => {
  return {
    code: 200,
    message: '查询成功',
    data: Array(3)
      .fill()
      .map(() => {
        return { id: mock('@id'), name: mock('@cname'), avatar: Random.dataImage('200x200'),comment:mock('@sentence(3, 5)') };
      }),
  };
});
