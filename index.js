$(document).ready((event) => {
    $('button#loginButton').click(() => {
        const emailValue = $('input#emailBox').val();
        const passwordValue = $('input#passwordBox').val();

        // Perform validation for input fields
        let message;
        if (emailValue == '' || passwordValue == '') message = 'Please provide email and/or password';
        else {
            if (String(emailValue).length < 3 || String(passwordValue).length < 3) message = 'Please provide more than 3 characters for email and/or password';
            else {
                if (!String(emailValue).includes('@')) message = 'Please provide a valid email';
                else message = 'Logged in successfuly';
            }
        }
        $('p#loginResult').text(message);
        // alert(message);

    })
    $('p#first').click(function(){
        $("p#first").hide()
        alert("This is a paragraph")
      });
    $("p#second").click(function(){
        $("p#second").fadeOut()
        alert("faded paragraph")
    })
    $("button#submit").hover(function(){
        $("button#submit").hover()
        alert("mouse here")
    })
    // })
    // $("button").mouseLeave(function(){
    //     $("button#submit").mouseLeave()
    //     alert("mouse out")
    // })
    event.preventDefault();
});