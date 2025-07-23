import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { accounts, allPermissions } from '@/mock/accounts';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

export default function Accounts() {
  const navigate = useNavigate();
  const [accountList, setAccountList] = useState(accounts);

  const handlePermissionChange = (accountId: string, permissionId: string, checked: boolean) => {
    setAccountList(prev => prev.map(account => {
      if (account.id === accountId) {
        const newPermissions = checked 
          ? [...account.permissions, permissionId]
          : account.permissions.filter(p => p !== permissionId);
        return { ...account, permissions: newPermissions };
      }
      return account;
    }));
    toast.success('权限已更新');
  };

  const handleRoleChange = (accountId: string, newRole: 'contractor' | 'driver') => {
    setAccountList(prev => prev.map(account => {
      if (account.id === accountId) {
        return { ...account, role: newRole };
      }
      return account;
    }));
    toast.success('角色已更新');
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
          <h1 className="text-xl font-semibold">账号管理</h1>
          <div className="w-8"></div> {/* 占位保持对称 */}
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="font-medium text-[#2E3A59]">账号列表</h2>
          </div>
          
          <div className="divide-y divide-gray-200">
            {accountList.map(account => (
              <div key={account.id} className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h3 className="font-medium">{account.name}</h3>
                    <div className="flex space-x-2 mt-1">
                      <button
                        onClick={() => handleRoleChange(account.id, 'contractor')}
                        className={`px-3 py-1 text-xs rounded-full ${account.role === 'contractor' ? 'bg-[#2E3A59] text-white' : 'bg-gray-100 text-gray-800'}`}
                      >
                        承包商
                      </button>
                      <button
                        onClick={() => handleRoleChange(account.id, 'driver')}
                        className={`px-3 py-1 text-xs rounded-full ${account.role === 'driver' ? 'bg-[#2E3A59] text-white' : 'bg-gray-100 text-gray-800'}`}
                      >
                        司机
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {allPermissions.map(permission => (
                    <div key={permission.id} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`${account.id}-${permission.id}`}
                        checked={account.permissions.includes(permission.id)}
                        onChange={(e) => handlePermissionChange(account.id, permission.id, e.target.checked)}
                        className="h-4 w-4 rounded border-gray-300 text-[#2E3A59] focus:ring-[#2E3A59]"
                      />
                      <label htmlFor={`${account.id}-${permission.id}`} className="ml-2 text-sm text-gray-700">
                        {permission.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}