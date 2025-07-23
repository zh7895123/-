import { useState } from 'react';
import VehicleCard from '@/components/VehicleCard';
import FilterBar from '@/components/FilterBar';

export default function ProjectList({ projects, filter, setFilter }) {
  const filteredProjects = projects.filter(project => {
    const matchesName = project.name.toLowerCase().includes(filter.projectName.toLowerCase());
    const matchesStatus = filter.status === '' || 
      project.vehicles.some(v => v.status === filter.status);
    return matchesName && matchesStatus;
  });

  return (
    <div>
      <FilterBar filter={filter} setFilter={setFilter} />
      <div className="space-y-6">
        {filteredProjects.map(project => (
          <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-medium text-[#2E3A59]">{project.name}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
              {project.vehicles.map(vehicle => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}