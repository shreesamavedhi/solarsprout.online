source "https://rubygems.org"

# Note: GitHub Pages uses Ruby 3.3.4, but we're allowing local development with 3.4.2
# ruby "~> 3.3.0"

# If you want to use GitHub Pages, remove the "gem 'jekyll'" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
gem "github-pages", "~> 232", group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Required for serving the site locally
gem "webrick", "~> 1.8"

# Explicitly pin activesupport to a version compatible with Ruby 3.1.7
gem "activesupport", "~> 7.0.8"
