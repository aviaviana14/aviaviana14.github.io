import{o as e}from"./cart-D8IFWnDY.js";import{t}from"./chrome-CJLc283i.js";import{n,t as r}from"./checkout-B2J38axz.js";t({active:`/nika/shop/`}),e();var i=new URLSearchParams(location.search).get(`order`)||``,a=r(i),o=document.getElementById(`confirmRoot`);function s(e){return String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}if(!a)o.innerHTML=`
    <div class="shop-empty">
      <p>We could not find that order on this device.</p>
      <a class="btn btn-primary" href="/nika/shop/">Back to shop</a>
    </div>`;else{document.title=`Order ${a.id} | NIKA Studio Shop`;let e=a.paymentMethod===`card`?`Card details were saved with this order. No charge was made. When payment is connected, we will process the card or confirm the amount with you first for inquiry-priced items.`:`Your receipt is on file for review. We will verify the transfer and message you when the order is ready for pickup. Inquiry-priced items may need a final amount confirmed at the studio.`;o.innerHTML=`
    <div class="confirm-hero">
      <p class="tagline">Order placed</p>
      <h1 class="display">Thank you</h1>
      <p class="lede">We saved your order locally so the shop flow is ready for payment wiring later.</p>
      <div class="confirm-id">${s(a.id)}</div>
    </div>
    <div class="checkout-grid">
      <div class="checkout-card">
        <h2>Items</h2>
        <ul class="order-summary-list">
          ${a.items.map(e=>`
            <li>
              <span>${s(e.name)} <span class="muted">× ${e.qty}</span></span>
              <span>${s(e.lineLabel)}</span>
            </li>`).join(``)}
        </ul>
        <div class="order-summary-total">
          <span>Total</span>
          <span>${s(a.totals.label)}</span>
        </div>
      </div>
      <div class="checkout-card">
        <h2>Details</h2>
        <ul class="order-summary-list">
          <li><span class="muted">Name</span><span>${s(a.contact.name)}</span></li>
          <li><span class="muted">Email</span><span>${s(a.contact.email)}</span></li>
          <li><span class="muted">Phone</span><span>${s(a.contact.phone)}</span></li>
          <li><span class="muted">Payment</span><span>${s(n(a.paymentMethod))}</span></li>
          <li><span class="muted">Status</span><span>${s(a.paymentStatus.replace(/_/g,` `))}</span></li>
          <li><span class="muted">Fulfillment</span><span>Studio pickup</span></li>
          ${a.proof?`<li><span class="muted">Receipt</span><span>${s(a.proof.name)}</span></li>`:``}
        </ul>
        <p class="confirm-next">${s(e)}</p>
        <div style="margin-top:22px; display:flex; flex-wrap:wrap; gap:10px">
          <a class="btn btn-primary" href="/nika/shop/">Continue shopping</a>
          <a class="btn btn-outline" href="/nika/">Home</a>
        </div>
      </div>
    </div>`}