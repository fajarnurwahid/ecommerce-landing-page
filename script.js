// start: AOS
AOS.init({
    once: true,
    offset: 100,
    duration: 800
});
// end: AOS



// start: Topbar
document.querySelector('.topbar-translate-toggle').addEventListener('click', function(e) {
    e.preventDefault()
    this.nextElementSibling.classList.toggle('active')
});

document.addEventListener('click', function(e) {
    if(!e.target.matches('.topbar-translate, .topbar-translate *')) {
        document.querySelector('.topbar-translate-dropdown').classList.remove('active')
    }
});
// end: Topbar



// start: Navbar
document.querySelector('.navbar-link-toggle').addEventListener('click', function(e) {
    e.preventDefault()
    document.querySelector('.navbar-menu').classList.add('shown')
    document.body.classList.add('no-scroll')
});
document.querySelector('.navbar-menu-header-close').addEventListener('click', function(e) {
    e.preventDefault()
    document.querySelector('.navbar-menu').classList.remove('shown')
    document.body.classList.remove('no-scroll')
});

document.querySelector('.navbar-form-input').addEventListener('focus', function() {
    const thisEl = this
    document.querySelector('.navbar-form-autocomplete-wrapper')?.remove()
    document.querySelector('.navbar-form').classList.add('active')

    this.parentNode.insertAdjacentHTML('beforeend', `<div class="navbar-form-autocomplete-wrapper">
        <div class="navbar-form-autocomplete-box">
            <div class="navbar-form-autocomplete-box-header">
                <div class="navbar-form-autocomplete-box-title">Popular Searches</div>
            </div>
            <div class="navbar-form-autocomplete-box-result">
                <button type="button" data-value="Keyword 1"><i class="ri-search-line"></i> Keyword 1</button>
                <button type="button" data-value="Keyword 2"><i class="ri-search-line"></i> Keyword 2</button>
                <button type="button" data-value="Keyword 3"><i class="ri-search-line"></i> Keyword 3</button>
            </div>
        </div>
        <div class="navbar-form-autocomplete-box">
            <div class="navbar-form-autocomplete-box-header">
                <div class="navbar-form-autocomplete-box-title">Recent Searches</div>
                <a href="#" class="navbar-form-autocomplete-box-delete"><i class="ri-delete-bin-line"></i></a>
            </div>
            <div class="navbar-form-autocomplete-box-result">
                <button type="button" data-value="Keyword 1">
                    <i class="ri-search-line"></i> Keyword 1 
                    <a href="#" class="navbar-form-autocomplete-box-result-item-delete">&times;</a>
                </button>
                <button type="button" data-value="Keyword 2">
                    <i class="ri-search-line"></i> Keyword 2 
                    <a href="#" class="navbar-form-autocomplete-box-result-item-delete">&times;</a>
                </button>
                <button type="button" data-value="Keyword 3">
                    <i class="ri-search-line"></i> Keyword 3 
                    <a href="#" class="navbar-form-autocomplete-box-result-item-delete">&times;</a>
                </button>
            </div>
        </div>
    </div>`)

    this.parentNode.querySelectorAll('.navbar-form-autocomplete-box-result > *').forEach(function(el) {
        el.addEventListener('click', function() {
            thisEl.value = el.dataset.value
        })
    })
});
document.querySelector('.navbar-form-input').addEventListener('blur', function() {
    setTimeout(function() {
        document.querySelector('.navbar-form-autocomplete-wrapper')?.remove()
    }, 150)
});
document.querySelector('.navbar-form-close').addEventListener('click', function(e) {
    e.preventDefault()
    document.querySelector('.navbar-form').classList.remove('active')
    document.querySelector('.navbar-form-autocomplete-wrapper')?.remove()
});
// end: Navbar



// start: Category
document.querySelector('.category-arrow.prev').addEventListener('click', function(e) {
    e.preventDefault()
    const scroller = document.querySelector('.category-link')
    scroller.scrollLeft -= scroller.offsetWidth
});
document.querySelector('.category-arrow.next').addEventListener('click', function(e) {
    e.preventDefault()
    const scroller = document.querySelector('.category-link')
    scroller.scrollLeft += scroller.offsetWidth
});
document.querySelector('.category-link').addEventListener('scroll', function() {
    document.querySelector('.category-arrow.prev').classList.toggle('hidden', this.scrollLeft < 24)
    document.querySelector('.category-arrow.next').classList.toggle('hidden', this.scrollLeft > this.scrollWidth - this.offsetWidth - 24)
});
// end: Category



// start: Hero
(function() {
    let i = 0
    function heroAnimate() {
        const heroImages = document.querySelectorAll('.hero-image')
        const heroItems = document.querySelectorAll('.hero-item')

        if(heroImages.length !== heroItems.length) return

        heroImages.forEach(function(el) {
            el.classList.remove('active')
        })
        heroItems.forEach(function(el) {
            el.classList.remove('active')
        })
        heroImages[i].classList.add('active')
        heroItems[i].classList.add('active')

        i++

        if(i >= heroImages.length) {
            i=0
        }

        setTimeout(function() {
            requestAnimationFrame(heroAnimate)
        }, 10000)
    }
    heroAnimate()
})();
// end: Hero



// start: Product
document.querySelector('.product-arrow.prev').addEventListener('click', function(e) {
    e.preventDefault()
    const scroller = document.querySelector('.product-grid-scroller')
    scroller.scrollLeft -= scroller.offsetWidth
});
document.querySelector('.product-arrow.next').addEventListener('click', function(e) {
    e.preventDefault()
    const scroller = document.querySelector('.product-grid-scroller')
    scroller.scrollLeft += scroller.offsetWidth
});
document.querySelector('.product-grid-scroller').addEventListener('scroll', function() {
    document.querySelector('.product-arrow.prev').classList.toggle('hidden', this.scrollLeft < 24)
    document.querySelector('.product-arrow.next').classList.toggle('hidden', this.scrollLeft > this.scrollWidth - this.offsetWidth - 24)
});

document.querySelectorAll('[data-tab]').forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.preventDefault()
        document.querySelectorAll('[data-tab]').forEach(function(i) {
            if(i === el) {
                i.classList.add('active')
                document.querySelector('[data-tab-item="'+i.dataset.tab+'"]').classList.add('shown')
            } else {
                i.classList.remove('active')
                document.querySelector('[data-tab-item="'+i.dataset.tab+'"]').classList.remove('shown')
            }
        })
    })
})
// end: Product