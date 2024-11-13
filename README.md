# Insurance Application README

## Overview
This project is a web-based insurance application that allows administrators to manage claims and detect fraudulent activity. The system offers distinct interfaces for administrators and users, providing a streamlined experience for claims submission and monitoring, while supporting a data-driven fraud detection model.

## Features
- **Claim Management**: Admins can view and monitor all insurance claims.
- **Fraud Detection**: Admins have tools to assess and confirm fraudulent claims.
- **Blacklisting**: Users with suspicious behavior can be blacklisted, limiting their access.
- **User Dashboard**: Users have a dashboard to view and manage their own claims.
- **Data Analytics**: Embedded Tableau dashboard gives admins insights into claims data and fraud trends.

## Screenshots
Here’s a visual guide to the core pages of the application:

### 1. Landing Page
![Landing Page](public/images/insurance_landing.png)
*The starting page of the application.*

---

### 2. Admin Dashboard
![Admin Dashboard](public/images/insurance_admin.png)
*Admins can view all claims, including those flagged as potentially fraudulent.*

---

### 3. User Dashboard
![User Dashboard](public/images/insurance_user_dash.png)
*Users can view their claims and access relevant information.*

---

### 4. Claims Form (User)
- **Claims Form A**  
  ![Claims Form A](public/images/insurance_claims_a.png)
- **Claims Form B**  
  ![Claims Form B](public/images/insurance_claims_b.png)

*Forms that users fill out to submit claims.*

---

### 5. Blacklist
![Blacklist](public/images/insurance_blacklist.png)
*Page displaying users who have been blacklisted from submitting new claims.*

---

### 6. Data Overview
![Data Overview](public/images/insurance_data_overview.png)
*Embedded Tableau dashboard providing analytics and data used for the predictive fraud model.*

---

### 7. Fraud Monitoring
![Fraud Monitoring](public/images/insurance_fraud.png)
*Admin view of the fraud monitoring dashboard where suspicious claims can be confirmed or dismissed.*

---

### 8. Suspicious User Overlay
![Suspicious User Overlay](public/images/insurance_suspicious.png)
*Screen that restricts a blacklisted user from accessing application features.*

---

### 9. User Selection
![User Selection](public/images/insurance_user_select.png)
*Page that allows users to select their profile to access their dashboard, as there is no login required.*

---

## Installation
1. Clone the repository.
   ```bash
   git clone <repository-url>
    pnpm install
    pnpm dev