# 🎨 Creators Marketplace
A Fiverr-like platform where creatores can offer services and brands can hire them.

## 🚀 Tech Stack
- **Frontend:** React.js 
- **Backend:** Node.js (Express.js)
- **Database:** MongoDB (Mongoose ORM)
- **Authentication:** JWT / OAuth (Google, Facebook, Email)
- **Storage:** AWS S3 / Cloudinary (for images & documents)
- **Payments:** Stripe / PayPal / Crypto integration
- **Messaging:** WebSockets (real-time chat)
- **Hosting:** AWS / Vercel / DigitalOcean
- **Other Libraries:** Redux Toolkit, Axios, Nodemailer, bcrypt.js, Multer

## 🎯 Features
### **User Roles:**
- **Buyers** (Clients looking for services)
- **Sellers** (Freelancers offering services)
- **Admins** (Managing platform operations)

### **Authentication & User Management**
- Sign up / Login (Google, Facebook, Email)
- Profile setup (Bio, Skills, Portfolio, Reviews)
- Two-factor authentication (optional)

### **Gig (Service) Management**
- Create, edit, delete gigs
- Service categories & subcategories
- Pricing tiers (Basic, Standard, Premium)
- Image & video uploads for gigs
- Gig status (Active, Pending, Draft)

### **Search & Filtering**
- Search bar with keyword matching
- Category & subcategory filters
- Price range filters
- Seller rating & review filters

### **Order Management**
- Place an order
- Order tracking (In Progress, Completed, Delivered)
- Delivery system (File uploads & text-based submission)
- Order cancellation & refund request

### **Messaging System**
- Real-time chat between buyers & sellers
- File-sharing within messages
- Order-specific communication

### **Payments & Withdrawals**
- Escrow system (Funds held until order completion)
- Payment gateways (Stripe, PayPal, Crypto)
- Withdrawal options (Bank Transfer, PayPal, Wise)
- Seller earnings dashboard

### **Ratings & Reviews**
- 5-star rating system
- Written reviews for gigs
- Review moderation (by admins)

### **Admin Dashboard**
- User & gig management
- Reported users/gigs moderation
- Payment & withdrawal management
- Analytics (Revenue, user activity, top sellers)

### **Additional Features**
- **Referral Program** (Users earn by referring)
- **Subscription Plans** (Featured gigs, premium seller badges)
- **AI-Powered Matching** (Suggest gigs based on user history)
- **Push Notifications & Emails** (For order updates, messages, etc.)

---

## 🛠️ Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/your-username/creators-marketplace.git
cd creators-marketplace
```

### 2️⃣ Install Dependencies
#### Backend
```sh
cd backend
npm install
```
#### Frontend
```sh
cd frontend
npm install
```

### 3️⃣ Setup Environment Variables
Create a **.env** file in the backend directory with the following:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret
AWS_ACCESS_KEY=your_aws_access_key
AWS_SECRET_KEY=your_aws_secret_key
```

### 4️⃣ Run the Application
#### Start Backend
```sh
cd backend
npm start
```
#### Start Frontend
```sh
cd frontend
npm run dev
```

### 5️⃣ Access the App
Go to `http://localhost:3000`

---

## 📜 License
This project is **open-source** and free to use under the MIT License.

## 🤝 Contributing
Feel free to submit a pull request or open an issue!

## 📞 Contact
For queries, reach out via [hajamsaj@gmail.com](mailto:hajamsaj@gmail.com).
