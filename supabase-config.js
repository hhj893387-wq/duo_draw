const SUPABASE_URL = "https://zhpxojimjyfheccdwucd.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpocHhvamltanlmaGVjY2R3dWNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4Nzc3OTQsImV4cCI6MjEwMDQ1Mzc5NH0.zsgB8YRnQnyEc4Tngpn5rQFqiphX3B6juQ_pwik1J1s";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showBanner(bannerEl, message, type) {
  bannerEl.textContent = message;
  bannerEl.className = `banner show ${type}`;
}

function setLoading(btn, isLoading, defaultText, loadingText) {
  btn.disabled = isLoading;
  btn.textContent = isLoading ? loadingText : defaultText;
}