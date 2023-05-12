//自分の編集画面で自分のメールアドレスはそのまま通す。ほかのユーザーと被っていたら止める
$(function(){
    $('#email').focusout(function(){
        let $id = $('#id').val();
        let $email = $(this).val();
        // console.log($email);
        $('span.msg').load(
            '../../php/mail_check.php',
            {id:$id,email:$email},
            function(data,textStatus,XMLHttpRequest){
                if(data != ''){
                    $(':submit').attr('disabled',true);
                }else{
                    $(':submit').attr('disabled',false);
                }
            }
        );
    });
});