export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      
      <div className="bg-white shadow-lg rounded-xl p-8 w-[400px]">
        
        <h1 className="text-2xl font-bold text-center mb-6">
          AI Interview Simulator
        </h1>

        <label className="block mb-2 font-medium">
          Select Job Role
        </label>

        <select className="w-full border p-2 rounded mb-6">
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>Full Stack Developer</option>
          <option>Data Scientist</option>
        </select>

        <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Start Interview
        </button>

      </div>

    </main>
  );
}