var text = [
	{
		latest1:["PodStar #286","Guess what we've missed watching World Cup 2014. We made a list!","July 23, 2014","36 min","38","22"],
	    latest2:["All the Pretty Faces #16","What's in your playlist at 6 p. m. ? Can't be it's a secret, really!","July 19, 2014","54 min","34","2"],
	    latest3:["30 Words,per Second #60","We can't stop thinking about you!","July 23, 2014","44 min","8","24"],
	    latest4:["PodStar #285","No myphologies to follow","July 17, 2014","33 min","12","24"],
	    latest5:["PodStar #284","Who are the mightiest heroes of NY?","July 26, 2014","43 min","31","42"],
	    latest6:["All the Pretty Faces #15","What's in your playlist at 6 p. m. ? Can't be it's a secret, really!","July 13, 2014","36 min","23","42"]
	}
]
window.onload = function All(){
	document.getElementById("title").innerText=text[0].latest1[0];      
	document.getElementById("subtitle").innerText=text[0].latest1[1];
	document.getElementById("date").innerText=text[0].latest1[2];   
	document.getElementById("time").innerText=text[0].latest1[3]; 
	document.getElementById("heart").innerText=text[0].latest1[4]; 
	document.getElementById("comment").innerText=text[0].latest1[5]; 
	for (var i = 1; i <= 6; i++) {
		var	latest = "latest"+i;
		var title = text[0][latest][0]; 
			subtitle =text[0][latest][1], 
			date =text[0][latest][2],
			time =text[0][latest][3],
			heart =text[0][latest][4],   
			comment =text[0][latest][5];
		document.getElementById("latest_title"+i).innerText=title;      
		document.getElementById("latest_subtitle"+i).innerText=subtitle;
		document.getElementById("latest_date"+i).innerText=date;   
		document.getElementById("latest_time"+i).innerText=time; 
		document.getElementById("latest_heart"+i).innerText=heart; 
		document.getElementById("latest_comment"+i).innerText=comment; 
	};
	var height= $("#latest_subtitle1").height();
	$("#latest_subtitle2").height(height);
	$("#latest_subtitle3").height(height);
	$("#latest_subtitle4").height(height);
	$("#latest_subtitle5").height(height);
	$("#latest_subtitle6").height(height);
}
function Change(i){     
	var	latest = "latest"+i,
		title = text[0][latest][0],
		subtitle =text[0][latest][1], 
		date =text[0][latest][2],
		time =text[0][latest][3],
		heart =text[0][latest][4],   
		comment =text[0][latest][5];
	document.getElementById("title").innerText=document.getElementById("latest_title"+i).innerText=title;      
	document.getElementById("subtitle").innerText=document.getElementById("latest_subtitle"+i).innerText=subtitle;
	document.getElementById("date").innerText=document.getElementById("latest_date"+i).innerText=date;   
	document.getElementById("time").innerText=document.getElementById("latest_time"+i).innerText=time; 
	document.getElementById("heart").innerText=document.getElementById("latest_heart"+i).innerText=heart; 
	document.getElementById("comment").innerText=document.getElementById("latest_comment"+i).innerText=comment;
	for (var q = 1; q <= 6; q++) {
		if (q==i) {
			document.getElementById("latest_btn"+q).innerText="PLAYING NOW";
			document.getElementById("latest_btn"+q).style.backgroundColor="rgba(17, 17, 17, 0.08)";
			document.getElementById("latest_btn"+q).style.borderWidth='0';
		}
		else{
			document.getElementById("latest_btn"+q).innerText="LISTEN NOW";
			document.getElementById("latest_btn"+q).style.backgroundColor="rgba(0, 0, 0, 0.059)";
			document.getElementById("latest_btn"+q).style.border='0.125em solid rgb(255, 255, 255)';
		};
	};
}
