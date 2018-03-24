$(function(){
  function buildHTML(message){
    var img = ""
    if(message.image !==null){
      img = `<img src="${message.image}">`
    }
    var html =
      `<div class="message" data-message-id="${message.id}">
      <p class="maincontent__bottom--username">
      ${message.user_name}
      </p>
      <p class="maincontent__bottom--dateandtime">
      ${message.data}
      </p>
      <p class="maincontent__bottom--message">
      ${message.content}
      </p>
      ${img}
      </div>`
    return html;

  }

var interval = setInterval(function(){
  // メッセージのラストのid メッセージがない場合0にする
  if($('.message')[0]){
  var message_id = $('.message:last').data('message-id');
   }else{
    var message_id = 0
   }
  if(window.location.href.match(/\/groups\/\d+\/messages/)){
    $.ajax({
      url: window.location.href,
      dataType: 'json',
      data: {
        message: {id: message_id}
      },
      type: "GET",
    })
    .done(function(data){
      var insertHTML = '';
      data.messages.forEach(function(message) {
        insertHTML += buildHTML(message);
        $(".maincontent__bottom").append(insertHTML);
      });
    })
    .fail(function(data){
      alert('更新に失敗しました');
    });
}
}else{
  clearInterval(interval);
}}, 5000);
});
