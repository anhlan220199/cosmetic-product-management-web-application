function checkUser() {
    $('#loginBtn').click(function () {

        var userName = $("#username").val(),
            password = $("#password").val();
        var user = {
            "userName": userName,
            "password": password
        }
        // console.log(user);
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "/login",
            dataType: 'json',
            data: JSON.stringify(user),
            success: function () {
                location.replace("/");
            }, error: function () {
                //console.log(e);
                alert("Wrong username or password!");
                location.replace("login");
            }
        })
        //console.log(data);
    })
}