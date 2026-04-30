export default function About() {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">Our Story</h1>
                <p className="page-subtitle">We believe in the power of words to change the world.</p>
            </div>

            <div className="form-container" style={{ animation: 'none', marginBottom: '2rem' }}>
                <h2 style={{ marginBottom: '1rem', color: 'var(--accent)' }}>Who We Are</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    Blogscape was founded with a simple mission: to provide a beautiful, distraction-free space for creators to share their thoughts and for readers to discover new perspectives.
                </p>
                <p style={{ color: 'var(--text-secondary)' }}>
                    Our platform is built on the principles of simplicity, elegance, and community. We believe that everyone has a story worth telling, and we're here to help you tell yours.
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                <div className="post-card" style={{ animationDelay: '0.1s' }}>
                    <h3 className="post-card-title">Our Mission</h3>
                    <p className="post-card-body">To democratize publishing and provide a premium experience for every writer.</p>
                </div>
                <div className="post-card" style={{ animationDelay: '0.2s' }}>
                    <h3 className="post-card-title">Our Vision</h3>
                    <p className="post-card-body">A world where ideas flow freely and beautiful design inspires creativity.</p>
                </div>
            </div>
        </div>
    )
}
