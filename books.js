// Create a class for the element
class Book extends HTMLElement {
  constructor() {
    super();

    // attribute content 
    const author       = this.getAttribute('author');
    const quote    = this.getAttribute('quote');    
  //  const author      = this.getAttribute('author');    
  //  const publisher   = this.getAttribute('publisher');    
    const description = this.getAttribute('description');        

    this.innerHTML = `
        <div class="card">
          <h5 class="card-header">${author}</h5>
          <div class="card-body">
            <h5>
            <i class="bx bxs-quote-alt-left quote-icon-left"></i>
             ${quote}
             <i class="bx bxs-quote-alt-right quote-icon-right"></i>
            </h5>
            <p class="card-text">
            <table class="table">
                <tr>
                    <td class="text">About Author:</td>
                    <td>${description}</td>
                </tr>
          </div>
        </div>
    `;    

  }
}

// Define the new element
customElements.define('mit-book', Book);
