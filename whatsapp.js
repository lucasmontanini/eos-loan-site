/* Floating WhatsApp CTA — +1 833-989-3737 (wa.me/18339893737). Injected on every
 * page; i18n.js translates the aria-label/title via its attribute dictionary. */
(function () {
  "use strict";
  function inject() {
    if (document.getElementById("eos-wa")) return;
    var a = document.createElement("a");
    a.id = "eos-wa";
    a.href = "https://wa.me/18339893737";
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute("aria-label", "Chat on WhatsApp");
    a.setAttribute("title", "Chat on WhatsApp");
    a.style.cssText = "position:fixed;right:22px;bottom:22px;z-index:400;width:56px;height:56px;border-radius:999px;background:#25D366;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(23,18,14,.28);transition:transform .15s ease";
    a.onmouseenter = function () { a.style.transform = "scale(1.08)"; };
    a.onmouseleave = function () { a.style.transform = "scale(1)"; };
    a.innerHTML = '<svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.3.7 4.5 1.9 6.4L4 29l7.9-1.8c1.8 1 3.9 1.5 6 1.5 6.6 0 12-5.3 12-11.9S22.6 3 16 3Z" fill="#FFFFFF"/><path d="M12.6 9.7c-.3-.6-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8 0 1.6 1.2 3.2 1.4 3.4.2.2 2.4 3.8 5.9 5.2 2.9 1.1 3.5.9 4.1.9.6-.1 2-.8 2.3-1.6.3-.8.3-1.5.2-1.6-.1-.1-.3-.2-.6-.4-.3-.2-2-1-2.3-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.2-.2.2-.3.3-.5.1-.2.1-.4 0-.6-.1-.2-.7-1.7-1-2.3Z" fill="#25D366"/></svg>';
    document.body.appendChild(a);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", inject);
  else inject();
})();
