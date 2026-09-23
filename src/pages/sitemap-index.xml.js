import { getCollection } from 'astro:content';
const routes = ['/', '/about/', '/services/', '/faq/', '/blog/', '/contact/', '/privacy-policy/', '/hipaa-notice/', '/zh/', '/zh/about/', '/zh/services/', '/zh/faq/', '/zh/blog/', '/zh/contact/', '/zh/privacy-policy/', '/zh/hipaa-notice/'];
export async function GET({ site }) {
  const en = await getCollection('postsEn', p => p.data.published);
  const zh = await getCollection('postsZh', p => p.data.published);
  const allRoutes = [...routes, ...en.map(p => `/blog/${p.id}/`), ...zh.map(p => `/zh/blog/${p.id}/`)];
  const base = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, '');
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${allRoutes.map(path => `<url><loc>${new URL(`${base}${path}`, site)}</loc></url>`).join('')}</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
