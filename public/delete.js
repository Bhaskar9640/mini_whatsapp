const deleteForms = document.querySelectorAll(".delete-form");

deleteForms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    const ok = confirm("Are you sure you want to delete this chat?");

    if (!ok) {
      e.preventDefault();
    }
    else{
        alert('delete the chat successfully');
    }
  });
});

// const delbtn=document.getElementById("delete");
// delbtn.addEventListener('click',(e)=>{
//     alert('succefully delete this chat')
// })

    