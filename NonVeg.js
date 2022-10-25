import React from 'react';
import"./NonVeg.css";

const NonVeg = () => {
  return (
    <>
    <div className='NonVeg'>
      <div className='topNonVeg'>
      <h1>Top 5 healthy non-veg items</h1>
        <div className='food'>
          <div className='info'>
            <h2>1. Salmon</h2>
            <p>Largely found in the Atlantic as well as the Pacific Ocean, Salmon is mostly consumed all over Europe and North America and Japan. They are found in lakes as well as salt water and because of its popularity as a food item, they are cultured too.
            High on proteins , omega-3 fatty acids and vitamin D, it is one of the best fish options that you can have as it tends to keep heart diseases at bay.</p>
            <p>Salmon’s flesh is bright orange or crimson in color but sometimes it can be white too.
            It can be eaten in any form, but the best way to eat it is either by smoking or grilling it.</p>
          </div>
          <img src = {"https://img.freepik.com/premium-photo/salmon-steak-fresh-fish-slice-trout-white-isolated-background-with-clipping-path-full-depth-field_370433-510.jpg"} alt="salmon"/>
        </div>

        <div className='food'>
        <img src = {"https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/5f498637144b13f9b96ca4bd_2020-cen-ecommerce-seafood-yellowfintunasteak.jpg"} alt="sardines"/>
          <div className='info'>
            <h2>2. Sardines</h2>
            <p>Sardines are small fishes that contain large amounts of protein. Sardines are high sources of vitamins and omega 3 fatty acids and keep our heart health in check. If you are lactose intolerant and can’t consume dairy, sardine can help you get back the calcium content that you miss out on.</p>

            <p>You should purchase sardines fresh only. To ensure that you purchase the right sardine, ensure that it has a fresh smell, shiny skin, bright eyes, and firm texture.</p>
          </div>
        </div>

        <div className='food'>
          <div className='info'>
            <h2>3. Lean meat</h2>
            <p>Meat is good for our body as it is the most important source of proteins , vitamin’s E and B and Zinc, but we must know the kind of meat we should consume.</p>
            <p>In a layman’s term, most of the meat which is red in color is also full of unwanted cholesterol and saturated fat and the white meats are usually much leaner.</p>
            <p>Boneless chicken and turkey are the leanest meats and should be consumed often for major health benefits. Whereas if you are a fan of red meats, the best way to cut down on the cholesterol is by either cutting away the fat portions from the meat or draining the extra fat while cooking.</p>
            <p>Instead of eating, lamb, pork and beef often, one should substitute it with leaner meats as often as possible.</p>
          </div>
          <img src = {"https://www.mashed.com/img/gallery/the-truth-about-lean-beef/l-intro-1621886574.jpg"} alt="meat"/>
        </div>

        <div className='food'>
        <img src = {"https://cdn.shopify.com/s/files/1/0707/5551/products/1125661480_preview_egg.jpg?v=1522498822"} alt="eggs"/>
          <div className='info'>
            <h2>4. Eggs</h2>
           <p>Eggs are one of the most excellent sources of protein that you can consume in any form. They can be eaten boiled, poached, scrambled, or baked in any way. Nonetheless, eggs are affordable and low in calories. A single egg may contain 6-8 g of protein. Nonetheless, eggs are also good sources of Vitamin B1, Omega-3 fatty acids, and magnesium.</p>
          </div>
        </div>

        <div className='food'>
          <div className='info'>
            <h2>5. Shrimp</h2>
           <p>Shrimp is a type of shellfish that is a high and pure protein food containing fewer fats and calories. They contain antioxidants and hence, promote brain and heart health. However, Shrimps have high cholesterol levels and should be consumed in moderation.</p>
           <p>Shrimp is a type of shellfish that is a high and pure protein food containing fewer fats and calories. They contain antioxidants and hence, promote brain and heart health. However, Shrimps have high cholesterol levels and should be consumed in moderation.</p>
          </div>
          <img src = {"https://th.bing.com/th/id/OIP.sDaiFxuRi0ZKw0xZeNutwQHaE8?w=300&h=200&c=7&r=0&o=5&dpr=1.5&pid=1.7"} alt="shrimp"/>
        </div>

      </div>
    </div>
    <div>
      -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    </div>
    </>
  )
}

export default NonVeg