$(document).ready(function() {
  console.log('hello');
  function getUniv(event){
  event.preventDefault();
  let country= $(event.target).prev().val()
  let school = $(event.target).prev().prev().val()
  let url= `/apis?name=${school}&country=${country}`
  fetch(url).then(data=>{
   data.json()
  }).then(data=>{
    console.log(data)
    createList(univs)
    })
  // let univs= [{web_page: "http://www.mtsu.edu/", country: "USA", domain: "mtsu.edu", name: "Middle Tennessee State University"},
  //   {web_page: "http://www.mga.edu/", country: "USA", domain: "mga.edu", name: "Middle Georgia State College"},
  //   {web_page: "http://www.middlebury.edu/", "country": "USA", domain: "middlebury.edu", name: "Middlebury College"}]
  // createList(univs)
  }


  function createList(univs){
    console.log('hi')
    $container= $('#container')
    univs.forEach(univ=>{
      let $name= $('<li>').text(univ.name)
      let $website= $('<li>').text(univ.web_page)
      let $save= $('<button>').attr({
        class: 'save',
        id: univ.name}).text('save');
      $container.append($name).append($website)

      $container.append($save)
    })
  }

  function saveUniv(event){
    event.preventDefault();
    console.log('saved')

  }
  // $('button').c
  $('#button').click(getUniv);

});
