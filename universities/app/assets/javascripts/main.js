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
    $container= $('tbody')
    univs.forEach((univ, index)=>{
      let row= $('<tr>')
      let $number= $('<td>').text(index)
      let $name= $('<td>').text(univ.name)
      let $website= $('<td>').text(univ.web_page)
      let $save= $('<td>').attr({
        class: 'save btn btn-default btn-success',
        id: univ.name}).text('save');
      row.append($number).append($name).append($website).append($save)
      $container.append(row)
      $save.click(saveUniv);
    })
  }

  function saveUniv(event){
    let name = $(event.target).prev().prev().text()
    let website =$(event.target).prev().text()
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
    $(event.target).parent().remove()
  };
  // function updateUniv(event){
  //   let name = $(event.target).prev().prev().text()
  //   let id = $(event.target).prev().prev().val()
  //   let website =$(event.target).prev().text()
  //   fetch(`/univs/${id}`, {
  //     method: 'PUT',
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8"
  //     },
  //     body : JSON.stringify({
  //       name: name,
  //       website: website
  //     })
  //   }).then(data=>data.json()).then(data=>{
  //     console.log('saved')
  //     return data
  //     })
  // };

  function myUniv(event){
    fetch('/univs').then(data=>data.json()).then(data=>{
    myList(data)
    })
  }
  function myUniv(event){
    fetch('/univs').then(data=>data.json()).then(data=>{
    myList(data)
    })
  }

  function myList(univs){
    let $container= $('#mine')
    univs.forEach(univ=>{
      let $name= $('<li>').text(univ.name).val(univ.id)
      let $website= $('<li>').text(univ.site)
      let $remove= $('<button>').attr({class: 'remove btn-danger btn btn-default'}).text('remove');
      let $update= $('<button>').attr({class: 'update btn-warning btn btn-default', 'data-toggle': "modal", 'data-target': "#myModal", type: 'button'}).text('update');
      $container.append($name).append($website)
      $container.append($update)
      $container.append($remove)
      $remove.click(remove);
      $update.click(update);
    })
  }
  function update(event){
    let name = $(event.target).prev().prev().text()
    let site = $(event.target).prev().text()
    let id = $(event.target).prev().prev().val()

  }
  function remove(event){
    let name = $(event.target).prev().prev().prev().val()
    console.log(name)
    fetch(`/univs/${name}`, {
      method: 'delete',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(data=>data.json()).then(data=>{
      console.log('deleted')
      return data
      })
    $(event.target).prev().prev().prev().remove()
    $(event.target).prev().prev().remove()
    $(event.target).prev().remove()
    $(event.target).remove()

  };
  myUniv()
  $('#button').click(getUniv);

});
