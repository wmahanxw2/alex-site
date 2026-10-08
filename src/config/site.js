// ALEX: all texts, plans and links live here. Edit this file only to change content.
export const site = {
  brand: "ALEX",
  nav: [
    { label: "خانه", href: "#home" },
    { label: "سرویس‌ها", href: "#services" },
    { label: "ویژگی‌ها", href: "#features" },
    { label: "سوالات متداول", href: "#faq" },
    { label: "پشتیبانی", href: "#support" },
  ],
  hero: {
    title: "VPN سریع، پایدار و بدون دردسر",
    text: "اتصال پایدار برای گیم، دانلود و استفاده روزمره",
    primary: "خرید اشتراک",
    secondary: "مشاهده سرویس‌ها",
  },
  // price: placeholder, replace with real prices (or load them from your API)
  plans: [
    {
      id: "economy", name: "اقتصادی", icon: "download", desc: "مناسب دانلود با حجم بالا و قیمت اقتصادی",
      price: "۰۰۰,۰۰۰", unit: "تومان / ماه",
      features: ["مناسب دانلود", "حجم بالا", "قیمت اقتصادی", "اتصال پایدار"], cta: "خرید",
    },
    {
      id: "golden", name: "Golden Service", icon: "crown", badge: "پیشنهاد ویژه", featured: true,
      desc: "کم‌پینگ و پایدارتر برای گیم؛ سرورهای ترکیه و امارات",
      price: "۰۰۰,۰۰۰", unit: "تومان / ماه",
      features: ["Tunnel شده", "مناسب گیم", "سرورهای ترکیه و امارات", "پایداری و کیفیت بالاتر", "حدود ۹۰٪ کانفیگ‌ها Tunnel شده"], cta: "خرید",
    },
    {
      id: "free", name: "Free Config", icon: "gift", desc: "سرویس را رایگان امتحان کن",
      price: "رایگان", unit: "۲ روزه",
      features: ["رایگان", "۲ روزه", "حجم نامحدود", "بدون محدودیت ساخت", "مناسب تست سرویس"], cta: "دریافت کانفیگ رایگان",
    },
  ],
  stats: [
    { value: "+۱۰۰۰", label: "کاربر فعال" },
    { value: "۹۹٪", label: "پایداری" },
    { value: "۲۴/۷", label: "سرویس‌دهی" },
    { value: "سریع", label: "سرورهای پرسرعت" },
  ],
  features: [
    { icon: "zap", title: "سرعت بالا", text: "سرورهای پرسرعت برای دانلود و استریم بدون کندی." },
    { icon: "shield", title: "پایداری", text: "اتصال بدون قطعی‌های مکرر، حتی در ساعت‌های شلوغ." },
    { icon: "game", title: "مناسب گیم", text: "پینگ پایین‌تر با کانفیگ‌های Tunnel شده." },
    { icon: "headset", title: "پشتیبانی", text: "پاسخ‌گویی سریع در تلگرام، هر زمان که نیاز داشتی." },
    { icon: "rocket", title: "فعال‌سازی سریع", text: "بعد از پرداخت، اشتراکت در چند دقیقه آماده است." },
  ],
  faq: [
    { q: "تفاوت پلن‌ها چیست؟", a: "پلن اقتصادی برای دانلود و حجم بالا مناسب است. Golden Service برای گیم و پایداری بیشتر ساخته شده است." },
    { q: "Free Config چطور کار می‌کند؟", a: "یک کانفیگ ۲ روزه با حجم نامحدود برای تست سرویس. اگر راضی بودی، یکی از پلن‌ها را بخر." },
    { q: "با چه دستگاه‌هایی کار می‌کند؟", a: "اندروید، آیفون، ویندوز و مک با برنامه‌های V2Ray سازگار است." },
    { q: "اشتراکم چقدر طول می‌کشد فعال شود؟", a: "معمولاً چند دقیقه بعد از پرداخت." },
    { q: "اگر وصل نشدم چه کنم؟", a: "از بخش پشتیبانی در تلگرام پیام بده تا کمکت کنیم." },
  ],
  cta: { title: "آماده‌ای اتصال بهتری داشته باشی؟", button: "شروع کنید" },
  links: { telegram: "https://t.me/alexsupportsell", instagram: "#", youtube: "#" }, // replace "#" with real links
};
