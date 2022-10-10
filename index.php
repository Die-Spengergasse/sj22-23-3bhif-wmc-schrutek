<?php
    require('user.class.php');

    function renderBody()
    {
        if (isset($GLOBALS['result']))
        {
            echo <<<HTML
            <ul>
            HTML;
            foreach ($GLOBALS['result'] as $user)
            {
                echo('<li>' . $user->username . '</li>');
            }
            echo <<<HTML
            </ul>
            HTML;
        }
    }

    $pdo = new PDO('sqlite:stores.db');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_CASE, PDO::CASE_LOWER);

    if (isset($_GET['action']))
    {
        $action = $_GET['action'];
        switch($action)
        {
            case 'getAll':
                $result = $pdo->query("SELECT * FROM User")->fetchAll(PDO::FETCH_CLASS, 'User');
                require('layout.php');
                exit();
                break;
            case 'details':
                // GUID-Parameter auslesen
                if (isset($_GET['guid']))
                {
                    header("Content-Type: application/json");
                    $guid = $_GET['guid'];
                    $data = $pdo->query("SELECT * FROM User WHERE Guid = '$guid'")->fetch();
                    echo(json_encode($data));
                }
                else
                {
                    require('notFound.php');
                }
                exit();
                break;
            default:
                require('notFound.php');
                exit();
                break;
        }
    }
    else
    {
        //...
    }
?>

