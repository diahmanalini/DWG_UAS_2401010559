let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
}



let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{
    search.classList.toggle('active');
}


var swiper = new Swiper(".product-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".blogs-row", {
    spaceBetween: 30,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation:{
        nextE1 :".swiper-button-next",
        prevE1 :".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  });

  var swiper = new Swiper(".review-row", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: false,
    slidesPerView: 3,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1, 
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


 
  document.querySelector('.box2').addEventListener('click', () => {
    const fullName = document.querySelector('input[placeholder="Full name"]').value.trim();
    const testimonial = document.querySelector('input[placeholder="Testimonials"]').value.trim();


    if (!fullName || !testimonial) {
        alert('Please fill in both the full name and testimonial fields.');
        return;
    }

    const reviewBox = document.createElement('div');
    reviewBox.className = 'swiper-slide box';
    reviewBox.innerHTML = `
        <div class="client-review">
            <p>${testimonial}</p>
        </div>
        <div class="client-info">
            <div class="img">
                <img src="image/yuna-fotor-20241126161521.png" alt="Default User">
            </div>
            <div class="clientDetailed">
                <h3>${fullName}</h3>
                <p>Client</p>
            </div>
        </div>
    `;

    const reviewRow = document.querySelector('.review-row .swiper-wrapper');
    reviewRow.appendChild(reviewBox);

    document.querySelector('input[placeholder="Full name"]').value = '';
    document.querySelector('input[placeholder="Testimonials"]').value = '';

    alert('Testimonial has been added successfully!');
});
