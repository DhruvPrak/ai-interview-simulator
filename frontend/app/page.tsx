"use client"
import { useState } from "react"

export default function Home() {

  const [role, setRole] = useState("Frontend Developer")
  const [question, setQuestion] = useState("")

  const startInterview = async () => {

    const res = await fetch(`http://localhost:8000/generate-question?role=${role}`)
    const data = await res.json()

    setQuestion(data.question)
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white shadow-lg rounded-xl p-8 w-[400px]">

        <h1 className="text-2xl font-bold text-center mb-6">
          AI Interview Simulator
        </h1>

        <label className="block mb-2 font-medium">
          Select Job Role
        </label>

        <select
          className="w-full border p-2 rounded mb-6"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>Full Stack Developer</option>
          <option>Data Scientist</option>
        </select>

        <button
          onClick={startInterview}
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Start Interview
        </button>

        {question && (
          <div className="mt-6 p-4 bg-gray-100 rounded">
            <p className="font-semibold">Interview Question:</p>
            <p>{question}</p>
          </div>
        )}

      </div>

    </main>
  )
}