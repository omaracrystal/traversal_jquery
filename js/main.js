// add scripts

$(document).on('ready', function() {

  // console.log('sanity check!');

  var heading = $('#first-heading');
  // console.log(heading);

  heading.append('Hello');

  //var test = $('.container p').first();
  var test= $('.container p').first().append("<span> span</span>");

  $('p:eq(3)').append('&nbsp;&nbsp<span>appending</span>');

  // heading.empty();

  var test = heading.clone();
  var testClone = $('#delegate');

  $('button').on('click', function() {
    // console.log(this);
    // console.log($(this).text('change it'));
    // console.log($(this).css('background', 'yellow'));
    // console.log($(this).siblings());
    console.log($(this).closest().find('h1'));
  });

//this will start the search from id minor-btn instead of the document- this way is less expensive
  $('#delegate').on('click', '#minor-btn', funtion(){

  })

});

