$(document).ready(function () {
   $('.time-btn').click(function () {
      $('.time-btn').attr("disabled", false);
      $('.move-next').css('display', 'none');
      $(this).attr("disabled", true);
      $(this).next('.move-next').css('display', 'flex');
   });

   $('.timezone-item').click(function () {
      $('.timezone-item').removeClass('active');
      $(this).addClass('active');
      let area = $(this).children('.area').text();
      let time = $(this).children('.time').text();
      $('.selected-timezone').text(`${area} (${time})`);
   });

   $('.move-next').click(function () {
      $('.main-right').css('display', 'none');
      $('.right-after').css('display', 'block');
      $('.show-after').css('display', 'flex');
      $('.back-btn').show();
   });

   $('.back-btn').click(function () {
      $('.main-right').css('display', 'flex');
      $('.right-after').css('display', 'none');
      $('.show-after').css('display', 'none');
      $('.add-guest-btn').show();
      $(this).hide();
   });

   $('.add-guest-btn').click(function () {
      $('#add-guest-box').show();
      $(this).hide();
   });


   dycalendar.draw({
      target: '#dycalendar',
      type: 'month',
      date: 18,
      highlighttargetdate: true,
      dayformat: "ddd",
      monthformat: "full",
      prevnextbutton: "show"
   });
})