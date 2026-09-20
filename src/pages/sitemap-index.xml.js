const routes = ['/', '/about/', '/services/', '/faq/', '/resources/', '/contact/', '/privacy-policy/', '/hipaa-notice/', '/en/book/', '/zh/', '/zh/about/', '/zh/services/', '/zh/faq/', '/zh/resources/', '/zh/contact/', '/zh/privacy-policy/', '/zh/hipaa-notice/', '/zh/book/'];
export function GET({ site }) {
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(path => `<url><loc>${new URL(path, site)}</loc></url>`).join('')}</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
}
