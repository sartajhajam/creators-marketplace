import { Star } from "lucide-react"

/**
 * CreatorCard Component
 *
 * Displays a creator's information in a card format
 *
 * @param {Object} props - Component props
 * @param {Object} props.creator - Creator data object
 * @param {Function} props.onSendOffer - Function to call when Send Offer button is clicked
 * @returns {JSX.Element} Creator card component
 */
const CreatorCard = ({ creator, onSendOffer }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Portfolio Image */}
        <div className="md:col-span-1">
          <img
            src={creator.portfolioImage || "/placeholder.svg"}
            alt={`${creator.name}'s portfolio`}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Creator Info */}
        <div className="md:col-span-2 p-6">
          <div className="flex items-start mb-4">
            <img src={creator.image || "/placeholder.svg"} alt={creator.name} className="w-10 h-10 rounded-full mr-3" />
            <div>
              <h3 className="font-medium">{creator.name}</h3>
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="ml-1">{creator.rating}</span>
                <span className="text-gray-500 ml-1">({creator.reviews})</span>
              </div>
            </div>
          </div>

          <p className="text-gray-800 mb-4">{creator.description}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-500 text-sm">
              <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
              From {creator.days} days
            </div>

            <div className="flex items-center space-x-4">
              <div>
                <span className="text-gray-500 text-sm">Starting at</span>
                <span className="font-medium ml-1">${creator.price}</span>
              </div>
              <button
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                onClick={() => onSendOffer(creator.id)}
              >
                Send Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatorCard

