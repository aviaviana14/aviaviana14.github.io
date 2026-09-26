import{d as e,h as t,l as n,m as r,n as i,u as a}from"./cart-D8IFWnDY.js";import{t as o}from"./chrome-CJLc283i.js";o({active:`/nika/shop/`});function s(e){return String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}document.getElementById(`categoryGrid`).innerHTML=n.map(e=>`
  <article class="card cat-tile">
    <a class="media" href="${s(a(e.slug))}"><img src="${s(e.image)}" alt=""></a>
    <div class="card-body">
      <p class="card-kicker">${s(e.tagline)}</p>
      <h3><a href="${s(a(e.slug))}">${s(e.name)}</a></h3>
      <p>${s(e.lede)}</p>
      <div class="card-actions"><a class="btn btn-outline btn-sm" href="${s(a(e.slug))}">Shop All</a></div>
    </div>
  </article>
`).join(``),document.getElementById(`productGrid`).innerHTML=t.map(t=>`
  <article class="card">
    <a class="media ${t.category===`supplies`&&t.id!==`art-bundles`?`product`:``}" href="${s(r(t))}">
      <img src="${s(t.image)}" alt="">
    </a>
    <div class="card-body">
      <p class="card-kicker">${s(t.kicker)}</p>
      <h3><a href="${s(r(t))}">${s(t.name)}</a></h3>
      <p>${s(t.short)}</p>
      <p class="price-label">${s(e(t.pricePesos))}</p>
      <div class="card-actions">
        <button type="button" class="btn btn-primary btn-sm add-to-cart" data-product-id="${s(t.id)}">Add to Cart</button>
        <a class="btn btn-outline btn-sm" href="${s(r(t))}">View</a>
      </div>
    </div>
  </article>
`).join(``),i();