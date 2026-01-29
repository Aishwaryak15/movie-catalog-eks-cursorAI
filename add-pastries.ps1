# Script to add all pastries to the database
# Run this if the database is empty

Write-Host "🍰 Adding pastries to your shop..." -ForegroundColor Cyan

# Add regular pastries
$pastries = @(
    @{
        name = "Chocolate Eclair"
        description = "Classic French pastry with chocolate glaze and custard filling"
        price = 100.00
        category = "Pastry"
        imageUrl = "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400"
        inStock = $true
    },
    @{
        name = "Strawberry Tart"
        description = "Fresh strawberries on vanilla custard"
        price = 150.00
        category = "Tart"
        imageUrl = "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400"
        inStock = $true
    },
    @{
        name = "Blueberry Muffin"
        description = "Moist muffin with fresh blueberries"
        price = 50.00
        category = "Muffin"
        imageUrl = "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400"
        inStock = $true
    },
    @{
        name = "Red Velvet Cupcake"
        description = "Moist red velvet with cream cheese frosting"
        price = 60.00
        category = "Cupcake"
        imageUrl = "https://images.unsplash.com/photo-1599785209707-a456fc1337bb?w=400"
        inStock = $true
    },
    @{
        name = "Apple Pie"
        description = "Classic American apple pie with cinnamon"
        price = 300.00
        category = "Pie"
        imageUrl = "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?w=400"
        inStock = $true
    }
)

# Add regular pastries
foreach ($p in $pastries) {
    try {
        $json = $p | ConvertTo-Json
        $result = Invoke-RestMethod -Uri "http://localhost:8080/api/pastries" -Method Post -Body $json -ContentType "application/json"
        Write-Host "✅ Added: $($p.name) - ₹$($p.price)" -ForegroundColor Green
    } catch {
        Write-Host "⚠️  Error adding $($p.name): $_" -ForegroundColor Yellow
    }
}

# Add Pistachio Nutella Cheesecake with user's image
Write-Host "`n🎂 Adding Pistachio Nutella Cheesecake with your custom image..." -ForegroundColor Cyan

$imagePath = "C:\Users\aishwaryaka\Desktop\cake.png"
if (Test-Path $imagePath) {
    try {
        $imageBytes = [System.IO.File]::ReadAllBytes($imagePath)
        $base64 = [System.Convert]::ToBase64String($imageBytes)
        $imageDataUrl = "data:image/png;base64,$base64"
        
        $cheesecake = @{
            name = "Pistachio Nutella Cheesecake"
            description = "Creamy cheesecake with rich Nutella swirl and crushed pistachio topping"
            price = 180.00
            imageUrl = $imageDataUrl
            category = "Cake"
            inStock = $true
        }
        
        $json = $cheesecake | ConvertTo-Json -Depth 10
        $result = Invoke-RestMethod -Uri "http://localhost:8080/api/pastries" -Method Post -Body $json -ContentType "application/json"
        Write-Host "✅ Added: Pistachio Nutella Cheesecake - ₹180 (with your custom image!)" -ForegroundColor Green
    } catch {
        Write-Host "⚠️  Error adding cheesecake: $_" -ForegroundColor Yellow
        Write-Host "   Adding with default image instead..." -ForegroundColor Yellow
        
        # Fallback to default image
        $cheesecake = @{
            name = "Pistachio Nutella Cheesecake"
            description = "Creamy cheesecake with rich Nutella swirl and crushed pistachio topping"
            price = 180.00
            imageUrl = "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400"
            category = "Cake"
            inStock = $true
        }
        $json = $cheesecake | ConvertTo-Json
        Invoke-RestMethod -Uri "http://localhost:8080/api/pastries" -Method Post -Body $json -ContentType "application/json" | Out-Null
        Write-Host "✅ Added: Pistachio Nutella Cheesecake - ₹180" -ForegroundColor Green
    }
} else {
    Write-Host "⚠️  Image not found at: $imagePath" -ForegroundColor Yellow
    Write-Host "   Adding with default image..." -ForegroundColor Yellow
    
    $cheesecake = @{
        name = "Pistachio Nutella Cheesecake"
        description = "Creamy cheesecake with rich Nutella swirl and crushed pistachio topping"
        price = 180.00
        imageUrl = "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400"
        category = "Cake"
        inStock = $true
    }
    $json = $cheesecake | ConvertTo-Json
    Invoke-RestMethod -Uri "http://localhost:8080/api/pastries" -Method Post -Body $json -ContentType "application/json" | Out-Null
    Write-Host "✅ Added: Pistachio Nutella Cheesecake - ₹180" -ForegroundColor Green
}

# Show summary
Write-Host "`n📊 Summary:" -ForegroundColor Cyan
$all = Invoke-RestMethod -Uri "http://localhost:8080/api/pastries" -Method Get
Write-Host "Total pastries: $($all.Count)" -ForegroundColor Green
$all | Format-Table id, name, @{Label="Price (₹)"; Expression={$_.price}}, category -AutoSize

Write-Host "`n✅ Done! Refresh your browser to see all pastries!" -ForegroundColor Green
