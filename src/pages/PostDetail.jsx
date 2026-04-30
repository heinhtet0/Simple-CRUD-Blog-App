import { useParams, Link, useNavigate } from "react-router-dom";
import { getPosts, savePosts } from "../lib/posts";
import { useAlert } from "../context/AlertContext";

export default function PostDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { showAlert } = useAlert();

    const posts = getPosts();
    const post = posts.find((post) => post.id === id);

    const handleDelete = () => {
        showAlert("Are you sure you want to delete this post?", "warning", () => {
            const updatedPosts = posts.filter((p) => p.id !== id);
            savePosts(updatedPosts);
            navigate("/blog");
        });
    };


    if (!post) {
        return (
            <div className="page-container">
                <div className="not-found">
                    <h1 className="not-found-title">Post not found</h1>
                    <p className="not-found-text">The post you're looking for doesn't exist or has been removed.</p>
                    <Link to="/blog" className="btn btn-primary">← Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="page-container">
            <div className="post-detail">
                <Link to="/blog" className="btn btn-ghost" style={{ marginBottom: '1.5rem' }}>
                    ← Back to Blog
                </Link>

                <h1 className="post-detail-title">{post.title}</h1>

                <div className="post-detail-meta">
                    <span className="post-detail-author-tag">
                        <span className="author-avatar" style={{ width: '20px', height: '20px', fontSize: '0.6rem' }}>
                            {post.author?.charAt(0).toUpperCase()}
                        </span>
                        {post.author}
                    </span>
                    {post.date && (
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                            {new Date(post.date).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                            })}
                        </span>
                    )}
                </div>

                <p className="post-detail-body">{post.content}</p>

                <div className="post-detail-actions">
                    <Link to={`/edit/${post.id}`} className="btn btn-primary">
                        ✏️ Edit Post
                    </Link>
                    <button className="btn btn-danger" onClick={handleDelete}>
                        🗑️ Delete Post
                    </button>
                </div>
            </div>
        </div>
    );
}