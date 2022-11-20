const navbtn = document.getElementById('nav-toggle'),
    navBack = document.querySelector('#navback') ,
    settingIcon = document.querySelector('.setting-icon'),
    scrollToTOp = $('.scrolltotop')  ,
    projectName = document.querySelector('#upload-name'),
    projectUrl = document.querySelector('#upload-img'),
    uploadbBtn = document.querySelector('#upload-btn')    
    ;  

     // check if there's local storage color changing
    let mainColor = localStorage.getItem('color-option');
    let mainColor2 = localStorage.getItem('color-option2');

    if (mainColor !== null){
        // add color from local storage 
        document.documentElement.style.setProperty('--main-color-dark',mainColor)
        document.documentElement.style.setProperty('--main-color-light',mainColor2)
      
         // --remove active class from elemnts
         document.querySelectorAll('.colors-list li').forEach(element => {
            element.classList.remove('active-color')
            //add active class to active color element
            element.classList.add('active-color')
        });
    }
    // navigation bar
navbtn.addEventListener('click', function() {
    navBack.classList.toggle('open');
    this.classList.toggle('open');
    document.querySelector('.navbar-navi').classList.toggle('open')
    console.log('hh')
})
// show intro circle
$(document).ready(function() {
    $('.heading-circle-sec').fadeIn(2000);

    setTimeout(() => {
        $('.setting-box').fadeIn(1000);
        $('.upload-icon').fadeIn(1000);

    },1000 );
    
    setTimeout(() => {
        // fadIn circle 
        $('#intro').fadeIn(2000);
        $('.introheadingstyle').hide();
        setTimeout(() => {
            // fadIn logo            
                $('#logo-intro').show();
                $('.tlt').textillate({ in: { effect: 'fadeInUpBig' , delay: 90 } });                
                //fadi in btn 
                setTimeout(() => {
                    $('.intro-btn').show();
                    $('.intro-btn').addClass('animate__animated animate__zoomIn');
                   
                }, 2200);
            }, 2000);          
        }, 8000);     
});
//   scrolling
$(window).scroll(function(){

    // button for scroll top 
    const scrollToTOp = $('.scrolltotop');

    if ($(window).scrollTop() >= 550){
        
        scrollToTOp.fadeIn(400)
    }else{
        scrollToTOp.fadeOut(400)

    }
});
scrollToTOp.click(function(){
    $('html,body').animate({
        scrollTop : 0
    } , 1200);
});

//form search
$('.search-icon').click(function(e) {
    // e.preventDefault();
    $('.form-search').toggleClass('open');
    $('.logo-box').toggleClass('hide-responsive')
    $('.search-click').fadeToggle(1100);
  
    
})


//slider in work page by plugin owl-carousel
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            }
        },
    })
});


// setting box
settingIcon.onclick= function(){
    document.querySelector('.setting-box').classList.toggle('open-setting');
    document.querySelector('.setting-icon i').classList.toggle('fa-spin');
    document.querySelector('.upload-icon').classList.toggle('d-none');
}

const colorLi = document.querySelectorAll('.colors-list li');
colorLi.forEach(li => {
    li.addEventListener('click', e => {
        //set color in root
        document.documentElement.style.setProperty('--main-color-dark',e.target.dataset.color)
        document.documentElement.style.setProperty('--main-color-light',e.target.dataset.color2)
        //set colors in local storage 
        localStorage.setItem('color-option',e.target.dataset.color)
        localStorage.setItem('color-option2',e.target.dataset.color2)
        // --remove active class from elemnts
        e.target.parentElement.querySelectorAll('.active-color').forEach(element => {
            element.classList.remove('active-color')
        });
        //add active class to active color element
        e.target.classList.add('active-color')


    })
});


var projectsArr =[
    {
        imageURL: "https://mobirise.com/bootstrap-template/assets/images/homepage-template.jpg",
        projectTitle: "project One",
        day : Math.round(Math.random()*(31-1)+1) ,
        month : Math.round(Math.random()*(13-1)+1),
        year : 2020,
        views : Math.round(Math.random()*(300-50)+50),
        rating: Math.round(Math.random()*(300-50)+50),
        likes: Math.round(Math.random()*(300-50)+50)
    },
    {
        imageURL: "https://mobirise.com/bootstrap-template/assets/images/bootstrap-starter-template-492x492.jpg",
        projectTitle: "project Two",
        day : Math.round(Math.random()*(31-1)+1) ,
        month : Math.round(Math.random()*(13-1)+1),
        year : 2020,
        views : Math.round(Math.random()*(300-50)+50),
        rating: Math.round(Math.random()*(300-50)+50),
        likes: Math.round(Math.random()*(300-50)+50)
    },
    {
        imageURL: "https://mobirise.com/bootstrap-template/assets/images/agency-template.jpg",
        projectTitle: "project three",
        day : Math.round(Math.random()*(31-1)+1) ,
        month : Math.round(Math.random()*(13-1)+1),
        year : 2020,
        views : Math.round(Math.random()*(300-50)+50),
        rating: Math.round(Math.random()*(300-50)+50),
        likes: Math.round(Math.random()*(300-50)+50)
    },
    {
        imageURL: "https://mobirise.com/bootstrap-4-theme/assets/images/magazine-template.jpg",
        projectTitle: "project four",
        day : Math.round(Math.random()*(31-1)+1) ,
        month : Math.round(Math.random()*(13-1)+1),
        year : 2020,
        views : Math.round(Math.random()*(300-50)+50),
        rating: Math.round(Math.random()*(300-50)+50),
        likes: Math.round(Math.random()*(300-50)+50)
    },
    {
        imageURL: "https://mobirise.com/bootstrap-4-theme/assets/images/business-template.jpg",
        projectTitle: "project five",
        day : Math.round(Math.random()*(31-1)+1) ,
        month : Math.round(Math.random()*(13-1)+1),
        year : 2020,
        views : Math.round(Math.random()*(300-50)+50),
        rating: Math.round(Math.random()*(300-50)+50),
        likes: Math.round(Math.random()*(300-50)+50)
    },
    {
        imageURL: "https://mobirise.com/bootstrap-4-theme/assets/images/restaurant-template.jpg",
        projectTitle: "project six",
        day : Math.round(Math.random()*(31-1)+1) ,
        month : Math.round(Math.random()*(13-1)+1),
        year : 2020,
        views : Math.round(Math.random()*(300-50)+50),
        rating: Math.round(Math.random()*(300-50)+50),
        likes: Math.round(Math.random()*(300-50)+50)
    }, {
        imageURL: "https://mobirise.com/bootstrap-4-theme/assets/images/hotel-template.jpg",
        projectTitle: "project seven",
        day : Math.round(Math.random()*(31-1)+1) ,
        month : Math.round(Math.random()*(13-1)+1),
        year : 2020,
        views : Math.round(Math.random()*(300-50)+50),
        rating: Math.round(Math.random()*(300-50)+50),
        likes: Math.round(Math.random()*(300-50)+50)
    },
    {
        imageURL: "https://colorlib.com/wp/wp-content/uploads/sites/2/menztailor-free-template-388x306.jpg",
        projectTitle: "project eight",
        day : Math.round(Math.random()*(31-1)+1) ,
        month : Math.round(Math.random()*(13-1)+1),
        year : 2020,
        views : Math.round(Math.random()*(300-50)+50),
        rating: Math.round(Math.random()*(300-50)+50),
        likes: Math.round(Math.random()*(300-50)+50)
    }, {
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9c4AIwXXINgJUMS39tddg92pKz-1-DePZ-x77ZQgneqWKHhpS&usqp=CAU",
        projectTitle: "project nine",
        day : Math.round(Math.random()*(31-1)+1) ,
        month : Math.round(Math.random()*(13-1)+1),
        year : 2020,
        views : Math.round(Math.random()*(300-50)+50),
        rating: Math.round(Math.random()*(300-50)+50),
        likes: Math.round(Math.random()*(300-50)+50)
    }
];

 // check if there's local storage projects
 if (localStorage.length !== 0){
     
     projectsArr = JSON.parse(localStorage.getItem("projects"));
     
        // show projects
         getProjects()

}else{
       // show projects
       getProjects()

}


// click on up;oad button ((event lastner))
uploadbBtn.addEventListener('click',function(){

    if (projectName.value.trim() ===''){
        alert('project name not allow to be empty ')
        return false
    }
   
    else {
        var conf = confirm("if your url img is uncorrect or null the image won't appear ")

        if ( conf ){
            addProject()
        }else{
            return false
        }
    }
})


// add function
function addProject(){

    const project = {
        imageURL : projectUrl.value || 'imgs/404.jpg',
        projectTitle : projectName.value ,
        // date : this.day +'/'+this.month +'/' +this.year  ,
        day : Math.round(Math.random()*(31-1)+1) ,
        month : Math.round(Math.random()*(13-1)+1),
        year : 2020,
        views : Math.round(Math.random()*(300-50)+50),
        rating: Math.round(Math.random()*(300-50)+50),
        likes:  Math.round(Math.random()*(300-50)+50)
        
        }
        projectsArr.push(project);        
        //set array for project ******************* 
        localStorage.setItem("projects", JSON.stringify(projectsArr));
     
}

//get projects data
function getProjects() {

    var listProjects = '';
   
    for (let i of projectsArr) {
        console.log(i.imageURL)
        listProjects += `
        <div class="col-md-4 p-4 projectBox">
        <div class="card shadow h-100">
            <img src="${i.imageURL}" class="w-100 border-bottom border-light h-75" alt="">
            <div class="p-3">
                <h4>${i.projectTitle}</h4>
                <p>${i.day} / ${i.month} / ${i.year}</p>
            </div>
            <div class="p-3 d-flex justify-content-around border-top">
                <div class="">
                    <i class="far fa-eye"></i>
                    <span>${i.views}</span>
                </div class="">
                <div class="">   
                    <a href="#" class="text-decoration-none"><i class="fas fa-star text-warning"></i></a>
                    <span>${i.rating}</span>
                </div class="">
                <div class="">
                    <a href="#" class="text-decoration-none"><i class="fas fa-heart text-danger"></i></a>
                    <span id="projectsLikes">${i.likes}</span>
                </div class="">
            </div>
        </div>
    </div>
        `
    }
    document.getElementById('projects-cards').innerHTML += listProjects ;
}




document.querySelector('.input-search').addEventListener('keyup', function(e){
    
    // console.log(document.querySelector('.input-search').value)

    // document.querySelector('#projects-cards').style.display = 'none'
    var text = e.target.value.toLowerCase();

    console.log(text)

    let contentSearch = ''
    projectsArr.forEach(element => {
        var item = element.projectTitle.toLowerCase();        

        if (element.projectTitle.toLowerCase().includes(text) == true){

                contentSearch += `
                <div class="col-md-4 p-4 projectBox">
                <div class="card shadow h-100">
                <img src="${element.imageURL}" class="w-100 border-bottom border-light h-75" alt="">
                <div class="p-3">
                <h4>${element.projectTitle}</h4>
                <p>${element.day} / ${element.month} / ${element.year}</p>
                </div>
                <div class="p-3 d-flex justify-content-around border-top">
                <div class="">
                <i class="far fa-eye"></i>
                <span>${element.views}</span>
                </div class="">
                <div class="">   
                <a href="#" class="text-decoration-none"><i class="fas fa-star text-warning"></i></a>
                <span>${element.rating}</span>
                </div class="">
                <div class="">
                <a href="#" class="text-decoration-none"><i class="fas fa-heart text-danger"></i></a>
                <span id="projectsLikes">${element.likes}</span>
                </div class="">
                </div>
                </div>
                </div>
                `
            document.getElementById('projects-cards').innerHTML = contentSearch ;          
            
        }else{
       
            document.getElementById('projects-cards').innerHTML = `<div class="alert w-100 alert-danger" role="alert">
            no results of your search
          </div>`
        }
    });
})