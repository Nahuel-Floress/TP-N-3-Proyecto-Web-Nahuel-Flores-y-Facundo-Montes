<?php
// index.php
?>

<!-- BOOTSTRAP ICONS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">

<link rel="stylesheet" href="css/cart.css">

<div class="store-container">

    <!-- HERO DENTRO DE UNA TARJETA -->
    <div class="hero-card">
        <div class="hero-img">
            <img src="https://www.minecraft.net/content/dam/minecraftnet/games/minecraft/key-art/PDP-Hero_OV-Deluxe_16x9.jpg">
        </div>
    </div>

    <!-- BOX DE EDICIONES (más ancho y separado) -->
    <div class="editions-box">
        <h3 class="select-title">ELEGIR UNA EDICIÓN</h3>

        <!-- DELUXE -->
        <form action="comprar.php" method="POST" class="edition-card edition-featured">
            <input type="hidden" name="producto" value="Deluxe PC Collection">

            <div class="edition-header">
                <span class="best">¡Mejor oferta!</span>
            </div>

            <h2>DELUXE PC COLLECTION</h2>

            <div class="items">
                <span>Minecraft: Bedrock Edition</span>
                <span>Minecraft: Java Edition</span>
                <span>Iniciador de Minecraft</span>
                <span>1600 Minecoins</span>
                <span>5 mapas</span>
                <span>1 pack de texturas</span>
                <span>3 packs de aspectos</span>
            </div>

            <div class="edition-bottom">
                <p class="precio">39,99 €</p>
                <button type="submit" class="btn-buy">COMPRAR</button>
            </div>
        </form>

        <!-- STANDARD -->
        <form action="comprar.php" method="POST" class="edition-card">
            <input type="hidden" name="producto" value="Edición Estándar PC">

            <h2>EDICIÓN ESTÁNDAR PARA PC</h2>

            <div class="items">
                <span>Minecraft: Bedrock Edition</span>
                <span>Minecraft: Java Edition</span>
                <span>Iniciador de Minecraft</span>
            </div>

            <div class="edition-bottom">
                <p class="precio">29,99 €</p>
                <button type="submit" class="btn-buy">COMPRAR</button>
            </div>
        </form>

    </div>

</div>

<!-- ====================== OTRAS PLATAFORMAS ====================== -->
<div class="platforms">
    <h3>OTRAS PLATAFORMAS</h3>

    <div class="platform-grid">

        <a class="plat"><i class="bi bi-laptop"></i> CHROMEBOOK</a>
        <a class="plat"><i class="bi bi-phone"></i> IOS</a>
        <a class="plat"><i class="bi bi-android2"></i> ANDROID</a>
        <a class="plat"><i class="bi bi-xbox"></i> XBOX</a>
        <a class="plat"><i class="bi bi-nintendo-switch"></i> NINTENDO</a>
        <a class="plat"><i class="bi bi-fire"></i> AMAZON FIRE</a>
        <a class="plat"><i class="bi bi-playstation"></i> PLAYSTATION</a>

    </div>
</div>

<!-- ====================== FAQ ====================== -->
<div class="faq-section">
    <h3 class="faq-title">PREGUNTAS MÁS FRECUENTES</h3>

    <div class="faq-item">
        <div class="faq-question">
            ¿ESTÁ DISPONIBLE MINECRAFT PARA MAC?
            <i class="bi bi-chevron-down faq-arrow"></i>
        </div>
        <div class="faq-answer">
            Sí, Minecraft Java Edition está disponible para macOS.
        </div>
    </div>

    <div class="faq-item">
        <div class="faq-question">
            ¿ES MINECRAFT PARA WINDOWS LA BEDROCK EDITION?
            <i class="bi bi-chevron-down faq-arrow"></i>
        </div>
        <div class="faq-answer">
            Sí, la versión de Windows incluye Bedrock Edition.
        </div>
    </div>

    <div class="faq-item">
        <div class="faq-question">
            ¿MINECRAFT USA LA CPU O GPU?
            <i class="bi bi-chevron-down faq-arrow"></i>
        </div>
        <div class="faq-answer">
            Minecraft utiliza principalmente la CPU, aunque Shaders usan GPU.
        </div>
    </div>

</div>

<script src="js/cart.js" defer></script>

<?php
if (!empty($_POST["producto"])) {

    $producto = $_POST["producto"];
    $fecha = date("Y-m-d H:i:s");

    $registro = "[$fecha] Compra: $producto" . PHP_EOL;

    file_put_contents("compras.txt", $registro, FILE_APPEND);

    echo "<script>
            alert('¡Compra realizada correctamente: $producto!');
            window.location.href='index.php';
          </script>";
}
?>
