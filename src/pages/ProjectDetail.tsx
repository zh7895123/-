import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { vehicleData } from '@/mock/vehicleData';
import MapPanel from '@/components/MapPanel';
import TimelinePanel from '@/components/TimelinePanel';
import DataPanel from '@/components/DataPanel';
import StatsPanel from '@/components/StatsPanel';
import { toast } from 'sonner';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activePanel, setActivePanel] = useState('map');

  const handleAlert = () => {
    toast.warning('已触发预警', {
      description: '异常情况已记录并通知相关人员',
    });
    navigate('/alert');
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
          <h1 className="text-xl font-semibold">项目详情</h1>
          <button 
            onClick={handleAlert}
            className="px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-colors"
          >
            触发预警
          </button>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className={activePanel === 'map' ? 'block' : 'hidden lg:block'}>
            <MapPanel vehicleData={vehicleData} />
          </div>
          <div className={activePanel === 'timeline' ? 'block' : 'hidden lg:block'}>
            <TimelinePanel vehicleData={vehicleData} />
          </div>
          <div className={activePanel === 'data' ? 'block' : 'hidden lg:block'}>
            <DataPanel vehicleData={vehicleData} />
          </div>
          <div className={activePanel === 'stats' ? 'block' : 'hidden lg:block'}>
            <StatsPanel />
          </div>
        </div>

        <div className="flex justify-center space-x-4 lg:hidden">
          <button 
            onClick={() => setActivePanel('map')}
            className={`px-4 py-2 rounded-md ${activePanel === 'map' ? 'bg-[#2E3A59] text-white' : 'bg-white text-[#2E3A59]'}`}
          >
            地图
          </button>
          <button 
            onClick={() => setActivePanel('timeline')}
            className={`px-4 py-2 rounded-md ${activePanel === 'timeline' ? 'bg-[#2E3A59] text-white' : 'bg-white text-[#2E3A59]'}`}
          >
            时间轴
          </button>
          <button 
            onClick={() => setActivePanel('data')}
            className={`px-4 py-2 rounded-md ${activePanel === 'data' ? 'bg-[#2E3A59] text-white' : 'bg-white text-[#2E3A59]'}`}
          >
            数据
          </button>
          <button 
            onClick={() => setActivePanel('stats')}
            className={`px-4 py-2 rounded-md ${activePanel === 'stats' ? 'bg-[#2E3A59] text-white' : 'bg-white text-[#2E3A59]'}`}
          >
            统计
          </button>
        </div>
      </main>
    </div>
  );
}
