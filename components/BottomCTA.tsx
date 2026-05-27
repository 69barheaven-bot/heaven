import { siteConfig } from "@/data/siteConfig";

export default function BottomCTA() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/88 px-3 py-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-3 gap-2">
        <a className="bottom-link" href={siteConfig.googleMapUrl}>
          Map
        </a>
        <a className="bottom-link" href={siteConfig.instagramUrl}>
          Instagram
        </a>
        <a className="bottom-link" href={siteConfig.phoneHref}>
          Call
        </a>
      </div>
    </nav>
  );
}
