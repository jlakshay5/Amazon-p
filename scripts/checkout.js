import {renderOrderSummary} from './checkout/orderSummary.js';
import { renderpaymentSummary } from './checkout/paymentSummary.js';

//import '../data/cart-class.js';
// import '../data/backend-practice.js';
// import {loadProducts} from '../data/products.js';
import {loadProductsFetch} from '../data/products.js';

import { loadCart } from '../data/cart.js';

async function loadPage(){
  try{
    // throw 'error1';
    await loadProductsFetch();
    const val = await new Promise((resolve,reject)=>{
      // throw 'error';
      loadCart(()=>{
        // reject('er');
        resolve();
      });
    });
  }
  catch(error){
    console.log('EROOOOOOOOR')
  }
  renderOrderSummary();
  renderpaymentSummary(); 

}

loadPage();
/*
Promise.all([
  loadProductsFetch(),

  new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  })

]).then((val)=>{
  console.log(val);
  renderOrderSummary();
  renderpaymentSummary(); 
});
*/

/*
new Promise((resolve)=>{
  loadProducts(()=>{
    resolve('boogiewoogie');
  });

}).then((value)=>{
  console.log(value);
  return new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  });

}).then(()=>{
renderOrderSummary();
renderpaymentSummary(); 
});
*/

// loadProducts(()=>{
//   loadCart(()=>{
//     renderOrderSummary();
//     renderpaymentSummary(); 
//   }); 
// });



