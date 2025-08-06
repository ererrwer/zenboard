import React from 'react';
import './App.css';

function App() {
  return (
    <div className="flex h-screen font-sans bg-gray-50 text-[#1D2129] overflow-x-hidden">
      {/* 侧边栏 */}
      <aside className="w-64 bg-white shadow-lg fixed h-full z-30">
        <div className="p-4 border-b flex items-center gap-3">
          <div className="w-10 h-10 bg-[#165DFF] rounded-lg flex items-center justify-center">
            <i className="fas fa-tachometer-alt text-white text-xl"></i>
          </div>
          <h1 className="text-xl font-bold">管理后台</h1>
        </div>
        <nav className="p-4 flex flex-col h-[calc(100%-80px)]">
          <div className="mb-6">
            <p className="text-xs text-gray-400 uppercase font-semibold mb-3 px-3">主导航</p>
            <ul className="space-y-1">
              <li>
                <a href="#" className="sidebar-item-active flex items-center gap-3 px-3 py-3 rounded-md">
                  <i className="fas fa-tachometer-alt w-5 text-center"></i> <span>仪表盘</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-md hover:bg-gray-100">
                  <i className="fas fa-users w-5 text-center"></i> <span>用户管理</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-md hover:bg-gray-100">
                  <i className="fas fa-shopping-bag w-5 text-center"></i> <span>产品管理</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-md hover:bg-gray-100">
                  <i className="fas fa-credit-card w-5 text-center"></i> <span>订单管理</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-md hover:bg-gray-100">
                  <i className="fas fa-comment-alt w-5 text-center"></i> <span>消息中心</span>
                  <span className="ml-auto bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <p className="text-xs text-gray-400 uppercase font-semibold mb-3 px-3">系统设置</p>
            <ul className="space-y-1">
              <li>
                <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-md hover:bg-gray-100">
                  <i className="fas fa-cog w-5 text-center"></i> <span>系统设置</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-md hover:bg-gray-100">
                  <i className="fas fa-user-shield w-5 text-center"></i> <span>权限管理</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-3 px-3 py-3 rounded-md hover:bg-gray-100">
                  <i className="fas fa-chart-line w-5 text-center"></i> <span>数据统计</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto pt-4 border-t">
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="font-medium text-sm mb-2">存储空间</h3>
              <div className="w-full bg-white rounded-full h-2 mb-2">
                <div className="bg-[#165DFF] h-2 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <p className="text-xs text-gray-500">65% 已使用 (13/20 GB)</p>
              <button className="w-full mt-3 text-[#165DFF] text-sm font-medium hover:underline">升级存储空间</button>
            </div>
          </div>
        </nav>
      </aside>
      {/* 主内容区域 */}
      <div className="flex-1 ml-64">
        {/* 顶部导航栏 */}
        <header className="bg-white shadow-sm fixed top-0 right-0 left-64 z-20">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <div className="relative hidden md:block">
                <input type="text" placeholder="搜索..." className="input-field pl-10 w-64" />
                <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-400 hover:bg-gray-100 rounded-full">
                <i className="fas fa-bell text-xl"></i>
                <span className="absolute top-1 right-1 bg-red-500 w-2 h-2 rounded-full"></span>
              </button>
              <button className="relative p-2 text-gray-400 hover:bg-gray-100 rounded-full">
                <i className="fas fa-envelope text-xl"></i>
                <span className="absolute top-1 right-1 bg-[#165DFF] w-2 h-2 rounded-full"></span>
              </button>
              <div className="relative group">
                <button className="flex items-center gap-2 focus:outline-none">
                  <img src="https://design.gemcoder.com/staticResource/echoAiSystemImages/aba2c125eaff17bbd5f83ebee8c08311.png" alt="用户头像" className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm" />
                  <div className="hidden md:block text-left">
                    <p className="text-sm font-medium">管理员</p>
                    <p className="text-xs text-gray-500">系统管理员</p>
                  </div>
                  <i className="fas fa-chevron-down text-xs text-gray-400 hidden md:block"></i>
                </button>
              </div>
            </div>
          </div>
        </header>
        {/* 页面内容 */}
        <main className="pt-20 p-6 pb-10">
          {/* 页面标题 */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold">仪表盘</h1>
            <p className="text-gray-500 mt-1">欢迎回来，管理员！这里是你的系统概览。</p>
          </div>
          {/* 快捷操作 */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex flex-wrap gap-3">
              <button className="bg-[#165DFF] text-white px-4 py-2 rounded-md flex items-center gap-2"><i className="fas fa-plus"></i> 新建项目</button>
              <button className="border border-gray-200 text-gray-600 px-4 py-2 rounded-md flex items-center gap-2"><i className="fas fa-download"></i> 导出数据</button>
              <button className="border border-gray-200 text-gray-600 px-4 py-2 rounded-md flex items-center gap-2"><i className="fas fa-filter"></i> 筛选</button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm">时间范围:</span>
              <select className="input-field w-auto text-sm">
                <option>今日</option>
                <option>本周</option>
                <option selected>本月</option>
                <option>本季度</option>
                <option>本年</option>
                <option>自定义</option>
              </select>
            </div>
          </div>
          {/* 数据卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
            <div className="bg-white rounded-xl shadow p-5 card-transition">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-500 text-sm">总用户</p>
                  <h3 className="text-2xl font-bold mt-1">12,854</h3>
                  <p className="text-green-600 text-sm flex items-center mt-2">
                    <i className="fas fa-arrow-up mr-1"></i> 12.5% <span className="text-gray-500 ml-1">vs 上月</span>
                  </p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-5 card-transition">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-500 text-sm">总订单</p>
                  <h3 className="text-2xl font-bold mt-1">8,452</h3>
                  <p className="text-green-600 text-sm flex items-center mt-2">
                    <i className="fas fa-arrow-up mr-1"></i> 8.2% <span className="text-gray-500 ml-1">vs 上月</span>
                  </p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-400">
                  <i className="fas fa-shopping-cart text-xl"></i>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-5 card-transition">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-500 text-sm">总收入</p>
                  <h3 className="text-2xl font-bold mt-1">¥128,540</h3>
                  <p className="text-red-500 text-sm flex items-center mt-2">
                    <i className="fas fa-arrow-down mr-1"></i> 2.1% <span className="text-gray-500 ml-1">vs 上月</span>
                  </p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
                  <i className="fas fa-wallet text-xl"></i>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-5 card-transition">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-500 text-sm">活跃度</p>
                  <h3 className="text-2xl font-bold mt-1">78.5%</h3>
                  <p className="text-green-600 text-sm flex items-center mt-2">
                    <i className="fas fa-arrow-up mr-1"></i> 5.3% <span className="text-gray-500 ml-1">vs 上月</span>
                  </p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-yellow-50 flex items-center justify-center text-yellow-500">
                  <i className="fas fa-chart-pie text-xl"></i>
                </div>
              </div>
            </div>
          </div>
          {/* 你可以继续补充表格、任务等静态内容 */}
        </main>
      </div>
    </div>
  );
}

export default App;
