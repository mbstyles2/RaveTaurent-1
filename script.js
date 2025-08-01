const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  
  // #009bff Close the drawer when a link is clicked (better mobile UX)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });


    const themes = {
       blue:{
        '--bg': '#ADD8E6',
        '--text':'black',
       } ,
      red:{
        '--bg': '#ffe0e0',
        '--text':'black'
      }, 
      green:{
        '--bg': '#e0ffe0',
        '--text':'black'
      },
      purple:{
        '--bg': '#f3e0ff',
        '--text':'black'
      }
    };

    function setTheme(themeName){
      const theme = themes[themeName];
      if(!theme) return;
      for (let key in theme){
        document.documentElement.style.setProperty(key,theme[key]);
      }
    }
    // function setTheme(color) {
    //   const body = document.body;
    //   // const nav = document.getElementById("navbar");
    //   // Remove any existing theme class
    //   themes.forEach(t => body.classList.remove('theme-' + t));
    //   // Add the chosen theme class
    //   body.classList.add('theme-' + color);
    //   // nav.classList.add('theme-' + color);


    // .theme-red   { background: ; color: #660000; }
    // .theme-red   button { background: #dc3545; color: #fff; }
    // .theme-green { background: ; color: #004d00; }
    // .theme-green button { background: #28a745; color: #fff; }
    // .theme-purple{ background: ; color: #4b0082; }
    // .theme-purple button { background: #6f42c1; color: #fff; }
  
    // }