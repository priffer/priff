export default function DocumentEditor() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] flex justify-center py-12 px-4 overflow-y-auto">
      {/* นี่คือตัวกระดาษ A4 
         - w-[210mm]: ความกว้างมาตรฐาน A4
         - min-h-[297mm]: ความสูงมาตรฐาน A4
         - shadow-lg: เงาลอยตัวให้นูนออกมาจากพื้นหลัง
      */}
      <div 
        className="w-[210mm] min-h-[297mm] bg-white shadow-xl mx-auto p-[25mm] relative"
        style={{ contentVisibility: 'auto' }} // เทคนิคให้ Browser วาดไวขึ้น
      >
        
        {/* ส่วนหัวกระดาษ (Header) */}
        <div className="flex justify-between items-start mb-12">
          {/* โลโก้บริษัท */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-white font-bold">
              P
            </div>
            <div>
              <h1 className="font-bold text-gray-900 text-lg">Priff Company</h1>
              <p className="text-xs text-gray-500">Document No. QT-2026-001</p>
            </div>
          </div>

          {/* สถานะเอกสาร */}
          <div className="text-right">
            <h2 className="text-4xl font-light text-gray-300 tracking-widest uppercase">
              Quotation
            </h2>
            <p className="text-sm text-gray-500 mt-1">วันที่: 02 ก.พ. 2026</p>
          </div>
        </div>

        {/* พื้นที่เนื้อหา (Content Area) */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
           <p>เรียน คุณลูกค้าผู้มีอุปการคุณ,</p>
           <p>
             ทางเรามีความยินดีที่จะเสนอราคาสำหรับการพัฒนาระบบ Priff...
             (นี่คือพื้นที่ที่เราจะทำ AI Paste ครับ)
           </p>
           
           {/* เส้นบรรทัดจำลอง (เพื่อให้ดูเหมือนพิมพ์งาน) */}
           <div className="h-4 bg-gray-50 rounded w-3/4"></div>
           <div className="h-4 bg-gray-50 rounded w-full"></div>
           <div className="h-4 bg-gray-50 rounded w-5/6"></div>
        </div>

        {/* ปุ่มลอย "AI Magic" (Signature Feature) */}
        <button className="absolute -right-16 top-32 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-all hover:scale-110 group tooltip">
          ✨
          <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
            AI Clean Paste
          </span>
        </button>

      </div>
    </div>
  );
}