// Asset pointers from lovable-assets resolve to relative `/__l5e/assets-v1/...`
// URLs that are only served by Lovable's preview/published infrastructure.
// On self-hosted deploys (Vercel, Netlify, Cloudflare Pages, etc.) those paths
// return 404, so we rewrite them to absolute URLs pointing at the project's
// published Lovable CDN host.
const LOVABLE_ASSET_HOST = "https://oryntal-portfolio.lovable.app";

export function assetUrl(pointer: { url: string }): string {
  const u = pointer.url;
  if (/^https?:\/\//i.test(u)) return u;
  if (u.startsWith("/__l5e/")) return `${LOVABLE_ASSET_HOST}${u}`;
  return u;
}
