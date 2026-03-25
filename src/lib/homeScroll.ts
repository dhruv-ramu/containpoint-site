import type { MouseEvent } from "react";
import type { Location } from "react-router-dom";

/** Scroll to top of the marketing home page (used when already on `/` with no hash). */
export function scrollHomeTop(behavior: ScrollBehavior = "smooth") {
  window.scrollTo({ top: 0, left: 0, behavior });
}

/**
 * For `<Link to="/">`: when already on home with no hash, the location does not change,
 * so we scroll explicitly. Otherwise React Router + HomePage layout effect handle it.
 */
export function handleHomeAnchorClick(e: MouseEvent<HTMLAnchorElement>, location: Location) {
  if (location.pathname !== "/" || location.hash) return;
  e.preventDefault();
  scrollHomeTop("smooth");
}
