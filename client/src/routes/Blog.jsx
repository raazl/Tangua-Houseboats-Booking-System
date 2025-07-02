import { useState } from "react";
import { blogPosts } from "../data/blogPosts";

/**
 * Blog component displays a list of blog posts.
 * Each blog post shows an excerpt initially, with an option to expand and view the full content.
 */
const Blog = () => {
    const [expandedPostId, setExpandedPostId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedPostId(expandedPostId === id ? null : id);
    };

    return (
        <div className="p-6 max-w-4xl mx-auto pt-16">
            <h1 className="text-3xl font-bold mb-8 text-center">Tangua Houseboat Blog</h1>
            <div className="space-y-12">
                {blogPosts.map((post) => (
                    <div key={post.id} className="bg-tangua-bamboo-beige p-8 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-bold mb-4 text-tangua-deep-green">{post.title}</h2>
                        {post.image && <img src={post.image} alt={post.title} className="w-full h-64 object-cover mb-6 rounded-lg" />}
                        <p className="text-tangua-charcoal-grey mb-4 text-lg">{post.excerpt}</p>
                        {expandedPostId === post.id && (
                            <div className="prose lg:prose-xl max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
                        )}
                        <button
                            onClick={() => toggleExpand(post.id)}
                            className="mt-4 bg-tangua-lake-blue text-white px-4 py-2 rounded hover:bg-tangua-sunset-orange transition"
                        >
                            {expandedPostId === post.id ? "Show Less" : "Read More"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;  