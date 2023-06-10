function rendercontact() {
  const contentdiv = document.getElementById("content");

  const contacthtml = `
    <div class="contacthead">
      <h1>Contact Us</h1>
    </div>

    <div class="contactcontent">
      <p><ion-icon name="map"></ion-icon>1024 Obud Aval San Diego, CA 2334</p>
      <p><ion-icon name="call-sharp"></ion-icon>: 55545-8894</p>
      <h2>Send Us A Message</h2>
      <div class="container">
        <form action="/action_page.php">
          <label for="fname">Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name..">

          <label for="email">Email</label>
          <input type="text" id="email" name="email" placeholder="Email">

          <label for="subject">Message</label>
          <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

          <input type="submit" value="Submit">
        </form>
      </div>
    </div>
  `;

  contentdiv.innerHTML = contacthtml;
}



export { rendercontact };
