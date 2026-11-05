import type { ImageMetadata } from 'astro';

const all = import.meta.glob<{ default: ImageMetadata }>('/src/assets/img/*/*.{jpg,jpeg,png}', {
  eager: true,
});

/** Returns the images of one folder in src/assets/img, sorted by file name. */
export function folder(name: string): ImageMetadata[] {
  return Object.entries(all)
    .filter(([p]) => p.startsWith(`/src/assets/img/${name}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, m]) => m.default);
}
