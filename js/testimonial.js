const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "papanikolaoumagda",
    position: "Best location in Lemnos!!!",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
    text: "The restaurant is on the edge, next to the seashore and is beautifully designed! We had a great time and delicious, well portioned food. Service might be slow on busy days but is very polite and the lobster pasta was probably the best I’ve ever had!!! They offer free individual ice creams for dessert and children and pets are more than welcome :-)",
  },
  {
    name: "95NaomiK",
    position: "A MUST-GO!",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Delicious food, great service (even though the restaurant was packed) and amazing location and for relatively low cost. We were a table of 8 and had a variety of meals (I am vegan, and they were willing to change the standard recipes to please me).",
  },
  {
    name: "OLIVIAMICK",
    position: "Magical Spot!! in Myrina",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Perfect location!!!A magical setting, right under the castle of Myrina,which is beautifully lighted in the evening. Right at the beginning of the seaside promenade of Romeikos Gialos,(one of the two natural bays of the town) far from the noise and bustle of the cafes and restaurants on this promenade.The best sitting places of this restaurant are..either on the dock next to the sea or at a little natural 'balcony' with just a few tables with the best of views.The service was a bit slow,but the food was very good with big portions and perfect prices.       I will visit it again when I come back to the island.",
  },
  {
    name: "terry I",
    position: "Excellent",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Location, food, and service all excellent. Staff very friendly and welcoming. We used it 3 times. The fish and meat dishes were all cooked to a high standard and very well presented. If there was one criticism it would be that the portion sizes were always huge. Consider sharing even the main courses. If we return to Limnos it will be at the top of our list.",
  },
];

let index = 1;

const updateTestimonial = () => {
  const { name, position, photo, text } = testimonials[index];
  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;
  index++;
  if (index > testimonials.length - 1) index = 0;
};

setInterval(updateTestimonial, 10000);
