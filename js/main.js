///////////////////////// start nav //////////////////////////////////
let menu = document.getElementById('menu-icon');
let menu_item = document.getElementById('menu-item');

menu.addEventListener('click' , ()=>{
  menu.classList.toggle('fa-close');
  menu_item.classList.toggle('hide');
});

document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menu_item.contains(event.target)) {
    menu_item.classList.add('hide');
    menu.classList.remove('fa-close');
  }
});
menu_item.addEventListener('click', () => {
  menu_item.classList.add('hide');
  menu.classList.remove('fa-close');
});
// change background color for nav on scroll

function changeBG() {
  let scroll = window.scrollY;
  console.log(scroll)
  let nav = document.getElementById('nav');
  // Compare the scroll position to 50
  if (scroll < 50) {
    nav.classList.remove('bgColor'); // Remove the 'bgColor' class
  } else {
    nav.classList.add('bgColor');    // Add the 'bgColor' class
  }
}
window.addEventListener('scroll', changeBG);

////////////////////////////// end nav //////////////////////////////////


///////////////////// start add comment in single-article page /////////////////////

let add_comment = document.getElementById('add-comment');

//check if the send btn in the page or no
if(add_comment !=null ){

  add_comment.addEventListener('click', (event)=> {
      event.preventDefault(); // to stop reload page when clicking the button
  
      let comment = document.getElementById('message').value;
  
      // Check if the comment is not empty
      if (comment.trim() !== "") {
          // Create new comment
          let newComment = document.createElement("div");
          newComment.className = "card card-comment";//add className to comment container
          newComment.innerHTML = `
              <div class="header">
                  <div class="name">
                      <i class="fa-solid fa-user"></i>
                      <h2>اسم المستخدم</h2>
                  </div>
                  <div class="time">
                      <i class="fas fa-clock"></i>
                      <span>منذ لحظات</span>
                  </div>
              </div>
              <div class="comment">
                  <p>${comment}</p>
              </div>
          `;
  
          // Append the new comment to the col-md-12
          let col_md_12 = document.createElement("div");
          col_md_12.className = "col-md-12";
          col_md_12.appendChild(newComment);
  
          // Append the col-md-12 to the comments container
          let commentsContainer = document.querySelector(".comments-container");
          commentsContainer.appendChild(col_md_12);
  
          // Clear the textarea after adding the comment
          document.getElementById("message").value = "";
      }
  });
}

///////////////////// end add comment in single-article page /////////////////////////

////////////////////////////// start swiper sections in home page ////////////////////

const Body = document.getElementsByTagName('body')[0];
let rtlValue = false;
if (Body.style.direction = 'rlt') {
  rtlValue = true;
}

$('.owl-carousel.partners').owlCarousel({
  rtl: rtlValue,
  loop:true,
  margin:10,
  nav:false,
  dots: false,
  autoplay:false,
  autoplayTimeout:3500,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})


$('.owl-carousel').owlCarousel({
  rtl: rtlValue,
  loop:true,
  margin:10,
  nav:true,
  dots: false,
  autoplay:true,
  autoplayTimeout:3500,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

////////////////////////////// end swiper sections in home page ////////////////////

let review_btn = document.getElementById('review');

if(review_btn !=null){
  review_btn.addEventListener('click' , (e)=>{
    e.preventDefault();

  let preview = document.getElementById('preview').value;

  if (preview.trim() !== "") {


    let new_preview = document.createElement('div');
    new_preview.className = 'card my-4 p-4';
    new_preview.innerHTML = ` 
    <div class="commenter-name">
    <i class="fas fa-user"></i>
    <a href="#">احمد هلال</a>
  </div>
  <div class="comment-rank">
    <div class="stars-icon d-flex align-items-center">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    </div>
  </div>
  <p>${preview}</p> `;

  // Append the col-md-12 to the comments container
  let previewContainer = document.querySelector(".comment");
  previewContainer.appendChild(new_preview);

  // Clear the textarea after adding the comment
  document.getElementById("preview").value = "";

  }

  });
}




///////////////////////////////////with chat gpt ////////////////////////
                      // let review_btn = document.getElementById('review');

                      // if (review_btn != null) {
                      //   review_btn.addEventListener('click', (e) => {
                      //     e.preventDefault();
                      
                      //     let preview = document.getElementById('preview').value;
                      //     let selectedRate = document.querySelector('input[name="rate"]:checked');
                      //     let ratingValue = selectedRate ? selectedRate.id.split('-')[1] : null;
                      
                      //     if (preview.trim() !== "") {
                      //       let new_preview = document.createElement('div');
                      //       new_preview.className = 'card my-4 p-4';
                      //       new_preview.innerHTML = `
                      //         <div class="commenter-name">
                      //           <i class="fas fa-user"></i>
                      //           <a href="#">احمد هلال</a>
                      //         </div>
                      //         <div class="comment-rank">
                      //           <div class="stars-icon d-flex align-items-center">
                      //             ${generateStarsHTML(Number(ratingValue))}
                      //           </div>
                      //         </div>
                      //         <p>${preview}</p> `;
                      
                      //       // Append the col-md-12 to the comments container
                      //       let previewContainer = document.querySelector(".comment");
                      //       previewContainer.appendChild(new_preview);
                      
                      //       // Clear the textarea after adding the comment
                      //       document.getElementById("preview").value = "";
                      //     }
                      //   });
                      // }
                      
                      // function generateStarsHTML(rating) {
                      //   let starsHTML = '';
                      //   for (let i = 1; i <= 5; i++) {
                      //     if (i <= rating) {
                      //       starsHTML += `<label for="rate-${i}" class="fas fa-star active"></label>`;
                      //     } else {
                      //       starsHTML += `<label for="rate-${i}" class="fas fa-star"></label>`;
                      //     }
                      //   }
                      //   return starsHTML;
                      // }
                      

////////////////////////////////////////////////////////////////////////


//////////////////////////////booking service /////////////////////

let booking_btn = document.getElementById('booking');

if(booking_btn !=null){}
  booking_btn.addEventListener('click' , (e)=>{
    e.preventDefault();
  });