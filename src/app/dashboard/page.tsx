"use client";

import { useState } from "react";
import NavIsland from "@/components/NavIsland";
import {
  LayoutDashboard,
  Users,
  UserPlus,
  Target,
  FileText,
  Settings,
  Calendar,
  TrendingUp,
  TrendingDown,
  BarChart3,
  Globe,
  Smartphone,
  Monitor,
  Tablet,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  Eye,
  ArrowRight,
  Mail,
} from "lucide-react";

const navItems = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "traffic", label: "Traffic", icon: Globe },
  { id: "leads", label: "Leads", icon: UserPlus },
  { id: "conversions", label: "Conversions", icon: Target },
  { id: "pages", label: "Pages", icon: FileText },
  { id: "settings", label: "Settings", icon: Settings },
];

const dateRanges = ["Last 7 days", "Last 30 days", "Last 90 days"];

const stats = [
  {
    label: "Total Visitors",
    value: "12,847",
    change: 12.5,
    icon: Users,
    color: "blue",
  },
  {
    label: "Form Submissions",
    value: "342",
    change: 8.2,
    icon: Mail,
    color: "blue",
  },
  {
    label: "Bookings",
    value: "89",
    change: -2.4,
    icon: Calendar,
    color: "purple",
  },
  {
    label: "Conversion Rate",
    value: "2.66%",
    change: 0.8,
    icon: Target,
    color: "amber",
  },
];

const dailyVisitors = [
  { day: "Mon", value: 1842 },
  { day: "Tue", value: 2156 },
  { day: "Wed", value: 1923 },
  { day: "Thu", value: 2478 },
  { day: "Fri", value: 2103 },
  { day: "Sat", value: 1245 },
  { day: "Sun", value: 1100 },
];

const leadSources = [
  { name: "Direct", percentage: 45, color: "bg-blue-500" },
  { name: "Google", percentage: 32, color: "bg-blue-500" },
  { name: "Social", percentage: 15, color: "bg-purple-500" },
  { name: "Referral", percentage: 8, color: "bg-amber-500" },
];

const topPages = [
  { page: "/services", views: 3421, change: 12.3 },
  { page: "/about", views: 2156, change: 8.7 },
  { page: "/contact", views: 1893, change: -2.1 },
  { page: "/pricing", views: 1245, change: 15.6 },
  { page: "/blog/seo-tips", views: 987, change: 22.4 },
];

const deviceBreakdown = [
  { device: "Desktop", percentage: 62, icon: Monitor },
  { device: "Mobile", percentage: 31, icon: Smartphone },
  { device: "Tablet", percentage: 7, icon: Tablet },
];

const recentLeads = [
  { name: "Sarah Johnson", email: "sarah.j@email.com", type: "Contact Form", date: "2026-08-17", status: "New" },
  { name: "Michael Chen", email: "m.chen@company.com", type: "Booking Request", date: "2026-08-16", status: "Contacted" },
  { name: "Emily Rodriguez", email: "emily.r@email.com", type: "Newsletter", date: "2026-08-16", status: "New" },
  { name: "David Kim", email: "d.kim@startup.io", type: "Contact Form", date: "2026-08-15", status: "Converted" },
  { name: "Jessica Brown", email: "j.brown@email.com", type: "Booking Request", date: "2026-08-15", status: "Contacted" },
  { name: "James Wilson", email: "j.wilson@corp.com", type: "Contact Form", date: "2026-08-14", status: "New" },
  { name: "Amanda Davis", email: "a.davis@email.com", type: "Newsletter", date: "2026-08-14", status: "Converted" },
  { name: "Robert Taylor", email: "r.taylor@agency.com", type: "Booking Request", date: "2026-08-13", status: "Contacted" },
];

const funnelSteps = [
  { label: "Visitors", value: 12847, color: "bg-blue-500" },
  { label: "Leads", value: 342, color: "bg-blue-500" },
  { label: "Bookings", value: 89, color: "bg-purple-500" },
  { label: "Customers", value: 34, color: "bg-amber-500" },
];

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [dateRange, setDateRange] = useState("Last 7 days");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dateDropdownOpen, setDateDropdownOpen] = useState(false);

  const maxVisitors = Math.max(...dailyVisitors.map((d) => d.value));

  const getStatusColor = (status: string) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-700";
      case "Contacted":
        return "bg-blue-100 text-blue-700";
      case "Converted":
        return "bg-purple-100 text-purple-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-xl border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 rounded-lg bg-${stat.color}-50`}>
                <stat.icon className={`w-5 h-5 text-${stat.color}-500`} />
              </div>
              <span
                className={`flex items-center text-sm font-medium ${
                  stat.change >= 0 ? "text-blue-600" : "text-red-500"
                }`}
              >
                {stat.change >= 0 ? (
                  <TrendingUp className="w-4 h-4 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 mr-1" />
                )}
                {Math.abs(stat.change)}%
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Daily Visitors
          </h3>
          <div className="flex items-end justify-between h-48 gap-2">
            {dailyVisitors.map((day) => (
              <div key={day.day} className="flex-1 flex flex-col items-center">
                <div
                  style={{ height: `${(day.value / maxVisitors) * 100}%` }}
                  className="w-full bg-blue-500 rounded-t-md min-h-[4px]"
                />
                <span className="text-xs text-gray-500 mt-2">{day.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Lead Sources
          </h3>
          <div className="space-y-4">
            {leadSources.map((source) => (
              <div key={source.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700">{source.name}</span>
                  <span className="text-gray-500">{source.percentage}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    style={{ width: `${source.percentage}%` }}
                    className={`${source.color} h-2 rounded-full`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderTraffic = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Visitors by Day
          </h3>
          <div className="flex items-end justify-between h-48 gap-2">
            {dailyVisitors.map((day) => (
              <div key={day.day} className="flex-1 flex flex-col items-center">
                <div
                  style={{ height: `${(day.value / maxVisitors) * 100}%` }}
                  className="w-full bg-blue-500 rounded-t-md min-h-[4px]"
                />
                <span className="text-xs text-gray-500 mt-2">{day.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Device Breakdown
          </h3>
          <div className="space-y-4">
            {deviceBreakdown.map((device) => (
              <div key={device.device} className="flex items-center gap-4">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <device.icon className="w-5 h-5 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">{device.device}</span>
                    <span className="text-gray-500">{device.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div
                      style={{ width: `${device.percentage}%` }}
                      className="bg-blue-500 h-2 rounded-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Top Pages</h3>
        <div className="space-y-3">
        {topPages.map((page, i) => (
            <div
              key={page.page}
              className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-400 w-6">
                  {i + 1}
                </span>
                <div>
                  <div className="text-sm font-medium text-gray-900 flex items-center gap-2">
                    {page.page}
                    <ExternalLink className="w-3 h-3 text-gray-400" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                  {page.views.toLocaleString()} views
                </span>
                <span
                  className={`text-xs font-medium ${
                    page.change >= 0 ? "text-blue-600" : "text-red-500"
                  }`}
                >
                  {page.change >= 0 ? "+" : ""}
                  {page.change}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderLeads = () => (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Recent Leads</h3>
        <p className="text-sm text-gray-500 mt-1">
          Manage and track your incoming leads
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {recentLeads.map((lead) => (
              <tr
                key={lead.email}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {lead.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">{lead.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">{lead.type}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-600">{lead.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                      lead.status
                    )}`}
                  >
                    {lead.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderConversions = () => {
    const maxValue = funnelSteps[0].value;

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Conversion Funnel
          </h3>
          <div className="flex flex-col items-center space-y-4">
            {funnelSteps.map((step, i) => {
              const widthPercentage = (step.value / maxValue) * 100;
              const conversionRate =
                i > 0
                  ? ((step.value / funnelSteps[i - 1].value) * 100).toFixed(1)
                  : null;

              return (
                <div
                  key={step.label}
                  className="w-full max-w-md"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      {step.label}
                    </span>
                    <span className="text-sm font-semibold text-gray-900">
                      {step.value.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-8 overflow-hidden">
                    <div
                      style={{ width: `${widthPercentage}%` }}
                      className={`${step.color} h-8 rounded-full flex items-center justify-end pr-3`}
                    >
                      <span className="text-xs font-medium text-white">
                        {((step.value / maxValue) * 100).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                  {conversionRate && (
                    <div className="flex items-center justify-center mt-2 text-xs text-gray-500">
                      <ArrowRight className="w-3 h-3 mr-1" />
                      {conversionRate}% conversion from previous
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-blue-500 mb-2">
              {((342 / 12847) * 100).toFixed(1)}%
            </div>
            <div className="text-sm text-gray-600">Visitor to Lead</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-blue-500 mb-2">
              {((89 / 342) * 100).toFixed(1)}%
            </div>
            <div className="text-sm text-gray-600">Lead to Booking</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6 text-center">
            <div className="text-3xl font-bold text-purple-500 mb-2">
              {((34 / 89) * 100).toFixed(1)}%
            </div>
            <div className="text-sm text-gray-600">Booking to Customer</div>
          </div>
        </div>
      </div>
    );
  };

  const renderPages = () => (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Page Performance
      </h3>
      <div className="space-y-4">
        {topPages.map((page) => (
          <div
            key={page.page}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900">
                  {page.page}
                </div>
                <div className="text-xs text-gray-500">
                  {page.views.toLocaleString()} views
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-600">
                {page.views.toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Settings</h3>
      <div className="space-y-6 max-w-2xl">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Dashboard Name
          </label>
          <input
            type="text"
            defaultValue="My Website Analytics"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Notifications
          </label>
          <div className="space-y-2">
            {["Daily summary", "Weekly report", "New lead alerts"].map(
              (option) => (
                <label key={option} className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{option}</span>
                </label>
              )
            )}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Timezone
          </label>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
            <option>UTC-5 (Eastern Time)</option>
            <option>UTC-6 (Central Time)</option>
            <option>UTC-7 (Mountain Time)</option>
            <option>UTC-8 (Pacific Time)</option>
          </select>
        </div>
        <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium">
          Save Changes
        </button>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return renderOverview();
      case "traffic":
        return renderTraffic();
      case "leads":
        return renderLeads();
      case "conversions":
        return renderConversions();
      case "pages":
        return renderPages();
      case "settings":
        return renderSettings();
      default:
        return renderOverview();
    }
  };

  const getPageTitle = () => {
    const item = navItems.find((n) => n.id === activeTab);
    return item?.label || "Overview";
  };

  return (
    <div className="min-h-screen bg-[#faf8f5]">
      <NavIsland />

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-64 bg-white border-r border-gray-200 z-50 transition-transform duration-200 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:z-30"
        }`}
      >
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Analytics</div>
                <div className="text-xs text-gray-500">Dashboard</div>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 hover:bg-gray-100 rounded-lg"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setSidebarOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                activeTab === item.id
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.label}
              {activeTab === item.id && (
                <div className="ml-auto w-1.5 h-1.5 bg-blue-500 rounded-full" />
              )}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="lg:ml-64 min-h-screen pt-20">
        {/* Top bar */}
        <div className="sticky top-0 z-20 bg-[#faf8f5]/80 backdrop-blur-sm border-b border-gray-200">
          <div className="px-4 sm:px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="w-5 h-5 text-gray-600" />
              </button>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  {getPageTitle()}
                </h1>
                <p className="text-sm text-gray-500 mt-0.5">
                  Track your website performance
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <button
                  onClick={() => setDateDropdownOpen(!dateDropdownOpen)}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <Calendar className="w-4 h-4 text-gray-400" />
                  {dateRange}
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </button>
                {dateDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-30">
                    {dateRanges.map((range) => (
                      <button
                        key={range}
                        onClick={() => {
                          setDateRange(range);
                          setDateDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors ${
                          dateRange === range
                            ? "bg-blue-50 text-blue-600 font-medium"
                            : "text-gray-700"
                        }`}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-blue-600">
                  JD
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-4 sm:p-6">
          <div key={activeTab}>
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Click outside to close date dropdown */}
      {dateDropdownOpen && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setDateDropdownOpen(false)}
        />
      )}
    </div>
  );
}
