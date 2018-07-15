//used for livereload
    document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
    ':35729/livereload.js?snipver=1"></' + 'script>')



//bulma fixed tabs
// not waiting for document ready, as this script is added at bottom of page
getAll('.tabs.is-fixed-top,.tabs.is-fixed-bottom').forEach(function(elem){

  var margin = window.getComputedStyle ? getComputedStyle(elem, null) : elem.currentStyle
  var marginSize;

  if(elem.classList.contains('is-fixed-top')) {
    marginSize = parseInt(margin.marginTop)
    var margin = (parseInt(margin.marginBottom) || 0)
    var topNavHeight = elem.offsetHeight

    var addTo = getAll('.insert-padding-for-fixed-tabs')[0]
    addTo.style.marginTop = topNavHeight
    addTo.style.paddingTop = margin

  }else if(elem.classList.contains('is-fixed-bottom')) {
    marginSize = parseInt(margin.marginBottom)
    var margin = (parseInt(margin.marginTop) || 0)
    var botNavHeight = elem.offsetHeight

    var addTo = getAll('.insert-padding-for-fixed-tabs')[0]
    addTo.style.marginBottom = botNavHeight
    addTo.style.paddingBottom = margin
  }
})


// tabs navigation

getAll('.tabs li').forEach(function(elm){
  elm.addEventListener('click', function(){
    tabsource = this.querySelector('a').dataset.tabsource

    tabContentToShow = getAll("." + tabsource)[0]
    getAll('.tabs li').forEach(function(elm){
      elm.classList.remove('is-active')
    })

    this.classList.add('is-active')

    getAll('.tab-content').forEach(function(elm){
      elm.classList.remove('is-active')
    })

    tabContentToShow.classList.add('is-active')
    getElm('.main').scroll(0,0)

  })
})
























// helper functions
function getElm(selector){
  return document.querySelectorAll(selector)[0]
}
function getAll(selector) {
  return Array.prototype.slice.call(document.querySelectorAll(selector), 0)
}
