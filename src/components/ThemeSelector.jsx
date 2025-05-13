"use client"

import { Sun, Moon, Palette } from "lucide-react"

const ThemeSelector = ({ theme, setTheme }) => {
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => setTheme("default")}
        className={`p-2 rounded-full ${
          theme === "default" ? "bg-gray-200 text-gray-800" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
        aria-label="Default theme"
      >
        <Sun size={20} />
      </button>

      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-full ${
          theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-600 text-gray-300 hover:bg-gray-700"
        }`}
        aria-label="Dark theme"
      >
        <Moon size={20} />
      </button>

      <button
        onClick={() => setTheme("colorful")}
        className={`p-2 rounded-full ${
          theme === "colorful" ? "bg-purple-600 text-white" : "bg-purple-500 text-white hover:bg-purple-600"
        }`}
        aria-label="Colorful theme"
      >
        <Palette size={20} />
      </button>
    </div>
  )
}

export default ThemeSelector
