/* Demo gate only: unlocks Your Trips. No SMS, no backend. */
export const DEMO_OTP = "000000";
export const DEMO_MOBILES = ["8391081502", "000000", "0000000000"];

export function digits(n) {
  return String(n == null ? "" : n).replace(/\D/g, "");
}

export function isDemoOtp(code) {
  return digits(code) === DEMO_OTP;
}

export function isMagicMobile(n, extra) {
  const d = digits(n);
  const allow = DEMO_MOBILES.concat(extra || []).map(digits).filter(Boolean);
  return allow.some(function (m) {
    return d === m || (m && d && (d.endsWith(m) || m.endsWith(d)));
  });
}

export function unlockSession(store, saveSession, mobile) {
  store.session = {
    mobile: digits(mobile) || DEMO_MOBILES[0],
    name: (store.data && store.data.user && store.data.user.name) || "Arnav Bhattacharya",
    at: Date.now()
  };
  saveSession();
}
