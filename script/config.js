// ==========================================
// 1. QUIZ SIAGA
// ==========================================
const quizBank1 = [
  {
    q: 'Apa kepanjangan dari Pramuka?',
    a: ['Praja Muda Karana', 'Pemuda Rakyat Mandiri', 'Praktik Muda Berkarya', 'Praja Muda Karya'],
    c: 0
  },
  {
    q: 'Berapa jumlah Dwi Darma Pramuka Siaga?',
    a: ['1', '2', '5', '10'],
    c: 1
  },
  {
    q: 'Apa warna dasar lambang Gerakan Pramuka?',
    a: ['Merah', 'Biru', 'Cokelat', 'Hijau'],
    c: 2
  },
  {
    q: 'Alat untuk menentukan arah mata angin adalah...',
    a: ['Kompas', 'Peluit', 'Tali', 'Tongkat'],
    c: 0
  },
  {
    q: 'Apa nama lambang Gerakan Pramuka?',
    a: ['Bunga Melati', 'Tunas Kelapa', 'Pohon Beringin', 'Bunga Mawar'],
    c: 1
  },
  {
    q: 'Berapa jumlah Dasa Darma Pramuka?',
    a: ['5', '8', '10', '12'],
    c: 2
  },
  {
    q: 'Siapa yang harus kita hormati di sekolah?',
    a: ['Hanya teman dekat', 'Guru dan orang lain', 'Hanya ketua kelas', 'Tidak perlu siapa pun'],
    c: 1
  },
  {
    q: 'Apa yang dilakukan sebelum menyeberang jalan?',
    a: ['Langsung berlari', 'Bermain dahulu', 'Melihat kanan dan kiri', 'Menutup mata'],
    c: 2
  },
  {
    q: 'Apa yang sebaiknya dilakukan jika teman terjatuh?',
    a: ['Menertawakan', 'Membiarkan', 'Membantu sesuai kemampuan', 'Meninggalkannya'],
    c: 2
  },
  {
    q: 'Apa nama kelompok kecil dalam Pramuka Siaga?',
    a: ['Barung', 'Regu', 'Sangga', 'Racana'],
    c: 0
  },
  {
    q: 'Warna seragam Pramuka Indonesia adalah...',
    a: ['Merah putih', 'Cokelat muda dan cokelat tua', 'Biru putih', 'Hijau kuning'],
    c: 1
  },
  {
    q: 'Sikap yang baik saat mengikuti upacara adalah...',
    a: ['Bercanda', 'Berbicara sendiri', 'Tertib dan khidmat', 'Bermain'],
    c: 2
  },
  {
    q: 'Apa yang harus dilakukan terhadap sampah?',
    a: ['Dibuang ke sungai', 'Dibiarkan di jalan', 'Dibuang pada tempatnya', 'Disembunyikan'],
    c: 2
  },
  {
    q: 'Sandi yang menggunakan titik dan garis disebut...',
    a: ['Semaphore', 'Morse', 'Kotak', 'Angka'],
    c: 1
  },
  {
    q: 'Hari Pramuka diperingati setiap tanggal...',
    a: ['17 Agustus', '14 Agustus', '2 Mei', '10 November'],
    c: 1
  }
];


// ==========================================
// 2. QUIZ PENGGALANG
// ==========================================
const quizBank2 = [
  {
    q: 'Apa kepanjangan dari Pramuka?',
    a: ['Praja Muda Karana', 'Pemuda Rakyat Mandiri', 'Praktik Muda Berkarya', 'Praja Muda Karya'],
    c: 0
  },
  {
    q: 'Berapa jumlah Dasa Darma Pramuka?',
    a: ['5', '8', '10', '12'],
    c: 2
  },
  {
    q: 'Sandi yang menggunakan titik dan garis disebut...',
    a: ['Semaphore', 'Morse', 'Kotak', 'Angka'],
    c: 1
  },
  {
    q: 'Apa nama kelompok kecil dalam Pramuka Penggalang?',
    a: ['Barung', 'Regu', 'Sangga', 'Racana'],
    c: 1
  },
  {
    q: 'Apa alat yang digunakan untuk membuat simpul dan ikatan?',
    a: ['Kompas', 'Peluit', 'Tali', 'Bendera'],
    c: 2
  },
  {
    q: 'Apa kepanjangan dari P3K?',
    a: ['Pertolongan Pertama Pada Kecelakaan', 'Persatuan Pemuda Peduli Kesehatan', 'Perawatan Pribadi dan Kesehatan', 'Pertolongan Pasien Pada Klinik'],
    c: 0
  },
  {
    q: 'Apa yang harus dilakukan saat menemukan teman terluka?',
    a: ['Langsung memindahkannya tanpa memeriksa', 'Memberi pertolongan sesuai kemampuan dan meminta bantuan', 'Meninggalkannya', 'Memberinya makanan'],
    c: 1
  },
  {
    q: 'Apa nama aba-aba untuk memulai gerakan dalam baris-berbaris?',
    a: ['Istirahat di tempat', 'Bubar jalan', 'Mulai', 'Laksanakan'],
    c: 3
  },
  {
    q: 'Semaphore menggunakan alat utama berupa...',
    a: ['Dua bendera', 'Kompas', 'Peluit', 'Tongkat panjang'],
    c: 0
  },
  {
    q: 'Apa tujuan utama kegiatan berkemah?',
    a: ['Hanya bermain', 'Melatih kemandirian dan kerja sama', 'Menghindari tugas', 'Berlomba makan'],
    c: 1
  },
  {
    q: 'Apa yang dimaksud dengan regu dalam Pramuka Penggalang?',
    a: ['Kelompok peserta didik', 'Tempat menyimpan peralatan', 'Nama upacara', 'Jenis sandi'],
    c: 0
  },
  {
    q: 'Jika tersesat saat penjelajahan, tindakan yang tepat adalah...',
    a: ['Berjalan semakin jauh tanpa arah', 'Memisahkan diri dari kelompok', 'Tetap tenang dan mengikuti prosedur keselamatan', 'Membuang perlengkapan'],
    c: 2
  },
  {
    q: 'Apa arti dari Dasa Darma yang pertama?',
    a: ['Cinta alam dan kasih sayang sesama manusia', 'Takwa kepada Tuhan Yang Maha Esa', 'Patuh dan suka bermusyawarah', 'Rajin, terampil, dan gembira'],
    c: 1
  },
  {
    q: 'Apa fungsi utama kompas dalam penjelajahan?',
    a: ['Mengukur suhu', 'Menentukan arah', 'Mengukur berat', 'Mengirim pesan'],
    c: 1
  },
  {
    q: 'Siapa yang memimpin regu Penggalang?',
    a: ['Pratama', 'Pembina Siaga', 'Pemimpin Sangga', 'Ketua Racana'],
    c: 0
  }
];


// ==========================================
// 3. QUIZ PENEGAK
// ==========================================
const quizBank3 = [
  {
    q: 'Apa kepanjangan dari Pramuka?',
    a: ['Praja Muda Karana', 'Pemuda Rakyat Mandiri', 'Praktik Muda Berkarya', 'Praja Muda Karya'],
    c: 0
  },
  {
    q: 'Berapa jumlah Dasa Darma Pramuka?',
    a: ['5', '8', '10', '12'],
    c: 2
  },
  {
    q: 'Apa nama kelompok kecil dalam Pramuka Penegak?',
    a: ['Barung', 'Regu', 'Sangga', 'Racana'],
    c: 2
  },
  {
    q: 'Apa nama satuan organisasi Pramuka Penegak dan Pandega di tingkat kwartir?',
    a: ['Dewan Kerja', 'Dewan Guru', 'Dewan Regu', 'Dewan Barung'],
    c: 0
  },
  {
    q: 'Apa tujuan utama musyawarah dalam organisasi Pramuka?',
    a: ['Memaksakan pendapat', 'Mencari keputusan bersama', 'Menentukan pemenang debat', 'Menghindari tanggung jawab'],
    c: 1
  },
  {
    q: 'Apa yang dimaksud dengan Tri Satya?',
    a: ['Tiga alat kepramukaan', 'Janji Pramuka', 'Tiga jenis sandi', 'Tiga tingkatan kecakapan'],
    c: 1
  },
  {
    q: 'Salah satu prinsip kepemimpinan yang baik adalah...',
    a: ['Selalu menyalahkan anggota', 'Mengambil keputusan tanpa pertimbangan', 'Memberi teladan dan bertanggung jawab', 'Mengutamakan kepentingan pribadi'],
    c: 2
  },
  {
    q: 'Apa tujuan utama kegiatan bakti masyarakat?',
    a: ['Mencari popularitas', 'Membantu masyarakat dan lingkungan', 'Menghindari kegiatan rutin', 'Mengumpulkan hadiah'],
    c: 1
  },
  {
    q: 'Dalam sandi Morse, bagaimana huruf SOS ditulis?',
    a: ['--- ... ---', '... --- ...', '.- .- .-', '... ... ---'],
    c: 1
  },
  {
    q: 'Apa fungsi analisis risiko dalam kegiatan perkemahan?',
    a: ['Menambah jumlah perlengkapan', 'Mengidentifikasi bahaya dan menentukan pencegahan', 'Mengurangi jumlah peserta', 'Menghindari pembagian tugas'],
    c: 1
  },
  {
    q: 'Apa yang dimaksud dengan pioneering dalam kepramukaan?',
    a: ['Teknik membuat bangunan sederhana dari tongkat dan tali', 'Teknik membaca peta digital saja', 'Teknik memasak modern', 'Teknik membuat sandi angka'],
    c: 0
  },
  {
    q: 'Apa tindakan yang tepat jika terjadi keadaan darurat saat kegiatan lapangan?',
    a: ['Tetap melanjutkan kegiatan', 'Menyebarkan kabar yang belum pasti', 'Mengamankan peserta dan menghubungi bantuan', 'Membiarkan peserta menangani sendiri'],
    c: 2
  },
  {
    q: 'Apa arti prinsip sukarela dalam Gerakan Pramuka?',
    a: ['Mengikuti kegiatan karena terpaksa', 'Bergabung dan berpartisipasi atas kemauan sendiri', 'Mengikuti semua pendapat pemimpin', 'Bekerja hanya jika mendapat hadiah'],
    c: 1
  },
  {
    q: 'Apa tujuan evaluasi setelah kegiatan Pramuka?',
    a: ['Mencari orang untuk disalahkan', 'Menilai keberhasilan dan memperbaiki kekurangan', 'Mengulang kegiatan tanpa perubahan', 'Mengurangi komunikasi anggota'],
    c: 1
  },
  {
    q: 'Apa peran utama Pramuka Penegak dalam kehidupan masyarakat?',
    a: ['Menunggu arahan untuk semua hal', 'Menghindari masalah sosial', 'Menjadi teladan dan berkontribusi secara positif', 'Mengutamakan kepentingan kelompok sendiri'],
    c: 2
  }
];


// ==========================================
// BANK SOAL BERDASARKAN GOLONGAN
// ==========================================
window.quizBank = {
  1: quizBank1, // Siaga
  2: quizBank2, // Penggalang
  3: quizBank3  // Penegak
};

console.log('config.js berhasil:', window.quizBank);

const KEY='pramukago_demo_v1';
const defaultState={users:[],current:null,xp:0,streak:1,completed:[],createdGames:[]};
let db=JSON.parse(localStorage.getItem(KEY)||JSON.stringify(defaultState));
let selectedQuiz=null, quizIndex=0, quizScore=0, quizAnswered=false;

const levels={
 siaga:{name:'Siaga',icon:'🟩',color:'green',premium:false,desc:'Masih Baru?Coba Siaga Aja Dulu.'},
 penggalang:{name:'Penggalang',icon:'🟥',color:'red',premium:false,desc:'Sudah Tau?Ayo Lanjut Coba Yang Lebih Seru.'},
 penegak:{name:'Penegak',icon:'🟨',color:'yellow',premium:false,desc:'Masih Mampu?Asah Strategi dan Tunjukan Asksimu'},
};
const lessons={
 siaga:[
  ['🧭','Mengenal Pramuka','Tentang Seputar Pramuka Siaga','Tantangan'],
  ['📜','Dwi Satya & Dwi Darma','Mengenal janji Pramuka Siaga',''],
  ['🌟','Pengetahuan Dasar Kepramukaan Siaga','Nilai-nilai karakter dalam Pramuka',''],
  ['⛺','Perlengkapan','Mengenal perlengkapan dasar kegiatan',''],
 ],
 penggalang:[
  ['📜','Tri Satya & Dasa Darma','Memahami makna dan penerapannya','......'],
  ['🪢','Tali-Temali','Simpul dan ikatan dasar'],
  ['🧭','Navigasi Darat','Arah mata angin dan kompas'],
  ['🔤','Sandi Pramuka','Morse, semaphore dan sandi'],
 ],
 penegak:[
  ['🏕️','Manajemen Perkemahan','Merancang kegiatan perkemahan'],
  ['🗺️','Navigasi Lanjutan','Peta, kompas dan orientasi medan'],
  ['🩹','P3K Dasar','Penanganan awal dalam kegiatan'],
  ['🏆','Leadership Challenge','Kepemimpinan dan kerja tim'],
 
 ]
};