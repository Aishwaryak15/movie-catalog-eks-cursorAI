# 🚀 Quick Start Guide - Pastry Shop Application

## ✅ Current Status

### Backend (Java Spring Boot) - **RUNNING** ✅
- **Status**: Running successfully on port 8080
- **Database**: H2 In-Memory Database (No MySQL required!)
- **API Endpoint**: http://localhost:8080/api/pastries
- **H2 Console**: http://localhost:8080/h2-console

## 📋 What You Need to Do

### Option 1: Install Node.js and Run React Frontend (Recommended)

#### Step 1: Install Node.js
1. Download Node.js from: https://nodejs.org/
2. Install the LTS (Long Term Support) version
3. Restart your terminal/command prompt after installation

#### Step 2: Install Frontend Dependencies
```bash
cd frontend
npm install
```

#### Step 3: Start React Frontend
```bash
npm start
```

The frontend will automatically open in your browser at: **http://localhost:3000**

---

### Option 2: Test Backend API Directly (No Frontend Needed)

You can test the backend API using:

#### Using Browser
Visit: http://localhost:8080/api/pastries

#### Using PowerShell
```powershell
# Get all pastries
Invoke-RestMethod -Uri "http://localhost:8080/api/pastries" -Method Get

# Create a new pastry
$body = @{
    name = "Chocolate Cake"
    description = "Delicious chocolate cake"
    price = 25.99
    imageUrl = "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400"
    category = "Cake"
    inStock = $true
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:8080/api/pastries" -Method Post -Body $body -ContentType "application/json"
```

#### Using Postman or Thunder Client
1. Install Postman (https://www.postman.com/) or Thunder Client (VS Code extension)
2. Import the API endpoints:
   - GET: http://localhost:8080/api/pastries
   - POST: http://localhost:8080/api/pastries
   - PUT: http://localhost:8080/api/pastries/{id}
   - DELETE: http://localhost:8080/api/pastries/{id}

---

### Option 3: Access H2 Database Console

1. Open browser: http://localhost:8080/h2-console
2. Use these credentials:
   - **JDBC URL**: `jdbc:h2:mem:pastryshopdb`
   - **User Name**: `sa`
   - **Password**: (leave empty)
3. Click "Connect"
4. Run SQL queries:
```sql
-- View all pastries
SELECT * FROM pastries;

-- Insert sample data
INSERT INTO pastries (name, description, price, image_url, category, in_stock, created_at, updated_at)
VALUES ('Croissant', 'Buttery French pastry', 3.50, 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400', 'Croissant', true, NOW(), NOW());
```

---

## 🎯 Testing the Backend API

### 1. Get All Pastries (Empty at start)
Open browser: http://localhost:8080/api/pastries

Expected response:
```json
[]
```

### 2. Create Your First Pastry
Using PowerShell:
```powershell
$pastry = @{
    name = "Blueberry Muffin"
    description = "Fresh blueberry muffin with streusel topping"
    price = 4.99
    imageUrl = "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400"
    category = "Muffin"
    inStock = $true
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:8080/api/pastries" -Method Post -Body $pastry -ContentType "application/json"
```

### 3. View Your Pastry
Refresh: http://localhost:8080/api/pastries

---

## 🛠️ Troubleshooting

### Backend Not Running?
```bash
# In project root directory
mvn spring-boot:run
```

### Want to Use MySQL Instead of H2?
1. Install MySQL
2. Edit `src/main/resources/application.properties`
3. Comment out H2 section
4. Uncomment MySQL section
5. Update username and password
6. Edit `pom.xml` - uncomment MySQL dependency and comment out H2
7. Restart backend

---

## 📦 Architecture

```
Backend (Spring Boot)
├── Port: 8080
├── Database: H2 (In-Memory)
├── API: /api/pastries
└── Console: /h2-console

Frontend (React) [To be started]
├── Port: 3000
├── Connects to: http://localhost:8080
└── Modern UI with CRUD operations
```

---

## 🎨 Sample Data

Want to populate with sample data? Run this in H2 Console:

```sql
INSERT INTO pastries (name, description, price, image_url, category, in_stock, created_at, updated_at)
VALUES 
('Chocolate Cake', 'Rich and moist chocolate cake', 25.99, 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400', 'Cake', true, NOW(), NOW()),
('Croissant', 'Buttery French pastry', 3.50, 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400', 'Croissant', true, NOW(), NOW()),
('Macaron', 'Delicate French cookies', 2.99, 'https://images.unsplash.com/photo-1558312657-b2dead0fb77f?w=400', 'Macaron', true, NOW(), NOW()),
('Apple Pie', 'Classic American apple pie', 18.99, 'https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=400', 'Pie', true, NOW(), NOW());
```

Then visit: http://localhost:8080/api/pastries

---

## 🌐 Next Steps

1. **Install Node.js** from https://nodejs.org/
2. **Run the frontend**:
   ```bash
   cd frontend
   npm install
   npm start
   ```
3. **Access the full application** at http://localhost:3000

Enjoy your Pastry Shop Application! 🧁✨
