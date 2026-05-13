import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export type Post = {
    slug: string;
    title: string;
    date: string;
    author: string;
    description: string;
    content: string;
    tags?: string[];
    image?: string;
};

export function getPostSlugs() {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }
    return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string): Post {
    const realSlug = slug.replace(/\.mdx$/, '');
    const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        slug: realSlug,
        title: data.title,
        date: data.date,
        author: data.author,
        description: data.description,
        content: content,
        tags: data.tags || [],
        image: data.image || '/hero-bg.png', // Fallback image
    };
}

export function getAllPosts(): Post[] {
    const slugs = getPostSlugs();
    const posts = slugs
        .map((slug) => getPostBySlug(slug))
        // Sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}

export function getRelatedPosts(currentSlug: string, count: number = 3): Post[] {
    const allPosts = getAllPosts();
    const current = allPosts.find((p) => p.slug === currentSlug);
    if (!current) return allPosts.filter((p) => p.slug !== currentSlug).slice(0, count);

    const currentTags = current.tags || [];

    // Score each post by number of overlapping tags
    const scored = allPosts
        .filter((p) => p.slug !== currentSlug)
        .map((p) => {
            const overlap = (p.tags || []).filter((t) => currentTags.includes(t)).length;
            return { post: p, score: overlap };
        })
        .sort((a, b) => {
            // Sort by tag overlap first, then by date (newest first)
            if (b.score !== a.score) return b.score - a.score;
            return b.post.date > a.post.date ? 1 : -1;
        });

    return scored.slice(0, count).map((s) => s.post);
}
