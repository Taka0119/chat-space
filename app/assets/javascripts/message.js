$(function(){

  function buildHTML(message){
    if ( message.image ) {
      var html =
        `<div class="main-message-box">
          <div class="main-message-box-info">
            <div class="main-message-box-info__user">
              ${message.user_name}
            </div>
            <div class="main-message-box-info__time">
              ${message.created_at}
            </div>
          </div>
          <div class="main-message-box-text">
            ${message.content}
            <img class="main-message-box__image" src=${message.image}>
          </div>
        </div>`
      return html;
    } else {
      var html =
        `<div class="main-message-box">
          <div class="main-message-box-info">
            <div class="main-message-box-info__user">
              ${message.user_name}
            </div>
            <div class="main-message-box-info__time">
              ${message.created_at}
            </div>
          </div>
          <div class="main-message-box-text">
            ${message.content}
          </div>
        </div>`
      return html;
    };
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');

    $('.submit-btn').removeAttr('data-disable-with');

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.main-message').append(html);
      $('.main-message').animate({ scrollTop: $('.main-message')[0].scrollHeight});
      $('form')[0].reset();
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});