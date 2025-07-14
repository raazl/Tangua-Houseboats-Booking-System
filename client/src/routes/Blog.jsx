import { useState } from "react";
import { blogPosts } from "../data/blogPosts";

/**
 * Blog component displays a list of blog posts in a modern, full-width layout.
 * Each blog post is presented as a card with a cover image and an option to expand for more details.
 */
const Blog = () => {
    const [expandedPostId, setExpandedPostId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedPostId(expandedPostId === id ? null : id);
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-tangua-deep-green tracking-tight">
                    The Tangua Tales
                </h1>
                <div className="space-y-16">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-tangua-bamboo-beige rounded-xl shadow-2xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                            {post.image && (
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-96 object-cover"
                                />
                            )}
                            <div className="p-8 md:p-12">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tangua-deep-green leading-tight">
                                    {post.title}
                                </h2>
                                <p className="text-gray-600 mb-6 text-lg">
                                    {post.excerpt}
                                </p>
                                {expandedPostId === post.id && (
                                    <div
                                        className="prose lg:prose-xl max-w-none text-gray-800"
                                        dangerouslySetInnerHTML={{ __html: post.content }}
                                    />
                                )}
                                <div className="mt-6 text-center">
                                    <button
                                        onClick={() => toggleExpand(post.id)}
                                        className="bg-tangua-lake-blue text-white px-4 py-2 rounded hover:bg-tangua-sunset-orange transition"
                                    >
                                        {expandedPostId === post.id ? "Show Less" : "Read More"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;  