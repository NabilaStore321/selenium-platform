
// Menginisialisasi Supabase
const SUPABASE_URL = 'https://vgchzuqtrmohyzojvngw.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZnY2h6dXF0cm1vaHl6b2p2bmd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyNzE1NzAsImV4cCI6MjA2Njg0NzU3MH0.WKcSXto5EXcS1fdScAKf6atW7tcXM9AB9jObapii_2g';

const supabase = Supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Fungsi untuk menangani login
async function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');

    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        loginMessage.textContent = error.message;
        console.error('Login error:', error.message);
    } else {
        loginMessage.textContent = 'Login berhasil! Mengarahkan ke halaman profil...';
        console.log('User logged in:', data.user);
        // Simpan sesi atau token jika diperlukan, lalu arahkan ke halaman profil
        window.location.href = 'profile.html';
    }
}

// Fungsi untuk mengecek status otentikasi dan menampilkan info pengguna
async function checkAuthAndLoadProfile() {
    const { data: { user } } = await supabase.auth.getUser();

    if (user) {
        if (document.getElementById('userName')) {
            document.getElementById('userName').textContent = user.user_metadata.full_name || user.email;
        }
        if (document.getElementById('userEmail')) {
            document.getElementById('userEmail').textContent = user.email;
        }
        console.log('User is authenticated:', user);
    } else {
        console.log('User is not authenticated.');
        // Jika di halaman profil dan tidak login, arahkan ke halaman login
        if (window.location.pathname.includes('profile.html')) {
            window.location.href = 'login.html';
        }
    }
}

// Fungsi untuk logout
async function handleLogout() {
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.error('Logout error:', error.message);
    } else {
        console.log('User logged out.');
        window.location.href = 'login.html'; // Arahkan kembali ke halaman login setelah logout
    }
}

// Tambahkan event listener saat DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    // Untuk halaman login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Untuk halaman profil
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', handleLogout);
    }

    // Cek otentikasi di setiap halaman yang membutuhkan
    if (window.location.pathname.includes('profile.html')) {
        checkAuthAndLoadProfile();
    }
})
