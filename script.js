let q1a1=document.getElementById('q1a1')
let q1a=document.getElementsByClassName('cnt-a1')
q1a1.addEventListener('click',()=>{
    console.log('clicked')
    
    if(q1a[0].style.display==="none"){
        
        q1a[0].style.display="block"
        q2a[0].style.display='none'
        q3a[0].style.display='none'
        q4a[0].style.display='none'
        q5a[0].style.display='none'
        q6a[0].style.display='none'




    }
    else {
        q1a[0].style.display='none'
    }
});

let q2a2=document.getElementsByClassName('cnt-q2')
let q2a=document.getElementsByClassName('cnt-a2')

q2a2[0].addEventListener('click',()=>{

    if(q2a[0].style.display==='none'){
        q2a[0].style.display="block"
        q1a[0].style.display='none'
        q3a[0].style.display='none'
        q4a[0].style.display='none'
        q5a[0].style.display='none'
        q6a[0].style.display='none'





    }else{
        q2a[0].style.display='none'

    }
});


let q3a3= document.getElementsByClassName('cnt-q3');
let q3a= document.getElementsByClassName('cnt-a3');


q3a3[0].addEventListener('click',()=>{
    if(q3a[0].style.display==='none'){
        q3a[0].style.display='block';
        q1a[0].style.display='none'
        q2a[0].style.display='none'     
        q4a[0].style.display='none'
        q5a[0].style.display='none'
        q6a[0].style.display='none'




    }
    else{
        q3a[0].style.display='none';
    }
});


let q4a4=document.getElementsByClassName('cnt-q4');
let q4a=document.getElementsByClassName('cnt-a4');

q4a4[0].addEventListener('click',()=>{
    if(q4a[0].style.display==='none'){
        q4a[0].style.display='block'
        q1a[0].style.display="none"
        q2a[0].style.display="none"
        q3a[0].style.display='none'
        q5a[0].style.display='none'
        q6a[0].style.display='none'





    }else{
        q4a[0].style.display='none'
    }
});

let q5a5=document.getElementsByClassName('cnt-q5');
let q5a=document.getElementsByClassName('cnt-a5');

q5a5[0].addEventListener('click',()=>{
    if(q5a[0].style.display==='none'){

        q5a[0].style.display='block'
        q1a[0].style.display="none"
        q2a[0].style.display="none"
        q3a[0].style.display='none'
        q4a[0].style.display='none'
        q6a[0].style.display='none'





    }else{
        q5a[0].style.display='none'
    }
});




let q6a6=document.getElementsByClassName('cnt-q6');
let q6a=document.getElementsByClassName('cnt-a6');



q6a6[0].addEventListener('click',()=>{
    if(q6a[0].style.display==='none'){
        q6a[0].style.display='block'
        q5a[0].style.display='none'
        q1a[0].style.display="none"
        q2a[0].style.display="none"
        q3a[0].style.display='none'
        q4a[0].style.display='none'
    }
    else{
        q6a[0].style.display='none'
    }
})
    

    // -----------------------


    const imgbox=document.getElementsByClassName('cnt-imgbox');



    let lb=document.getElementById('imgscrl-left');
    let rb=document.getElementById('imgscrl-right')


    lb.addEventListener('click',()=>{
        console.log('clicked')
        imgbox[0].scrollBy({left:-500 , behavior:"smooth"})
    })


    rb.addEventListener('click',()=>{
        imgbox[0].scrollBy({left:500 , behavior:"smooth"})
    })
