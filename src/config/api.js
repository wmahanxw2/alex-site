// Backend / payment placeholders. The UI calls ONLY these functions.
// Replace the bodies with calls to YOUR API (e.g. https://your-domain/api/...).
// Never put panel (Pasarguard) credentials here: they must stay in your server-side code.

const API_BASE = ""; // TODO: e.g. "https://your-domain.com/api"

export async function startCheckout(planId) {
  // TODO: POST `${API_BASE}/checkout` { planId } -> redirect to the payment gateway URL
  console.info("[placeholder] startCheckout", planId, API_BASE);
  window.alert("اتصال به درگاه پرداخت هنوز فعال نشده (src/config/api.js)");
}

export async function getFreeConfig() {
  // TODO: POST `${API_BASE}/free-config` -> returns the subscription link
  console.info("[placeholder] getFreeConfig");
  window.alert("دریافت کانفیگ رایگان هنوز به API وصل نشده (src/config/api.js)");
}

export function openAuth(mode /* "login" | "register" */) {
  // TODO: open your login / register page or modal
  console.info("[placeholder] openAuth", mode);
  window.alert("ورود و ثبت‌نام هنوز به API وصل نشده (src/config/api.js)");
}
