import React from "react"

const SectionTitle = ({ title, subtitle, alignment = "center" }) => {
  return (
    <div
      className={`mb-8 ${alignment === "center" ? "text-center" : "text-left"}`}
    >
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      {subtitle && <p className="mt-2 text-lg text-gray-600">{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
