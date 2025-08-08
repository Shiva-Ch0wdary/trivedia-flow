import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Clock, User, Calendar, ArrowRight, Share2, Bookmark, Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/blog';
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const featuredPost = {
    id: 1,
    title: "The Future of Web Development: Trends That Will Shape 2025",
    excerpt: "Explore the cutting-edge technologies and methodologies that are transforming how we build digital experiences. From AI integration to sustainable coding practices.",
    image: "/placeholder.svg",
    category: "Web Development",
    author: "Shiva Chowdary",
    date: "January 15, 2025",
    readTime: "8 min read",
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "Mastering UI/UX Design Systems for Scalable Applications",
      excerpt: "Learn how to create and maintain design systems that grow with your product and team.",
      image: "/placeholder.svg",
      category: "UI/UX Design",
      author: "Gopi Krishna",
      date: "January 12, 2025",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Building Performance-First React Applications",
      excerpt: "Optimization techniques and best practices for creating lightning-fast React apps.",
      image: "/placeholder.svg",
      category: "Web Development",
      author: "Shiva Chowdary",
      date: "January 10, 2025",
      readTime: "10 min read"
    },
    {
      id: 4,
      title: "Mobile App Development: Native vs Cross-Platform in 2025",
      excerpt: "A comprehensive comparison of development approaches for modern mobile applications.",
      image: "/placeholder.svg",
      category: "Mobile Development",
      author: "Gopi Krishna",
      date: "January 8, 2025",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "DevOps Best Practices for Small Development Teams",
      excerpt: "Streamline your deployment process and improve collaboration with these proven strategies.",
      image: "/placeholder.svg",
      category: "DevOps",
      author: "Shiva Chowdary",
      date: "January 5, 2025",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "The Art of User Research: Understanding Your Audience",
      excerpt: "Methods and tools for conducting effective user research that drives design decisions.",
      image: "/placeholder.svg",
      category: "UI/UX Design",
      author: "Gopi Krishna",
      date: "January 3, 2025",
      readTime: "5 min read"
    },
    {
      id: 7,
      title: "Game Development with HTML5: Creating Engaging Web Games",
      excerpt: "Build browser-based games that captivate users with modern web technologies.",
      image: "/placeholder.svg",
      category: "Game Development",
      author: "Shiva Chowdary",
      date: "December 30, 2024",
      readTime: "12 min read"
    }
  ];

  const categories = [
    "All",
    "Web Development",
    "UI/UX Design", 
    "Mobile Development",
    "DevOps",
    "Game Development",
    "Company News",
    "Industry Insights"
  ];

  const popularTags = [
    "React", "TypeScript", "Design Systems", "Performance", "Mobile", 
    "DevOps", "User Experience", "Frontend", "Backend", "Game Dev"
  ];

  const authors = [
    {
      name: "Shiva Chowdary",
      role: "Co-Founder & Creative Director",
      avatar: "/placeholder.svg",
      expertise: "UI/UX Design, Frontend Development"
    },
    {
      name: "Gopi Krishna", 
      role: "Co-Founder & Lead Developer",
      avatar: "/placeholder.svg",
      expertise: "Full-Stack Development, System Architecture"
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const colors = {
      "Web Development": "bg-[#0D9488] text-white",
      "UI/UX Design": "bg-[#FF6B35] text-white", 
      "Mobile Development": "bg-[#8B5CF6] text-white",
      "DevOps": "bg-[#059669] text-white",
      "Game Development": "bg-[#DC2626] text-white",
      "Company News": "bg-[#0EA5E9] text-white",
      "Industry Insights": "bg-[#7C3AED] text-white"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500 text-white";
  };

  return (
    <main>
      <Helmet>
        <title>Insights & Ideas — Trivesha Blog</title>
        <meta name="description" content="Design, Development & Digital Trends from the Trivesha Team. Expert insights on web development, UI/UX design, and modern technology." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      {/* Header */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FAFAFA] via-white to-[#E6F7F5]">
        {/* Background Accent Shapes */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#0D9488] rounded-full blur-3xl" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-[#FF6B35] rounded-full blur-2xl" />
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-[#0D9488] rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-7xl px-6 py-20 md:py-24 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl xl:text-6xl font-bold text-[#0D9488] mb-6 leading-tight">
              Insights & Ideas
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
              Design, Development & Digital Trends from the Trivesha Team
            </p>

            {/* Breadcrumbs */}
            <nav className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-[#0D9488] transition-colors">Home</Link>
              <ArrowRight size={14} />
              <span className="text-[#0D9488] font-medium">Blog</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0D9488] mb-2">
              Featured Article
            </h2>
            <p className="text-muted-foreground">Our latest insights and discoveries</p>
          </div>

          <Card className="featured-post-card group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <Badge className={`absolute top-4 left-4 ${getCategoryColor(featuredPost.category)}`}>
                  {featuredPost.category}
                </Badge>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" variant="secondary" className="w-9 h-9 p-0">
                    <Share2 size={16} />
                  </Button>
                  <Button size="sm" variant="secondary" className="w-9 h-9 p-0">
                    <Bookmark size={16} />
                  </Button>
                </div>
              </div>

              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-1">
                    <User size={14} />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#0D9488] transition-colors">
                  {featuredPost.title}
                </h3>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {featuredPost.excerpt}
                </p>

                <Button className="bg-[#0D9488] hover:bg-[#064E49] text-white w-fit">
                  Read Full Article
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      <div className="grid lg:grid-cols-4 gap-8 py-16 bg-white">
        <div className="lg:col-span-3">
          {/* Blog Grid */}
          <section className="container mx-auto max-w-7xl px-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
              <div>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0D9488] mb-2">
                  Latest Articles
                </h2>
                <p className="text-muted-foreground">Stay updated with our latest insights</p>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
                {categories.slice(0, 5).map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category 
                      ? "bg-[#0D9488] hover:bg-[#064E49]" 
                      : "border-[#0D9488] text-[#0D9488] hover:bg-[#0D9488] hover:text-white"
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="blog-card group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#0D9488]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <Badge className={`absolute top-3 left-3 text-xs ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </Badge>

                    {/* Action Buttons */}
                    <div className="absolute top-3 right-3 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                        <Heart size={12} />
                      </Button>
                      <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                        <Share2 size={12} />
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <User size={12} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={12} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-gray-900 mb-3 group-hover:text-[#0D9488] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                      <ArrowRight size={14} className="text-[#0D9488] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center">
              <Button 
                variant="outline" 
                size="lg"
                className="border-[#0D9488] text-[#0D9488] hover:bg-[#0D9488] hover:text-white px-8"
              >
                Load More Articles
              </Button>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="container mx-auto px-6 space-y-8 sticky top-8">
            {/* Search */}
            <Card className="p-6 shadow-lg border-0">
              <h3 className="font-heading text-lg font-bold text-[#0D9488] mb-4">Search Articles</h3>
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Search blog posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-2 focus:border-[#0D9488]"
                />
              </div>
            </Card>

            {/* Categories */}
            <Card className="p-6 shadow-lg border-0">
              <h3 className="font-heading text-lg font-bold text-[#0D9488] mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category 
                        ? "bg-[#0D9488] text-white" 
                        : "text-muted-foreground hover:bg-[#0D9488]/10 hover:text-[#0D9488]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </Card>

            {/* Tags */}
            <Card className="p-6 shadow-lg border-0">
              <h3 className="font-heading text-lg font-bold text-[#0D9488] mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <Badge 
                    key={tag} 
                    variant="secondary"
                    className="cursor-pointer hover:bg-[#0D9488] hover:text-white transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Authors */}
            <Card className="p-6 shadow-lg border-0">
              <h3 className="font-heading text-lg font-bold text-[#0D9488] mb-4">Meet the Authors</h3>
              <div className="space-y-4">
                {authors.map((author, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <img 
                      src={author.avatar} 
                      alt={author.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm">{author.name}</h4>
                      <p className="text-xs text-[#0D9488] mb-1">{author.role}</p>
                      <p className="text-xs text-muted-foreground">{author.expertise}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Newsletter Signup Banner */}
      <section className="py-16 bg-gradient-to-r from-[#E6F7F5] to-[#F0F9FF]">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#0D9488] mb-4">
            Stay Updated with Trivesha
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest articles, insights, and updates delivered directly to your inbox. 
            Join our community of developers and designers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email address"
              className="flex-1 border-2 focus:border-[#0D9488]"
            />
            <Button className="bg-[#0D9488] hover:bg-[#064E49] text-white px-8">
              Subscribe
            </Button>
          </div>

          <p className="text-xs text-muted-foreground mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>
    </main>
  );
}
