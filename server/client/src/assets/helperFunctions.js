export const getDeliveryTime = () => {
  let currentDate = new Date();
  let day = currentDate.getDay();
  let deliveryDate = '';

  if (day === 5) {
    deliveryDate = currentDate.setHours(currentDate.getHours() + 72);
  }
  if (day === 6) {
    deliveryDate = currentDate.setHours(currentDate.getHours() + 48);
  } else {
    deliveryDate = currentDate.setHours(currentDate.getHours() + 24);
  }
  deliveryDate = new Date(deliveryDate).toJSON().split('-');
  deliveryDate = `${deliveryDate[1]}/${deliveryDate[2].slice(
    0,
    2
  )}/${deliveryDate[0].slice(2, 4)}`;
  return deliveryDate;
};
