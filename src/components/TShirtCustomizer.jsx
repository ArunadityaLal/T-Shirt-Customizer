// components/TShirtCustomizer.jsx
"use client"

import { useState, useEffect } from "react"
import { useForm, FormProvider } from "react-hook-form"
import ThemeSelector from "./ThemeSelector"
import TShirtPreview from "./TShirtPreview"
import BodyMeasurements from "./BodyMeasurements"
import ImageUploader from "./ImageUploader"
import CustomTextInput from "./CustomTextInput"

const defaultImage = "/placeholder.svg?height=400&width=300"

function TShirtCustomizer() {
  const [theme, setTheme] = useState("default")
  const [uploadedImage, setUploadedImage] = useState(null)
  const [previewImage, setPreviewImage] = useState(defaultImage)

  const methods = useForm({
    defaultValues: {
      height: 180,
      weight: 80,
      build: "athletic",
      customText: "",
    },
  })

  const { watch } = methods
  const formValues = watch()

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.altKey && e.key === "q") {
        setTheme((prevTheme) => {
          if (prevTheme === "default") return "dark"
          if (prevTheme === "dark") return "colorful"
          return "default"
        })
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  const handleImageChange = (imageData) => {
    setUploadedImage(imageData)
    setPreviewImage(imageData)
  }

  const clearImage = () => {
    setUploadedImage(null)
    setPreviewImage(defaultImage)
  }

  return (
    <div
      className={`min-h-screen p-6 ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : theme === "colorful"
          ? "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white"
          : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h1
          className={`text-3xl font-bold mb-8 text-center ${
            theme === "dark" ? "text-white" : theme === "colorful" ? "text-white" : "text-gray-800"
          }`}
        >
          T-Shirt Customizer
        </h1>

        <FormProvider {...methods}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TShirtPreview theme={theme} previewImage={previewImage} formValues={formValues} />

            <div
              className={`p-6 rounded-lg ${
                theme === "dark"
                  ? "bg-gray-800"
                  : theme === "colorful"
                  ? "bg-white/20 backdrop-blur-sm"
                  : "bg-white shadow-md"
              }`}
            >
              <BodyMeasurements theme={theme} />
              <ImageUploader
                theme={theme}
                uploadedImage={uploadedImage}
                onImageChange={handleImageChange}
                onClearImage={clearImage}
              />
              <CustomTextInput theme={theme} />
              <div className="mt-8">
                <ThemeSelector theme={theme} setTheme={setTheme} />
                <p
                  className={`mt-2 text-sm ${
                    theme === "dark" ? "text-gray-400" : theme === "colorful" ? "text-white/70" : "text-gray-500"
                  }`}
                >
                  Press Alt+Q to switch between themes
                </p>
              </div>
            </div>
          </div>
        </FormProvider>
      </div>
    </div>
  )
}

export default TShirtCustomizer
