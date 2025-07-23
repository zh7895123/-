export const projects = [
  {
    id: '1',
    name: '上海中心大厦项目',
    vehicles: [
      { id: '101', plateNumber: '沪A12345', status: 'moving', driver: '张师傅' },
      { id: '102', plateNumber: '沪B67890', status: 'arrived', driver: '李师傅' },
      { id: '103', plateNumber: '沪C24680', status: 'delayed', driver: '王师傅' }
    ]
  },
  {
    id: '2',
    name: '北京大兴机场项目',
    vehicles: [
      { id: '201', plateNumber: '京A13579', status: 'arrived', driver: '赵师傅' },
      { id: '202', plateNumber: '京B24680', status: 'moving', driver: '钱师傅' }
    ]
  },
  {
    id: '3',
    name: '广州塔建设项目',
    vehicles: [
      { id: '301', plateNumber: '粤A11223', status: 'delayed', driver: '孙师傅' },
      { id: '302', plateNumber: '粤B44556', status: 'arrived', driver: '周师傅' },
      { id: '303', plateNumber: '粤C77889', status: 'moving', driver: '吴师傅' }
    ]
  }
];