
const containers = [];
const container = (`<div class="container col-4" >
  <button class="boxdel">*</button>
  <div class="d-flex">
      <div class="chapter rounded-start" ></div>
      <input id="topinput" class="rounded-start" style="display: none;" >
      <button class="pen">&#9998;</button>
  </div>
  <div class="taskinput mb-3">
      <input  type="text" class="form-control" placeholder="Add a Task" >     
  </div>
  <ul class="list"></ul>
</div>`);

$(".new").click(function(){
  for ( i = 0 ; i < container.length ; i++) {
};
$(containers.push(container));
 $(".row").append(container) ;
});




for(var i=0 ; i>containers.length;i++){
  container.each(function(i){
    $(".pen").click(function(){
      $(".chapter").hide();
      $("#topinput").show();
      $(".chapter").text("");
    })
  })
};





containers.forEach(()=>{
  $(".form-control").on("keyup" ,function(e){
    if(e.keyCode === 13 && ($(".form-control").val()) != ""){
     var task = $("<li class=task></li>").text($(".form-control").val());
     var del = $("<button class=del>X</button>").click(function(){
     var p = $(this).parent();
     p.remove();}) 
    $(task).append(del);
    $(task).addClass(`rounded-pill`);
    $(".list").append(task);
    $(".form-control").val("");};
   });
});

containers.forEach(()=>{
  $(".boxdel").click(function(){
    $(".row").remove(".container");
    });
});


  









/* $(document).ready(function(){
  $(".new").click( function(){ 
  })
}); */


 /* 
    $(".row").append(function(){ */
      /* return `<div class="container col-4" >
      <div class="d-flex">
          <p class="chapter" style="height: 2rem; width: 10rem;border: solid 1px black; display: none;"></p>
          <input id="topinput" >
          <button class="pen">&#9998;</button>
      </div>
      <div class="input-group mb-3">
          <input  type="text"; class="form-control" placeholder="Add a Task" >
      </div>
      <ol class="list">  
      </ol>
  </div>`; *//*  var container = $("<div></div>").addClass("container col-4");
    $(".row").append(container);
    var basliq = $("<div></div>").html(
      function(){
         $(this).addClass("d-flex");
         var p = $("<p></p>").addClass("chapter");
         var topinput = $("<input>").attr("class","topinput");
         var pen =$("<button></button>").html(
           function(){
             $(this).addClass("pen");
             $(this).text("&#9998;");
             
           }
         )      
         $(this).append( p , topinput , pen);
      }
    ) ; 
    
  
       
    var basliq2 = $("<div></div>").html(
      function(){
        $(this).addClass("input-group mb-3");
        var task = $("<input>").attr({"class": "form-control", "type": "text" , "placeholder" : "Add a Task" });
        $(this).append(task);
      }
    )       
    var basliq3 = $("<ol></ol>").addClass("list");
    $(container).append( basliq , basliq2 , basliq3 );
 */


     /* }); */