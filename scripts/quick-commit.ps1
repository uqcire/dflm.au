# Quick commit script for PowerShell
param(
    [Parameter(Mandatory=$true)]
    [string]$Message
)

# Add all changes
git add .

# Commit with the provided message
git commit -m $Message

# Push to main branch
git push origin main

Write-Host "Successfully committed and pushed: $Message" -ForegroundColor Green
