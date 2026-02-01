'use client';
import { useState } from 'react';

// กำหนดโครงสร้างข้อมูล (สำหรับ TypeScript)
interface InvoiceItem {
  desc: string;
  qty: number;
  price: number;
}

export default function Home() {
  // กำหนดข้อมูลเริ่มต้น
  const [items, setItems] = useState<InvoiceItem[]>([
    { desc: 'ค่าบริการทำความสะอาด (ตัวอย่าง)', qty: 1, price: 1500 }
  ]);

  // ฟังก์ชันคำนวณยอดรวม
  const total = items.reduce((sum, item) => sum + (item.qty * item.price), 0);

  // ฟังก์ชันเพิ่มรายการ
  const addItem = () => {
    setItems([...items, { desc: '', qty: 1, price: 0 }]);
  };

  // ฟังก์ชันลบรายการ
  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  // ฟังก์ชันอัปเดตข้อมูลในตาราง
  const updateItem = (index: number, field: keyof InvoiceItem, value: string | number) => {
    const newItems = [...items];
    // @ts-ignore
    newItems[index][field] = value;
    setItems(newItems);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        
        {/* Header ส่วนหัวเอกสาร */}
        <div className="bg-blue-600 p-8 text-white flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Priff</h1>
            <p className="text-blue-100 text-sm mt-1">ระบบออกใบเสนอราคาอย่างง่าย</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">ใบเสนอราคา</div>
            <div className="text-blue-200 text-sm">#QT-2026-001</div>
          </div>
        </div>

        {/* Content เนื้อหา */}
        <div className="p-8">
          {/* ส่วนลูกค้า (Mockup) */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">ลูกค้า</label>
              <input type="text" placeholder="ชื่อบริษัทลูกค้า..." className="w-full bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-blue-500 transition" />
            </div>
            <div className="text-right">
              <label className="block text-xs font-bold text-gray-500 uppercase mb-2">วันที่</label>
              <input type="date" className="bg-gray-50 border border-gray-200 rounded p-3 focus:outline-none focus:border-blue-500 transition" />
            </div>
          </div>

          {/* ตารางสินค้า */}
          <table className="w-full mb-6">
            <thead>
              <tr className="border-b-2 border-gray-100 text-left text-sm text-gray-500">
                <th className="py-3 font-semibold">รายการ</th>
                <th className="py-3 w-20 text-center font-semibold">จำนวน</th>
                <th className="py-3 w-32 text-right font-semibold">ราคา</th>
                <th className="py-3 w-32 text-right font-semibold">รวม</th>
                <th className="py-3 w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {items.map((item, index) => (
                <tr key={index} className="group hover:bg-gray-50 transition">
                  <td className="py-3 pr-4">
                    <input 
                      type="text" 
                      value={item.desc} 
                      placeholder="ชื่อรายการ..."
                      className="w-full bg-transparent border-none focus:ring-0 p-0 font-medium outline-none"
                      onChange={(e) => updateItem(index, 'desc', e.target.value)}
                    />
                  </td>
                  <td className="py-3 text-center">
                    <input 
                      type="number" 
                      value={item.qty} 
                      className="w-full text-center bg-transparent border-none focus:ring-0 p-0 outline-none"
                      onChange={(e) => updateItem(index, 'qty', Number(e.target.value))}
                    />
                  </td>
                  <td className="py-3 text-right">
                    <input 
                      type="number" 
                      value={item.price} 
                      className="w-full text-right bg-transparent border-none focus:ring-0 p-0 outline-none"
                      onChange={(e) => updateItem(index, 'price', Number(e.target.value))}
                    />
                  </td>
                  <td className="py-3 text-right font-bold text-gray-700">
                    {(item.qty * item.price).toLocaleString()}
                  </td>
                  <td className="py-3 text-center">
                    <button onClick={() => removeItem(index)} className="text-gray-300 hover:text-red-500 transition">×</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button onClick={addItem} className="text-sm text-blue-600 font-bold hover:underline mb-8">+ เพิ่มรายการ</button>

          {/* สรุปยอด */}
          <div className="flex justify-end border-t border-gray-100 pt-6">
            <div className="w-64">
              <div className="flex justify-between mb-2 text-gray-600">
                <span>รวมเป็นเงิน</span>
                <span>{total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-4 text-gray-600">
                <span>ภาษี 7%</span>
                <span>{(total * 0.07).toLocaleString(undefined, {maximumFractionDigits: 2})}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-blue-600 border-t-2 border-blue-100 pt-4">
                <span>ยอดสุทธิ</span>
                <span>{(total * 1.07).toLocaleString(undefined, {maximumFractionDigits: 2})} ฿</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}