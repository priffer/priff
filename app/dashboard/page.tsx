import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-sm p-4 px-8 flex justify-between items-center">
        <span className="text-xl font-bold text-blue-600">Priff</span>
        <div className="flex gap-4 items-center">
          <span className="text-sm text-gray-600">สวัสดี, คุณเจ้าของกิจการ</span>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-5xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">สร้างเอกสารใหม่</h1>
        <p className="text-gray-500 mb-8">เลือกประเภทเอกสารที่คุณต้องการสร้าง</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* การ์ดที่ 1: ใบเสนอราคา */}
          <Link href="/documents/new?type=QT" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 group">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 text-2xl group-hover:bg-blue-600 group-hover:text-white transition">
              📄
            </div>
            <h3 className="text-lg font-semibold mb-2">ใบเสนอราคา</h3>
            <p className="text-gray-400 text-sm">Quotation</p>
          </Link>

          {/* การ์ดที่ 2: ใบแจ้งหนี้ */}
          <Link href="#" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 group">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mb-4 text-2xl group-hover:bg-orange-600 group-hover:text-white transition">
              📑
            </div>
            <h3 className="text-lg font-semibold mb-2">ใบแจ้งหนี้</h3>
            <p className="text-gray-400 text-sm">Invoice</p>
          </Link>

          {/* การ์ดที่ 3: ใบเสร็จรับเงิน */}
          <Link href="#" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 group">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-4 text-2xl group-hover:bg-green-600 group-hover:text-white transition">
              💰
            </div>
            <h3 className="text-lg font-semibold mb-2">ใบเสร็จรับเงิน</h3>
            <p className="text-gray-400 text-sm">Receipt</p>
          </Link>
        </div>

        {/* ตารางเอกสารล่าสุด */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">เอกสารล่าสุด</h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-gray-500 text-sm border-b">
                <tr>
                  <th className="p-4">เลขที่</th>
                  <th className="p-4">ลูกค้า</th>
                  <th className="p-4">วันที่</th>
                  <th className="p-4 text-right">ยอดรวม</th>
                  <th className="p-4 text-center">สถานะ</th>
                </tr>
              </thead>
              <tbody className="divide-y text-sm">
                <tr>
                  <td className="p-4 font-mono">QT-2026-001</td>
                  <td className="p-4">บริษัท ตัวอย่าง จำกัด</td>
                  <td className="p-4">02 Feb 2026</td>
                  <td className="p-4 text-right">10,700.00</td>
                  <td className="p-4 text-center"><span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">DRAFT</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}