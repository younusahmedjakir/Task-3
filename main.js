var formValue = document.getElementById("main-form")
// function onsubmit({var formValue = document.getElementById("main-form")})
formValue.onclick = function() { 
    var promoCode = document.getElementById("promo-code");
    var city = document.getElementById("city");
    var restaurantId = document.getElementById("restaurant-id");
    var restaurantGroup = document.getElementById("restaurant-group");
    var userId = document.getElementById("user-id");
    var partner = document.getElementById("partner");
    var value = document.getElementById("value");
    var valueType = document.getElementById("value-type");
    var maxValue = document.getElementById("max-value");
    var validityPeriod = document.getElementById("validity-period");
    var maxUser = document.getElementById("max-use-per-hour");
    var usageLimit = document.getElementById("usage-limit");
    var firstPromo = document.getElementById("first-promo");
    var cityFirst = document.getElementById("city-first-time");
    var firstTrip = document.getElementById("first-trip");
    var minimumOrder = document.getElementById("minimum-order-value");
    var startDate = document.getElementById("stat-date");
    var startTime = document.getElementById("start-time");
    var endDate = document.getElementById("end-date");
    var endTime = document.getElementById("end-time");
}
if( document.getElementById("main-form") ) {
    alert( "Successful" );
    return true;
 }
 return( false );