const getShippingCost = productsCost => {
  let shippingCost = productsCost * 0.1;
  return shippingCost;
};

const getTaxes = productsCost => {
  let taxes = productsCost * 0.18;
  return taxes;
};

const getNextWorkingDate = (date, hourOffset) => {
  let nextWorkingDate = date.setHours(date.getHours() + hourOffset);
  return nextWorkingDate;
};

const getDateFormat = date => {
  let deliveryDate = new Date(date).toJSON().split('-');
  let day = deliveryDate[2].slice(0, 2);
  let month = deliveryDate[1];
  let year = deliveryDate[0].slice(2, 4);
  return `${month}/${day}/${year}`;
};

const getProductsCost = cartItems => {
  let productsCost = 0;
  cartItems.map(({ quantity, price }) => {
    productsCost += quantity * price;
    return null;
  });
  return productsCost;
};

export const getDeliveryTime = () => {
  let currentDate = new Date();
  let day = currentDate.getDay();
  let deliveryDate = '';

  if (day === 5) {
    deliveryDate = getNextWorkingDate(currentDate, 72);
  }
  if (day === 6) {
    deliveryDate = getNextWorkingDate(currentDate, 48);
  } else {
    deliveryDate = getNextWorkingDate(currentDate, 24);
  }
  deliveryDate = getDateFormat(deliveryDate);
  return deliveryDate;
};

export const getQuotation = cartItems => {
  let productsCost = getProductsCost(cartItems);
  let taxes = getTaxes(productsCost);
  let shippingCost = getShippingCost(productsCost);
  let totalCost = productsCost + shippingCost;
  return { productsCost, shippingCost, taxes, totalCost };
};
