const trocarTema = document.getElementById('night-theme');

trocarTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    
   if (trocarTema.textContent == ("Day-Theme")){
       trocarTema.textContent = "Night-Theme";
   } else {
       trocarTema.textContent = "Day-Theme";
   }
    
});