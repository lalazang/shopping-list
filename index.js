$(function(){

    $('#js-shopping-list-form').submit(function(event){
      event.preventDefault();
      let newItem = $(this).find('#shopping-list-entry').val();
      $('.shopping-list').append($(`
        <li>
          <span class="shopping-item">${newItem}</span>
          <div class="shopping-item-controls">
           <button class="shopping-item-toggle">
             <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`
      ));

      $('#shopping-list-entry').val("");

    });

    $('.shopping-list').on('click', '.shopping-item-delete', function(event){
      console.log('delete clicked');
      $(this).closest('li').remove();
    });

    $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
      console.log('check clicked');
      $(this).closest('li').children('.shopping-item').toggleClass("shopping-item__checked");

    });

});