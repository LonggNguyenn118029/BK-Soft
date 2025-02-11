document.querySelector('.component-1').addEventListener('click', function () {
  document.getElementById('dichvu').scrollIntoView({
    behavior: 'smooth',
  })
})

document.querySelector('.component').addEventListener('click', function () {
  document.getElementById('hero').scrollIntoView({
    behavior: 'smooth',
  })
})

document.querySelector('.component-2').addEventListener('click', function () {
  document.getElementById('sanpham').scrollIntoView({
    behavior: 'smooth',
  })
})

$(document).ready(function () {
  const ellipseTop = 37
  const ellipseStep = 72

  $('.target-title').on('click', function () {
    $('.target-title').removeClass('active')
    $('.target-content').removeClass('active')
    $(this).addClass('active')

    const index = $(this).index('.target-title')
    $('.target-content').eq(index).addClass('active')

    $('.ellipse').css('top', ellipseTop + ellipseStep * index + 'px')
  })

  $('.list-gallery .gallery-item').mouseenter(function () {
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
})
