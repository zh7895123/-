import { cn } from "@/lib/utils";

const mapPrompt = encodeURIComponent('Construction site map with vehicle location, clean industrial style, white background');
const mapUrl = `https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=%24%7BmapPrompt%7D&sign=7906dbcda56790b5741d38c21b6122b5`;

export default function MapPanel({ vehicleData }: { vehicleData: any }) {
  return (
    <div className={cn("bg-white rounded-lg shadow-md overflow-hidden")}>
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-medium text-[#2E3A59]">实时地图</h3>
      </div>
      <div className="relative h-64">
        <img 
          src={mapUrl}
          alt="Construction site map"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-lg shadow-md">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-xs text-gray-500">司机</p>
              <p className="font-medium">{vehicleData.driver}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">载重</p>
              <p className="font-medium">{vehicleData.load}吨</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">车速</p>
              <p className="font-medium">{vehicleData.speed}km/h</p>
            </div>
          </div>
          <div className="mt-2">
            <p className="text-xs text-gray-500">预计到达</p>
            <p className="font-medium text-[#FF6D00]">{vehicleData.eta}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
