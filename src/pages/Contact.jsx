import { useState } from "react";

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="page-container">
                <div className="empty-state">
                    <div className="empty-state-icon">✉️</div>
                    <h3 className="empty-state-title">Message Sent!</h3>
                    <p className="empty-state-text">Thank you for reaching out. We'll get back to you as soon as possible.</p>
                    <button onClick={() => setSubmitted(false)} className="btn btn-secondary">Send Another Message</button>
                </div>
            </div>
        );
    }

    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">Contact Us</h1>
                <p className="page-subtitle">Have a question or feedback? We'd love to hear from you.</p>
            </div>

            <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-input" placeholder="Your name" required />
                </div>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-input" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea className="form-textarea" placeholder="How can we help?" required></textarea>
                </div>
                <div className="form-actions">
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
            </form>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    Or email us directly at <a href="mailto:hello@blogscape.com" style={{ color: 'var(--accent)' }}>hello@blogscape.com</a>
                </p>
            </div>
        </div>
    )
}
