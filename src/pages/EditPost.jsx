import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { getPosts, savePosts } from "../lib/posts";

export default function EditPost() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        const posts = getPosts();
        const post = posts.find((p) => p.id === id);

        if (post) {
            setTitle(post.title);
            setContent(post.content);
            setAuthor(post.author);
        } else {
            alert("Post not found!");
            navigate("/");
        }
    }, [id, navigate]);

    const handleUpdate = () => {
        if (!title || !content || !author) {
            alert("Please fill in all the fields");
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
                    <button className="btn btn-primary" onClick={handleUpdate}>
                        ✦ Update Post
                    </button>
                    <Link to={`/post/${id}`} className="btn btn-secondary">Cancel</Link>
                </div>
            </div>
        </div>
    );
}
