$(document).ready(function(){
    
    console.log("works");

    $('.user_form')
        .form({
            on: 'blur',
            fields: {
                empty: {
                    identifier  : 'username',
                    rules: [
                        {
                            type   : 'empty',
                            prompt : 'Please enter a username'
                        }
                    ]
                },
            }
        });

})