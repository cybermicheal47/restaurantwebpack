function rendermenu() {

    const contentdiv = document.getElementById("content")

    const menuhtml = `
    
    


  <div class="project">
  <h2>Menu</h2>
  <div class="row">
  <div class="column">
    <div class="card">
    <img src="./assets/burger.png" alt="Burger Image" class="card-image">
    <div class="card-content">
      <h3>Bugger</h3>
     
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium accumsan leo, vel pellentesque elit malesuada vel. Morbi a justo felis. </p>
     
      <p>SSed vitae semper tortor. Aenean eget leo vel turpis blandit tincidunt ac ac turpis. Ut eu sagittis lacust</p>
     </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <img src="./assets/fries.png" alt="Burger Image" class="card-image">
    <div class="card-content">
      <h3>Fries</h3>
     
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium accumsan leo, vel pellentesque elit malesuada vel. Morbi a justo felis. </p>
      <p>SSed vitae semper tortor. Aenean eget leo vel turpis blandit tincidunt ac ac turpis. Ut eu sagittis lacust</p>
     
    </div>
    </div>
  </div>






  <div class="column">
    <div class="card">
    <img src="./assets/pizza.png" alt="Burger Image" class="card-image">
    <div class="card-content">
      <h3>Pizza</h3>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium accumsan leo, vel pellentesque elit malesuada vel. Morbi a justo felis. </p>
      <p>SSed vitae semper tortor. Aenean eget leo vel turpis blandit tincidunt ac ac turpis. Ut eu sagittis lacust</p>
    
    </div>
    </div>
  </div>
<br>
  <div class="column">
    <div class="card">
    <img src="./assets/fries.png" alt="Burger Image" class="card-image">
    <div class="card-content">
      <h3>Fries</h3>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pretium accumsan leo, vel pellentesque elit malesuada vel. Morbi a justo felis. </p>
      <p>SSed vitae semper tortor. Aenean eget leo vel turpis blandit tincidunt ac ac turpis. Ut eu sagittis lacust</p>
     </div>
    </div>
  </div>





</div>
    
    
    
    `;

    contentdiv.innerHTML = menuhtml;
}

export { rendermenu };