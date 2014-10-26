$(function() {
    var products = ['alarm clock', 'television', 'microwave', 'keyboard', 'water bottle', 'eBook reader', 'phone', 'chair', 'trash can', 'stopwatch', 'wallet'];
    var constraints = ['for the visually impaired', 'for the elderly', 'for children', 'for families with children', 'for the hearing impaired', 'for the speech impaired'];
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    $("#prompt-btn").click(function() {
        var product = products[Math.floor(Math.random()*products.length)];
        var prefix;
        if (vowels.indexOf(product.charAt(0)) !== -1) {
            prefix = "Design an ";
        }
        else {
            prefix = "Design a ";
        }
        $("#prompt").text(prefix + product + " " + constraints[Math.floor(Math.random()*constraints.length)] + ".");
        $(this).text("Get another prompt!");
    });
});