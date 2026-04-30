import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../lib/posts";

export default function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const storedPosts = getPosts();
        setPosts(storedPosts);
    }, [])

    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">Blog Archive</h1>
                <p className="page-subtitle">Explore ideas, stories, and insights from our community.</p>
            </div>

            {posts.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-state-icon">📝</div>
                    <h3 className="empty-state-title">No posts yet</h3>
                    <p className="empty-state-text">Be the first to share something amazing.</p>
                    <Link to="/create" className="btn btn-primary">Create Your First Post</Link>
                </div>
            ) : (
                <div className="posts-grid">
                    {posts.map((post) => (
                        <Link to={`/post/${post.id}`} key={post.id}>
                            <article className="post-card">
                                <h2 className="post-card-title">{post.title}</h2>
                                <p className="post-card-body">{post.content}</p>
                                <div className="post-card-meta">
                                    <div className="post-card-author">
                                        <span className="author-avatar">
                                            {post.author?.charAt(0).toUpperCase()}
                                        </span>
                                        <span>{post.author}</span>
                                    </div>
                                    {post.date && (
                                        <span>
                                            {new Date(post.date).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric',
                                            })}
                                        </span>
                                    )}
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    )
}
