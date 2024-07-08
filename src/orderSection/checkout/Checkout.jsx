
import React from 'react'
import { useState } from 'react';



const Checkout = ({totalPrice, discount, lastTotalAmount, loginState}) => {
  


  const [billingAddress, setBillingAddress] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  // SHOW SUCESS PAGE
  const [orderSucess, setOrderSucess] = useState(false)
  
  const [allAmount, setAllAmount] = useState(lastTotalAmount)
  const showSuccesspage = ()=> {
    setAllAmount(lastTotalAmount)
      let options = {
          key: "rzp_test_oO4leaxOXuIdAA",
          key_secret : "PeltQsSAK6yzdutWSnKrKoSg",
          amount: allAmount * 100, 
          currency : "INR",
          name: "ShopEase",
          description: "For payment",
          handler: function(response){
            setOrderSucess(true)
            // setTimeout(() => {
            //   setShowScratchCard(true)
            // }, 5800);
            // alert(response.razorpay_payment_id);
          },
          prefill: {
            name: {loginState},
            email: "contactShopEase@gmail.com",
            contact: "917821982152"
          },
          notes: {
          address: "Razorpay Corporate office"
      },
      theme: {
        color: "#3399cc",

      }
  }
  let pay = new window.Razorpay(options)
  pay.open()

  }
  // IMPLEMENTING HANDLESUBMIT HERE
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Billing Address:', billingAddress);
  };

  // SHOW SCRATCH CARD HERE 


  // useEffect(()=> {
  //  setTimeout(() => {
  //    setShowScratchCard(true)
  //  }, 2800);
  // }, [])

  //FROM SUCESSPAGEPOPUP 
  const [showScratchCard, setShowScratchCard] = useState(false)

  const ShowScratch = ()=> { 
      setShowScratchCard(true)
  }

  const [submitChecker, setSubmitChecker] = useState(false)
  const [classToggler, setClassToggler] = useState(' wrong-confirm-order')
  const submitHandler = ()=> {
    setSubmitChecker(true)
    setClassToggler('confirm-order')
  }
  return (
    <>
        

        
    <div className={ orderSucess ? " hide-payment-order-container" : 'payment-order-container'}>
        <div className='billing-container'>
          <h3 className='form-heading' >BILLING ADDRESS</h3>
          <div>
          <form onSubmit={handleSubmit} className='form'>
      <label className='label'>
        {/* First Name: */}
        <input
          type="text"
          name="firstName"
          value={billingAddress.firstName}
          onChange={handleChange}
          placeholder='name'
        />
      </label>

      <label className='label'>
        {/* Last Name: */}
        <input
          type="text"
          name="lastName"
          value={billingAddress.lastName}
          onChange={handleChange}
          placeholder='Last Name:'
        />
      </label>

      <label className='label'>
        {/* Street Address: */}
        <input
          type="text"
          name="streetAddress"
          value={billingAddress.streetAddress}
          onChange={handleChange}
          placeholder='Street Address: '
        />
      </label>

      <label className='label'>
        {/* City: */}
        <input
          type="text"
          name="city"
          value={billingAddress.city}
          onChange={handleChange}
          placeholder='City: '
        />
      </label>

      <label className='label'>
        {/* Mobile: */}
        <input
          type="number"
          name="mobile"
          value={billingAddress.mobile}
          onChange={handleChange}
          placeholder='Mobile: '
        />
      </label>

      <label className='label'>
        {/* State: */}
        <input
          type="text"
          name="state"
          value={billingAddress.state}
          onChange={handleChange}
          placeholder='State:'
        />
      </label>

      <label className='label'>
        {/* Zip Code: */}
        <input
          type="text"
          name="zipCode"
          value={billingAddress.zipCode}
          onChange={handleChange}
          placeholder='Zip Code:'
        />
      </label>

      <button type="submit" onClick={submitHandler}>Submit</button>
    </form>
          </div>
        </div>

        {/* PAYMENT SECTION */}
        <div className='order-width padding-class'>
            <h2 className='payment-section-title'>PAYMENT SECTION</h2>
            <div className='payment-section-wrapper'>

              <div className=' d_flex payment-section-margin'>
              <h4>Total Price :</h4>
              <h3>${totalPrice}</h3>
              </div>

              <div className=' d_flex payment-section-margin'>
               <h4>Shipping</h4>
               <h3>$5</h3>
              </div>

              <div className=' d_flex payment-section-margin'>
               <h4>Discount</h4>
               <h3>${discount}</h3>
              </div>
              <div className=' d_flex '>
               <h4>Total</h4>
               <h3>${lastTotalAmount}</h3>
              </div>
                      <button onClick={ submitChecker ? showSuccesspage : console.log("j") } className={classToggler}>Confirm Order</button>
            </div>
            </div>
    </div>
    </>
  )
}

export default Checkout;