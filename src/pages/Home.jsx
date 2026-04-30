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

            <div className="bento-grid" style={{ marginTop: '4rem' }}>
                <div className="bento-item bento-item-large">
                    <div className="post-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3rem' }}>
                        <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🎨</div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Premium Design</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                            Experience a meticulously crafted interface designed for clarity and elegance. 
                            Our minimalist approach ensures your content remains the center of attention, 
                            while subtle animations provide a delightful user experience.
                        </p>
                    </div>
                </div>
                <div className="bento-item bento-item-tall">
                    <div className="post-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚡</div>
                        <h3 style={{ marginBottom: '0.5rem' }}>Speed</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Optimized for performance with instant loading and smooth transitions.</p>
                    </div>
                </div>
                <div className="bento-item">
                    <div className="post-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🤝</div>
                        <h3 style={{ marginBottom: '0.5rem' }}>Community</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Connect with creators.</p>
                    </div>
                </div>
                <div className="bento-item bento-item-wide">
                    <div className="post-card" style={{ height: '100%', display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        <div style={{ fontSize: '2.5rem' }}>🚀</div>
                        <div>
                            <h3 style={{ marginBottom: '0.2rem' }}>Ready to start?</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Join thousands of writers sharing their stories every day.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}