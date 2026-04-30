import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getPosts, savePosts } from "../lib/posts";
import { useAlert } from "../context/AlertContext";

export default function EditPost() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { showAlert } = useAlert();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");
    const [errors, setErrors] = useState({});




    useEffect(() => {
        const posts = getPosts();
        const post = posts.find((p) => p.id === id);

        if (post) {
            setTitle(post.title);
            setContent(post.content);
            setAuthor(post.author);
        } else {
            showAlert("Post not found!", "error");
            navigate("/blog");
        }
    }, [id, navigate, showAlert]);

    const handleUpdate = () => {
        const newErrors = {};
        if (!title) newErrors.title = "Title is required";
        if (!author) newErrors.author = "Author is required";
        if (!content) newErrors.content = "Content is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const posts = getPosts();
        const updatedPosts = posts.map((post) =>
            post.id === id
                ? { ...post, title, content, author }
                : post
        );

        savePosts(updatedPosts);
        navigate(`/post/${id}`);
    };

    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">Edit Post</h1>
                <p className="page-subtitle">Make changes to your post below.</p>
            </div>

            <div className="form-container">
                <div className="form-group">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className={`form-input ${errors.title ? 'error' : ''}`}
                        placeholder="Give your post a great title..."
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                            if (errors.title) setErrors({ ...errors, title: null });
                        }}
                    />
                    {errors.title && <span className="error-message">⚠️ {errors.title}</span>}
                </div>

                <div className="form-group">
                    <label className="form-label">Author</label>
                    <input
                        type="text"
                        className={`form-input ${errors.author ? 'error' : ''}`}
                        placeholder="Your name"
                        value={author}
                        onChange={(e) => {
                            setAuthor(e.target.value);
                            if (errors.author) setErrors({ ...errors, author: null });
                        }}
                    />
                    {errors.author && <span className="error-message">⚠️ {errors.author}</span>}
                </div>

                <div className="form-group">
                    <label className="form-label">Content</label>
                    <textarea
                        className={`form-textarea ${errors.content ? 'error' : ''}`}
                        placeholder="Write your post content here..."
                        value={content}
                        onChange={(e) => {
                            setContent(e.target.value);
                            if (errors.content) setErrors({ ...errors, content: null });
                        }}
                    />
                    {errors.content && <span className="error-message">⚠️ {errors.content}</span>}
                </div>

                <div className="form-actions">
                    <button className="btn btn-primary" onClick={handleUpdate}>
                        ✦ Update Post
                    </button>
                    <Link to={`/post/${id}`} className="btn btn-secondary">Cancel</Link>
                </div>
            </div>
        </div>
    );

}
