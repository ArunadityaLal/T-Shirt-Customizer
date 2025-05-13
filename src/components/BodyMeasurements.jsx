import { useFormContext } from "react-hook-form"

const BodyMeasurements = ({ theme }) => {
  const { register } = useFormContext()

  return (
    <div className="mb-6">
      <h2
        className={`text-xl font-semibold mb-4 ${
          theme === "dark" ? "text-white" : theme === "colorful" ? "text-white" : "text-gray-800"
        }`}
      >
        Body Measurements
      </h2>

      <div className="space-y-4">
        <div>
          <label
            className={`block mb-1 ${
              theme === "dark" ? "text-gray-300" : theme === "colorful" ? "text-white" : "text-gray-700"
            }`}
          >
            Height (cm)
          </label>
          <input
            type="number"
            {...register("height")}
            className={`w-full p-2 rounded border ${
              theme === "dark"
                ? "bg-gray-700 border-gray-600 text-white"
                : theme === "colorful"
                  ? "bg-white/30 border-white/40 text-white"
                  : "bg-white border-gray-300 text-gray-800"
            }`}
          />
        </div>

        <div>
          <label
            className={`block mb-1 ${
              theme === "dark" ? "text-gray-300" : theme === "colorful" ? "text-white" : "text-gray-700"
            }`}
          >
            Weight (kg)
          </label>
          <input
            type="number"
            {...register("weight")}
            className={`w-full p-2 rounded border ${
              theme === "dark"
                ? "bg-gray-700 border-gray-600 text-white"
                : theme === "colorful"
                  ? "bg-white/30 border-white/40 text-white"
                  : "bg-white border-gray-300 text-gray-800"
            }`}
          />
        </div>

        <div>
          <label
            className={`block mb-1 ${
              theme === "dark" ? "text-gray-300" : theme === "colorful" ? "text-white" : "text-gray-700"
            }`}
          >
            Build
          </label>
          <select
            {...register("build")}
            className={`w-full p-2 rounded border ${
              theme === "dark"
                ? "bg-gray-700 border-gray-600 text-white"
                : theme === "colorful"
                  ? "bg-white/30 border-white/40 text-white"
                  : "bg-white border-gray-300 text-gray-800"
            }`}
          >
            <option value="lean">Lean</option>
            <option value="regular">Regular</option>
            <option value="athletic">Athletic</option>
            <option value="big">Big</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default BodyMeasurements
