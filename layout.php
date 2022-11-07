<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Welcome to WMC!</h1>
    <p>The great PHP & JS Sample...</p>
    <?php
        renderBody();
    ?>
</body>

<script>
    function getDetails(guid) {
        fetch("/?action=userdetails&guid=" + guid)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            let detailsContainer = document.getElementById('detailsContainer');
            let containerContent =
            `
                <dl>
                    <dt>GUID:</dt>
                    <dd>${data.guid}</dd>
                    <dt>User Name:</dt>
                    <dd>${data.username}</dd>
                </dl>
            `
            detailsContainer.innerHTML = containerContent;
        })
    }
</script>

</html>