import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

const Blog = () => {
    // Get postId from URL parameters, if available
    const { postId } = useParams();
    // State to manage which blog post is currently expanded
    const [expandedPostId, setExpandedPostId] = useState(null);

    // Effect to expand a specific post if postId is present in the URL
    useEffect(() => {
        if (postId) {
            setExpandedPostId(postId);
        }
    }, [postId]); // Re-run effect when postId changes

    // Function to toggle the expanded state of a blog post
    const toggleExpand = (id) => {
        setExpandedPostId(expandedPostId === id ? null : id);
    };

    return (
        // Main container for the blog page with background color and minimum height
        <div className="bg-tangua-cloud-white min-h-screen">
            {/* Container for content with responsive padding and vertical spacing */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {/* Main title of the blog page */}
                <h1 className="text-5xl md:text-6xl font-extrabold mb-16 text-center text-tangua-deep-green tracking-tight">
                    The Tangua Tales
                </h1>
                {/* Wrapper for blog posts to control maximum width and center alignment */}
                <div className="max-w-5xl mx-auto">
                    {/* Vertical spacing between blog post cards */}
                    <div className="space-y-24">
                        {/* Map through each blog post to render its card */}
                        {blogPosts.map((post) => (
                            <div key={post.id} className="bg-tangua-bamboo-beige rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-3 transition-all duration-500 ease-in-out group border border-gray-200 hover:shadow-2xl">
                                {/* Display image if available */}
                                {post.image && (
                                    <div className="relative overflow-hidden rounded-t-xl">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                        {/* Overlay for hover effect on image */}
                                        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-opacity duration-300"></div>
                                    </div>
                                )}
                                {/* Content area of the blog post card */}
                                <div className="p-8 md:p-12">
                                    {/* Blog post title */}
                                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-tangua-deep-green leading-tight">
                                        {post.title}
                                    </h2>
                                    {/* Blog post excerpt */}
                                    <p className="text-xl font-medium text-gray-700 mb-6 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    {/* Expanded content, shown only if post is expanded */}
                                    {expandedPostId === post.id && (
                                        <div
                                            className="prose prose-lg lg:prose-xl max-w-none text-gray-800 mt-6"
                                            dangerouslySetInnerHTML={{ __html: post.content }}
                                        />
                                    )}
                                    {/* Read More/Show Less button */}
                                    <div className="mt-8 text-center">
                                        <button
                                            onClick={() => toggleExpand(post.id)}
                                            className="bg-tangua-lake-blue text-white px-6 py-3 rounded-lg hover:bg-tangua-sunset-orange transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
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
        </div>
    );
};

export default Blog;  