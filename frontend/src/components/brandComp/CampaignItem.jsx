import { Eye, MoreHorizontal } from "lucide-react"

/**
 * CampaignItem Component
 *
 * Displays a single campaign row in the campaigns table
 *
 * @param {Object} props - Component props
 * @param {Object} props.campaign - Campaign data object
 * @param {Function} props.onView - Function to call when View button is clicked
 * @param {Function} props.onOptions - Function to call when Options button is clicked
 * @returns {JSX.Element} Campaign item component
 */
const CampaignItem = ({ campaign, onView, onOptions }) => {
  // Get status color based on campaign status
  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Pending":
        return "bg-yellow-100 text-yellow-800"
      case "Draft":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{campaign.name}</td>
      <td className="px-6 py-4 whitespace-nowrap text-gray-500">{campaign.creator}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(campaign.status)}`}
        >
          {campaign.status}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-gray-500">{campaign.budget}</td>
      <td className="px-6 py-4 whitespace-nowrap text-gray-500">{campaign.spent}</td>
      <td className="px-6 py-4 whitespace-nowrap text-gray-500">{campaign.engagement}</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button
          className="text-indigo-600 hover:text-indigo-900 mr-3"
          onClick={() => onView(campaign.id)}
          title="View campaign details"
        >
          <Eye className="h-4 w-4" />
        </button>
        <button
          className="text-gray-400 hover:text-gray-600"
          onClick={() => onOptions(campaign.id)}
          title="More options"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </td>
    </tr>
  )
}

export default CampaignItem

