const service1=`<h2> Web Develpment</h2>
         <img src="/web-development1.d7e57fb1.4e39f44d.png">   </img>
         <p> create reliable resposive and high-performing websites and web-based applications with strong skills in html css js react mongodb mysql nodejs (mern stack)
           wich has the following features  </p>
           <ul>
            <li>resposive</li>
            <li>high-performing</li>
            <li> search engine optimazation friendly</li>
            <li> secure</li>
            </ul>`
  const service2=` <h2> Wordpress Develpment</h2>
         <img src=/wordpress.f975e07c.jpeg>   </img>
         <p> create attractive, user-friendly websites and plugins that perfectly meet the design and functionality specifications of the client </p>
         <ul>
            <li>Meeting with clients to discuss website design and function</li>
            <li>Designing and building the website front-end</li>
            <li> esigning and managing the website back-end including database and server integration.</li>
            <li> Generating WordPress themes and plugins.</li>
            </ul>`          
const service3=`<h2> Cross Mobile Development</h2>
         <img src=/crossplatform.80b0b1f6.jpeg>   </img>
         <p> build a cross-platform app for your startup on one codebase, developing the application simultaneously for iOS and Android </p>
         <ul>
            <li>Build pixel-perfect, buttery smooth UIs across both mobile platforms.</li>
            <li>Designing and building the website front-end</li>
            <li> Leverage native APIs for deep integrations with both platforms</li>
            
            </ul>`
const service4=` <h2> SEO</h2>
         <img src=/seo.1624dcac.jpg>   </img>
         <p> managing all SEO activities such as content strategy, link building and keyword strategy to increase rankings on all major search networks. You will also manage all SEM campaigns on Google, Yahoo and Bing in order to maximize ROI.

         </p>
         <ul>
            <li>Manage campaign expenses, staying on budget, estimating monthly costs and reconciling discrepancies.</li>
            <li>Optimize copy and landing pages for search engine marketing</li>
            <li> Perform ongoing keyword discovery, expansion and optimization</li>
            
            </ul>`
const service5=` <h2> Digital Marketing</h2> 
         <img src="/digital%20marketing.6da245fe.jpeg">   </img>
         <p> leveraging online platforms to promote brands, products, and services effectively. Their responsibilities encompass a wide range of tasks aimed at maximizing brand visibility, engaging target audiences, and driving measurable results
             </p>
             <ul>
               <li>designs, builds, and maintains our social media presence.</li>
               <li>Measures and reports performance of all digital marketing campaigns and assesses against goals (ROI and KPIs)</li>
               <li> Plans and executes all web, SEO/SEM, database marketing, email, social media, and display advertising campaigns.</li>
               
               </ul>`


const text1=document.querySelector('.text-1')
const text2=document.querySelector('.text-2')
const text3=document.querySelector('.text-3')
const text4=document.querySelector('.text-4')
const navbutton=document.querySelectorAll('.button-nav')
const skillbutton=document.querySelector('.skillbutton')
const firstsection=document.querySelector('.section')
const skillsection=document.querySelector('.section2')
const servicebutton=document.querySelector('.servicebutton')
const servicesection=document.querySelector('.section4')
const projectsbutton=document.querySelector('.projectsbutton')
const projectssection=document.querySelector('.section3')
const contactsbutton=document.querySelector('.contactbutton')
const contactsection=document.querySelector('.section5')
const servicesbuttons=document.querySelectorAll('.sbutton')
const service=document.querySelector('.service')
const projec1=document.querySelector('.project-1')
const projec2=document.querySelector('.project-2')
const projec3=document.querySelector('.project-3')
const nextbutton=document.querySelector('.button-next')
const prevbutton=document.querySelector('.button-prev')
const section2=document.querySelector('section2')
const nav=document.querySelector('.nav')
const skills=document.querySelectorAll('.skill')
const sections=document.querySelectorAll('.section')
// NAV animaition
navbutton.forEach(elm=>{
    elm.addEventListener('mouseenter',ev=>{
        const s=ev.target
       navbutton.forEach(elm=>{elm.classList.add('button-non-active')})
        s.classList.add('button-nav-active')

    })
    elm.addEventListener('mouseout',ev=>{
        const s=ev.target
        s.classList.remove('button-nav-active')
       navbutton.forEach(elm=>{elm.classList.remove('button-non-active')})
       

    })
   
})



skillbutton.addEventListener('click',function(){
 
    skillsection.scrollIntoView({behavior:'smooth'})
})

servicebutton.addEventListener('click',function(){
 
    firstsection.scrollIntoView({behavior:'smooth'})
})
projectsbutton.addEventListener('click',function(){
 
    projectssection.scrollIntoView({behavior:'smooth'})
})
contactsbutton.addEventListener('click',function(){
 
    contactsection.scrollIntoView({behavior:'smooth'})
})



// text animition

const textchange=function(){
    text4.classList.remove('header2-visible')
   text1.classList.add('header2-visible')
    setTimeout(function(){
        text4.classList.remove('header2-visible')
        text1.classList.remove('header2-visible')
        text2.classList.add('header2-visible')
    },3000)
    
    
    setTimeout(function(){
        text2.classList.remove('header2-visible')
        text3.classList.add('header2-visible')
    },6000)
    
    setTimeout(function(){
        text2.classList.remove('header2-visible')
        text3.classList.add('header2-visible')
    },9000)
    setTimeout(function(){
        text3.classList.remove('header2-visible')
        text4.classList.add('header2-visible')
    },12000)
}

textchange();
const textrepeat=setInterval(function(){
    
 textchange();

},15000)
//skill animation
const skillobserver=new IntersectionObserver((entry,observer)=>{

const [entrys]=entry
console.log(entrys)
if(entrys.isIntersecting){
skills.forEach((elm,i)=>{

    elm.classList.add(`skill-${i+1}`)
}
)
}
else return;
},{root:null,threshold:0})

skillobserver.observe(skillsection)

//services code
let servicenum;
servicesbuttons.forEach(elm=>elm.addEventListener('click',e=>{
    const x=e.target
    servicesbuttons.forEach(elm=>elm.classList.remove('service-active'))
    x.classList.add('service-active')
    service.innerHTML=''
    servicenum=x.dataset.set
    if(servicenum==1)
   service.innerHTML=service1
  if(servicenum==2){
    service.innerHTML=service2
  }
  if(servicenum==3){
    service.innerHTML=service3
  }
  if(servicenum==4){
    service.innerHTML=service4
  }
  if(servicenum==5){
    service.innerHTML=service5
  }
}))


//PROJECTS CODE
let projectnum=1;
nextbutton.addEventListener('click',function(e){
    projectnum>=3?projectnum=1:projectnum++;
projec1.setAttribute('style',`transform :translateX(${100-(projectnum)*100}%)`)
projec2.setAttribute('style',`transform :translateX(${100-(projectnum)*100}%)`)
projec3.setAttribute('style',`transform :translateX(${100-(projectnum)*100}%)`)
console.log(projectnum)
console.log(projec2)
})
prevbutton.addEventListener('click',function(e){
    projectnum==1?projectnum=3:projectnum--;
projec1.setAttribute('style',`transform :translateX(${100-(projectnum)*100}%)`)
projec2.setAttribute('style',`transform :translateX(${100-(projectnum)*100}%)`)
projec3.setAttribute('style',`transform :translateX(${100-(projectnum)*100}%)`)
console.log(projectnum)
console.log(projec2)
})

//sextion animastion
const sectionsobserver=new IntersectionObserver((entry,observer)=>{

const [entrys]=entry
console.log(entrys)
if(entrys.isIntersecting){
    entrys.target.classList.remove('section')
}

else return;
},{root:null,threshold:0})

sections.forEach(elm=>{
    sectionsobserver.observe(elm)
})