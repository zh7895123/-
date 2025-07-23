export const alerts = [
  {
    id: '1',
    level: 'minor',
    time: '2025-07-11 08:30',
    description: '车辆行驶路线偏离预定路线500米',
    assignedTo: '张主管',
    status: 'pending'
  },
  {
    id: '2',
    level: 'major',
    time: '2025-07-11 09:15',
    description: '货物温度超过安全阈值',
    assignedTo: '李经理',
    status: 'in_progress'
  },
  {
    id: '3',
    level: 'critical',
    time: '2025-07-11 10:00',
    description: '车辆发生碰撞事故',
    assignedTo: '王总监',
    status: 'resolved'
  }
];

export const processSteps = [
  { id: 1, name: '异常发现' },
  { id: 2, name: '责任人指派' },
  { id: 3, name: '处理中' },
  { id: 4, name: '验证解决' },
  { id: 5, name: '报告归档' }
];
