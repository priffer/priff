import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
            P
          </div>
          <h1 className="text-2xl font-bold mt-4 text-gray-800">Priff</h1>
          <p className="text-gray-500">ระบบออกเอกสารธุรกิจ</p>
        </div>

        {/* Login Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">อีเมล</label>
            <input type="email" placeholder="admin@priff.com" className="mt-1 w-full p-2 border rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">รหัสผ่าน</label>
            <input type="password" placeholder="••••••••" className="mt-1 w-full p-2 border rounded-md" />
          </div>
          
          {/* ปุ่ม Login กดแล้วไป Dashboard */}
          <Link href="/dashboard" className="block w-full bg-blue-600 text-white text-center py-2 rounded-md hover:bg-blue-700 transition">
            เข้าสู่ระบบ
          </Link>
        </form>
      </div>
    </div>
  );
}