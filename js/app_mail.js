$(function(){
    $('#email').focusout(function(){
        let $email = $(this).val();
        console.log($email);
        $('span.msg').load(
            '../../php/mail_check.php',
            {email:$email},
            function(data,textStatus,XMLHttpRequest){
                if(data != ''){//mailcheckphpからdateが返ってこなかったら
                    $(':submit').attr('disabled',true);//押させない
                }else{
                    $(':submit').attr('disabled',false);
                }
            }
        );
    });
});