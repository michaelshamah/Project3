$(document).ready(function() {
  console.log('hello');
  function getUniv(event){
  event.preventDefault();
  let country= $(event.target).prev().val()
  let school = $(event.target).prev().prev().val()
  let url= `/apis?name=${school}&country=${country}`
  fetch(url).then(data=>data.json()).then(data=>{
    data = JSON.parse(data)
    createList(data)
    })
  }


  function createList(univs){
    $container= $('#container')
    univs.forEach(univ=>{
      let $name= $('<li>').text(univ.name)
      let $website= $('<li>').text(univ.web_page)
      let $save= $('<button>').attr({
        class: 'save',
        id: univ.name}).text('save');
      $container.append($name).append($website)
      $container.append($save)
      $save.click(saveUniv);
    })
  }

  function saveUniv(event){
    console.log('saved')
    let name = $(event.target).prev().prev().text()
    let website =$(event.target).prev().text()
    console.log(name)
    console.log(website)
    fetch("/univs", {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body : JSON.stringify({
        name: name,
        website: website
      })
    }).then(data=>data.json()).then(data=>{
      console.log('saved')
      return data
      })
  };


  $('#button').click(getUniv);

});
