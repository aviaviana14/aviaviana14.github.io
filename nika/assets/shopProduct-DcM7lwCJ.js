import{d as e,f as t,o as n,p as r,s as i,t as a,u as o}from"./cart-D8IFWnDY.js";import{t as s}from"./chrome-CJLc283i.js";s({active:`/nika/shop/`}),n();var c=new URLSearchParams(location.search).get(`slug`)||``,l=r(c),u=document.getElementById(`productRoot`);function d(e){return String(e).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}if(!l)document.title=`Product not found | NIKA Studio Shop`,u.innerHTML=`
    <p class="shop-crumb"><a href="/nika/">Home</a> / <a href="/nika/shop/">Studio Shop</a> / Not found</p>
    <div class="shop-empty">
      <p>We could not find that product.</p>
      <a class="btn btn-primary" href="/nika/shop/">Back to shop</a>
    </div>`;else{let n=t(l.category);document.title=`${l.name} | NIKA Studio Shop`,u.innerHTML=`
    <p class="shop-crumb">
      <a href="/nika/">Home</a> /
      <a href="/nika/shop/">Studio Shop</a> /
      <a href="${d(o(l.category))}">${d(n?.name||l.category)}</a> /
      ${d(l.name)}
    </p>
    <div class="pdp">
      <div class="pdp-gallery">
        <div class="media ${l.category===`supplies`&&l.id!==`art-bundles`?`product`:``}">
          <img src="${d(l.image)}" alt="${d(l.name)}">
        </div>
      </div>
      <div class="pdp-meta">
        <p class="card-kicker">${d(l.kicker)}</p>
        <h1 class="display" style="font-size:clamp(28px,4vw,40px)">${d(l.name)}</h1>
        <p class="price-label">${d(e(l.pricePesos))}</p>
        <p class="lede">${d(l.short)}</p>
        ${l.specs?.length?`<ul class="spec" style="margin-top:18px">${l.specs.map(e=>`<li>${d(e)}</li>`).join(``)}</ul>`:``}
        <div class="pdp-actions">
          <div class="qty" role="group" aria-label="Quantity">
            <button type="button" class="qty-btn" id="qtyDec" aria-label="Decrease">−</button>
            <input type="number" class="qty-input" id="qtyInput" min="1" value="1" aria-label="Quantity">
            <button type="button" class="qty-btn" id="qtyInc" aria-label="Increase">+</button>
          </div>
          <button type="button" class="btn btn-primary add-to-cart" id="pdpAdd" data-product-id="${d(l.id)}">Add to Cart</button>
        </div>
        <div class="pdp-desc">
          <p>${d(l.description)}</p>
        </div>
        <p style="margin-top:24px"><a class="btn btn-outline btn-sm" href="${d(o(l.category))}">Back to ${d(n?.name||`category`)}</a></p>
      </div>
    </div>`;let r=document.getElementById(`qtyInput`);document.getElementById(`qtyDec`).addEventListener(`click`,()=>{r.value=String(Math.max(1,Number(r.value||1)-1))}),document.getElementById(`qtyInc`).addEventListener(`click`,()=>{r.value=String(Math.max(1,Number(r.value||1)+1))}),document.getElementById(`pdpAdd`).addEventListener(`click`,()=>{let e=Math.max(1,Number(r.value||1));a(l.id,e);let t=document.getElementById(`pdpAdd`),n=t.textContent;t.textContent=`Added`,setTimeout(()=>{t.textContent=n},1100),i()})}