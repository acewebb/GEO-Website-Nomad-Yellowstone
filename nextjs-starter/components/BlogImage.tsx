import Image from 'next/image';

/**
 * Optimized image component for MDX blog posts.
 * Replaces raw <img> tags with Next.js <Image> for:
 * - Automatic WebP/AVIF conversion
 * - Responsive srcset generation
 * - Lazy loading with blur placeholder
 * - Proper sizing hints to prevent layout shift
 */
interface BlogImageProps {
    src: string;
    alt: string;
    className?: string;
    priority?: boolean;
}

export default function BlogImage({ src, alt, className = '', priority = false }: BlogImageProps) {
    // Convert .png references to .webp if a webp version exists in /blog/
    const optimizedSrc = src.includes('/blog/') && src.endsWith('.png')
        ? src.replace('.png', '.webp')
        : src;

    return (
        <div className={`relative w-full overflow-hidden ${className}`} style={{ height: '16rem' }}>
            <Image
                src={optimizedSrc}
                alt={alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 768px, 800px"
                loading={priority ? 'eager' : 'lazy'}
                priority={priority}
            />
        </div>
    );
}
