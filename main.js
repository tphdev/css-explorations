var createList = function(el, examplesArray){
  examplesArray.forEach(function(ex){
    el.innerHTML +='<li><a href='+'"./'+ex.dir+'/index.html'+'">'+ex.title+'</a></li>'
  })
}


var cssSnippetsList = [
  {
    title: 'Fade On Scroll',
    dir: 'scroll-fader'
  },
  {
    title: 'Flippy Card',
    dir: 'flippy-card'
  }
]



var listContainer_el = document.querySelector('ul')
createList(listContainer_el, cssSnippetsList)