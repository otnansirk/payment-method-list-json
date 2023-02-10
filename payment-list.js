
import kartuprakerja from './assets/Prakerja.png';
import bca from './assets/Bca.png';
import mandiri from './assets/Mandiri.png';
import bri from './assets/Bri.png';
import bni from './assets/Bni.png';
import permata from './assets/Permata.png';
import cimb from './assets/Cimb.png';
import maybank from './assets/Maybank.png';
import danamon from './assets/Danamon.png';
import mastercard from './assets/Mastercard.png';
import gopay from './assets/Gopay.png';
import linkaja from './assets/Linkaja.png';
import jenius from './assets/Jenius.png';
import kredivo from './assets/Kredivo.png';
import shopeepay from './assets/Shopeepay.png';
import bcaklikpay from './assets/Bcaklikpay.png';
import bcaklikbca from './assets/Bcaklikbca.png';
import epaybri from './assets/Epaybri.png';
import cimbclicks from './assets/Cimbclicks.png';
import danamononline from './assets/Danamononline.png';
import akulaku from './assets/Akulaku.png';
import qris from './assets/Qris.png';
import dana from './assets/Dana.png';


const TYPE = [
    "kartuprakerja",
    "virtualaccount",
    "creditcard",
    "ewallet",
    "cardless",
    "instanpayment"
]

const METHOD = [
    "kartu_prakerja",
    "nicepay_va",
    "midtrans",
    "gopay",
    "linkaja",
    "jenius",
    "kredivo",
    "dana",
]

const DATA = [
    {
        id : "kartuprakerja",
        name : "Kartu Prakerja",
        type : "kartuprakerja",
        method : "kartu_prakerja",
        icon : kartuprakerja,
    },
    {
        id : "bca",
        name : "BCA Virtual Account",
        type : "virtualaccount",
        method : "nicepay_va",
        icon : bca,
        instructions : [
            {
                label : "Transfer via ATM",
                items : [
                    'Pada menu utama, pilih <strong>Transaksi Lainnya</strong>.',
                    'Pilih <strong>Transfer</strong>.',
                    'Pilih <strong>Ke Rek BCA Virtual Account</strong>.',
                    'Masukkan <strong>Nomor Rekening</strong> pembayaran (11 digit) Anda lalu tekan <strong>Benar</strong>.',
                    'Masukkan jumlah tagihan yang akan anda bayar.',
                    'Pada halaman konfirmasi transfer akan muncul detail pembayaran Anda. Jika informasi telah sesuai tekan <strong>Ya</strong>.',
                ]
            },
            {
                label : "Transfer via klikBCA",
                items : [
                    'Pilih menu <strong>Transfer Dana</strong>.',
                    'Pilih <strong>Transfer ke BCA Virtual Account</strong>.',
                    '<strong>Masukkan nomor BCA Virtual Account</strong>, atau <strong>pilih Dari Daftar Transfer</strong>.',
                    'Jumlah yang akan ditransfer, nomor rekening dan nama merchant akan muncul di halaman konfirmasi pembayaran, jika informasi benar klik <strong>Lanjutkan</strong>.',
                    'Ambil <strong>BCA Token</strong> Anda dan masukkan KEYBCA Response <strong>APPLI 1</strong> dan Klik <strong>Submit</strong>.',
                    'Transaksi Anda selesai.',
                ]
            },
            {
                label : "Transfer via Mobile Banking",
                items : [
                    'Lakukan log in pada aplikasi <strong>BCA Mobile</strong>.',
                    'Pilih menu <strong>m-BCA</strong>, kemudian masukkan <strong>kode akses m-BCA</strong>.',
                    'Pilih <strong>m-Transfer > BCA Virtual Account</strong>.',
                    'Pilih dari <strong>Daftar Transfer</strong>, atau masukkan <strong>Nomor Virtual Account</strong> tujuan.',
                    'Masukkan <strong>jumlah yang ingin dibayarkan</strong>.',
                    'Masukkan <strong>pin m-BCA</strong>.',
                    'Pembayaran selesai. Simpan notifikasi yang muncul sebagai bukti pembayaran.'
                ]
            }
        ]
    },
    {
        id : "mandiri",
        name : "Mandiri Virtual Account",
        type : "virtualaccount",
        method : "nicepay_va",
        icon : mandiri,
        instructions : [
            {
                label : "Transfer via ATM",
                items : [
                    'Pada menu utama, pilih <strong>Bayar/Beli</strong>.',
                    'Pilih <strong>Lainnya</strong>.',
                    'Pilih <strong>Multi Payment</strong>.',
                    'Masukkan 70012 (kode perusahaan Midtrans) lalu tekan <strong>Benar</strong>.',
                    'Masukkan <strong>Kode Pembayaran</strong> Anda lalu tekan <strong>Benar</strong>.',
                    'Pada halaman konfirmasi akan muncul detail pembayaran Anda. Jika informasi telah sesuai tekan <strong>Ya</strong>.',
                ]
            },
            {
                label : "Transfer via Internet Banking",
                items : [
                    'Login ke Internet Banking Mandiri <a href="https ://ibank.bankmandiri.co.id/">(https ://ibank.bankmandiri.co.id/)</a>.',
                    'Pada menu utama, pilih <strong>Bayar</strong>, lalu pilih <strong>Multi Payment</strong>.',
                    'Pilih akun Anda di <strong>Dari Rekening</strong>, kemudian di Penyedia Jasa pilih <strong>Midtrans</strong>.',
                    'Masukkan <strong>Kode Pembayaran</strong> Anda dan klik <strong>Lanjutkan</strong>.',
                    'Konfirmasi pembayaran Anda menggunakan Mandiri Token.'
                ]
            }
        ]
    },
    {
        id : "bri",
        name : "BRI Virtual Account",
        type : "virtualaccount",
        method : "nicepay_va",
        icon : bri,
        instructions : [
            {
                label : "Transfer via ATM",
                items : [
                    'Pilih menu utama, pilih <strong>Transaksi Lain</strong>.',
                    'Pilih <strong>Pembayaran</strong>.',
                    'Pilih <strong>Lainnya</strong>.',
                    'Pilih <strong>BRIVA</strong>.',
                    'Masukkan <strong>Nomor BRIVA</strong> pelanggan dan pilih <strong>Benar</strong>.',
                    'Jumlah pembayaran, nomor BRIVA dan nama merchant akan muncul pada halaman konfirmasi pembayaran. Jika informasi yang dicantumkan benar, pilih <strong>Ya</strong>.',
                    'Pembayaran telah selesai. Simpan bukti pembayaran Anda.',
                ]
            },
            {
                label : "Transfer via Internet Banking",
                items : [
                    'Masuk pada <strong>Internet Banking BRI</strong>.',
                    'Pilih menu <strong>Pembayaran & Pembelian</strong>.',
                    'Pilih sub menu <strong>BRIVA</strong>.',
                    'Masukkan <strong>Nomor BRIVA</strong>.',
                    'Jumlah pembayaran, nomor pembayaran, dan nama merchant akan muncul pada halaman konfirmasi pembayaran. Jika informasi yang dicantumkan benar, pilih <strong>Kirim</strong>.',
                    'Masukkan <strong>password</strong> dan <strong>mToken</strong>, pilih <strong>Kirim</strong>.',
                    'Pembayaran telah selesai. Untuk mencetak bukti transaksi, pilih <strong>Cetak</strong>.',
                ]
            },
            {
                label : "Transfer via Mobile Banking",
                items : [
                    'Masuk ke dalam aplikasi <strong>BRI Mobile</strong>, pilih <strong>Mobile Banking BRI</strong>.',
                    'Pilih <strong>Pembayaran</strong>, lalu pilih <strong>BRIVA</strong>.',
                    'Masukkan <strong>nomor BRIVA</strong>.',
                    'Jumlah pembayaran, nomor pembayaran, dan nama merchant akan muncul pada halaman konfirmasi pembayaran. Jika informasi yang dicantumkan benar, pilih <strong>Continue</strong>.',
                    'Masukkan <strong>Mobile Banking BRI PIN</strong>, pilih <strong>Ok.</strong>.',
                    'Pembayaran telah selesai. Simpan notifikasi sebagai bukti pembayaran.',
                ]
            }
        ]
    },
    {
        id : "bni",
        name : "BNI Virtual Account",
        type : "virtualaccount",
        method : "nicepay_va",
        icon : bni,
        instructions : [
            {
                label : "Transfer via ATM",
                items : [
                    'Pada menu utama, pilih <strong>Menu Lainnya</strong>.',
                    'Pilih <strong>Transfer</strong>.',
                    'Pilih <strong>Rekening Tabungan</strong>.',
                    'Pilih <strong>Ke Rekening BNI</strong>.',
                    'Masukkan nomor virtual account dan pilih <strong>Tekan Jika Benar</strong>.',
                    'Masukkan jumlah tagihan yang akan anda bayar secara lengkap. Pembayaran dengan jumlah tidak sesuai akan otomatis ditolak.',
                    'Jumlah yang dibayarkan, nomor rekening dan nama Merchant akan ditampilkan. Jika informasi telah sesuai, tekan <strong>Ya</strong>.',
                    'Transaksi Anda sudah selesai.',
                ]
            },
            {
                label : "Transfer via Internet Banking",
                items : [
                    'Ketik alamat <strong>https ://ibank.bni.co.id</strong> kemudian klik <strong>Masuk</strong>.',
                    'Silakan masukkan <strong>User ID</strong> dan <strong>Password</strong>.',
                    'Klik menu <strong>Transfer</strong> kemudian pilih <strong>Tambah Rekening Favorit</strong>.',
                    'Masukkan nama, nomor rekening, dan email, lalu klik <strong>Lanjut</strong>.',
                    'Masukkan <strong>Kode Otentikasi</strong> dari token Anda dan klik <strong>Lanjut</strong>.',
                    'Kembali ke menu utama dan pilih <strong>Transfer</strong> lalu <strong>Transfer Antar Rekening BNI</strong>.',
                    'Pilih rekening yang telah Anda favoritkan sebelumnya di <strong>Rekening Tujuan</strong> lalu lanjutkan pengisian, dan tekan <strong>Lanjut</strong>.',
                    'Pastikan detail transaksi Anda benar, lalu masukkan <strong>Kode Otentikasi</strong> dan tekan <strong>Lanjut</strong>.',
                    'Transaksi selesai.',
                ]
            },
            {
                label : "Transfer via Mobile Banking",
                items : [
                    'Buka aplikasi BNI Mobile Banking dan login',
                    'Pilih menu Transfer',
                    'Pilih menu Virtual Account Billing',
                    'Pilih rekening debit yang akan digunakan',
                    'Pilih menu Input Baru dan masukkan 16 digit nomor Virtual Account',
                    'Informasi tagihan akan muncul pada halaman validasi',
                    'Jika informasi telah sesuai, masukkan Password Transaksi dan klik Lanjut',
                    'Transaksi Anda akan diproses'
                ]
            }
        ]
    },
    {
        id : "permata",
        name : "Permata Virtual Account",
        type : "virtualaccount",
        method : "nicepay_va",
        icon : permata,
        instructions : [
            {
                label : "Transfer via ATM",
                items : [
                    'Pada menu utama, pilih <strong>Transaksi Lainnya</strong>.',
                    'Pilih <strong>Pembayaran</strong>.',
                    'Pilih <strong>Pembayaran Lainnya</strong>.',
                    'Pilih <strong>Virtual Account</strong>.',
                    'Masukkan 16 digit No. Virtual Account yang dituju, lalu tekan <strong>Benar</strong>.',
                    'Pada halaman konfirmasi transfer akan muncul jumlah yang dibayarkan, nomor rekening, & nama Merchant. Jika informasi telah sesuai tekan <strong>Benar</strong>.',
                    'Pilih rekening pembayaran Anda dan tekan <strong>Benar</strong>.'
                ]
            }
        ]
    },
    {
        id : "cimb",
        name : "CIMB Virtual Account",
        type : "virtualaccount",
        method : "nicepay_va",
        icon : cimb,
        instructions : [
            {
                label : "Transfer via ATM",
                items : [
                    'Pada menu utama, pilih <strong>Transaksi Lainnya</strong>.',
                    'Pilih <strong>Pembayaran</strong>.',
                    'Pilih <strong>Pembayaran Lainnya</strong>.',
                    'Pilih <strong>Virtual Account</strong>.',
                    'Masukkan 16 digit No. Virtual Account yang dituju, lalu tekan <strong>Benar</strong>.',
                    'Pada halaman konfirmasi transfer akan muncul jumlah yang dibayarkan, nomor rekening, & nama Merchant. Jika informasi telah sesuai tekan <strong>Benar</strong>.',
                    'Pilih rekening pembayaran Anda dan tekan <strong>Benar</strong>.'
                ]
            }
        ]
    },
    {
        id : "maybank",
        name : "MayBank Virtual Account",
        type : "virtualaccount",
        method : "nicepay_va",
        icon : maybank,
        instructions : [
            {
                label : "Transfer via ATM",
                items : [
                    'Pada menu utama, pilih <strong>Transaksi Lainnya</strong>.',
                    'Pilih <strong>Pembayaran</strong>.',
                    'Pilih <strong>Pembayaran Lainnya</strong>.',
                    'Pilih <strong>Virtual Account</strong>.',
                    'Masukkan 16 digit No. Virtual Account yang dituju, lalu tekan <strong>Benar</strong>.',
                    'Pada halaman konfirmasi transfer akan muncul jumlah yang dibayarkan, nomor rekening, & nama Merchant. Jika informasi telah sesuai tekan <strong>Benar</strong>.',
                    'Pilih rekening pembayaran Anda dan tekan <strong>Benar</strong>.'
                ]
            }
        ]
    },
    {
        id : "danamon",
        name : "Danamon Virtual Account",
        type : "virtualaccount",
        method : "nicepay_va",
        icon : danamon,
        instructions : [
            {
                label : "Transfer via ATM",
                items : [
                    'Pada menu utama, pilih <strong>Transaksi Lainnya</strong>.',
                    'Pilih <strong>Pembayaran</strong>.',
                    'Pilih <strong>Pembayaran Lainnya</strong>.',
                    'Pilih <strong>Virtual Account</strong>.',
                    'Masukkan 16 digit No. Virtual Account yang dituju, lalu tekan <strong>Benar</strong>.',
                    'Pada halaman konfirmasi transfer akan muncul jumlah yang dibayarkan, nomor rekening, & nama Merchant. Jika informasi telah sesuai tekan <strong>Benar</strong>.',
                    'Pilih rekening pembayaran Anda dan tekan <strong>Benar</strong>.'
                ]
            }
        ]
    },
    {
        id : "cc",
        name : "Kartu Kredit",
        type : "creditcard",
        method : "credit_card",
        icon : mastercard,
        instructions : [
            {
                label : "Bayar via Kartu Kredit",
                items : [
                    'Masukkan nomor kartu kredit.',
                    'Pastikan nomor benar.',
                    'Klik bayar.'
                ]
            }
        ]
    },
    {
        id : "gopay",
        name : "GoPay",
        type : "ewallet",
        method : "gopay",
        icon : gopay,
        instructions : [
            {
                label: "Bayar via Gopay",
                items: [
                    "Buka aplikasi Gojek.",
                    "Pada menu Gojek klik Bayar.",
                    "Pilih Pakai qrcode.",
                    "Scan qrcode yang terlihat di layar.",
                    "Klik bayar.",
                    "Kamu akan mendapatkan notifikasi bahwa pembayaran telah berhasil.",
                ]
            }
        ]
    },
    {
        id : "linkaja",
        name : "LinkAJA",
        type : "ewallet",
        method : "linkaja",
        icon : linkaja,
        instructions : [
            {
                label: "Bayar via Linkaja",
                items: [
                    "Buka aplikasi Linkaja.",
                    "Pada menu Linkaja klik Bayar.",
                    "Pilih Pakai qrcode.",
                    "Scan qrcode yang terlihat di layar.",
                    "Klik bayar.",
                    "Kamu akan mendapatkan notifikasi bahwa pembayaran telah berhasil.",
                ]
            }
        ]
    },
    {
        id : "jenius",
        name : "Jenius Pay",
        type : "ewallet",
        method : "jenius",
        icon : jenius,
        instructions : [
            {
                label: "Bayar via Jenius",
                items: [
                    "Buka aplikasi Jenius.",
                    "Pada menu Jenius klik Bayar.",
                    "Pilih Pakai qrcode.",
                    "Scan qrcode yang terlihat di layar.",
                    "Klik bayar.",
                    "Kamu akan mendapatkan notifikasi bahwa pembayaran telah berhasil.",
                ]
            }
        ]
    },
    {
        id : "kredivo",
        name : "Kredivo",
        type : "ewallet",
        method : "kredivo",
        icon : kredivo,
        instructions : [
            {
                label: "Bayar via Kredivo",
                items: [
                    "Buka aplikasi Kredivo.",
                    "Pada menu Kredivo klik Bayar.",
                    "Pilih Pakai qrcode.",
                    "Scan qrcode yang terlihat di layar.",
                    "Klik bayar.",
                    "Kamu akan mendapatkan notifikasi bahwa pembayaran telah berhasil.",
                ]
            }
        ]
    },
    {
        id : "shopeepay",
        name : "Shopeepay",
        type : "ewallet",
        method : "shopeepay",
        icon : shopeepay,
        instructions : [
            {
                label: "Bayar via Shopeepay",
                items: [
                    "Buka aplikasi Shopee.",
                    "Pada menu Shopee klik Bayar.",
                    "Pilih Pakai qrcode.",
                    "Scan qrcode yang terlihat di layar.",
                    "Klik bayar.",
                    "Kamu akan mendapatkan notifikasi bahwa pembayaran telah berhasil.",
                ]
            }
        ]
    },
    {
        id : "dana",
        name : "Dana",
        type : "ewallet",
        method : "dana",
        icon : dana,
        instructions : [
            {
                label: "Bayar via Dana",
                items: [
                    "Setelah melakukan chackout pembelian dengan menggunakan pembayaran via <strong>DANA</strong>.",
                    "Selanjutnya kamu akan diarahkan ke laman konfirmasi nominal transaksi dengan <strong>DANA</strong>.",
                    "Cek kembali nominal transaksi kamu, lalu jenis untuk membayar.",
                    "Klik <strong>Bayar</strong> lalu masukkan <strong>PIN DANA</strong> kamu.",
                    'Transaksi Anda sudah selesai.',
                ]
            }
        ]
    },
    {
        id : "bcaklikpay",
        name : "BCA Klikpay",
        type : "instanpayment",
        method : "bca_klikpay",
        icon : bcaklikpay,
        instructions : [
            {
                label : "Transfer via BCA Klikpay",
                items : [
                    'Pergi ke laman BCA KlikPay. Silakan selesaikan pembayaran melalui BCA KlikPay dalam waktu 1 jam untuk menghindari pembatalan transaksi secara otomatis.\n Login menggunakan account kamu di halaman BCA KlikPay. Setelah kamu berhasil login, detail transaksi akan muncul secara otomatis.',
                    'Periksa kembali detail transaksi kamu, pilih pembayaran KlikBCA atau BCA Kartu Kredit, bila semuanya telah sesuai klik <strong>Kirim</strong>',
                    'Periksa kembali detail transaksi kamu sekali lagi, bila semuanya telah sesuai klik KIRIM OTP (One Time Password)',
                    'Melalui SMS ke nomor handphone kamu, BCA KlikPay akan mengirimkan kode OTP (One Time Password) dan segera masukkan kode OTP (One Time Password) tersebut pada website BCA KlikPay.',
                    'Transaksi Anda sudah selesai.',
                ]
            }
        ]
    },
    {
        id : "bcaklikbca",
        name : "Klik BCA",
        type : "instanpayment",
        method : "bca_klikbca",
        icon : bcaklikbca,
        instructions : [
            {
                label : "Transfer via Klik BCA",
                items : [
                    'Pergi ke laman Klik BCA. Silakan login menggunakan User ID dan PIN KlikBCA kamu.',
                    'Pilih Pembayaran <strong>e-Commerce</strong> pada menu utama Klik BCA.', 
                    'Pilih <strong>Kategori</strong> dan pilihan <strong>Nama Perusahaan</strong>.',
                    'Pilih nomor rekening BCA kamu, lalu klik <strong>Lanjutkan</strong>.',
                    'Beri tanda centang pada transaksi yang ingin kamu bayar, lalu klik “Lanjutkan”',
                    'Masukkan respon keybca appli 1 dan Klik <strong>Kirim</strong>.',
                    'Transaksi Anda sudah selesai.',
                ]
            }
        ]
    },
    {
        id : "epaybri",
        name : "ePay BRI",
        type : "instanpayment",
        method : "bri_epay",
        icon : epaybri,
        instructions : [
            {
                label : "Transfer via BRI E-Pay",
                items : [
                    'Pergi ke laman BRI E-Pay. Login ke akun BRI E-Pay dengan memasukkan User ID dan Password, lalu klik tombol <strong>Submit</strong>.',
                    'Pastikan nomor <strong>rekening BRI</strong> yang ingin kamu gunakan sudah benar.',
                    'Masukkan kembali password akun BRI E-Paymu pada kolom yang tersedia.',
                    'Masukkan <strong>Paycode</strong> yang dikirimkan ke nomor handphone.',
                    'Cek kembali <strong>Jumlah Pembayaran</strong> dan pastikan nama penerima sudah benar.',
                    'Klik <strong>Confirm</strong> untuk melanjutkan.',
                    'Transaksi Anda sudah selesai.',
                ]
            }
        ]
    },
    {
        id : "cimbclicks",
        name : "CIMB Clicks",
        type : "instanpayment",
        method : "cimb_clicks",
        icon : cimbclicks,
        instructions : [
            {
                label : "Transfer via CIMB Clicks",
                items : [
                    'Pergi ke laman CIMB clicks dan silakan login.',
                    'Pilih menu <strong>Bayar Tagihan / Pay Bills</strong>.', 
                    'Pilih <strong>Rekening Sumber / Source Account</strong> dan Jenis Pembayaran / Payment Type > Virtual Account.',
                    'Masukkan <strong>Nomor Virtual Account</strong>.',
                    'Masukkan 6 digit mPIN dan tekan tombol <strong>Submit</strong>.',
                    'Lakukan konfirmasi pembayaran.',
                    'Transaksi Anda sudah selesai.',
                ]
            }
        ]
    },
    {
        id : "danamononline",
        name : "Danamon Online",
        type : "instanpayment",
        method : "danamon_online",
        icon : danamononline,
        instructions : [
            {
                label : "Transfer via Danamon Online Banking",
                items : [
                    'Masukkan User ID dan Password Danamon Online Banking Anda', 
                    'Pilih sumber rekening untuk pembayaran Anda.',
                    'Cek rincian informasi transaksi Anda.', 
                    'Masukkan <strong>One Time Pasword (OTP)</strong> yang anda terima melalui SMS, lalu tekan <strong>Lanjut</strong>',
                    'Lakukan konfirmasi pembayaran.',
                    'Transaksi Anda sudah selesai.',
                ]
            }
        ]
    },
    {
        id : "akulaku",
        name : "Akulaku",
        type : "cardless",
        method : "akulaku",
        icon : akulaku,
        instructions : [
            {
                label : "Transfer via Akulaku",
                items : [
                    'Pembeli akan diarahkan ke halaman <strong>Pusat Pembayaran Akulaku</strong>, Pilih tenor cicilan yang diinginkan, lalu <strong>Login</strong> ke akun Akulaku milik pembeli dengan memasukkan nomor handphone dan password.', 
                    'Masukkan <strong>kode verifikasi (OTP)</strong> yang telah dikirimkan ke nomor handphone pembeli, lalu klik tombol <strong>Selanjutnya</strong>.',
                    'Transaksi Anda sudah selesai.',
                ]
            }
        ]
    },
    {
        id : "qris",
        name : "Qris",
        type : "cardless",
        method : "qris",
        icon : qris,
        instructions : [
            {
                label: "Bayar via Qris",
                items: [
                    "Buka aplikasi Ewallet.",
                    "Pada menu Ewallet klik Bayar.",
                    "Pilih Pakai qrcode.",
                    "Scan qrcode yang terlihat di layar.",
                    "Klik bayar.",
                    "Kamu akan mendapatkan notifikasi bahwa pembayaran telah berhasil.",
                ]
            }
        ]
    },

]