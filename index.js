console.log("reviews section");

let reviewimg = document.getElementById('reviewimg');
let reviewname = document.getElementById('reviewname');
let reviewdesignation = document.getElementById('reviewdesignation');
let reviewcontent = document.getElementById('reviewcontent');

let prevbtn = document.getElementById('prevbtn');
let nextbtn = document.getElementById('nextbtn');

const reviews = [

    {
        id: 1,

        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",

        name: 'John Doe',

        designation: 'Web Developer',

        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellat adipisci omnis tempora blanditiis sint fugiat quasi aliquam excepturi architecto?'
    },
    {
        id: 2,

        name: 'John Doe 2',

        img: "https://img.icons8.com/office/344/user.png",

        designation: 'Web Developer',

        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellat adipisci omnis tempora blanditiis sint fugiat quasi aliquam excepturi architecto?'
    },
    {
        id: 3,

        name: 'John Doe 3',

        img: "https://img.icons8.com/material-sharp/344/user.png",

        designation: 'Web Developer',

        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellat adipisci omnis tempora blanditiis sint fugiat quasi aliquam excepturi architecto?'
    },
    {
        id: 4,

        name: 'John Doe 4',

        img:"https://img.icons8.com/doodle/344/user.png",

        designation: 'Web Developer',

        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium repellat adipisci omnis tempora blanditiis sint fugiat quasi aliquam excepturi architecto?'
    },

]

let currentitem = 0 ;

// showing the first slide

window.addEventListener("DOMContentLoaded" , () => {
    const item = reviews[currentitem];
    reviewimg.src  = item.img;
    reviewname.textContent = item.name
    reviewdesignation.textContent = item.designation
    reviewcontent.textContent = item.description

});

// load person on click on next or prev btn

const showperson  = (personno) => {
    const item = reviews[personno];
    reviewimg.src  = item.img;
    reviewname.textContent = item.name
    reviewdesignation.textContent = item.designation
    reviewcontent.textContent = item.description

}


// show the next person

nextbtn.addEventListener("click" , () => {
    // e.preventDefault();
    console.log("next btn clicked")
    currentitem++;

    if (currentitem == reviews.length ) {
         currentitem = 0 ;
        //  showperson(currentitem)
    }

    showperson(currentitem)

});


// show the previous person

prevbtn.addEventListener("click" , () => {
    console.log("prev btn clicked")
    currentitem--;

    if (currentitem < 0) {
        currentitem = reviews.length - 1;
        // showperson(currentitem)
      }

    showperson(currentitem)

});
