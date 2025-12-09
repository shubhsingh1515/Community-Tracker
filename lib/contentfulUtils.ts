// No imports. Pure browser-safe code.
export function getAssetUrl(assetId: string, includes: any) {
  const asset = includes?.Asset?.find((a: any) => a.sys?.id === assetId);
  const url = asset?.fields?.file?.url;
  return url ? (url.startsWith("//") ? "https:" + url : url) : null;
}
