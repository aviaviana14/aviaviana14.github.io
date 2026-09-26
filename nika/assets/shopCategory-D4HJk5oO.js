import{d as e,f as t,g as n,m as r,n as i}from"./cart-D8IFWnDY.js";import{t as a}from"./chrome-CJLc283i.js";a({active:`/nika/shop/`});var o=new URLSearchParams(location.search).get(`slug`)||``,s=t(o),c=document.getElementById(`categoryRoot`);function l(e){return String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}if(!s)document.title=`Category not found | NIKA Studio Shop`,c.innerHTML=`
    <p class="shop-crumb"><a href="/nika/">Home</a> / <a href="/nika/shop/">Studio Shop</a> / Not found</p>
    <div class="shop-empty">
      <p>We could not find that category.</p>
      <a class="btn btn-primary" href="/nika/shop/">Back to shop</a>
    </div>`;else{document.title=`${s.name} | NIKA Studio Shop`;let t=n(s.slug);c.innerHTML=`
    <p class="shop-crumb"><a href="/nika/">Home</a> / <a href="/nika/shop/">Studio Shop</a> / ${l(s.name)}</p>
    <div class="sec-head">
      <p class="tagline">${l(s.tagline)}</p>
      <h1 class="display">${l(s.name)}</h1>
      <p class="lede">${l(s.lede)}</p>
    </div>
    ${t.length?`<div class="grid g3">${t.map(t=>`
      <article class="card">
        <a class="media ${t.category===`supplies`&&t.id!==`art-bundles`?`product`:``}" href="${l(r(t))}">
          <img src="${l(t.image)}" alt="">
        </a>
        <div class="card-body">
          <p class="card-kicker">${l(t.kicker)}</p>
          <h3><a href="${l(r(t))}">${l(t.name)}</a></h3>
          <p>${l(t.short)}</p>
          <p class="price-label">${l(e(t.pricePesos))}</p>
          <div class="card-actions">
            <button type="button" class="btn btn-primary btn-sm add-to-cart" data-product-id="${l(t.id)}">Add to Cart</button>
            <a class="btn btn-outline btn-sm" href="${l(r(t))}">View</a>
          </div>
        </div>
      </article>`).join(``)}</div>`:`
      <div class="shop-empty">
        <p>No products in this category yet.</p>
        <a class="btn btn-primary" href="/nika/shop/">Back to shop</a>
      </div>`}`,i()}