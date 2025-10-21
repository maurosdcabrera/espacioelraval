const body=document.body;
const modoBtn=document.getElementById('modo-btn');
const modoIcono=document.getElementById('modo-icono');

if (localStorage.getItem('modo') === 'oscuro') {
    body.classList.add('dark-mode');
    modoIcono.className = 'bi bi-sun';
} else {
    modoIcono.className = 'bi bi-moon-stars';
}

function toggleModo(){
    body.classList.toggle('dark-mode');
    if(body.classList.contains('dark-mode')){
        modoIcono.className='bi bi-sun';
        localStorage.setItem('modo', 'oscuro'); 
    }else{
        modoIcono.className='bi bi-moon-stars';
         localStorage.setItem('modo', 'claro'); 
    }
    
}
modoBtn.addEventListener('click',toggleModo);


const btnMenu=document.getElementById('btn-menu');
const menu=document.getElementById('menu');
if(btnMenu && menu){
btnMenu.addEventListener('click',()=>{
    menu.classList.toggle('show');
});
}


const formulario=document.getElementById('formulario');
const respuesta=document.getElementById('respuesta');

formulario.addEventListener('submit',function(e){
e.preventDefault();
document.getElementById('error-nombre').textContent='';
document.getElementById('error-mail').textContent='';

respuesta.innerHTML='';

const nombre=document.getElementById('nombre').value.trim();
const email=document.getElementById('email').value.trim();

let validaciones= false;
if(!nombre){
document.getElementById('error-nombre').textContent="Campo obligatorio, por favor ingrese su nombre.";
validaciones=true;
} 
const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(!email){
document.getElementById('error-mail').textContent='Para recibir novedades por favor ingrese su mail.';
validaciones=true;
}else if(!mailRegex.test(email)){
  document.getElementById('error-mail').textContent='Su mail es invalido, por favor ingrese uno válido.';
  validaciones=true;
}
if(validaciones)return;
Swal.fire({
  title: "Sus datos fueron enviados",
  text: "Gracias por suscribirse al boletín de El Raval",
  background:"green",
  icon: "success",
  color:"black"
  }).then(()=>{ 
    formulario.submit();
 });
 });



