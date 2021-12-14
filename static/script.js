getCountBtn=document.getElementById('getCountBtn');
loading=document.getElementById('loading');
countPeople=document.getElementById('countPeople');
showPeopleText=document.getElementById('showPeopleText');
id=document.getElementById('list');
getCountBtn.addEventListener('click',async()=>{
    loading.style.display='block'
    const response=await fetch('/api/countPeople');
    const mydata=response.json();
    if (mydata){
        loading.style.display='none'
        mydata.then((data)=>{
            showPeopleText.style.display='block';
            countPeople.innerText=data['number']
            list.style.display='block'
            data['people'].forEach((i,s)=>{
                list.innerHTML+=`<br/><h2><b>${s+1} |</b> ${i['name']}</h2> `;
            })
        })
    }

})