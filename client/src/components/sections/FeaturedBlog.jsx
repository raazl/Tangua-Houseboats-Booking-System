import { Link } from "react-router-dom";
import { blogPosts } from "../../data/blogPosts";

/**
 * FeaturedBlog component displays a section with a selection of blog posts.
 * It uses the same blog post data as the main Blog page.
 */
const FeaturedBlog = () => {
  return (
    // Section for displaying featured blog posts
    <section className="py-12 bg-tangua-cloud-white">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <h2 className="text-3xl font-bold text-center mb-8">From Our Blog</h2>
        {/* Grid layout for blog post cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {/* Map over the first 3 blog posts to display them */}
          {blogPosts.slice(0, 3).map((post) => (
            <div key={post.id} className="bg-tangua-bamboo-beige p-6 rounded-lg shadow-lg">
              {/* Blog post image */}
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-md mb-4" />
              {/* Blog post title */}
              <h3 className="text-xl font-bold mb-2 text-tangua-charcoal-grey">{post.title}</h3>
              {/* Blog post excerpt */}
              <p className="text-tangua-deep-green mb-4">{post.excerpt}</p>
              {/* Link to the full blog post page */}
              <Link to={`/blog/${post.id}`} className="text-tangua-lake-blue hover:underline">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlog;

