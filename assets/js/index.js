$(function(){var e=["alarm clock","television","microwave","keyboard","water bottle","eBook reader","phone","chair","trash can","stopwatch","wallet"],t=["for the visually impaired","for the elderly","for children","for families with children","for the hearing impaired","for the speech impaired"];$("#prompt-btn").click(function(){var r,a=e[Math.floor(Math.random()*e.length)],o=["a","e","i","o","u"];r=o.contains(a.charAt(0))?"Design an ":"Design a ",$("#prompt").text(r+a+" "+t[Math.floor(Math.random()*t.length)]+"."),$(this).text("Get another prompt!")})});