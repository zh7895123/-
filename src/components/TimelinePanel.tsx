import { cn } from "@/lib/utils";

export default function TimelinePanel({ vehicleData }: { vehicleData: any }) {
  return (
    <div className={cn("bg-white rounded-lg shadow-md overflow-hidden")}>
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-medium text-[#2E3A59]">运输时间轴</h3>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          {vehicleData.timeline.map((item: any, index: number) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 w-3 h-3 mt-1 rounded-full bg-[#2E3A59]"></div>
              <div className="ml-4">
                <p className="text-sm font-medium">{item.time} - {item.event}</p>
                <p className="text-xs text-gray-500">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
