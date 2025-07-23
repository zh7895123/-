import { useNavigate } from 'react-router-dom';

const statusColors = {
  moving: 'bg-green-100 text-green-800',
  arrived: 'bg-blue-100 text-blue-800',
  delayed: 'bg-red-100 text-red-800'
};

export default function VehicleCard({ vehicle }) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/project/${vehicle.id}`)}
      className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium text-gray-900">{vehicle.plateNumber}</h3>
        <span className={`text-xs px-2 py-1 rounded-full ${statusColors[vehicle.status]}`}>
          {vehicle.status === 'moving' ? '行驶中' : 
           vehicle.status === 'arrived' ? '已到达' : '已延迟'}
        </span>
      </div>
      <p className="text-sm text-gray-600">司机: {vehicle.driver}</p>
    </div>
  );
}