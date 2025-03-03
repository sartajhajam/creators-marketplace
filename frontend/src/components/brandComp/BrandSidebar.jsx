import { Link } from "react-router-dom"
import { Home, Users, BarChart, MessageSquare, Settings, HelpCircle, LogOut } from "lucide-react"

/**
 * BrandSidebar Component
 *
 * Sidebar navigation for the brand dashboard
 *
 * @param {Object} props - Component props
 * @param {Object} props.user - User data object
 * @param {Function} props.logout - Function to call when logout is clicked
 * @returns {JSX.Element} Brand sidebar component
 */
const BrandSidebar = ({ user, logout }) => {
  // Navigation items
  const navItems = [
    { icon: Home, label: "Dashboard", path: "/dashboard" },
    { icon: Users, label: "Creators", path: "/creators" },
    { icon: BarChart, label: "Campaigns", path: "/campaigns" },
    { icon: MessageSquare, label: "Messages", path: "/messages" },
    { icon: Settings, label: "Settings", path: "/settings" },
    { icon: HelpCircle, label: "Help", path: "/help" },
  ]

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* Brand Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="text-indigo-600 font-bold text-2xl">LOGO</div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-1">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className="flex items-center px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100">
                <item.icon className="h-5 w-5 mr-3 text-gray-500" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <img src={user?.avatar || "/placeholder.svg"} alt="User avatar" className="h-10 w-10 rounded-full mr-3" />
          <div>
            <p className="font-medium text-gray-900">{user?.name || "Brand User"}</p>
            <p className="text-sm text-gray-500">{user?.email || "brand@example.com"}</p>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={logout}
          className="mt-4 flex items-center w-full px-4 py-2 text-gray-700 rounded-md hover:bg-gray-100"
        >
          <LogOut className="h-5 w-5 mr-3 text-gray-500" />
          Logout
        </button>
      </div>
    </div>
  )
}

export default BrandSidebar

