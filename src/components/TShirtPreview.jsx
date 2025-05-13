import { Shirt } from "lucide-react"

const TShirtPreview = ({ theme, previewImage, formValues }) => {
  const { height, weight, build, customText } = formValues

  return (
    <div
      className={`relative flex flex-col items-center justify-center p-6 rounded-lg ${
        theme === "dark" ? "bg-gray-800" : theme === "colorful" ? "bg-white/20 backdrop-blur-sm" : "bg-white shadow-md"
      }`}
    >
      <div className="relative w-full aspect-[3/4] flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <Shirt
            className={`w-full h-full ${
              theme === "dark" ? "text-gray-700" : theme === "colorful" ? "text-purple-300" : "text-gray-300"
            }`}
          />
        </div>

        {previewImage && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ top: "15%", left: "25%", right: "25%", bottom: "30%" }}
          >
            <img
              src={previewImage || "/placeholder.svg"}
              alt="T-shirt design"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}

        {customText && (
          <div className="absolute bottom-[35%] left-0 right-0 text-center px-4">
            <div
              className={`inline-block p-2 ${
                theme === "dark" ? "bg-gray-900/80" : theme === "colorful" ? "bg-purple-900/80" : "bg-white/80"
              }`}
            >
              <p
                className={`text-lg font-bold break-words max-w-full ${
                  theme === "dark" ? "text-white" : theme === "colorful" ? "text-white" : "text-gray-800"
                }`}
              >
                {customText}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 text-center">
        <p
          className={`text-sm ${
            theme === "dark" ? "text-gray-400" : theme === "colorful" ? "text-white/80" : "text-gray-500"
          }`}
        >
          Height: {height}cm | Weight: {weight}kg | Build: {build}
        </p>
      </div>
    </div>
  )
}

export default TShirtPreview
