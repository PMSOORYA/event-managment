/**
 * Creative Events by Apollo — The Light Smile
 * All Buttons, CTAs, Navigation & WhatsApp Integration
 */
(function(){'use strict';
const WA='919446134182';
const DOM={nav:document.getElementById('nav'),burger:document.getElementById('navBurger'),menu:document.getElementById('navMenu'),menuClose:document.getElementById('navMenuClose'),form:document.getElementById('enquiryForm'),links:document.querySelectorAll('.nav__link')};

/* === WHATSAPP === */
function waOpen(msg){window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(msg),'_blank','noopener,noreferrer');}
function g(id){return document.getElementById(id);}

window.openWhatsApp=function(){waOpen('Hello Creative Events by Apollo, I would like to know more about your event management services in Vadakara / Kozhikode. Please share more details.');};
window.planMyEvent=function(){waOpen('Hello Creative Events by Apollo, I am interested in planning an event.\n\nEvent Type:\nEvent Date:\nLocation:\nGuest Count:\nBudget:\n\nPlease contact me with more details.');};
window.getQuote=function(){waOpen('Hello Creative Events by Apollo, I would like to get a custom quote for my event.\n\nEvent Type:\nDate:\nLocation:\nGuest Count:\nBudget:\n\nPlease share your planning options.');};
window.enquireService=function(svc){
    var m='Hello Creative Events by Apollo, I would like to enquire about '+svc+' in Vadakara / Kozhikode.';
    if(svc==='Wedding Planning') m='Hello Creative Events by Apollo, I would like to enquire about wedding planning in Vadakara / Kozhikode. Please share your wedding planning packages and details.';
    if(svc==='Birthday Event Planning') m='Hello Creative Events by Apollo, I would like to enquire about birthday event planning in Vadakara / Kozhikode. Please share your birthday celebration packages.';
    if(svc==='Corporate Event Planning') m='Hello Creative Events by Apollo, I would like to enquire about corporate event management in Vadakara / Kozhikode. Please share details about your corporate event services.';
    if(svc==='Stage Decoration') m='Hello Creative Events by Apollo, I would like to enquire about stage decoration services in Vadakara / Kozhikode. Please share your stage decoration portfolio and pricing.';
    waOpen(m);
};
window.enquirePortfolio=function(item){waOpen('Hello Creative Events by Apollo, I liked the '+item+' style from your portfolio. I would like to plan a similar celebration. Please share more details.');};

/* === SMOOTH SCROLL === */
window.scrollToSection=function(id){closeMenu();var el=document.getElementById(id);if(el){window.scrollTo({top:el.getBoundingClientRect().top+pageYOffset-DOM.nav.offsetHeight-12,behavior:'smooth'});}};
window.scrollTo=window.scrollToSection;

/* === NAV === */
function ns(){DOM.nav.classList.toggle('scrolled',scrollY>30);}
addEventListener('scroll',ns,{passive:true});ns();
function tm(){DOM.menu.classList.contains('mobile-open')?cm():(DOM.menu.classList.add('mobile-open'),DOM.burger.classList.add('active'),DOM.burger.setAttribute('aria-expanded','true'),document.body.style.overflow='hidden');}
function cm(){DOM.menu.classList.remove('mobile-open');DOM.burger.classList.remove('active');DOM.burger.setAttribute('aria-expanded','false');document.body.style.overflow='';}
DOM.burger.addEventListener('click',tm);
if(DOM.menuClose) DOM.menuClose.addEventListener('click',cm);
DOM.links.forEach(function(l){l.addEventListener('click',function(){if(DOM.menu.classList.contains('mobile-open'))cm();});});
addEventListener('keydown',function(e){if(e.key==='Escape'&&DOM.menu.classList.contains('mobile-open'))cm();});

/* Active nav */
var sids=['home','services','portfolio','experience','faq','contact'],tk=false;
function hl(){var p=scrollY+DOM.nav.offsetHeight+120,c='';sids.forEach(function(id){var s=document.getElementById(id);if(s&&p>=s.offsetTop&&p<s.offsetTop+s.offsetHeight)c=id;});DOM.links.forEach(function(l){l.classList.toggle('active',l.getAttribute('href')==='#'+c);});}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(function(){hl();tk=false;});tk=true;}},{passive:true});

/* === FORM === */
function fd(){return{name:g('name').value.trim(),phone:g('phone').value.trim(),eventType:g('eventType').value,eventDate:g('eventDate').value,location:g('location').value.trim(),guestCount:g('guestCount').value.trim(),budget:g('budget').value,message:g('message').value.trim()};}
function buildMsg(d){return['*New Event Enquiry \u2014 Creative Events by Apollo*','','*Name:* '+(d.name||'\u2014'),'*Phone:* '+(d.phone||'\u2014'),'*Event Type:* '+(d.eventType||'\u2014'),'*Event Date:* '+(d.eventDate||'\u2014'),'*Location:* '+(d.location||'\u2014'),'*Guest Count:* '+(d.guestCount||'\u2014'),'*Budget Range:* '+(d.budget||'\u2014'),'*Message:* '+(d.message||'\u2014'),'','_Sent via creativeeventsapollo.com_'].join('\n');}
function fieldErr(id){var f=g(id);if(f){f.style.borderColor='#E8C4C0';f.style.background='#FFFBF5';setTimeout(function(){f.style.borderColor='';f.style.background='';},2600);f.focus();}}

if(DOM.form){DOM.form.addEventListener('submit',function(e){e.preventDefault();var d=fd();var b=this.querySelector('button');if(!d.name){fieldErr('name');b.textContent='Please enter your name';b.style.background='#E8C4C0';b.style.color='#25211D';setTimeout(function(){b.textContent='Send to WhatsApp';b.style.background='';b.style.color='';},2200);return;}if(!d.phone){fieldErr('phone');b.textContent='Please enter your phone';b.style.background='#E8C4C0';b.style.color='#25211D';setTimeout(function(){b.textContent='Send to WhatsApp';b.style.background='';b.style.color='';},2200);return;}if(!d.eventType){fieldErr('eventType');b.textContent='Please select event type';b.style.background='#E8C4C0';b.style.color='#25211D';setTimeout(function(){b.textContent='Send to WhatsApp';b.style.background='';b.style.color='';},2200);return;}if(!d.location){fieldErr('location');b.textContent='Please enter location';b.style.background='#E8C4C0';b.style.color='#25211D';setTimeout(function(){b.textContent='Send to WhatsApp';b.style.background='';b.style.color='';},2200);return;}waOpen(buildMsg(d));});DOM.form.querySelectorAll('input,select,textarea').forEach(function(el){el.addEventListener('input',function(){this.style.borderColor='';this.style.background='';});});}

/* === FAQ ACCORDION === */
document.querySelectorAll('.faq__q').forEach(function(btn){btn.addEventListener('click',function(){var item=this.parentElement,open=item.classList.contains('open');document.querySelectorAll('.faq__item').forEach(function(i){i.classList.remove('open');i.querySelector('.faq__q').setAttribute('aria-expanded','false');});if(!open){item.classList.add('open');this.setAttribute('aria-expanded','true');}});});

/* === HERO VIDEO ROTATION & LAZY LOADING === */
var hs = document.getElementById('heroSlides');
if (hs) {
    var cs = 0, ts = 3, si;
    var dv = document.querySelectorAll('.hero__reel--desktop .hero__vid');
    var mv = document.querySelectorAll('.hero__reel--mobile .hero__vid');
    var dots = hs.querySelectorAll('.hero__slide-dot');
    var isMobile = window.innerWidth < 768;

    function playVideo(video) {
        if (!video) return;
        
        video.muted = true;
        video.playsInline = true;
        video.autoplay = true;

        if (!video.src) {
            var src = video.getAttribute('data-src');
            if (src) {
                video.src = src;
                video.load();
            }
        }

        var playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(function(err) {
                console.warn("Hero video play delayed, waiting for canplay: ", err);
            });
        }

        video.addEventListener('canplay', function onCanPlay() {
            video.play().catch(function(e) {
                console.warn("Hero video play failed in canplay: ", e);
            });
            video.removeEventListener('canplay', onCanPlay);
        });
    }

    function pauseVideo(video) {
        if (video && video.src) {
            video.pause();
        }
    }

    function updateHeroVideos() {
        var activeReel = isMobile ? mv : dv;
        var inactiveReel = isMobile ? dv : mv;

        // Update active reel
        activeReel.forEach(function(vid, index) {
            if (index === cs) {
                vid.classList.add('hero__vid--active');
                playVideo(vid);
            } else {
                vid.classList.remove('hero__vid--active');
                pauseVideo(vid);
            }
        });

        // Ensure inactive reel is hidden and paused
        inactiveReel.forEach(function(vid) {
            vid.classList.remove('hero__vid--active');
            pauseVideo(vid);
        });

        // Update dots
        dots.forEach(function(dot, index) {
            dot.classList.toggle('active', index === cs);
        });

        // Preload next video in active reel
        var nextIndex = (cs + 1) % ts;
        var nextVid = activeReel[nextIndex];
        if (nextVid && !nextVid.src) {
            var nextSrc = nextVid.getAttribute('data-src');
            if (nextSrc) {
                nextVid.src = nextSrc;
                nextVid.load();
            }
        }
    }

    function rotateSlide() {
        cs = (cs + 1) % ts;
        updateHeroVideos();
    }

    // Initialize Hero Videos
    updateHeroVideos();
    si = setInterval(rotateSlide, 6000);

    // Click navigation dots
    dots.forEach(function(dot) {
        dot.addEventListener('click', function() {
            var i = parseInt(this.getAttribute('data-slide'));
            if (!isNaN(i)) {
                cs = i;
                updateHeroVideos();
                clearInterval(si);
                si = setInterval(rotateSlide, 6000);
            }
        });
    });

    // Handle view size adjustments
    window.addEventListener('resize', function() {
        var newIsMobile = window.innerWidth < 768;
        if (newIsMobile !== isMobile) {
            isMobile = newIsMobile;
            updateHeroVideos();
        }
    }, { passive: true });

    // Handle visibility changes
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            clearInterval(si);
            var activeReel = isMobile ? mv : dv;
            if (activeReel[cs]) pauseVideo(activeReel[cs]);
        } else {
            si = setInterval(rotateSlide, 6000);
            var activeReel = isMobile ? mv : dv;
            if (activeReel[cs]) playVideo(activeReel[cs]);
        }
    });
}

/* === LAZY LOAD NON-HERO VIDEOS === */
if ('IntersectionObserver' in window) {
    var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            var video = entry.target;
            if (entry.isIntersecting) {
                video.muted = true;
                video.playsInline = true;
                video.autoplay = true;

                if (!video.src) {
                    var src = video.getAttribute('data-src');
                    if (src) {
                        video.src = src;
                        video.load();
                    }
                }
                
                var playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise.catch(function(err) {
                        console.warn("Lazy video play delayed, waiting for canplay: ", err);
                    });
                }

                video.addEventListener('canplay', function onCanPlay() {
                    video.play().catch(function(e) {
                        console.warn("Lazy video play failed in canplay: ", e);
                    });
                    video.removeEventListener('canplay', onCanPlay);
                });
            } else {
                if (video.src) {
                    video.pause();
                }
            }
        });
    }, { rootMargin: '0px 0px 200px 0px' });

    document.querySelectorAll('.lazy-video').forEach(function(video) {
        lazyVideoObserver.observe(video);
    });
} else {
    // Fallback if IntersectionObserver is not supported
    document.querySelectorAll('.lazy-video').forEach(function(video) {
        var src = video.getAttribute('data-src');
        if (src) {
            video.muted = true;
            video.playsInline = true;
            video.autoplay = true;

            video.src = src;
            video.load();
            video.play().catch(function(err) {
                console.warn("Lazy video play prevented: ", err);
            });
        }
    });
}

/* === MEDIA FALLBACKS === */
document.querySelectorAll('video').forEach(function(v){var n=v.getAttribute('data-name')||v.src;v.addEventListener('error',function(){console.warn('\u26A0 Video failed: '+n);var p=v.closest('.hero__stage,.local__frame,.fl__media');if(p){p.style.background='#F3D9D3';p.style.minHeight='160px';}v.style.opacity='0.15';});v.addEventListener('loadeddata',function(){console.log('\u2713 Video: '+n);});});
document.querySelectorAll('img').forEach(function(i){i.addEventListener('error',function(){var p=i.closest('.fl__media,.svc__media');if(p){p.style.background='#FAECE8';p.style.minHeight='160px';p.style.display='flex';p.style.alignItems='center';p.style.justifyContent='center';var s=document.createElement('span');s.innerHTML='\u2727';s.style.cssText='font-size:2rem;color:#B99A5F;opacity:0.3;';i.style.display='none';p.appendChild(s);}});});

/* === PRELOADER LOGIC === */
(function() {
    var preloader = document.getElementById('preloader');
    var preloaderStatus = document.getElementById('preloaderStatus');
    
    if (preloader) {
        var progress = 10;
        var statusTexts = [
            { limit: 35, text: "Inspiring Ideas..." },
            { limit: 65, text: "Setting The Stage..." },
            { limit: 90, text: "Polishing Details..." },
            { limit: 99, text: "Ready..." },
            { limit: 100, text: "Welcome" }
        ];

        function setProgress(val) {
            progress = Math.max(progress, val);
            
            // Find appropriate text
            if (preloaderStatus) {
                for (var i = 0; i < statusTexts.length; i++) {
                    if (progress <= statusTexts[i].limit || statusTexts[i].limit === 100) {
                        preloaderStatus.textContent = statusTexts[i].text;
                        break;
                    }
                }
            }

            if (progress >= 100) {
                setTimeout(function() {
                    preloader.classList.add('fade-out');
                }, 500);
            }
        }
        
        // Start dummy progress loading
        var timer = setInterval(function() {
            if (progress < 85) {
                setProgress(progress + Math.floor(Math.random() * 8) + 2);
            }
        }, 120);

        // Listen to the first active video ready state
        var activeVideo = document.querySelector('.hero__vid--active');
        if (activeVideo) {
            activeVideo.addEventListener('canplay', function onVideoCanPlay() {
                setProgress(100);
                clearInterval(timer);
                activeVideo.removeEventListener('canplay', onVideoCanPlay);
            });
        }

        // Fallback if video takes too long or page loads fully
        window.addEventListener('load', function() {
            setProgress(100);
            clearInterval(timer);
        });
    }
})();

addEventListener('load',function(){var v=document.querySelectorAll('video'),l=0;v.forEach(function(x){if(x.readyState>=2)l++;});console.log('%c\u2726 Creative Events by Apollo %c\u00b7 %cThe Light Smile %c\u00b7 Vadakara, Kerala','color:#B99A5F;','color:#7B746A;','font-style:italic;color:#7B746A;','font-size:0.7rem;color:#B0ACA5;');console.log('Videos loaded initially: '+l+'/'+v.length);});
})();
