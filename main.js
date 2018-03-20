$(function() {
  $('.search').on('click', (e) => {
    e.stopPropagation()
    $('.content-search').css('width', '200px')
  })
  $('body').on('click', (e) => {
    // hide search
    $('.content-search').css('width', '100px')
  })

  // Menu
  $('.btn-menu').on('click', (e) => {
    e.stopPropagation()
    $('.menu').slideToggle()
  })

  // Submenu
  $('.btn-submenu').on('mouseover', (e) => {
    e.stopPropagation()
    var $submenu = $(e.target).children('.submenu')
    $($submenu).css({
      display: 'block',
      right: '202px'
    })
  })
  $('.btn-submenu').on('mouseout', (e) => {
    e.stopPropagation()
    var $submenu = $(e.target).children('.submenu')
    $($submenu).css({
      right: '0',
      display: 'none'
    })
  })
})
