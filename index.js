$(function(){var e=["alarm clock","television","microwave","keyboard","water bottle","eBook reader","phone","chair","trash can"],r=["for the visually impaired","for the elderly","for children","for families with children","for the hearing impaired","for the speech impaired"];$("#prompt-btn").click(function(){var t,a=e[Math.floor(Math.random()*e.length)];t="a"==a.charAt(0)?"Design an ":"Design a ",$("#prompt").text(t+a+" "+r[Math.floor(Math.random()*r.length)]+"."),$(this).text("Get another prompt!")})});