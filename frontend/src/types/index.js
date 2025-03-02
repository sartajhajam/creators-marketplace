/**
 * User related types
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {string} role
 * @property {string} avatar
 * @property {string} email
 */

/**
 * Dashboard stats types
 * @typedef {Object} DashboardStats
 * @property {number} activeGigs
 * @property {number} totalEarnings
 * @property {number} completionRate
 * @property {number} averageRating
 * @property {number} gigGrowth
 * @property {number} earningsGrowth
 * @property {number} completionGrowth
 * @property {number} reviewCount
 */

/**
 * Activity types
 * @typedef {Object} Activity
 * @property {string} id
 * @property {string} userId
 * @property {string} userName
 * @property {string} userAvatar
 * @property {string} action
 * @property {string} [target]
 * @property {string} [message]
 * @property {string} timestamp
 * @property {string} timeAgo
 */

/**
 * Order types
 * @typedef {Object} Order
 * @property {string} id
 * @property {string} title
 * @property {string} icon
 * @property {string} dueDate
 * @property {'in_progress' | 'revision' | 'completed' | 'cancelled'} status
 * @property {string} clientId
 * @property {string} clientName
 * @property {number} amount
 */

/**
 * Gig types
 * @typedef {Object} Gig
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {number} price
 * @property {string} image
 * @property {string} category
 * @property {string[]} tags
 * @property {number} [rating]
 * @property {number} [reviewCount]
 */

/**
 * Quick stats
 * @typedef {Object} QuickStats
 * @property {number} responseRate
 * @property {number} onTimeDelivery
 * @property {number} orderCompletion
 */

/**
 * API response types
 * @template T
 * @typedef {Object} ApiResponse
 * @property {T} data
 * @property {boolean} success
 * @property {string} [message]
 */

export {};
