$(function(){
  function buildHTML(message){
    var img = ""
    if(message.image !==null){
      img = `<img src="${message.image}">`
    }
    var html =
    `<div class="message" data-message-id="${message.id}">
      <div class="maincontent__bottom--username">
      ${message.user_name}
      </div>
      <div class="maincontent__bottom--dateandtime">
      ${message.data}
      </div>
      <div class="maincontent__bottom--message">
      ${message.content}
      </div>
       ${img}
    </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
  })
.done(function(data){
  var html = buildHTML(data);
  $('.maincontent__bottom').append(html)
  $('.form__message').val('')
  $('html,body').animate({scrollTop:$('.message')}, '500');
  $(".filesend").prop('disabled', false);
})
    .fail(function(){
      alert('error');
    })
})
});
