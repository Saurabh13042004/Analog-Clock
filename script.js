        let hour = document.getElementById("hour");
        let minutes = document.getElementById("min");
        let seconds = document.getElementById("sec");
        let timing =  setInterval(() => {
            let myDate = new Date();
            let hr = myDate.getHours();
            let mins = myDate.getMinutes();
            let secs = myDate.getSeconds();

            let rot_hr = (hr*30) + (mins/2);
            let rot_m = (mins*6) + (secs/10);
            let rot_s = secs*6;

            hour.style.transform = `rotate(${rot_hr}deg)`;
            minutes.style.transform = `rotate(${rot_m}deg)`;
            seconds.style.transform = `rotate(${rot_s}deg)`;
            
        }, 1000);
  
        function darkMode() {

            var img = document.getElementById('dayn').src;
        if (img.indexOf('https://cdn-icons-png.flaticon.com/512/3917/3917805.png')!=-1) {
            document.getElementById('dayn').src  = 'https://cdn-icons-png.flaticon.com/512/107/107753.png';
        }
         else {
           document.getElementById('dayn').src = 'https://cdn-icons-png.flaticon.com/512/3917/3917805.png';
       }
                
            let dcircle = document.querySelector(".circle");
            dcircle.classList.toggle("darkCircle");
            let dbg = document.querySelector(".light");
            dbg.classList.toggle("bg");


            
           
        }