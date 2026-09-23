import logoAsset from "@/assets/anchor-official-logo.png.asset.json";

export function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  return <img src={logoAsset.url} alt="Anchor Digital Solutions" className={`${className} object-contain`} />;
}