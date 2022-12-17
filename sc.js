const  details={
    first_name:null,
    last_name:null,
    over_18:false,
    adress:null,
    gander:null
}
function sendForm(){
    details.first_name = document.getElementById('firstName').value
    details.last_name= document.getElementById('lastName').value
    details.over_18=document.getElementById('age').checked
    details.adress= document.getElementById('address').value
    details.gander=document.getElementById('Gender').value
    document.write(JSON.stringify (details))
 
}
function RandonForm(){

    const  people=[{
        first_name:'yarin',
        last_name:'shaer',
        over_18:true,
        adress:' eilat 1 Hadera',
        gander:'male'
    },{
        first_name:'moshe',
        last_name:'avrham',
        over_18:false,
        adress:'turkis 17 Harish',
        gander:'male'
    },{
        first_name:'shayel',
        last_name:'lavid',
        over_18:true,
        adress:'moshe dayan 13 Hadera',
        gander:'male'
    },{
        first_name:'talia',
        last_name:'noy',
        over_18:false,
        adress:'shfak 95 Tel-Aviv',
        gander:'female'
    },{
        first_name:'noy',
        last_name:'shalom',
        over_18:false,
        adress:'Hamagenim 35 Bat-Yam',
        gander:'female'
    }]


         document.getElementById('firstName').value = people[Math.floor(Math.random()*people.length)].first_name
         document.getElementById('lastName').value= people[Math.floor(Math.random()*people.length)].last_name
         document.getElementById('age').checked= people[Math.floor(Math.random()*people.length)].over_18
         document.getElementById('address').value= people[Math.floor(Math.random()*people.length)].adress
         document.getElementById('Gender').value= people[Math.floor(Math.random()*people.length)].gander
   
}

function XHRForm(){
var xhr=new XMLHttpRequest();
xhr.onreadystatechange=function(){
    if (xhr.readyState==XMLHttpRequest.DONE) {
        let user = JSON.parse(xhr.responseText).results[0];
        document.getElementById('firstName').value= user.name.first
        document.getElementById('lastName').value=user.name.last
        document.getElementById('age').checked=user.dob.age>18
        document.getElementById('address').value=user.location.street.name+" "+user.location.street.number+" "+user.location.city+" "+user.location.country
        document.getElementById('Gender').value=user.gender
    }
};
xhr.open(`GET`, `https://randomuser.me/api/`, true);
xhr.send(null)

}

function jQueryForm(){

  
 $.ajax({
     url: 'https://randomuser.me/api/',
     success: response => {
         $('#firstName').val(response.results[0].name.first);
         $('#lastName').val(response.results[0].name.last)
         $('#age').checked=(response.results[0].dob.age)>18
         $('#address').val(response.results[0].location.street.name+" "+response.results[0].location.street.number+" "+response.results[0].location.city+" "+response.results[0].location.country)
         $('#Gender').val(response.results[0].gender)
     
     }
   });
}

  function FetchForm(){
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => {
      let user = data.results[0];
      document.getElementById('firstName').value= user.name.first
      document.getElementById('lastName').value=user.name.last
      document.getElementById('age').checked=user.dob.age>18
      document.getElementById('address').value=user.location.street.name+" "+user.location.street.number+" "+user.location.city+" "+user.location.country
      document.getElementById('Gender').value=user.gender
   })
}
