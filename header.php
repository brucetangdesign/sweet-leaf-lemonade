<header>
  <div class="logo-container">
    <?php
      if($page != "home-page"){
        echo '<a href="./">';
      }
    ?>
    <img class="desktop-logo" src="images/sweet-leaf-tea-logo.png" alt="Sweet Leaf Tea Logo">
    <img class="mobile-logo" src="images/sweet-leaf-tea-logo-mobile.svg" alt="Sweet Leaf Tea Logo">
    <?php
      if($page != "home-page"){
        echo '</a>';
      }
    ?>
    <div class="usda-badge"></div>
    <div class="usda-badge-mobile"></div>
  </div>
  <div class="mobile-nav-icon">
    <svg viewBox="0 0 30 25">
      <line id="top" x1="0" y1="2.5" x2="30" y2="2.5"/>
      <line id="middle" x1="0" y1="12.5" x2="30" y2="12.5"/>
      <line id="bottom" x1="0" y1="22.5" x2="30" y2="22.5"/>
    </svg>
  </div>
  <nav>
    <ul class="hr-list">
      <li><a href="mailto:sweetleaftea@casupport.com">Contact</a></li>
    </ul>
  </nav>
</header>
