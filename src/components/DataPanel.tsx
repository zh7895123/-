import { cn } from "@/lib/utils";

export default function DataPanel({ vehicleData }: { vehicleData: any }) {
  return (
    <div className={cn("bg-white rounded-lg shadow-md overflow-hidden")}>
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-medium text-[#2E3A59]">货物清单</h3>
      </div>
      <div className="p-4">
        <div className="space-y-3">
          {vehicleData.cargo.map((item: any, index: number) => (
            <div key={index} className="p-3 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex justify-between">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">{item.quantity}</p>
              </div>
              <p className="text-xs mt-1 text-gray-500">状态: {item.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
