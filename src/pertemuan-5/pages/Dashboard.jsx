import PageHeader from "../components/PageHeader";

export default function Dashboard() {
  const chartData = [
    { day: "Mon", val: "60%", col: "bg-kuning" },
    { day: "Tue", val: "80%", col: "bg-hijau" },
    { day: "Wed", val: "40%", col: "bg-biru" },
    { day: "Thu", val: "90%", col: "bg-merah" },
    { day: "Fri", val: "70%", col: "bg-kuning" },
  ];

  return (
    <div id="dashboard-page" className="space-y-6">
      <PageHeader />

      {/* 4 STATS CARDS SECTION - Murni ClassName & Emoji */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        
        {/* Card 1: Total Orders */}
        <div className="flex items-center space-x-5 bg-white rounded-[40px] shadow-sm border border-gray-50 p-6">
          <div className="bg-hijau/20 rounded-full w-16 h-16 flex items-center justify-center text-2xl">
            📄
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">75</span>
            <span className="text-gray-400 text-sm font-medium">Total Orders</span>
          </div>
        </div>

        {/* Card 2: Total Delivered */}
        <div className="flex items-center space-x-5 bg-white rounded-[40px] shadow-sm border border-gray-50 p-6">
          <div className="bg-biru/20 rounded-full w-16 h-16 flex items-center justify-center text-2xl">
            📦
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">357</span>
            <span className="text-gray-400 text-sm font-medium">Total Delivered</span>
          </div>
        </div>

        {/* Card 3: Total Canceled */}
        <div className="flex items-center space-x-5 bg-white rounded-[40px] shadow-sm border border-gray-50 p-6">
          <div className="bg-merah/20 rounded-full w-16 h-16 flex items-center justify-center text-2xl">
            🚫
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">65</span>
            <span className="text-gray-400 text-sm font-medium">Total Canceled</span>
          </div>
        </div>

        {/* Card 4: Total Revenue */}
        <div className="flex items-center space-x-5 bg-white rounded-[40px] shadow-sm border border-gray-50 p-6">
          <div className="bg-kuning/20 rounded-full w-16 h-16 flex items-center justify-center text-2xl">
            💰
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">$128</span>
            <span className="text-gray-400 text-sm font-medium">Total Revenue</span>
          </div>
        </div>

      </div>

    </div>
  );
}