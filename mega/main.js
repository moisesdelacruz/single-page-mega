$(function() {
  $('.search').on('click', (e) => {
    e.stopPropagation()
    $('.content-search').css('width', '200px')
  })
  $('body').on('click', (e) => {
    $('.content-search').css('width', '100px')
  })
})
