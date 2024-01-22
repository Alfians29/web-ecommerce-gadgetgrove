import { createClient } from 'next-sanity';
import ImageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'xfnwuktc',
    dataset: 'production',
    apiVersion: '2024-01-22',
    useCdn: true,
});

const imgBuilder = ImageUrlBuilder(client);

export function urlFor(source) {
    return imgBuilder.image(source);
}
