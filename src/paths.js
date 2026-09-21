const base = import.meta.env.BASE_URL === '/' ? '' : import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path = '/') {
  if (/^(?:[a-z]+:|\/\/|#)/i.test(path)) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${base}${normalized}` || '/';
}

export function withoutBase(path = '/') {
  if (!base || !path.startsWith(base)) return path;
  return path.slice(base.length) || '/';
}
