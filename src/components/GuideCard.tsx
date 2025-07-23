import { cn } from "@/lib/utils";
import { useState } from "react";

export default function GuideCard() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className={cn("bg-white rounded-lg shadow-md p-6 mb-6 relative")}>
      <button 
        onClick={() => setDismissed(true)}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
      <h3 className="text-lg font-medium text-[#2E3A59] mb-4">系统使用指南</h3>
      <div className="space-y-3">
        <div className="flex items-start">
          <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-[#2E3A59] text-white flex items-center justify-center">
            <i className="fa-solid fa-1 text-xs"></i>
          </div>
          <div className="ml-3">
            <p className="font-medium">查看项目</p>
            <p className="text-sm text-gray-600">在首页浏览所有项目及其车辆状态</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-[#2E3A59] text-white flex items-center justify-center">
            <i className="fa-solid fa-2 text-xs"></i>
          </div>
          <div className="ml-3">
            <p className="font-medium">查看详情</p>
            <p className="text-sm text-gray-600">点击车辆卡片查看详细物流信息</p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-[#2E3A59] text-white flex items-center justify-center">
            <i className="fa-solid fa-3 text-xs"></i>
          </div>
          <div className="ml-3">
            <p className="font-medium">账号管理</p>
            <p className="text-sm text-gray-600">点击右上角按钮管理用户权限</p>
          </div>
        </div>
      </div>
    </div>
  );
}
