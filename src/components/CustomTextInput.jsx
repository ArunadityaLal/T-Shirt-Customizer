import { useFormContext } from "react-hook-form"

const CustomTextInput = ({ theme }) => {
  const { register, watch } = useFormContext()
  const customText = watch("customText")

  return (
    <div className="mb-6">
      <h2
        className={`text-xl font-semibold mb-4 ${
          theme === "dark" ? "text-white" : theme === "colorful" ? "text-white" : "text-gray-800"
        }`}
      >
        Custom Text
      </h2>

      <textarea
        {...register("customText")}
        placeholder="Enter text to print on t-shirt (max 3 lines)"
        rows={3}
        maxLength={100}
        className={`w-full p-3 rounded border ${
          theme === "dark"
            ? "bg-gray-700 border-gray-600 text-white"
            : theme === "colorful"
              ? "bg-white/30 border-white/40 text-white"
              : "bg-white border-gray-300 text-gray-800"
        }`}
      ></textarea>
      <p
        className={`mt-1 text-sm ${
          theme === "dark" ? "text-gray-400" : theme === "colorful" ? "text-white/70" : "text-gray-500"
        }`}
      >
        {customText?.length || 0}/100 characters
      </p>
    </div>
  )
}

export default CustomTextInput
