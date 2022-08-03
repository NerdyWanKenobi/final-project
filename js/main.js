function darkMode() {
  /*var element = document.body;
  element.classList.toggle("dark-mode");
  */
  document.getElementsByTagName('button')[0].addEventListener('click', e => {
    e.target.classList.toggle('on');
  });
  /*
  var a = document.getElementsByClassName(bodyLink)
  a.style.color = 'green';
  */
}

// Listen for a click on the button 
btn.addEventListener("click", function () {
  // If the OS is set to dark mode...
  if (prefersDarkScheme.matches) {
    // ...then apply the .light-theme class to override those styles
    document.body.classList.toggle("light-theme");
    // Otherwise...
  } else {
    // ...apply the .dark-theme class to override the default light styles
    document.body.classList.toggle("dark-theme");
  }
});

function rickRoll() {
  alert("You have been Rickroll'd")
}

/*
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae nihil quisquam saepe nesciunt itaque pariatur doloremque alias, totam magnam, molestiae eligendi corrupti ipsum non aut autem laudantium accusamus tempora!

// pneumonoultramicroscopicsilicovolcanoconiosis

//    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae nihil quisquam saepe nesciunt itaque pariatur doloremque alias, totam magnam, molestiae eligendi corrupti ipsum non aut autem laudantium accusamus tempora!

// pneumonoultramicroscopicsilicovolcanoconiosis

//    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae nihil quisquam saepe nesciunt itaque pariatur doloremque alias, totam magnam, molestiae eligendi corrupti ipsum non aut autem laudantium accusamus tempora! //

// pneumonoultramicroscopicsilicovolcanoconiosis //

//    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae nihil quisquam saepe nesciunt itaque pariatur doloremque alias, totam magnam, molestiae eligendi corrupti ipsum non aut autem laudantium accusamus tempora! //

// pneumonoultramicroscopicsilicovolcanoconiosis //

//    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae nihil quisquam saepe nesciunt itaque pariatur doloremque alias, totam magnam, molestiae eligendi corrupti ipsum non aut autem laudantium accusamus tempora! //

// pneumonoultramicroscopicsilicovolcanoconiosis //

//    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae nihil quisquam saepe nesciunt itaque pariatur doloremque alias, totam magnam, molestiae eligendi corrupti ipsum non aut autem laudantium accusamus tempora! //

// pneumonoultramicroscopicsilicovolcanoconiosis //

//    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae nihil quisquam saepe nesciunt itaque pariatur doloremque alias, totam magnam, molestiae eligendi corrupti ipsum non aut autem laudantium accusamus tempora! //

// pneumonoultramicroscopicsilicovolcanoconiosis //

//    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae nihil quisquam saepe nesciunt itaque pariatur doloremque alias, totam magnam, molestiae eligendi corrupti ipsum non aut autem laudantium accusamus tempora! //

// pneumonoultramicroscopicsilicovolcanoconiosis //

//    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae nihil quisquam saepe nesciunt itaque pariatur doloremque alias, totam magnam, molestiae eligendi corrupti ipsum non aut autem laudantium accusamus tempora! //

// pneumonoultramicroscopicsilicovolcanoconiosis //

//    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae nihil quisquam saepe nesciunt itaque pariatur doloremque alias, totam magnam, molestiae eligendi corrupti ipsum non aut autem laudantium accusamus tempora! //

// pneumonoultramicroscopicsilicovolcanoconiosis //

//    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae nihil quisquam saepe nesciunt itaque pariatur doloremque alias, totam magnam, molestiae eligendi corrupti ipsum non aut autem laudantium accusamus tempora! //

// pneumonoultramicroscopicsilicovolcanoconiosis //

//    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae nihil quisquam saepe nesciunt itaque pariatur doloremque alias, totam magnam, molestiae eligendi corrupti ipsum non aut autem laudantium accusamus tempora! //

// pneumonoultramicroscopicsilicovolcanoconiosis //

//    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae nihil quisquam saepe nesciunt itaque pariatur doloremque alias, totam magnam, molestiae eligendi corrupti ipsum non aut autem laudantium accusamus tempora! //

// pneumonoultramicroscopicsilicovolcanoconiosis //

//    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam beatae nihil quisquam saepe nesciunt itaque pariatur doloremque alias, totam magnam, molestiae eligendi corrupti ipsum non aut autem laudantium accusamus tempora! //

// pneumonoultramicroscopicsilicovolcanoconiosis //
*/