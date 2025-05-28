module Jekyll
  class CategoryPageGenerator < Generator
    safe true

    def generate(site)
      site.posts.docs.map { |post| post.data['categories'] || [] }.flatten.uniq.each do |category|
        site.pages << CategoryPage.new(site, category)
      end
    end
  end

  class CategoryPage < Page
    def initialize(site, category)
      @site = site
      @base = site.source
      @dir = File.join('blog', category.downcase)
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(@base, '_layouts'), 'category.html')
      self.data['title'] = "#{category.capitalize} Posts".split.map(&:capitalize).join(' ')
      self.data['category'] = category
    end
  end
end
