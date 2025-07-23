import { useNavigate } from 'react-router-dom';
import { alerts, processSteps } from '@/mock/alerts';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const levelColors = {
  minor: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  major: 'bg-orange-100 text-orange-800 border-orange-200',
  critical: 'bg-red-100 text-red-800 border-red-200'
};

const levelTexts = {
  minor: '轻微异常',
  major: '严重异常',
  critical: '紧急异常'
};

const statusColors = {
  pending: 'bg-gray-100 text-gray-800',
  in_progress: 'bg-blue-100 text-blue-800',
  resolved: 'bg-green-100 text-green-800'
};

const statusTexts = {
  pending: '待处理',
  in_progress: '处理中',
  resolved: '已解决'
};

export default function Alerts() {
  const navigate = useNavigate();

  const handleGenerateReport = (alertId: string) => {
    // 模拟生成报告
    toast.success('报告生成成功', {
      description: `预警ID: ${alertId} 的报告已生成`,
    });
    // 模拟震动反馈
    if (navigator.vibrate) {
      navigator.vibrate(200);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#2E3A59] text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-white hover:text-gray-200"
          >
            <i className="fa-solid fa-arrow-left mr-2"></i>
            返回
          </button>
          <h1 className="text-xl font-semibold">预警管理中心</h1>
          <div className="w-8"></div> {/* 占位保持对称 */}
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[#2E3A59] mb-6">处理进度</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between mb-4">
              {processSteps.map((step, index) => (
                <div key={step.id} className="text-center">
                  <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center 
                    ${index < 2 ? 'bg-[#2E3A59] text-white' : 'bg-gray-200 text-gray-600'}`}>
                    {step.id}
                  </div>
                  <p className="text-sm mt-2">{step.name}</p>
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-[#2E3A59] h-2.5 rounded-full" style={{ width: '40%' }}></div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-[#2E3A59] mb-6">预警列表</h2>
          <div className="space-y-4">
            {alerts.map(alert => (
              <div key={alert.id} className={cn(
                "bg-white rounded-lg shadow-md overflow-hidden border-l-4",
                levelColors[alert.level]
              )}>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className={`text-xs px-2 py-1 rounded-full ${levelColors[alert.level]}`}>
                        {levelTexts[alert.level]}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full ml-2 ${statusColors[alert.status]}`}>
                        {statusTexts[alert.status]}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{alert.time}</p>
                  </div>
                  <p className="text-gray-800 mb-4">{alert.description}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm">
                      <span className="text-gray-500">责任人: </span>
                      <span className="font-medium">{alert.assignedTo}</span>
                    </p>
                    <button
                      onClick={() => handleGenerateReport(alert.id)}
                      className="px-4 py-2 bg-[#2E3A59] text-white rounded-md hover:bg-[#1E2A49] transition-colors"
                    >
                      生成报告
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
