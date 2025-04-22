source "https://rubygems.org"

# Standard library gems that are no longer included by default in Ruby 3.4
gem "csv"
gem "base64"
gem "bigdecimal"
gem "drb"
gem "mutex_m"
gem "observer"
gem "logger"

# Jekyll and its dependencies
gem "jekyll", "~> 4.3.2"
gem "minima", "~> 2.5"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag", "~> 2.8"
  gem "jekyll-sitemap", "~> 1.4"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "webrick", "~> 1.8"
