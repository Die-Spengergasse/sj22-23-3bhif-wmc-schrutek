<h3>Product List:</h3>
<p>
    Info zur den Produkten...
</p>

<?php

foreach ($GLOBALS['result'] as $product) {
    echo ($product->name . '<br/>');
}

?>