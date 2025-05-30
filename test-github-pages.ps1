Write-Host "Starting GitHub Pages local testing environment" -ForegroundColor Green

# Test mode 1: Regular local development
Write-Host "`n[Mode 1] Testing as regular local development" -ForegroundColor Cyan
Write-Host "Running: bundle exec jekyll serve --config _config.yml,_config_dev.yml --livereload"
Write-Host "Preview at: http://localhost:4000"
Write-Host "Press Ctrl+C to stop and continue to the next test mode"
Write-Host "--------------------------------------------------------------"
bundle exec jekyll serve --config _config.yml,_config_dev.yml --livereload

# Test mode 2: Simulating GitHub Pages environment
Write-Host "`n[Mode 2] Testing as if deployed to GitHub Pages" -ForegroundColor Cyan
Write-Host "Running: bundle exec jekyll serve --baseurl='/solarsprout.online' --livereload"
Write-Host "Preview at: http://localhost:4000/solarsprout.online"
Write-Host "This simulates how GitHub Pages will serve your site when NOT using a custom domain"
Write-Host "Press Ctrl+C to stop and exit"
Write-Host "--------------------------------------------------------------"
bundle exec jekyll serve --baseurl='/solarsprout.online' --livereload
