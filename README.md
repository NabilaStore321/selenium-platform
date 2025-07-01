# Selenium Platform

Proyek ini adalah contoh aplikasi web sederhana dengan tiga halaman: Beranda, Login, dan Profil, yang terhubung dengan Supabase untuk otentikasi pengguna dan menampilkan aset dari Supabase Storage.

## Fitur

- **Beranda:** Halaman utama untuk memperkenalkan platform.
- **Login:** Halaman untuk pengguna melakukan login menggunakan kredensial Supabase.
- **Profil:** Halaman yang menampilkan informasi pengguna yang telah login (membutuhkan otentikasi).
- Menampilkan gambar dari Supabase Storage Bucket.

## Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript
- Supabase (untuk Backend as a Service)

## Cara Menggunakan

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/your-username/your-project-name.git](https://github.com/your-username/your-project-name.git)
    cd your-project-name
    ```

2.  **Buka file HTML di browser:**
    Anda bisa langsung membuka file `public/index.html`, `public/login.html`, atau `public/profile.html` di browser Anda.

3.  **Deploy ke GitHub Pages:**
    Untuk membuat proyek ini dapat diakses publik, Anda bisa mendeploy-nya menggunakan GitHub Pages. Pastikan folder `public` adalah *root* dari *deployment* Anda.

    * Masuk ke Settings > Pages di repositori GitHub Anda.
    * Pilih branch `main` (atau `gh-pages` jika Anda menggunakannya) dan pilih folder `/public`.
    * Simpan perubahan.

## Konfigurasi Supabase

URL Supabase dan Anon Key sudah ditanamkan langsung di `public/js/main.js` untuk kemudahan deployment.

-   **URL Supabase:** `https://vgchzuqtrmohyzojvngw.supabase.co`
-   **Anon Key Supabase:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnY2h6dXF0cm1vaHl6b2j2bmd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyNzE1NzAsImV4cCI6MjA2Njg0NzU3MH0.WKcSXto5EXcS1fdScAKf6atW7tcXM9AB9jObapii_2g`￼Enter
