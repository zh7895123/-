import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="bg-[#2E3A59] text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">建筑工地物流追踪系统</h1>
        <button 
          onClick={() => navigate('/account')}
          className="px-4 py-2 rounded-md bg-white text-[#2E3A59] hover:bg-gray-100 transition-colors"
        >
          账号管理
        </button>
      </div>
    </header>
  );
}