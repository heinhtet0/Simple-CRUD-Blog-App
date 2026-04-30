import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="page-container" style={{ textAlign: 'center', paddingTop: '5rem' }}>
            <div className="page-header">
                <h1 className="page-title" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Welcome to Blogscape</h1>
                <p className="page-subtitle" style={{ fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                    A beautiful space for modern thoughts, creative stories, and insightful articles. Join our community of readers and writers today.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <Link to="/blog" className="btn btn-primary" style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}>Explore Blog</Link>
                    <Link to="/about" className="btn btn-secondary" style={{ padding: '0.8rem 2rem', fontSize: '1rem' }}>Learn More</Link>
                </div>
            </div>

            <div style={{ marginTop: '6rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎨</div>
                    <h3 style={{ marginBottom: '0.5rem' }}>Beautiful Design</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>A minimalist and modern interface that puts content first.</p>
                </div>
                <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚡</div>
                    <h3 style={{ marginBottom: '0.5rem' }}>Lightning Fast</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Built with React and Vite for a seamless user experience.</p>
                </div>
                <div style={{ padding: '2rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🤝</div>
                    <h3 style={{ marginBottom: '0.5rem' }}>Community</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Share your ideas and connect with like-minded individuals.</p>
                </div>
            </div>
        </div>
    )
}