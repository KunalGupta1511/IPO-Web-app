# Bluestock IPO Web Application 🏦📈

A full-stack IPO Management System developed during my internship at Bluestock.  
The project provides an **admin dashboard** for IPO and company data management, along with a **public-facing interface** for viewing IPO listings and downloading DRHP/RHP documents.

---

## Tech Stack

### Frontend
- HTML, CSS, JavaScript
- Responsive IPO Homepage
- Fetches data from REST API
- Displays IPO details and document download links

### Backend (Node.js + Express + PostgreSQL)
- Sequelize ORM for DB interactions
- JWT-based Admin Authentication
- RESTful APIs for managing:
  - Companies
  - IPOs
  - IPO Documents (RHP/DRHP PDFs)
- File Upload & Download system for DRHP/RHP
- Public Search API (by company name, status, etc.)

---


---

## Features

### Admin
- Login with JWT Auth
- Add/Update/Delete Companies and IPOs
- Upload DRHP & RHP PDFs
- View current market status of IPOs

### Public
- View active and historical IPOs
- Filter IPOs by status or issue type
- Download official DRHP/RHP documents

---

## Sample Routes

| Method | Endpoint                        | Description                    | Access  |
|--------|----------------------------------|--------------------------------|---------|
| POST   | `/api/admin/login`              | Admin Login                    | Admin   |
| GET    | `/api/ipos`                     | Get all IPOs                   | Public  |
| POST   | `/api/ipos/:id/upload`          | Upload RHP/DRHP PDF            | Admin   |
| GET    | `/api/ipos/:id/download`        | Download RHP/DRHP              | Public  |
| DELETE | `/api/ipos/:id/delete-doc`      | Delete uploaded document       | Admin   |

---

## Admin Auth

- JWT-based token system
- Middleware-protected admin routes
- Tokens stored in secure HTTP headers

---

## Database Models

- **Companies**: `company_id`, `company_name`, `company_logo`
- **IPOs**: `ipo_id`, `company_id`, `price_band`, `issue_size`, `status`, etc.
- **Documents**: `document_id`, `ipo_id`, `rhp_pdf`, `drhp_pdf`

---

## Developed By

**Kunal Gupta**  
Backend & Frontend Developer  
me23bt005@iitdh.ac.in • Prayagraj  
GitHub: [KunalGupta1511](https://github.com/KunalGupta1511)

---
## 📁 Folder Structure

