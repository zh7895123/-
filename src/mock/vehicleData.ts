export const vehicleData = {
  id: '101',
  plateNumber: '沪A12345',
  status: 'moving',
  driver: '张师傅',
  location: { lat: 31.2304, lng: 121.4737 },
  speed: 45,
  load: 8.5,
  cargo: [
    { name: '钢筋', quantity: '5吨', status: '已装载' },
    { name: '水泥', quantity: '3.5吨', status: '已装载' }
  ],
  route: [
    { lat: 31.2204, lng: 121.4637 },
    { lat: 31.2254, lng: 121.4687 },
    { lat: 31.2304, lng: 121.4737 }
  ],
  eta: '30分钟',
  timeline: [
    { time: '08:00', event: '出发', location: '上海建材市场' },
    { time: '08:30', event: '装货完成', location: '上海建材市场' },
    { time: '09:15', event: '到达工地', location: '上海中心大厦工地' },
    { time: '09:30', event: '卸货中', location: '上海中心大厦工地' }
  ]
};
