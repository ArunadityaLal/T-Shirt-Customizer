"use client"

import { Upload, X } from "lucide-react"

const ImageUploader = ({ theme, uploadedImage, onImageChange, onClearImage }) => {
  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        onImageChange(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  // Handle drag and drop
  const handleDrop = (e) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        onImageChange(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  return (
    <div className="mb-6">
      <h2
        className={`text-xl font-semibold mb-4 ${
          theme === "dark" ? "text-white" : theme === "colorful" ? "text-white" : "text-gray-800"
        }`}
      >
        Upload Design
      </h2>

      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center ${
          theme === "dark"
            ? "border-gray-600 bg-gray-700"
            : theme === "colorful"
              ? "border-white/40 bg-white/20"
              : "border-gray-300 bg-gray-50"
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {uploadedImage ? (
          <div className="relative">
            <img src={uploadedImage || "/placeholder.svg"} alt="Uploaded design" className="max-h-32 mx-auto" />
            <button
              onClick={onClearImage}
              className={`absolute top-0 right-0 p-1 rounded-full ${
                theme === "dark" ? "bg-gray-800" : theme === "colorful" ? "bg-purple-700" : "bg-gray-200"
              }`}
            >
              <X size={16} />
            </button>
          </div>
        ) : (
          <>
            <Upload
              className={`w-12 h-12 mx-auto mb-2 ${
                theme === "dark" ? "text-gray-400" : theme === "colorful" ? "text-white/80" : "text-gray-400"
              }`}
            />
            <p
              className={`mb-2 ${
                theme === "dark" ? "text-gray-300" : theme === "colorful" ? "text-white" : "text-gray-700"
              }`}
            >
              Drop an image here or
            </p>
            <label
              className={`inline-block px-4 py-2 rounded cursor-pointer ${
                theme === "dark"
                  ? "bg-gray-600 hover:bg-gray-500 text-white"
                  : theme === "colorful"
                    ? "bg-purple-600 hover:bg-purple-500 text-white"
                    : "bg-gray-200 hover:bg-gray-300 text-gray-800"
              }`}
            >
              Select File
              <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            </label>
            <p
              className={`mt-2 text-sm ${
                theme === "dark" ? "text-gray-400" : theme === "colorful" ? "text-white/70" : "text-gray-500"
              }`}
            >
              10 MB maximum
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default ImageUploader
