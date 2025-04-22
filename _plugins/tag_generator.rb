module Jekyll
  class TagPageGenerator < Generator
    safe true

    def generate(site)
      tags = []
      
      # Collect all tags from posts
      site.posts.docs.each do |post|
        if post.data['tags']
          post.data['tags'].each do |tag|
            tags << tag unless tags.include?(tag)
          end
        end
      end
      
      # Create a page for each tag
      tags.each do |tag|
        site.pages << TagPage.new(site, site.source, 'tag', tag)
      end
    end
  end

  # A class for tag pages
  class TagPage < Page
    def initialize(site, base, dir, tag)
      @site = site
      @base = base
      @dir = dir
      @name = "#{tag.downcase.gsub(' ', '-')}.html"

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'tag.html')
      self.data['layout'] = 'tag'
      self.data['tag'] = tag
      self.data['title'] = "#{tag}"
      self.data['permalink'] = "/tag/#{tag.downcase.gsub(' ', '-')}/"
    end
  end
end
