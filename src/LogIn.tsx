export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#F4F8FC] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
        
        {/* Logo / Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#0B67C2]">
            BigOutsource
          </h1>
          <p className="text-gray-500 mt-2 text-sm">
            Employee Records & IT Management Franco Management System Lebron Berron
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B67C2]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B67C2]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0B67C2] hover:bg-[#0957a3] text-white py-3 rounded-xl font-semibold transition duration-200"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-gray-400 mt-6">
          Internal Use Only • HR & IT Department
        </p>
      </div>
    </div>
  );
}