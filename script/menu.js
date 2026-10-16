function dashboard(){
 const u=currentUser(), page=document.getElementById('page');
 page.innerHTML=`
 <section class="hero">
  <div><span class="badge" style="background:#d9efd8;color:#27733a">PERJALANAN PRAMUKA DIGITAL</span>
   <h1>Belajar Pramuka.<br><span style="color:var(--green)">Naik Level.</span></h1>
   <p>Selamat datang, <b>${esc(u.name)}</b>! Selesaikan materi, kumpulkan XP, dan tantang temanmu.</p>
   <button class="primary" onclick="openLevel('${u.level}')">Lanjut Belajar →</button>
  </div><div class="hero-icon">⚜️</div>
 </section>
 <div class="stats">
  <div class="stat">⭐ XP<b>${u.xp}</b></div>
  <div class="stat">🔥 Streak<b>${u.streak} hari</b></div>
  <div class="stat">🏅 Badge<b>${u.badges.length}</b></div>
 </div>
 <div class="section-title"><h2>🎮 Game & Challenge</h2><button class="secondary" onclick="showGames()">Lihat Semua</button></div>
 <div class="card"><h3>Quiz Challenge Pramuka</h3><p>Buat kuis sendiri, bagikan kode game, lalu lihat leaderboard siswa secara langsung.</p><button class="primary" onclick="showCreateGame()">Buat Game →</button></div>`;
}
function catatan(){
	 page.innerHTML=`<div class="section-title"><h2>Pilih Perjalananmu</h2><small>3 Golongan</small></div>
 <div class="grid">${Object.entries(levels).map(([k,l])=>`
  <div class="level ${l.color}">
   <div class="big">${l.icon}</div><span class="badge">${l.premium?'PREMIUM':'GRATIS'}</span>
   <h3>${l.name}</h3><p>${l.desc}</p>
   <button onclick="openLevel('${k}')">${l.premium?'🔒 Lihat Premium':'Mulai Belajar'}</button>
  </div>`).join('')}</div>`;
}

function profile(){
 const u=currentUser();
 document.getElementById('page').innerHTML=`
 <div class="section-title"><h2>👤 Profil Saya</h2><button class="secondary" onclick="dashboard()">← Kembali</button></div>
 <div class="card" style="max-width:700px">
  <div style="font-size:60px">🧑‍🚀</div><h2>${esc(u.name)}</h2><p>@${esc(u.username)}</p>
  <p>Golongan: <b>${levels[u.level].icon} ${levels[u.level].name}</b></p>
  <hr style="border:0;border-top:1px solid #e5ece5;margin:20px 0">
  <div class="stats"><div class="stat">⭐ XP<b>${u.xp}</b></div><div class="stat">🔥 Streak<b>${u.streak}</b></div><div class="stat">🏅 Badge<b>${u.badges.length}</b></div></div>
 </div>`;
}

function sejarah(){
 const u=currentUser();
 document.getElementById('page').innerHTML=`
 <div class="section-title"><h2>⚜ Sejarah Pramuka</h2><button class="secondary" onclick="dashboard()">← Kembali</button></div>
 <div class="card">
 <h3>1. Akar Sejarah dan Hubungan dengan Madrasah (1968–1984)</h3>
 <p class="paragraph">Cikal bakal MAN 1 Tulungagung bermula pada tahun 1968 dari alih status Sekolah Persiapan Institut Agama Islam Singo Laksono (SP IAIS Singo Laksono) menjadi SP IAIN. Pada masa-masa awal ini, kegiatan kesiswaan termasuk kepanduan dilakukan dengan keterbatasan fasilitas, bahkan sempat meminjam gedung bekas sekolah CHTH di bawah naungan Kodim 0807 Tulungagung.</p>
 
 <h3>2. Pembentukan Pola Pembinaan Penegak</h3>
 <p class="paragraph">Sebagai satuan Pramuka Penegak (usia SMA/Madrasah Aliyah), Pramuka MAN 1 Tulungagung memisahkan pasukannya ke dalam sistem Ambalan. Fokus utama organisasi ARMANSA adalah mengintegrasikan nilai-nilai Trisatya dan Dasa Darma dengan nilai spiritual keislaman yang menjadi ciri khas madrasah.</p>
 <p class="paragraph">Sejak era 1980-an, pangkalan ini mengadopsi tradisi pengkaderan yang ketat dan sistematis untuk menyaring Dewan Ambalan melalui beberapa program rutin:
 • MOGD (Masa Orientasi Gugus Depan) / OPK: Dulu dikenal sebagai Masa Orientasi Tamu Ambalan, kegiatan ini menjadi gerbang sakral bagi siswa baru kelas X untuk beralih golongan dari Penggalang (MTs/SMP) menjadi Calon Penegak.
• Bazar Penegak Pramuka: Sebuah tradisi tahunan pasca-MOGD yang melatih kemandirian dan jiwa entrepreneurship (kewirausahaan) sosial bagi para anggotanya.</p>
 
 <h3>3. Era Prestasi dan Pengakuan Regional</h3>
 <p class="paragraph">Seiring berjalannya waktu, pembinaan di bawah Majelis Pembimbing Gugus Depan (Kamabigus/Kepala Madrasah) berhasil membawa ARMANSA menjadi salah satu pangkalan penegak yang paling diperhitungkan di wilayah Tulungagung dan Provinsi Jawa Timur.</p>
 <p class="paragraph">Pramuka MAN 1 Tulungagung sering mencetak prestasi gemilang dalam kompetisi regional, seperti memborong belasan piala sekaligus di ajang SATRIA (Sarana Aksi Tegak Putri dan Putra) tingkat provinsi, serta menyabet gelar Juara Umum di berbagai perlombaan kedirgantaraan, pertendaan, PPGD, hingga pionering. Regenerasi kepemimpinan yang konsisten melalui Musyawarah Penegak (Mustegak) tahunan berhasil menjaga kelangsungan Gugus Depan ini hingga usianya yang telah berjalan hampir empat dekade.</p>
 
 </div>`;
}

function tokenCreateGame(){
	const code=prompt('Masukkan token yang didapatkan dari administrator');
	if(code)showCreateGame(code.trim().toUpperCase());
}
function showCreateGame(code){
	const g=(code==='000012');
	if(!g)return toast('Token  tidak sesuai, silahkan menghubung administrator.');
 document.getElementById('page').innerHTML=`
 <div class="section-title">
   <div>
     <h2>➕ Buat Game</h2>
     <p>Buat game yang bisa dibagikan kepada siswa hanya dengan ⭐25</p>
   </div>
   <button class="secondary" onclick="dashboard()">← Kembali</button>
 </div>

 <div class="card">
   <div class="field">
     <label>JUDUL GAME</label>
     <input id="gameTitle" value="Quiz Pramuka">
   </div>

   <div class="field">
     <label>TOPIK</label>
     <select id="gameTopic">
       <option>Dasa Dharma</option>
       <option>Tri Satya</option>
       <option>Tali-Temali</option>
       <option>Semaphore & Morse</option>
       <option>Pengetahuan Umum Pramuka</option>
     </select>
   </div>

   <div class="field">
     <label>JUMLAH SOAL</label>
     <select id="gameCount">
       <option value="1">1</option>
       <option value="5">5</option>
       <option value="10">10</option>
       <option value="15">15</option>
       <option value="20">20</option>
     </select>
   </div>

   <button class="primary" onclick="startCreateQuestions()">
     ✏️ Buat Soal
   </button>
 </div>

 <div id="questionBuilder"></div>

 <div class="section-title">
   <h2>Game yang Dibuat</h2>
 </div>

 <div id="myGames"></div>
 `;

 renderMyGames();
}

function showGames(){
	const u=currentUser();
	const golongan = String(u?.level || u?.u || u || '')
        .trim()
        .toLowerCase();

    const cardSiaga = golongan === 'siaga' ? `
        <div class="card">
            <div style="font-size:40px">🟢</div>
            <h3>SIAGA</h3>
            <p>Siap Mencoba? Ayo Mulai Langkah Pertamamu</p>
            <button class="primary" onclick="startQuiz(1)">Main Sekarang</button>
        </div>` : '';

    const cardPenggalang = golongan === 'penggalang' ? `
        <div class="card">
            <div style="font-size:40px">🔴</div>
            <h3>PENGGALANG</h3>
            <p>Suka Tantangan? Buktikanlah Di Sini</p>
            <button class="primary" onclick="startQuiz(2)">Main Sekarang</button>
        </div>` : '';

    const cardPenegak = golongan === 'penegak' ? `
        <div class="card">
            <div style="font-size:40px">🟡</div>
            <h3>PENEGAK</h3>
            <p>Siap Lanjut? Tunjukkan Aksimu</p>
            <button class="primary" onclick="startQuiz(3)">Main Sekarang</button>
        </div>` : '';
	const golonganID = {
    siaga: 1,
    penggalang: 2,
    penegak: 3
	};

	const golonganNumber = golonganID[golongan] || 0;
	document.getElementById('page').innerHTML=`
	<div class="section-title"><div><h2>🎮 Game Pramuka</h2><p>Belajar sambil bermain dan berkompetisi.</p></div><button class="primary" onclick="showCreateGame()">+ Buat Game</button></div>
	<div class="grid">
	${cardSiaga}
	${cardPenggalang}
	${cardPenegak}
  
  <div class="card"><div style="font-size:40px">🏆</div><h3>Quiz Challenge</h3><p>Masukkan kode game dari guru/pembina.</p><button class="secondary" onclick="joinGame()">Masukkan Kode</button></div>
  <div class="card"><div style="font-size:40px">⚡</div><h3>Speed Challenge</h3><p>Jawab cepat untuk mengumpulkan XP.</p><button class="secondary" onclick="startTimedQuiz(${golonganNumber})">Mulai</button></div>
 </div>
 
 <div class="section-title"><div><h2>🏆 Leaderboard</h2><p>Ayo tingkatkan ranking kamu.</p></div></div>
 <div id="leaderboard"></div>
`;

leaderboard();
}

function showCreatedGame(){
 document.getElementById('page').innerHTML=`
 <div id="questionBuilder"></div>

 <div class="section-title">
   <h2>Game yang Dibuat</h2>
 </div>

 <div id="myGames"></div>
 `;

 renderMyGames();
}

