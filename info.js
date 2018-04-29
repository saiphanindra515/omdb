$(document).ready(function() {
	$('#movie').hide();
	$('#clr').click(function(){
       location.reload();
	});
$('#sub').click(function(){

    

	let Title =  $('#search').val();
	let Idnum = $('#Id').val();
	let season = $('#Sea').val();

   if(Title==null&&Idnum==null&&season==null)
  {
	alert("enter valid input");
  }

  getinfo(Title,Idnum,season);

});

});
 let getinfo = (Title,Idnum,season) =>{

   $.ajax({
       
       type: 'GET',
       dataType: 'json',
       async : true,
       url : ' http://www.omdbapi.com/?apikey=bc109e14&t='+Title+ '&i='+Idnum+'&Season='+season+'',

     success: (response) => {

     	console.log(response);
        
     	output=` 
     	    <div>
     	     Title : ${response.Title}
     	     <br>
     	     Year : ${response.Year}
     	      <br>
     	     Genre : ${response.Genre}
     	      <br>
     	     Director : ${response.Director}
     	      <br>
     	     Writer : ${response.Writer}
     	      <br>
     	     Actors : ${response.Actors}
     	      <br>
     	     plot : ${response.plot}
     	      <br>
     	     Language : ${response.Language}
     	      <br>
     	     Production : ${response.Production}
     	     <br>
     	     Runtime : ${response.Runtime}
     	     <br>
     	     
     	     
     	     imdbRating : ${response.imdbRating}
     	     <br>
     	     imdbId :${response.imdbID}
     	     <br>
     	     imdbVotes :${response.imdbVotes}
     	     <br>
     	     <a href="http://www.imdb.com/title/${response.imdbID}" target="_blank" class="btn btn-outline-success m-4">Imdb </a>
     	     
     	          	     </div>

           
     	`


     	let op;
     	if(response.Episodes!=undefined)
     	{
     	
     	for (let i=0;i<response.Episodes.length;i++)
     	{
     		op += `<div> title : ${response.Episodes[i].Title}
                      <br>
                      Released: ${response.Episodes[i].Released}
                      <br>
                      Episode : ${response.Episodes[i].Episode}
                      <br>
                      imdbRating : ${response.Episodes[i].Episode}
                       
     		 </div>
                    

     		`
     	}
     	}

     	$('#movie1').html(output);
     	$("#movie").show();
     	$('#epsode').html(op);
     	
     	 
     	if(response.Poster=="N/A"|| response.Poster==undefined)
     	{
     
          	$('#movie').show();
     	
     	$("#movie").css('background-image','url('+nodata.png+')');
        
          }
          else{
          	$('#movie').css('background-image','url('+response.Poster+')');
          	
          }
          
          

          

         
     },
     error: (err) =>{
     	alert(err.responseJSON.error.message);
     }

   });


 }