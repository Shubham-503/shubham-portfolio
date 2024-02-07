console.log("script loaded")

const tailwindProj = document.querySelector('.proj-Tailwind')
const HtmlProj = document.querySelector('.proj-Html')
const ReactProj = document.querySelector('.proj-react')
const MernProj = document.querySelector('.proj-mern')
HtmlProj.addEventListener("click",()=>{
  document.querySelector('.projects').innerHTML=`<div class="cssProjects">
  <div class="proj-card">
    <div class="pj-img-div">
      <img
        src="./images/projectsImg/trending-1.png"
        alt=""
        class="pj-img"
      />
    </div>
    <p>Trending-1</p>
    <a href="https://trending-1.vercel.app/" class="link link-primary"
      >Live Link</a
    >
    <br />
    <a
      href="https://github.com/Shubham-503/Trending-1"
      class="link link-secondary"
      >VIEW SOURCE ON GITHUB</a
    >
  </div>
  <div class="proj-card">
    <div class="pj-img-div">
      <img
        src="./images/projectsImg/Restaurant-2.PNG"
        alt=""
        class="pj-img"
      />
    </div>
    <p>Restaurant-home-page-2</p>
    <a href="https://restaurant-home-page-2.vercel.app/" class="link link-primary"
      >Live Link</a
    >
    <br />
    <a
      href="https://github.com/Shubham-503/Restaurant-home-page-2"
      class="link link-secondary"
      >VIEW SOURCE ON GITHUB</a
    >
  </div>
  <div class="proj-card">
    <div class="pj-img-div">
      <img
        src="./images/projectsImg/Justice-3.PNG"
        alt=""
        class="pj-img"
      />
    </div>
    <p>Justice-3</p>
    <a href="https://justice-3.vercel.app/" class="link link-primary"
      >Live Link</a
    >
    <br />
    <a
      href="https://github.com/Shubham-503/Justice-3"
      class="link link-secondary"
      >VIEW SOURCE ON GITHUB</a
    >
  </div>
  <div class="proj-card">
    <div class="pj-img-div">
      <img
        src="./images/projectsImg/Digital-Marketing-4.PNG"
        alt=""
        class="pj-img"
      />
    </div>
    <p>Digital-Marketing-4</p>
    <a
      href="https://digital-marketing-4.vercel.app/"
      class="link link-primary"
      >Live Link</a
    >
    <br />
    <a
      href="https://github.com/Shubham-503/Digital-Marketing-4"
      class="link link-secondary"
      >VIEW SOURCE ON GITHUB</a
    >
  </div>
  <div class="proj-card">
    <div class="pj-img-div">
      <img
        src="./images/projectsImg/Crypto-5.PNG"
        alt=""
        class="pj-img"
      />
    </div>
    <p>Crypto-5</p>
    <a href="https://crypto-5.vercel.app/" class="link link-primary"
      >Live Link</a
    >
    <br />
    <a
      href="https://github.com/Shubham-503/Crypto-5"
      class="link link-secondary"
      >VIEW SOURCE ON GITHUB</a
    >
  </div>
  <div class="proj-card">
    <div class="pj-img-div">
      <img
        src="./images/projectsImg/Plant-Home-Page-6.PNG"
        alt=""
        class="pj-img"
      />
    </div>
    <p>Plant-Home-Page-6</p>
    <a
      href="https://plant-home-page-6-lemon.vercel.app/"
      class="link link-primary"
      >Live Link</a
    >
    <br />
    <a
      href="https://github.com/Shubham-503/Plant-Home-Page-6"
      class="link link-secondary"
      >VIEW SOURCE ON GITHUB</a
    >
  </div>
  <div class="proj-card">
    <div class="pj-img-div">
      <img
        src="./images/projectsImg/Product-Home-Page-7.PNG"
        alt=""
        class="pj-img"
      />
    </div>
    <p>Product-Home-Page-7</p>
    <a
      href="https://product-home-page-7.vercel.app/"
      class="link link-primary"
      >Live Link</a
    >
    <br />
    <a
      href="https://github.com/Shubham-503/Product-Home-Page-7"
      class="link link-secondary"
      >VIEW SOURCE ON GITHUB</a
    >
  </div>
  <div class="proj-card">
    <div class="pj-img-div">
      <img
        src="./images/projectsImg/Web-Design-8.PNG"
        alt=""
        class="pj-img"
      />
    </div>
    <p>Web-Design-8</p>
    <a href="https://web-design-8.vercel.app/" class="link link-primary"
      >Live Link</a
    >
    <br />
    <a
      href="https://github.com/Shubham-503/Web-Design-8"
      class="link link-secondary"
      >VIEW SOURCE ON GITHUB</a
    >
  </div>
  <div class="proj-card">
    <div class="pj-img-div">
      <img
        src="./images/projectsImg/Developer-LandingPage-9.PNG"
        alt="Developer-LandingPage-9"
        class="pj-img"
      />
    </div>
    <p>Developer-LandingPage-9</p>
    <a
      href="https://developer-landing-page-9.vercel.app/"
      class="link link-primary"
      >Live Link</a
    >
    <br />
    <a
      href="https://github.com/Shubham-503/Developer-LandingPage-9"
      class="link link-secondary"
      >VIEW SOURCE ON GITHUB</a
    >
  </div>
  <div class="proj-card">
    <div class="pj-img-div">
      <img
        src="./images/projectsImg/interior-design-10.PNG"
        alt=""
        class="pj-img"
      />
    </div>
    <p>Interior-Design-LandingPage-10</p>
    <a
      href="https://interior-design-landing-page-10.vercel.app/"
      class="link link-primary"
      >Live Link</a
    >
    <br />
    <a
      href="https://github.com/Shubham-503/Interior-Design-LandingPage-10"
      class="link link-secondary"
      >VIEW SOURCE ON GITHUB</a
    >
  </div>
  <div class="proj-card">
    <div class="pj-img-div">
      <img
        src="./images/projectsImg/Hosting-LandingPage-11.PNG"
        alt="Hosting-LandingPage-11"
        class="pj-img"
      />
    </div>
    <p>Hosting-LandingPage-11</p>
    <a
      href="https://hosting-landing-page-11.vercel.app/"
      class="link link-primary"
      >Live Link</a
    >
    <br />
    <a
      href="https://github.com/Shubham-503/Hosting-LandingPage-11"
      class="link link-secondary"
      >VIEW SOURCE ON GITHUB</a
    >
  </div>
  <div class="proj-card">
    <div class="pj-img-div">
      <img
        src="./images/projectsImg/Business-Design-LandingPage-12.PNG"
        alt=""
        class="pj-img"
      />
    </div>
    <p>Business-Design-LandingPage-12</p>
    <a
      href="https://business-design-landing-page-12.vercel.app/"
      class="link link-primary"
      >Live Link</a
    >
    <br />
    <a
      href="https://github.com/Shubham-503/Business-Design-LandingPage-12"
      class="link link-secondary"
      >VIEW SOURCE ON GITHUB</a
    >
  </div>
  <div class="proj-card">
    <div class="pj-img-div">
      <img
        src="./images/projectsImg/SAAS-LandingPage-13.PNG"
        alt=""
        class="pj-img"
      />
    </div>
    <p>SAAS-LandingPage-13</p>
    <a href="https://saas-landing-page-13.vercel.app/" class="link link-primary"
      >Live Link</a
    >
    <br />
    <a
      href="https://github.com/Shubham-503/SAAS-LandingPage-13"
      class="link link-secondary"
      >VIEW SOURCE ON GITHUB</a
    >
  </div>
  <div class="proj-card">
    <div class="pj-img-div">
      <img
        src="./images/projectsImg/Dance-LandingPage-14.png"
        alt="Dance-LandingPage-14"
        class="pj-img"
      />
    </div>
    <p>Dance-LandingPage-14</p>
    <a
      href="https://dance-landing-page-14.vercel.app/"
      class="link link-primary"
      >Live Link</a
    >
    <br />
    <a
      href="https://github.com/Shubham-503/Dance-LandingPage-14"
      class="link link-secondary"
      >VIEW SOURCE ON GITHUB</a
    >
  </div>
  <div class="proj-card">
    <div class="pj-img-div">
      <img
        src="./images/projectsImg/ProductDesign-LandingPage-15.PNG"
        alt=""
        class="pj-img"
      />
    </div>
    <p>ProductDesign-LandingPage-15</p>
    <a
      href="https://product-design-landing-page-15-gamma.vercel.app/"
      class="link link-primary"
      >Live Link</a
    >
    <br />
    <a
      href="https://github.com/Shubham-503/ProductDesign-LandingPage-15"
      class="link link-secondary"
      >VIEW SOURCE ON GITHUB</a
    >
  </div>
 
</div>`
})

tailwindProj.addEventListener("click",()=>{
  document.querySelector(".projects").innerHTML = `<div class="cssProjects">
  <div class="proj-card">
  <div class="pj-img-div">
    <img
      src="./images/projectsImg/Paytm-UI-Clone.PNG"
      alt="Paytm-UI-Clone-img"
      class="pj-img"
    />
  </div>
  <p>Paytm-UI-Clone</p>
  <a href="https://paytm-ui-clone.vercel.app/" class="link link-primary"
    >Live Link</a
  >
  <br />
  <a
    href="https://github.com/Shubham-503/Paytm-UI-Clone"
    class="link link-secondary"
    >VIEW SOURCE ON GITHUB</a
  >
</div>
<div class="proj-card">
  <div class="pj-img-div">
    <img
      src="./images/projectsImg/Shopify-UI-Clone.PNG"
      alt=""
      class="pj-img"
    />
  </div>
  <p>Shopify-UI-Clone</p>
  <a href="https://shopify-ui-clone-six.vercel.app/" class="link link-primary"
    >Live Link</a
  >
  <br />
  <a
    href="https://github.com/Shubham-503/Shopify-UI-Clone"
    class="link link-secondary"
    >VIEW SOURCE ON GITHUB</a
  >
</div>
<div class="proj-card">
  <div class="pj-img-div">
    <img
      src="./images/projectsImg/rode-UI-Clone.PNG"
      alt="rode-UI-CloneImg"
      class="pj-img"
    />
  </div>
  <p>Rode Clone</p>
  <a href="https://rode-ui-clone-blue.vercel.app/" class="link link-primary"
    >Live Link</a
  >
  <br />
  <a
    href="https://github.com/Shubham-503/rode-UI-Clone"
    class="link link-secondary"
    >VIEW SOURCE ON GITHUB</a
  >
</div>

  </div>`
})

ReactProj.addEventListener("click",()=>{
  document.querySelector(".projects").innerHTML = `<div class="cssProjects">
  <div class="proj-card">
    <div class="pj-img-div">
      <img
        src="./images/projectsImg/React-email-client.png"
        alt="Musical Project image"
        class="pj-img"
      />
    </div>
    <p>Email-client App</p>
     <a href="https://email-client-beige-ten.vercel.app/" class="link link-primary"
      >Live Link</a
    >
    <br />
    <a
      href="https://github.com/Shubham-503/email-client"
      class="link link-secondary"
      >VIEW SOURCE ON GITHUB</a
    >
  </div>
  <div class="proj-card">
    <div class="pj-img-div">
      <img
        src="./images/projectsImg/React-musicial.png"
        alt="Musicial Prokect image"
        class="pj-img"
      />
    </div>
    <p>Music Player using React</p>
     <a href="https://musical-eta.vercel.app/" class="link link-primary"
      >Live Link</a
    >
    <br />
    <a href="https://github.com/Shubham-503/musical" class="link link-secondary"
      >VIEW SOURCE ON GITHUB</a
    >
  </div>
</div>
`
})

MernProj.addEventListener("click",()=>{
  document.querySelector(".projects").innerHTML = `<div class="cssProjects">
  <div class="proj-card">
    <div class="pj-img-div">
      <img
        src="./images/projectsImg/React-email-client.png"
        alt="Musicial Prokect image"
        class="pj-img"
      />
    </div>
    <p>Todo App with JWT Authentication</p>
    <!-- <a href="https://trending-1.netlify.app/" class="link link-primary"
      >Live Link</a
    >
    <br /> -->
    <a
      href="https://github.com/Shubham-503/todo"
      class="link link-secondary"
      >VIEW SOURCE ON GITHUB</a
    >
  </div>
  </div>`
})
