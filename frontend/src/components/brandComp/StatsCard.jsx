/**
 * StatsCard Component
 *
 * Displays a statistics card with title, value, and change indicator
 *
 * @param {Object} props - Component props
 * @param {string} props.title - Card title
 * @param {string|number} props.value - Main value to display
 * @param {number} props.percentageChange - Percentage change (positive or negative)
 * @param {React.ReactNode} props.icon - Optional icon to display
 * @returns {JSX.Element} Stats card component
 */
const StatsCard = ({ title, value, percentageChange, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        {icon && <div className="text-gray-400">{icon}</div>}
      </div>
      <p className="text-3xl font-bold">{value}</p>
      {percentageChange !== undefined && (
        <p className={`text-sm ${percentageChange >= 0 ? "text-green-600" : "text-red-600"} mt-1`}>
          {percentageChange >= 0 ? "↑" : "↓"} {Math.abs(percentageChange)}% from last month
        </p>
      )}
    </div>
  )
}

export default StatsCard

