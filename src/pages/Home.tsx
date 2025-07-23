import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ProjectList from '@/components/ProjectList';
import { projects } from '@/mock/projects';
import GuideCard from '@/components/GuideCard';

export default function Home() {
  const [filter, setFilter] = useState({
    projectName: '',
    status: ''
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-[#2E3A59]">项目总览</h1>
        </div>
        <GuideCard />
        <ProjectList projects={projects} filter={filter} setFilter={setFilter} />
      </main>
    </div>
  );
}