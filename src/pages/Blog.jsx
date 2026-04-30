import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../lib/posts";
import { useAlert } from "../context/AlertContext";

export default function Blog() {
    const [posts, setPosts] = useState([]);
    const { showAlert } = useAlert();

    useEffect(() => {
        const storedPosts = getPosts();
        setPosts(storedPosts);
    }, [])

    return (
        <div className="page-container">
            <div className="page-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                    <h1 className="page-title">Blog Archive</h1>
                    <p className="page-subtitle">Explore ideas, stories, and insights from our community.</p>
                </div>
                <button 
                    onClick={() => { 
                        showAlert("Reset to default posts? This will clear all your changes.", "warning", () => {
                            localStorage.removeItem('posts'); 
                            window.location.reload(); 
                        });
                    }} 
                    className="btn btn-ghost"
                    style={{ fontSize: '0.8rem', opacity: 0.6 }}
                >
                    🔄 Reset Data
                </button>
            </div>



            {posts.length === 0 ? (
                <div className="empty-state">
                    <div className="empty-state-icon">📝</div>
                    <h3 className="empty-state-title">No posts yet</h3>
                    <p className="empty-state-text">Be the first to share something amazing.</p>
                    <Link to="/create" className="btn btn-primary">Create Your First Post</Link>
                </div>
            ) : (
                <div className="bento-grid">
                    {posts.map((post, index) => {
                        let sizeClass = "";
                        if (index % 5 === 0) sizeClass = "bento-item-large";
                        else if (index % 5 === 1) sizeClass = "bento-item-tall";
                        else if (index % 5 === 3) sizeClass = "bento-item-wide";

                        return (
                            <Link to={`/post/${post.id}`} key={post.id} className={`bento-item ${sizeClass}`}>
                                <article className="post-card" style={{ height: '100%' }}>
                                    <h2 className="post-card-title">{post.title}</h2>
                                    <p className="post-card-body" style={{ WebkitLineClamp: sizeClass === "bento-item-large" ? 6 : 2 }}>
                                        {post.content}
                                    </p>
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
                        );
                    })}
                </div>

            )}
        </div>
    )
}
