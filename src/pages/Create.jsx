import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getPosts, savePosts } from "../lib/posts";

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!title || !content || !author) {
            alert("Please fill in all the fields");
            return;
        }

        const posts = getPosts();

        const newPost = {
            id: Date.now().toString(),
            title,
            content,
            author,
            date: new Date().toISOString(),
        };

        savePosts([...posts, newPost]);
        navigate("/");
    };

    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">Create New Post</h1>
                <p className="page-subtitle">Share your thoughts with the world.</p>
            </div>

            <div className="form-container">
                <div className="form-group">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Give your post a great title..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Author</label>
                    <input
                        type="text"
                        className="form-input"
                        placeholder="Your name"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Content</label>
                    <textarea
                        className="form-textarea"
                        placeholder="Write your post content here..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>

                <div className="form-actions">
                    <button className="btn btn-primary" onClick={handleSubmit}>
                        ✦ Publish Post
                    </button>
                    <Link to="/" className="btn btn-secondary">Cancel</Link>
                </div>
            </div>
        </div>
    );
}
