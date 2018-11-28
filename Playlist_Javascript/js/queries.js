$(function(){
    var playlist = true;
    var menulist = true;
    var audio;
    $(".playlist-toggle").click(function(event){
        event.stopPropagation();
        if(playlist == true){
            playlist = false;
            menulist = true;
            $(".menulist-container").css({"opacity": "0","right": "-100%"});
            document.getElementById("menuToggle").setAttribute("d", "M 0,15 50,15 50,30 0,30 z M 100,15 50,15 50,30 100,30 z M 100,57.5 100,42.5 0,42.5 0,57.5 z M 0,85 50,85 50,70 0,70 z M 100,85 50,85 50,70 100,70");
            $(".playlist-container").css({"opacity": "1","right": "0"});
            document.getElementById("playlist").setAttribute("d", "M 10.8,7.2 7.2,10.8 14.4,18 18,14.4 z M 25.2,7.2 28.8,10.8 21.6,18 18,14.4 z M 18,14.4 14.4,18 18,21.6 21.6,18 z M 10.8,28.8 7.2,25.2 14.4,18 18,21.6 z M 25.2,28.8 28.8,25.2 21.6,18 18,21.6");
        }else{
            playlist = true;
            $(".playlist-container").css({"opacity": "0","right": "-100%"});
            document.getElementById("playlist").setAttribute("d", "M 0,5.1 0,10.8 32.4,10.8 32.4,5.1 z M 32.4,5.1 32.4,10.8 32.4,10.8 32.4,5.1 z M 0,15.2 0,20.8 32.4,20.8 32.4,15.2 z M 0,30.9 0,25.2 21.6,25.2 21.6,30.9 z M 36,29.6 36,29.6 25.2,23 25.2,36");
        }
    });
    $(".menu-toggle").click(function(event){
        event.stopPropagation();
        if(menulist == true){
            menulist = false;
            playlist = true;
            $(".playlist-container").css({"opacity": "0","right": "-100%"});
            document.getElementById("playlist").setAttribute("d", "M 0,5.1 0,10.8 32.4,10.8 32.4,5.1 z M 32.4,5.1 32.4,10.8 32.4,10.8 32.4,5.1 z M 0,15.2 0,20.8 32.4,20.8 32.4,15.2 z M 0,30.9 0,25.2 21.6,25.2 21.6,30.9 z M 36,29.6 36,29.6 25.2,23 25.2,36");
            $(".menulist-container").css({"opacity": "1","right": "0"});
            document.getElementById("menuToggle").setAttribute("d", "M 30,20 50,40 40,50 20,30 z M 70,20 50,40 60,50 80,30 z M 50,40 40,50 50,60 60,50 z M 30,80 50,60 40,50 20,70 z M 70,80 50,60 60,50 80,70");
        }else{
            menulist = true;
            $(".menulist-container").css({"opacity": "0","right": "-100%"});
            document.getElementById("menuToggle").setAttribute("d", "M 0,15 50,15 50,30 0,30 z M 100,15 50,15 50,30 100,30 z M 100,57.5 100,42.5 0,42.5 0,57.5 z M 0,85 50,85 50,70 0,70 z M 100,85 50,85 50,70 100,70");
        }
    });
    //Initializer - Prepare First Song
    initAudio($('#playlist-menu li:first-child'));
    function initAudio(element){
        var song = element.attr('song');
        var title = element.attr("title");
        var cover = element.attr('cover');
        var artist = element.attr('artist');

        //Create a New Audio Object
        audio = new Audio('audio/' + song);
        audio.id = "myAudio";

        $('.title').html("<b>"+artist+"</b>&nbsp;-&nbsp;"+title);

        //Insert Cover Image
        $('.main-cover').attr('src','images/covers/' + cover);
        $(".body-frame").css("background-image","url(images/covers/"+cover+")");
        $(".title").attr('title',artist+" - "+title);

        $('#playlist-menu li').removeClass('active');
        element.addClass('active');
    }
    $(".controls-play").click(function(){
        if(audio.paused){
            audio.play();
            timers();
            ends();
            document.getElementById("play").setAttribute("d", "M 20,20 20,80 40,80 40,20 z M 60,20 60,80 80,80 80,20 z");
        }else{
            audio.pause();
            document.getElementById("play").setAttribute("d", "M 20,20 20,80 59.5,60 59.5,40 z M 59.5,40 59.5,60 80,50 80,50 z");
        }
    });
    $(document).keydown(function(e){
        if (e.keyCode == 32) {
            if(audio.paused){
                audio.play();
                timers();
                ends();
                document.getElementById("play").setAttribute("d", "M 20,20 20,80 40,80 40,20 z M 60,20 60,80 80,80 80,20 z");
            }else{
                audio.pause();
                document.getElementById("play").setAttribute("d", "M 20,20 20,80 59.5,60 59.5,40 z M 59.5,40 59.5,60 80,50 80,50 z");
            }
        }
    });
    $(".next-container").click(function(){
        audio.pause();
        audio.currentTime = 0;
        var next = $('#playlist-menu li.active').next();
        if (next.length == 0) {
            next = $('#playlist-menu li:first-child');
        }
        initAudio(next);
        audio.play();
        timers();
        ends();
        document.getElementById("play").setAttribute("d", "M 20,20 20,80 40,80 40,20 z M 60,20 60,80 80,80 80,20 z");
    });
    $(document).keydown(function(e){
        if (e.keyCode == 39) {
            audio.pause();
            var next = $('#playlist-menu li.active').next();
            if (next.length == 0) {
                next = $('#playlist-menu li:first-child');
            }
            initAudio(next);
            audio.play();
            timers();
            ends();
            document.getElementById("play").setAttribute("d", "M 20,20 20,80 40,80 40,20 z M 60,20 60,80 80,80 80,20 z");
        }
    });
    $(".previous-container").click(function(){
        audio.pause();
        var prev = $('#playlist-menu li.active').prev();
        if (prev.length == 0) {
            prev = $('#playlist-menu li:last-child');
        }
        initAudio(prev);
        audio.play();
        timers();
        ends();
        document.getElementById("play").setAttribute("d", "M 20,20 20,80 40,80 40,20 z M 60,20 60,80 80,80 80,20 z");
    });
    $(document).keydown(function(e){
        if (e.keyCode == 37) {
            audio.pause();
            var prev = $('#playlist-menu li.active').prev();
            if (prev.length == 0) {
                prev = $('#playlist-menu li:last-child');
            }
            initAudio(prev);
            audio.play();
            timers();
            ends();
            document.getElementById("play").setAttribute("d", "M 20,20 20,80 40,80 40,20 z M 60,20 60,80 80,80 80,20 z");
        }
    });
    $('#playlist-menu li').click(function () {
        audio.pause();
        initAudio($(this));
        audio.play();
        timers();
        ends();
        document.getElementById("play").setAttribute("d", "M 20,20 20,80 40,80 40,20 z M 60,20 60,80 80,80 80,20 z");
    });
    $("#playlist-menu li a").click(function(e){
        e.preventDefault();
    });
    $(".loop-container").click(function(){
        if (audio.loop == false) {
            audio.loop = true;
            $("#loop").css("fill","#2c9ce8");
        }
        else {
            audio.loop = false;
            $("#loop").css("fill","#708499");
        };
    });
    function timers(){
        $(audio).bind('timeupdate', function(){
            var durationSeekr = document.getElementById("seeker-container").offsetWidth;
            var currentPos = this.currentTime;
            var maxduration = this.duration;
            var perc = 100 * currentPos / maxduration;
            var totalHours = Math.floor(this.currentTime / 3600);
            var minutes = Math.floor(this.currentTime % 3600 / 60);
            var currentSeconds = Math.floor(this.currentTime % 60);
            var durationHours = Math.floor(this.duration / 3600);
            var duration = Math.floor(this.duration % 3600 / 60);
            var durationSeconds = Math.floor(this.duration % 60);
            var seconds = Math.floor(durationSeekr / 100 * perc);
            var LongDecimal = seconds.toFixed(99);
            $('#seeker').css('width',LongDecimal+'px');
            if(totalHours >= 1){
                if(totalHours <= 9){
                    if(minutes <= 9){
                        if(currentSeconds <= 9){
                            $(".current-time").text("0"+totalHours+":"+"0"+minutes+":"+"0"+currentSeconds);
                        }else if(currentSeconds >= 10){
                            $(".current-time").text("0"+totalHours+":"+"0"+minutes+":"+currentSeconds);
                        }
                    }else if(minutes >= 10){
                        if(currentSeconds <= 9){
                            $(".current-time").text("0"+totalHours+":"+minutes+":"+"0"+currentSeconds);
                        }else if(currentSeconds >= 10){
                            $(".current-time").text("0"+totalHours+":"+minutes+":"+currentSeconds);
                        }
                    }
                }else if(totalHours >= 10){
                    if(minutes <= 9){
                        if(currentSeconds <= 9){
                            $(".current-time").text(totalHours+":"+"0"+minutes+":"+"0"+currentSeconds);
                        }else if(currentSeconds >= 10){
                            $(".current-time").text(totalHours+":"+"0"+minutes+":"+currentSeconds);
                        }
                    }else if(minutes >= 10){
                        if(currentSeconds <= 9){
                            $(".current-time").text(totalHours+":"+minutes+":"+"0"+currentSeconds);
                        }else if(currentSeconds >= 10){
                            $(".current-time").text(totalHours+":"+minutes+":"+currentSeconds);
                        }
                    }
                }
            }else if(totalHours < 1){
                if(currentSeconds <= 9){
                    $(".current-time").text(minutes+":"+"0"+currentSeconds);
                }else if(currentSeconds >= 10){
                    $(".current-time").text(minutes+":"+currentSeconds);
                }
            }
            if(durationHours >= 1){
                if(durationHours <= 9){
                    if(duration <= 9){
                        if(durationSeconds <= 9){
                            $(".duration-time").text("0"+durationHours+":"+"0"+duration+":"+"0"+durationSeconds);
                        }else if(durationSeconds >= 10){
                            $(".duration-time").text("0"+durationHours+":"+"0"+duration+":"+durationSeconds);
                        }
                    }else if(duration >= 10){
                        if(durationSeconds <= 9){
                            $(".duration-time").text("0"+durationHours+":"+duration+":"+"0"+durationSeconds);
                        }else if(durationSeconds >= 10){
                            $(".duration-time").text("0"+durationHours+":"+duration+":"+durationSeconds);
                        }
                    }
                }else if(durationHours >= 10){
                    if(duration <= 9){
                        if(durationSeconds <= 9){
                            $(".duration-time").text(durationHours+":"+"0"+duration+":"+"0"+durationSeconds);
                        }else if(durationSeconds >= 10){
                            $(".duration-time").text(durationHours+":"+"0"+duration+":"+durationSeconds);
                        }
                    }else if(duration >= 10){
                        if(durationSeconds <= 9){
                            $(".duration-time").text(durationHours+":"+duration+":"+"0"+durationSeconds);
                        }else if(durationSeconds >= 10){
                            $(".duration-time").text(durationHours+":"+duration+":"+durationSeconds);
                        }
                    }
                }
            }else if(durationHours < 1){
                if(durationSeconds <= 9){
                    $(".duration-time").text(duration+":"+"0"+durationSeconds);
                }else if(durationSeconds >= 10){
                    $(".duration-time").text(duration+":"+durationSeconds);
                }
            }
        });
    }
    //AUDIO PROGRESS BAR
	//when audio timebar clicked
	var timeDrag = false;	/* check for drag event */
	$('.seeker-container').on('mousedown', function(e) {
		timeDrag = true;
		updatebar(e.pageX);
	});
	$(document).on('mouseup', function(e) {
		if(timeDrag) {
			timeDrag = false;
			updatebar(e.pageX);
		}
	});
	$(document).on('mousemove', function(e) {
		if(timeDrag) {
			updatebar(e.pageX);
		}
	});
	var updatebar = function(x) {
		var progress = $('.seeker-container');
		
		//calculate drag position
		//and update video currenttime
		//as well as progress bar
		var maxduration = audio.duration;
		var position = x - progress.offset().left;
		var percentage = 100 * position / progress.width();
		if(percentage > 100) {
			percentage = 100;
		}
		if(percentage < 0) {
			percentage = 0;
		}
		$('#seeker').css('width',percentage+'%');
		audio.currentTime = maxduration * percentage / 100;
	};
    function ends(){
        $(audio).on("ended",function(){
            audio.pause();
            audio.currentTime = 0;
            document.getElementById("play").setAttribute("d", "M 20,20 20,80 59.5,60 59.5,40 z M 59.5,40 59.5,60 80,50 80,50 z");
        });
    }
    $(document).click(function(){
        playlist = true;
        menulist = true;
        $(".playlist-container").css({"opacity": "0","right": "-100%"});
        document.getElementById("playlist").setAttribute("d", "M 0,5.1 0,10.8 32.4,10.8 32.4,5.1 z M 32.4,5.1 32.4,10.8 32.4,10.8 32.4,5.1 z M 0,15.2 0,20.8 32.4,20.8 32.4,15.2 z M 0,30.9 0,25.2 21.6,25.2 21.6,30.9 z M 36,29.6 36,29.6 25.2,23 25.2,36");
        $(".menulist-container").css({"opacity": "0","right": "-100%"});
        document.getElementById("menuToggle").setAttribute("d", "M 0,15 50,15 50,30 0,30 z M 100,15 50,15 50,30 100,30 z M 100,57.5 100,42.5 0,42.5 0,57.5 z M 0,85 50,85 50,70 0,70 z M 100,85 50,85 50,70 100,70");
    });
})