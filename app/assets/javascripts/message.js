$(function(){
  function buildHTML(message){
    var html =
    `<div class="message">
      <div class="maincontent__bottom--username">
      ${message.user_name}
      </div>
      <div class="maincontent__bottom--dateandtime">
      ${message.data}
      </div>
      <div class="maincontent__bottom--message">
      ${message.content}
      </div>
      <img src="${message.image}">
    </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    // console.log(this)
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
