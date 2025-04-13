import React, { useState } from 'react';
import '../styles/blog.css';
import img1 from '../pages/api/protein.jpg';
import img2 from '../pages/api/carbs.jpg';
import img3 from '../pages/api/budget.jpeg';
import img4 from '../pages/api/gutHealth.jpg';
import img5 from '../pages/api/mealPrep.jpg';
import img6 from '../pages/api/activeLifestyle.jpg';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Importance of Protein in Your Diet",
      excerpt: "Learn why protein is crucial for muscle building, weight management, and overall health.",
      imageUrl: img1,
      date: "February 25, 2025",
      author: "Dr. Sarah Miller",
      category: "Nutrition Basics",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Understanding Carbohydrates: Friend or Foe?",
      excerpt: "Debunking myths about carbs and learning how to incorporate them properly in your diet.",
      imageUrl: img2,
      date: "February 20, 2025",
      author: "Michael Johnson, RD",
      category: "Nutrition Myths",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Healthy Eating on a Budget",
      excerpt: "Practical tips for maintaining a nutritious diet without breaking the bank.",
      imageUrl: img3,
      date: "February 15, 2025",
      author: "Jessica Wong, RD",
      category: "Practical Nutrition",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Meal Prep 101: Save Time and Eat Better",
      excerpt: "A beginner's guide to effective meal planning and preparation for a healthier lifestyle.",
      imageUrl: img4,
      date: "February 10, 2025",
      author: "David Chen, RD",
      category: "Healthy Habits",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "The Truth About Fad Diets",
      excerpt: "An evidence-based analysis of popular diet trends and their impact on health.",
      imageUrl: img5,
      date: "February 5, 2025",
      author: "Dr. Emily Roberts",
      category: "Diet Trends",
      readTime: "9 min read"
    },
    {
      id: 6,
      title: "Nutrition for Active Lifestyles",
      excerpt: "How to fuel your body properly for optimal performance during exercise.",
      imageUrl: img6,
      date: "January 30, 2025",
      author: "Ryan Peters, Sports Nutritionist",
      category: "Sports Nutrition",
      readTime: "7 min read"
    }
  ];

  // Filter posts based on active category
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const categories = [
    { name: 'All', count: blogPosts.length },
    { name: 'Nutrition Basics', count: 12 },
    { name: 'Healthy Recipes', count: 24 },
    { name: 'Weight Management', count: 18 },
    { name: 'Dietary Supplements', count: 9 },
    { name: 'Sports Nutrition', count: 15 },
    { name: 'Special Diets', count: 11 }
  ];

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1>Nutrition Insights Blog</h1>
        <p>Latest tips, research, and advice from our expert dieticians</p>
        <div className="header-categories">
          {['All', 'Nutrition Basics', 'Healthy Recipes', 'Weight Management', 'Sports Nutrition'].map(cat => (
            <button 
              key={cat} 
              className={activeCategory === cat ? 'active' : ''}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="blog-container">
        <div className="blog-content">
          <div className="featured-post">
            <div className="featured-image">
              <img src={img4} alt="Featured Post" />
              <div className="featured-overlay">
                <span className="post-category featured">Featured</span>
                <span className="post-read-time">10 min read</span>
              </div>
            </div>
            <div className="featured-content">
              <h2>Gut Health: The Foundation of Overall Wellness</h2>
              <div className="post-meta">
                <span className="post-date">February 28, 2025</span>
                <span className="post-author">Dr. James Wilson</span>
              </div>
              <p className="post-excerpt">
                Discover the powerful connection between your gut health and overall wellbeing. 
                This comprehensive guide explores the latest research on the gut microbiome and 
                provides practical steps to improve your digestive health.
              </p>
              <a href="#" className="read-more-btn">Read Full Article</a>
            </div>
          </div>

          <div className="category-filter-mobile">
            <select 
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat.name} value={cat.name}>{cat.name}</option>
              ))}
            </select>
          </div>

          <div className="blog-posts">
            {filteredPosts.map(post => (
              <div className="blog-card" key={post.id}>
                <div className="blog-image">
                  <img src={post.imageUrl} alt={post.title} />
                  <div className="card-overlay">
                    <span className="post-category">{post.category}</span>
                    <span className="post-read-time">{post.readTime}</span>
                  </div>
                </div>
                <div className="blog-card-content">
                  <h3>{post.title}</h3>
                  <div className="post-meta">
                    <span className="post-date">{post.date}</span>
                    <span className="post-author">{post.author}</span>
                  </div>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <a href="#" className="read-more-btn">Read More</a>
                </div>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button className="prev" disabled>&larr; Previous</button>
            <div className="page-numbers">
              <a href="#" className="active">1</a>
              <a href="#">2</a>
              <a href="#">3</a>
            </div>
            <button className="next">Next &rarr;</button>
          </div>
        </div>

        <div className="blog-sidebar">
          <div className="sidebar-section search">
            <h3>Search Articles</h3>
            <div className="search-box">
              <input type="text" placeholder="Search articles..." />
              <button><i className="search-icon">🔍</i></button>
            </div>
          </div>

          <div className="sidebar-section categories">
            <h3>Categories</h3>
            <ul>
              {categories.map(cat => (
                <li key={cat.name}>
                  <a 
                    href="#" 
                    className={activeCategory === cat.name ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveCategory(cat.name);
                    }}
                  >
                    {cat.name} <span>({cat.count})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sidebar-section recent-posts">
            <h3>Recent Posts</h3>
            <div className="recent-post">
              <img src={img1} alt="Recent Post" />
              <div>
                <h4>Seasonal Eating: Spring Edition</h4>
                <p>February 22, 2025</p>
              </div>
            </div>
            <div className="recent-post">
              <img src={img2} alt="Recent Post" />
              <div>
                <h4>The Role of Vitamins in Immunity</h4>
                <p>February 18, 2025</p>
              </div>
            </div>
            <div className="recent-post">
              <img src={img3} alt="Recent Post" />
              <div>
                <h4>Understanding Food Labels</h4>
                <p>February 12, 2025</p>
              </div>
            </div>
          </div>

          <div className="sidebar-section subscribe">
            <h3>Stay Updated</h3>
            <p>Subscribe to our newsletter for the latest nutrition tips and recipes.</p>
            <form>
              <input type="email" placeholder="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
            <div className="social-icons">
              <a href="https://www.facebook.com/" title="Facebook">📘</a>
              <a href="https://x.com/?lang=en" title="Twitter">🐦</a>
              <a href="https://www.instagram.com/" title="Instagram">📷</a>
              <a href="https://www.pinterest.com/" title="Pinterest">📌</a>
            </div>
          </div>
          
          <div className="sidebar-section popular-tags">
            <h3>Popular Tags</h3>
            <div className="tags">
              <a href="#">Nutrition</a>
              <a href="#">Health</a>
              <a href="#">Recipes</a>
              <a href="#">Wellness</a>
              <a href="#">Diet</a>
              <a href="#">Protein</a>
              <a href="#">Fitness</a>
              <a href="#">Vegetables</a>
              <a href="#">Organic</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
