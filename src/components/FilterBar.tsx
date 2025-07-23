export default function FilterBar({ filter, setFilter }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1">
          <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-1">
            项目名称
          </label>
          <input
            type="text"
            id="projectName"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2E3A59] focus:border-[#2E3A59]"
            placeholder="输入项目名称"
            value={filter.projectName}
            onChange={(e) => setFilter({...filter, projectName: e.target.value})}
          />
        </div>
        <div className="flex-1">
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
            车辆状态
          </label>
          <select
            id="status"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#2E3A59] focus:border-[#2E3A59]"
            value={filter.status}
            onChange={(e) => setFilter({...filter, status: e.target.value})}
          >
            <option value="">全部状态</option>
            <option value="moving">行驶中</option>
            <option value="arrived">已到达</option>
            <option value="delayed">已延迟</option>
          </select>
        </div>
      </div>
    </div>
  );
}