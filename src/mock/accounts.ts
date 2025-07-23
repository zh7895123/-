export const accounts = [
  {
    id: '1',
    name: '张建设',
    role: 'contractor',
    permissions: ['project_view', 'vehicle_track', 'report_generate']
  },
  {
    id: '2',
    name: '李运输',
    role: 'driver',
    permissions: ['vehicle_track', 'location_share']
  },
  {
    id: '3',
    name: '王监理',
    role: 'contractor',
    permissions: ['project_view', 'alert_manage', 'report_view']
  }
];

export const allPermissions = [
  { id: 'project_view', name: '项目查看' },
  { id: 'vehicle_track', name: '车辆追踪' },
  { id: 'alert_manage', name: '预警管理' },
  { id: 'report_generate', name: '报告生成' },
  { id: 'report_view', name: '报告查看' },
  { id: 'location_share', name: '位置共享' }
];