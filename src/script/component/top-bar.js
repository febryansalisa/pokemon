class topBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode :'open'});
    this.shadowRoot.innerHTML = 
    `
    <style>
                h2 {text-align: center;
                  width: 93%;
                  font-family: Helvetica;
                } 
    </style>
      
      <h2>${this.getAttribute('name')}</h2>
    `;
  }
}
window.customElements.define('top-bar' , topBar);