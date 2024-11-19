//Selecion de los contenedores

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");


//Array Imagenes
const imageUrls = [
    'https://featnessgym.com/wp-content/uploads/2021/02/04-min-768x512.jpg',
    'https://static.wixstatic.com/media/11062b_8d910e091cb14c30a409011ac655f2af~mv2_d_4272_2848_s_4_2.jpg/v1/fill/w_640,h_480,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_8d910e091cb14c30a409011ac655f2af~mv2_d_4272_2848_s_4_2.jpg',
    'https://media.gq.com.mx/photos/625db17471f363f634bce022/master/pass/ejercicio-1388957838.jpg',
    'https://media.revistagq.com/photos/65b12cd1df908a3c3a4d7373/16:9/w_2560%2Cc_limit/fitness%2520portada.jpg',
    'https://mercadofitness.com/wp-content/uploads/2019/11/Bio-Ritmo-abrio-Tonus-Gym-su-cuarto-micro-gimnasio.jpg',
    'https://hips.hearstapps.com/hmg-prod/images/personal-weight-training-in-the-gym-royalty-free-image-1568020980.jpg',
    'https://i0.wp.com/blog.smartfit.com.mx/wp-content/uploads/2023/08/como-entrenar-en-el-gym-por-un-dia-peso-libre-1.jpg?fit=1200%2C675&ssl=1',
    'https://eurofitness.com/wp-content/uploads/2020/03/Cu%C3%A1l-es-la-mejor-hora-para-ir-al-gym-y-por-qu%C3%A9.jpg',
    'https://imagenes.20minutos.es/files/image_1920_1080/uploads/imagenes/2023/11/13/que-es-un-ser-un-gym-bro-los-gurus-del-entrenamiento-de-fuerza-para-ganar-musculo-en-el-gimnasio.jpeg',
    'https://diarioroatan.com/wp-content/uploads/2023/07/portada3.jpg',
    'https://images.contentstack.io/v3/assets/blt45c082eaf9747747/blt38cfdd480d5b5cb1/6079a6176a621f72b149f0ab/A_guide_to_gym_equipment.jpeg?width=1200&height=630&fit=crop',
    'https://img.freepik.com/foto-gratis/vista-angulo-hombre-musculoso-irreconocible-preparandose-levantar-barra-club-salud_637285-2497.jpg?t=st=1729594525~exp=1729598125~hmac=2bb2582279782be8c158ae650cb9cee398e79efdefc989ba80390b3437f35f74&w=1380',
    'https://img.freepik.com/foto-gratis/culturista-fuerte-musculos-deltoides-perfectos_1150-12340.jpg?t=st=1729594559~exp=1729598159~hmac=8f691df2212de61b7ba7266bdeba64b824fda5ccecb2c47e43a1983dc32dc43d&w=1380',
    'https://img.freepik.com/foto-gratis/cerrar-entrenamiento-pesas-rusas-gimnasio_23-2149307711.jpg?t=st=1729594577~exp=1729598177~hmac=fb07ebf349add5903181fa33abc33703317ec6f9a69bd5cf36ef304dfc7c9df6&w=1380',
    'https://img.freepik.com/foto-gratis/retrato-joven-deportista-haciendo-ejercicio-cardiovascular-agua-potable-gimnasio_496169-2716.jpg?t=st=1729594670~exp=1729598270~hmac=4dddf44fede782befefdec177055a9520214bcedb6371afe68be3b6dd7848428&w=1380',
    'https://img.freepik.com/foto-gratis/mujeres-entrenando-juntas-gimnasio_23-2149338010.jpg?t=st=1729594699~exp=1729598299~hmac=d223cc63bf9fe2fa1827dc05c7f61f6188d9d1ddca9293bd0eb7311057770cb9&w=1380',
    'https://activaclub.es/wp-content/uploads/2018/04/piscina-2-2.jpg',
    'https://activaclub.es/wp-content/uploads/2018/04/imag-23.jpg',
    'https://activaclub.es/wp-content/uploads/2018/04/recepcion-noviembre-2016-8-1.jpg',
    'https://activaclub.es/wp-content/uploads/2018/04/imag-22.jpg',
    'https://activaclub.es/wp-content/uploads/2018/04/imag-36.jpg'

]

//Función Galería
function createGallery(images) {
    imageUrls.forEach((imageUrl) =>{
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Galería de Imágenes";
        img.addEventListener("click", () => openLightbox(imageUrl));
        gallery.appendChild(img);
    });
}

//Función abrir
function openLightbox(imageUrl){
    lightboxImg.src = imageUrl;
    lightbox.style.display = "flex";
}

// Función Cerrar
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

//Llamar a la función
createGallery(imageUrls)