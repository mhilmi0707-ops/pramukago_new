function register(){
 const name=document.getElementById('name').value.trim(), username=document.getElementById('username').value.trim(), password=document.getElementById('password').value, level=document.getElementById('level').value;
 if(!name||!username||!password)return toast('Lengkapi semua data.');
 if(db.users.some(u=>u.username.toLowerCase()===username.toLowerCase()))return toast('Username sudah digunakan.');
 db.users.push({name,username,password,level,xp:0,streak:1,badges:[],completed:[]});
 db.current=username; save(); render(); toast('Akun berhasil dibuat! 🎉');
}
function login(){
 const username=document.getElementById('username').value.trim(),password=document.getElementById('password').value;
 const u=db.users.find(x=>x.username===username&&x.password===password);
 if(!u)return toast('Username atau password salah.');
 db.current=username;save();render();toast('Selamat datang kembali! 👋');
}
function logout(){db.current=null;save();renderAuth('login')}

function renderAuth(mode){
 document.getElementById('root').innerHTML=`
 <div class="auth-wrap"><div class="auth">
  <div class="logo" style="justify-content:center;margin-bottom:20px"><span>⚜</span> PramukaGo</div>
  <h1>${mode==='login'?'Selamat Datang!':'Buat Akun Baru'}</h1>
  <p style="text-align:center;color:#6f7d75">${mode==='login'?'Belajar Pramuka dengan cara yang lebih seru.':'Daftar gratis untuk memulai perjalananmu.'}</p>
  ${mode==='register'?`<div class="field"><label>NAMA LENGKAP</label><input id="name" placeholder="Contoh: Ahmad Pratama"></div>`:''}
  <div class="field"><label>USERNAME</label><input id="username" placeholder="username"></div>
  <div class="field"><label>PASSWORD</label><input id="password" type="password" placeholder="••••••••"></div>
  ${mode === 'register' ? `
    <div class="field">
        <label>GOLONGAN</label>
        <select id="level">
            ${Object.entries(levels).map(([key, level]) => `
                <option value="${key}">
                    ${level.icon} ${level.name}
                </option>
            `).join('')}
        </select>
    </div>
` : ''}
  <button class="primary full" onclick="${mode==='login'?'login()':'register()'}">${mode==='login'?'Masuk':'Daftar Sekarang'}</button>
  <div class="switch">${mode==='login'?'Belum punya akun?':'Sudah punya akun?'} <button onclick="renderAuth('${mode==='login'?'register':'login'}')">${mode==='login'?'Daftar':'Login'}</button></div>
 </div></div>`;
}