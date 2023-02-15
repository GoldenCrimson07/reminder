// add a class to the heart elements on hover
const hearts = document.querySelectorAll('.heart');
const desc = document.querySelector('.description');


hearts.forEach(heart => {
  heart.addEventListener('mouseenter', () => {
    heart.classList.add('pulse-hover');
    
  });
  heart.addEventListener('mouseleave', () => {
    heart.classList.remove('pulse-hover');
    

  });
  heart.addEventListener('click', () => {
    window.location.href = 'detail.html';
  });
});

const title = document.querySelector('.title');




const hours = new Date().getHours();
console.log(hours);
if(hours<=5){
  title.innerHTML = 'Good Morning Laulauu'
  desc.innerHTML ='Kok masih belum tidur?, Jangan Bergadang Ya <img src="https://em-content.zobj.net/source/microsoft-teams/337/face-blowing-a-kiss_1f618.png" srcset="https://em-content.zobj.net/source/microsoft-teams/337/face-blowing-a-kiss_1f618.png 2x" alt="Face Blowing a Kiss on Microsoft Teams 1.0" width="160" height="160"><br>Kalau memang masih bisa dilanjutin besok, Lanjutin besok aja lau'
}else if(hours>5 && hours<=11){
  title.innerHTML = 'Good Morning Laulauu'
  desc.innerHTML = 'Semangat Hari Ini Ya<br>Walaupun aku gak ada di Bandung, jangan lupa makan sama minum yang teratur ya<br><img class="lazypreload lazyloaded" src="https://em-content.zobj.net/source/microsoft-teams/337/hugging-face_1f917.png" data-src="https://em-content.zobj.net/source/microsoft-teams/337/hugging-face_1f917.png" data-srcset="https://em-content.zobj.net/source/microsoft-teams/337/hugging-face_1f917.png 2x" alt="Smiling Face with Open Hands" title="Smiling Face with Open Hands" width="72" height="72" srcset="https://em-content.zobj.net/source/microsoft-teams/337/hugging-face_1f917.png 2x">'
}else if(hours>11 && hours<9){
  title.innerHTML = 'Good Afternoon Laulauu'
  desc.innerHTML = 'Gimana hari ini? Capek ya?<br><img class="lazypreload lazyloaded" src="https://em-content.zobj.net/source/microsoft-teams/337/pleading-face_1f97a.png" data-src="https://em-content.zobj.net/source/microsoft-teams/337/pleading-face_1f97a.png" data-srcset="https://em-content.zobj.net/source/microsoft-teams/337/pleading-face_1f97a.png 2x" alt="Pleading Face" title="Pleading Face" width="72" height="72" srcset="https://em-content.zobj.net/source/microsoft-teams/337/pleading-face_1f97a.png 2x"><br> Sini-sini kabarin aku ya kalau kamu lagi capek'
}else{
  title.innerHTML = 'Good Night Laulauu'
  desc.innerHTML = 'Gak kerasa ya udah malem aja<br><img class="lazypreload lazyloaded" src="https://em-content.zobj.net/source/microsoft-teams/337/sleepy-face_1f62a.png" data-src="https://em-content.zobj.net/source/microsoft-teams/337/sleepy-face_1f62a.png" data-srcset="https://em-content.zobj.net/source/microsoft-teams/337/sleepy-face_1f62a.png 2x" alt="Sleepy Face" title="Sleepy Face" width="72" height="72" srcset="https://em-content.zobj.net/source/microsoft-teams/337/sleepy-face_1f62a.png 2x"><br>Biasanya malem-malem kayak gini, aku kepikiran sama perjalanan kita berdua. Dimana kita biasanya saling lucu-lucuan, sayang-sayang bahkan deeptalk<br>Semoga kangen-kangennya kita bisa ketemu di mimpi malem ini ya<br><img src="https://em-content.zobj.net/source/microsoft-teams/337/smiling-face-with-hearts_1f970.png" srcset="https://em-content.zobj.net/source/microsoft-teams/337/smiling-face-with-hearts_1f970.png 2x" alt="Smiling Face with Hearts" title="Smiling Face with Hearts" width="72" height="72">'
}



