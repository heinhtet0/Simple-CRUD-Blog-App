import initialData from '../../data/db.json';

export const getPosts = () => {
    const stored = localStorage.getItem("posts");

    // If localStorage has posts, use them
    if (stored) {
        const parsed = JSON.parse(stored);
        // Migrate old "body" field to "content" if needed
        return parsed.map((p) => ({
            ...p,
            content: p.content || p.body || "",
        }));
    }

    // First time: seed localStorage with db.json data
    const seedPosts = initialData.posts.map((p) => ({
        ...p,
        content: p.content || p.body || "",
    }));
    localStorage.setItem("posts", JSON.stringify(seedPosts));
    return seedPosts;
};

export const savePosts = (posts) => {
    localStorage.setItem("posts", JSON.stringify(posts));
};

// Call this to reset posts back to db.json data
export const resetPosts = () => {
    localStorage.removeItem("posts");
    return getPosts();
};
