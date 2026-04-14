/**
 * Konfigurasi aplikasi
 */
export const config = {
  // URL dasar aplikasi
  baseUrl: 'https://www.saucedemo.com/',
  
  // Domain untuk cookie
  cookieDomain: 'saucedemo.com',
  
  // Konfigurasi autentikasi
  auth: {
    // Nama cookie untuk token autentikasi
    tokenCookieName: 'access-token',
    
    // Pola URL untuk menangkap respons yang berisi token
    tokenResponseUrlPattern: /\/api\/auth\/login|register/,
  },
  
  // Timeout dalam milidetik
  timeouts: {
    // Timeout untuk navigasi halaman
    navigation: 30000,
    
    // Timeout untuk tindakan
    action: 10000,
    
    // Timeout untuk assertion
    assertion: 5000,
  },
};