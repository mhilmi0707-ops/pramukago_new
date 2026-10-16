let timedQuizMode = 'timed';
let quizWrong = 0;
let timedQuizTimer = null;
const TIMED_QUIZ_LIMIT = 10;
let timedQuizTimeLeft = TIMED_QUIZ_LIMIT;

let timedSelectedQuiz = [];
let timedQuizIndex = 0;
let timedQuizScore = 0;
let timedQuizWrong = 0;
let timedQuizAnswered = false;

function startCreateQuestions(){

 const title = document.getElementById('gameTitle').value || 'Quiz Pramuka';
 const topic = document.getElementById('gameTopic').value;
 const count = Number(document.getElementById('gameCount').value);

 let html = `
 <div class="section-title">
   <div>
     <h2>📝 Buat Soal</h2>
     <p>${esc(title)} • ${esc(topic)} • ${count} soal</p>
   </div>
 </div>
 `;

 for(let i=0; i<count; i++){

   html += `
   <div class="card" style="margin-bottom:15px">

     <h3>Soal ${i+1}</h3>

     <div class="field">
       <label>PERTANYAAN</label>
       <textarea class="field" id="question_${i}" rows="3"
       placeholder="Tulis pertanyaan..."></textarea>
     </div>

     <div class="field">
       <label>PILIHAN A</label>
       <input id="answer_${i}_0" placeholder="Jawaban A">
     </div>

     <div class="field">
       <label>PILIHAN B</label>
       <input id="answer_${i}_1" placeholder="Jawaban B">
     </div>

     <div class="field">
       <label>PILIHAN C</label>
       <input id="answer_${i}_2" placeholder="Jawaban C">
     </div>

     <div class="field">
       <label>PILIHAN D</label>
       <input id="answer_${i}_3" placeholder="Jawaban D">
     </div>

     <div class="field">
       <label>JAWABAN BENAR</label>
       <select id="correct_${i}">
         <option value="0">A</option>
         <option value="1">B</option>
         <option value="2">C</option>
         <option value="3">D</option>
       </select>
     </div>

   </div>
   `;
 }

 html += `
 <button class="primary" onclick="saveCreatedGame()">
   💾 Simpan Game
 </button>
 `;

 document.getElementById('questionBuilder').innerHTML = html;

 window.scrollTo({
   top: document.getElementById('questionBuilder').offsetTop,
   behavior: 'smooth'
 });
}
function saveCreatedGame() {

 const title =
   document.getElementById('gameTitle').value || 'Quiz Pramuka';

 const topic =
   document.getElementById('gameTopic').value;

 const count =
   Number(document.getElementById('gameCount').value);

 const questions = [];

 for(let i = 0; i < count; i++) {

   const question =
     document.getElementById(`question_${i}`).value.trim();

   const answers = [
     document.getElementById(`answer_${i}_0`).value.trim(),
     document.getElementById(`answer_${i}_1`).value.trim(),
     document.getElementById(`answer_${i}_2`).value.trim(),
     document.getElementById(`answer_${i}_3`).value.trim()
   ];

   const correct =
     Number(document.getElementById(`correct_${i}`).value);

   if(!question) {
     toast(`Soal nomor ${i+1} belum diisi!`);
     return;
   }

   if(answers.some(a => !a)) {
     toast(`Pilihan jawaban soal ${i+1} belum lengkap!`);
     return;
   }

   questions.push({
     q: question,
     a: answers,
     c: correct
   });
 }

 // Ambil data pengguna
 const user = currentUser()

 if(!user) {
   toast('Data pengguna tidak ditemukan!');
   return;
 }

 // Sesuaikan "xp" jika nama properti EP di sistem berbeda
 const xp = Number(user.xp || 0);

 if(xp < 25) {
   toast('XP tidak cukup! Membuat game membutuhkan 25 XP.');
   return;
 }

 // Buat kode game
 const code =
   'PRK-' + Math.floor(1000 + Math.random() * 9000);

 const game = {
   code: code,
   title: title,
   topic: topic,
   count: count,
   owner: db.current,
   players: [],
   questions: questions
 };

 // Kurangi EP dan simpan game
 user.xp = xp - 25;
 db.createdGames.push(game);

 save();

 toast('Game berhasil disimpan! 🎮 EP -25');

 renderMyGames();
}
function renderMyGames(){

 const el = document.getElementById('myGames');

 if(!el) return;

 const games =
   db.createdGames.filter(g => g.owner === db.current);

 el.innerHTML = games.length
 ? games.map(g => `
   
   <div class="card" style="margin-bottom:12px">

     <b>${esc(g.title)}</b>

     <small style="display:block;color:#6f7d75">
       ${esc(g.topic)} • ${g.count} soal
     </small>

     <div class="game-code">
       ${g.code}
     </div>

     <button class="secondary"
       onclick="copyCode('${g.code}')">
       📋 Salin Kode
     </button>

     <button class="primary"
       onclick="joinByCode('${g.code}')">
       Lihat Game
     </button>

   </div>

 `).join('')

 : `
   <div class="card empty">
     Belum ada game. Buat game pertamamu!
   </div>
 `;
}

function startQuiz(i) {
    selectedQuiz = [...window.quizBank[i]]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);

    quizIndex = 0;
    quizScore = 0;
    quizWrong = 0;
    quizAnswered = false;

    renderQuiz();
}

function renderQuiz(){
 const q=selectedQuiz[quizIndex];
 document.getElementById('root').insertAdjacentHTML('beforeend',`<div class="modal-bg" id="modal"><div class="modal">
 <div class="modal-top"><b>Quiz ${quizIndex+1}/${selectedQuiz.length}</b><button class="close" onclick="closeModal()">×</button></div>
 <div class="progress"><div style="width:${quizIndex/selectedQuiz.length*100}%"></div></div>
 <div class="question">${q.q}</div><div class="answers">${q.a.map((a,i)=>`<button class="answer" onclick="answerQuiz(${i})">${String.fromCharCode(65+i)}. ${a}</button>`).join('')}</div>
 </div></div>`);
}

function answerQuiz(i) {
    if (quizAnswered) return;
    quizAnswered = true;

    const q = selectedQuiz[quizIndex];
    const buttons = document.querySelectorAll('.answer');

    buttons[q.c].classList.add('correct');

    if (i !== q.c) {
        buttons[i].classList.add('wrong');
        quizWrong++;
    } else {
        quizScore++;
    }

    setTimeout(() => {
        closeModal();
        quizIndex++;
        quizAnswered = false;

        if (quizIndex < selectedQuiz.length) {
            renderQuiz();
        } else {
            finishQuiz();
        }
    }, 700);
}

function finishQuiz() {
    const u = currentUser();

    // XP hanya diberikan jika semua jawaban benar
    const semuaBenar = quizScore === selectedQuiz.length;
    const gain = semuaBenar ? selectedQuiz.length * 10 : 0;

    if (gain > 0) {
        u.xp = (Number(u.xp) || 0) + gain;
        save();
    }

    document.getElementById('root').insertAdjacentHTML(
        'beforeend',
        `<div class="modal-bg" id="modal">
            <div class="modal" style="text-align:center">
                <div style="font-size:70px">
                    ${semuaBenar ? '🏆' : '📝'}
                </div>

                <h2>Quiz Selesai!</h2>

                <h1>${quizScore}/${selectedQuiz.length}</h1>

                <div style="
                    display:flex;
                    justify-content:center;
                    gap:30px;
                    margin:20px 0;
                ">
                    <div>
                        <div style="font-size:28px;color:#22a06b">
                            ${quizScore}
                        </div>
                        <b>Benar</b>
                    </div>

                    <div>
                        <div style="font-size:28px;color:#e5484d">
                            ${quizWrong}
                        </div>
                        <b>Salah</b>
                    </div>
                </div>

                <p>
                    ${semuaBenar
                        ? 'Hebat! Semua jawaban benar.'
                        : 'XP hanya didapat jika semua jawaban benar.'}
                </p>

                <p>
                    XP diperoleh:
                    <b>${gain > 0 ? '+' + gain : '0'} XP</b>
                </p>

                <button class="primary"
                    onclick="closeModal();showGames()">
                    Lanjut
                </button>
            </div>
        </div>`
    );
}

function startTimedQuiz(i) {
	 timedQuizMode = 'timed';
    clearInterval(timedQuizTimer);

    timedSelectedQuiz = [...window.quizBank[i]]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);

    timedQuizIndex = 0;
    timedQuizScore = 0;
    timedQuizWrong = 0;
    timedQuizAnswered = false;

    renderTimedQuiz();
}


// Tampilkan soal dan mulai timer
function renderTimedQuiz() {
    clearInterval(timedQuizTimer);

    const q = timedSelectedQuiz[timedQuizIndex];

    timedQuizTimeLeft = TIMED_QUIZ_LIMIT;
    timedQuizAnswered = false;

    document.getElementById('root').insertAdjacentHTML(
        'beforeend',
        `<div class="modal-bg" id="timedQuizModal">
            <div class="modal">
                <div class="modal-top">
                    <b>Quiz ${timedQuizIndex + 1}/${timedSelectedQuiz.length}</b>
                    <button class="close" onclick="closeTimedQuiz()">×</button>
                </div>

                <div style="margin:12px 0">
                    <div style="display:flex;justify-content:space-between">
                        <span>Waktu tersisa</span>
                        <b id="timedQuizTimerText">${timedQuizTimeLeft} detik</b>
                    </div>

                    <div style="background:#ddd;height:8px;border-radius:8px;overflow:hidden">
                        <div id="timedQuizTimerBar"
                            style="height:100%;width:100%;background:#22a06b;transition:width 1s linear">
                        </div>
                    </div>
                </div>


                <div class="question">${q.q}</div>

                <div class="answers">
                    ${q.a.map((a, index) =>
                        `<button class="answer" onclick="answerTimedQuiz(${index})">
                            ${String.fromCharCode(65 + index)}. ${a}
                        </button>`
                    ).join('')}
                </div>
            </div>
        </div>`
    );

    timedQuizTimer = setInterval(() => {
        timedQuizTimeLeft--;

        const timerText = document.getElementById('timedQuizTimerText');
        const timerBar = document.getElementById('timedQuizTimerBar');

        if (!timerText || !timerBar) {
            clearInterval(timedQuizTimer);
            return;
        }

        timerText.textContent = timedQuizTimeLeft + ' detik';
        timerBar.style.width =
            (timedQuizTimeLeft / TIMED_QUIZ_LIMIT * 100) + '%';

        if (timedQuizTimeLeft <= 5) {
            timerBar.style.background = '#e5484d';
        }

        if (timedQuizTimeLeft <= 0) {
            clearInterval(timedQuizTimer);
            skipTimedQuizQuestion();
        }
    }, 1000);
}


// Jawab timed quiz
function answerTimedQuiz(i) {
    if (timedQuizAnswered) return;
    timedQuizAnswered = true;

    const q = timedSelectedQuiz[timedQuizIndex];
    const buttons = document.querySelectorAll(
        '#timedQuizModal .answer'
    );

    // Tandai jawaban yang benar
    buttons[q.c].classList.add('correct');

    if (i !== q.c) {
        // Jawaban pengguna salah
        buttons[i].classList.add('wrong');
        timedQuizWrong++;
    } else {
        // Jawaban pengguna benar
        timedQuizScore++;

        // Tambahkan XP setiap jawaban benar
        const u = currentUser();
        u.xp = (Number(u.xp) || 0) + 10;
        save();
    }

    // Nonaktifkan semua tombol jawaban
    buttons.forEach(button => {
        button.disabled = true;
    });

    setTimeout(nextTimedQuizQuestion, 700);
}


// Waktu habis
function skipTimedQuizQuestion() {
    if (timedQuizAnswered) return;

    timedQuizAnswered = true;
    timedQuizWrong++;

    nextTimedQuizQuestion();
}


// Pindah ke soal berikutnya
function nextTimedQuizQuestion() {
    clearInterval(timedQuizTimer);

    closeTimedQuizModal();

    timedQuizIndex++;
    timedQuizAnswered = false;

    if (timedQuizIndex < timedSelectedQuiz.length) {
        renderTimedQuiz();
    } else {
        finishTimedQuiz();
    }
}


// Tutup modal soal saja
function closeTimedQuizModal() {
    const modal = document.getElementById('timedQuizModal');
    if (modal) modal.remove();
}


// Tutup kuis secara manual
function closeTimedQuiz() {
    clearInterval(timedQuizTimer);
    closeTimedQuizModal();
}


// Hasil akhir timed quiz
function finishTimedQuiz() {
    const u = currentUser();

    const semuaBenar =
        timedQuizScore === timedSelectedQuiz.length;

    const gain = timedQuizScore * 10;

    if (gain > 0) {
        u.xp = (Number(u.xp) || 0) + gain;
        save();
    }
	 if (timedQuizMode === 'shared') {
        saveTimedGameResult();
    }
	
    document.getElementById('root').insertAdjacentHTML(
        'beforeend',
        `<div class="modal-bg" id="timedQuizResult">
            <div class="modal" style="text-align:center">
                <div style="font-size:70px">
                    ${semuaBenar ? '🏆' : '⏱️'}
                </div>

                <h2>Timed Quiz Selesai!</h2>
                <h1>${timedQuizScore}/${timedSelectedQuiz.length}</h1>

                <div style="display:flex;justify-content:center;gap:30px;margin:20px 0">
                    <div>
                        <div style="font-size:28px;color:#22a06b">
                            ${timedQuizScore}
                        </div>
                        <b>Benar</b>
                    </div>

                    <div>
                        <div style="font-size:28px;color:#e5484d">
                            ${timedQuizWrong}
                        </div>
                        <b>Salah</b>
                    </div>
                </div>

                <p>XP diperoleh: <b>${gain > 0 ? '+' + gain : '0'} XP</b></p>

                <button class="primary"
                    onclick="document.getElementById('timedQuizResult').remove();showGames()">
                    Lanjut
                </button>
            </div>
        </div>`
    );
}

function copyCode(code){navigator.clipboard?.writeText(code);toast('Kode disalin: '+code)}

function joinGame(){
 const code=prompt('Masukkan kode game, contoh PRK-1234:');
 if(code)joinByCode(code.trim().toUpperCase());
}
function joinByCode(code){
 const g=db.createdGames.find(x=>x.code===code);
 if(!g)return toast('Kode game tidak ditemukan.');
 document.getElementById('root').insertAdjacentHTML('beforeend',`<div class="modal-bg" id="modal"><div class="modal">
 <div class="modal-top"><h2>🎮 ${esc(g.title)}</h2><button class="close" onclick="closeModal()">×</button></div>
 <div class="game-code">${g.code}</div><p>Topik: <b>${esc(g.topic)}</b></p><p>Jumlah soal: <b>${g.count}</b></p>
 <div class="field"><label>NAMA PEMAIN</label><input id="playerName" value="${esc(currentUser().name)}"></div>
 <button class="primary" onclick="playSharedGame('${g.code}')">🚀 Mulai Game</button>
 </div></div>`);
}

function playSharedGame(code) {
    const g = db.createdGames.find(
        item => item.code === code
    );

    if (!g) {
        alert('Game tidak ditemukan!');
        return;
    }

    const playerName = document
        .getElementById('playerName')
        ?.value.trim();

    if (!playerName) {
        alert('Masukkan nama pemain terlebih dahulu!');
        return;
    }

    timedQuizMode = 'shared';
    timedResultSaved = false;

    window.currentGameCode = g.code;
    window.currentGamePlayer = playerName;

    timedSelectedQuiz = [...g.questions];
    timedQuizIndex = 0;
    timedQuizScore = 0;
    timedQuizWrong = 0;
    timedQuizAnswered = false;

    closeModal();
    renderTimedQuiz();
}

function saveTimedGameResult() {
    if (timedResultSaved || timedQuizMode !== 'shared') {
        return;
    }

    const game = db.createdGames.find(
        g => g.code === window.currentGameCode
    );

    if (!game) return;

    db.gameResults ??= [];

    db.gameResults.push({
        playerName: window.currentGamePlayer || 'Pemain',
        code: game.code,
        title: game.title,
        topic: game.topic,
        score: timedQuizScore,
        total: timedSelectedQuiz.length,
        date: new Date().toISOString()
    });

    timedResultSaved = true;
    save();
}

function leaderboard() {
    const el = document.getElementById('leaderboard');
    if (!el) return;

    const results = db.gameResults || [];

    if (!results.length) {
        el.innerHTML = `
            <div class="card empty">
                Belum ada hasil permainan.
            </div>
        `;
        return;
    }

    // Kelompokkan berdasarkan kode game
    const groups = {};

    results.forEach(r => {
        if (!groups[r.code]) {
            groups[r.code] = [];
        }
        groups[r.code].push(r);
    });

    // Tampilkan ranking masing-masing game
    el.innerHTML = Object.entries(groups).map(([code, players]) => {
        players.sort((a, b) => b.score - a.score);

        return `
            <div class="card" style="margin-bottom:16px">
                <h3>🏆 ${esc(players[0].title || 'Shared Game')}</h3>
                <small>Kode Game: ${esc(code)}</small>
                <hr>

                ${players.map((r, index) => `
                    <div style="padding:8px 0;border-bottom:1px solid #eee">
                        <b>
                            ${index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : (index + 1) + '.'}
                            ${esc(r.playerName)}
                        </b>
                        <span style="float:right">
                            ${r.score}/${r.total}
                        </span>
                    </div>
                `).join('')}
            </div>
        `;
    }).join('');
}

/* 
function startQuiz(i) {
  selectedQuiz = [...window.quizBank[i]]
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  quizIndex = 0;
  quizScore = 0;
  quizAnswered = false;
  renderQuiz();
}



function answerQuiz(i){
 if(quizAnswered)return;quizAnswered=true;
 const q=selectedQuiz[quizIndex],buttons=document.querySelectorAll('.answer');
 buttons[q.c].classList.add('correct'); if(i!==q.c)buttons[i].classList.add('wrong');else quizScore++;
 setTimeout(()=>{closeModal();quizIndex++;quizAnswered=false;if(quizIndex<selectedQuiz.length)renderQuiz();else finishQuiz()},700);
}

function finishQuiz(){
 const u=currentUser(),gain=quizScore*10;u.xp+=gain;save();
 document.getElementById('root').insertAdjacentHTML('beforeend',`<div class="modal-bg" id="modal"><div class="modal" style="text-align:center">
 <div style="font-size:70px">🏆</div><h2>Quiz Selesai!</h2><h1>${quizScore}/${selectedQuiz.length}</h1><p>Kamu mendapatkan <b>+${gain} XP</b>.</p><button class="primary" onclick="closeModal();showGames()">Lanjut</button>
 </div></div>`);
} */