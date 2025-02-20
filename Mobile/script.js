$(document).ready(function () {
    $('.collapse-title').on('click', function () {
        $(this).parents().parents().children('.collapse-item').removeClass('active')
        $(this).parents('.collapse-item').addClass('active')
    })

    $('.list-gallery .gallery-item').on('click', function () {
        $('.list-gallery .gallery-item').removeClass('active')
        $(this).addClass('active')
        startGalleryInterval()
    })

    $('.float-contact-btn').on('click', function () {
        $('.float-contact').toggleClass('active')
    })

    let interval

    function startGalleryInterval() {
        if (interval) {
            clearInterval(interval)
        }

        interval = setInterval(function () {
            let currentActive = $('.gallery-item.active')
            let nextActive = currentActive.next('.gallery-item')

            if (nextActive.length === 0) {
                nextActive = $('.gallery-item').first()
            }

            currentActive.removeClass('active')
            nextActive.addClass('active')
        }, 5000)
    }

    startGalleryInterval()

    let isScrollDisabled = false
    $('.navigation .apps').on('click', function () {
        $('.float-sidebar').toggleClass('active')

        isScrollDisabled = !isScrollDisabled

        if (isScrollDisabled) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    })

    $('#menu-item-intro').on('click', function () {
        closeSidebar()
        document.getElementById('intro').scrollIntoView({
            behavior: 'smooth',
        })
    })
    $('#menu-item-services').on('click', function () {
        closeSidebar()
        document.getElementById('services').scrollIntoView({
            behavior: 'smooth',
        })
    })
    $('#menu-item-products').on('click', function () {
        closeSidebar()
        document.getElementById('products').scrollIntoView({
            behavior: 'smooth',
        })
    })

    function closeSidebar() {
        $('.float-sidebar').removeClass('active')
        document.body.style.overflow = ''
    }
})
