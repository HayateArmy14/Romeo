const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "stavrosn190",
    position: "Ιδανική Τοποθεσία, πολύ καλό φαγητό",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Εξαιρετική ποιότητα φαγητού, με καλή και άκρως ενδιαφέρουσα ποικιλία πιάτων από την τοπική και τη μεσογειακή κουζίνα. Ίσως το καλύτερο χύμα τοπικό λευκό κρασί που δοκίμασα στη Λήμνο. Τιμές καλές γενικώς. Ωραίες μουσικές επιλογές από τα ηχεία. Πολύ καλή εξυπηρέτηση από το προσωπικό. Και η ΚΟΡΥΦΑΙΑ τοποθεσία στη Μύρινα, κάτω από το Κάστρο και πάνω στη θάλασσα !!",
  },
  {
    name: "papanikolaoumagda",
    position: "Ωραιά Θέα και Νόστιμο και Φαγητό",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
    text: "Το επισκεφθηκαμε οικογενειακώς δυο συνεχόμενες ημέρες γιατί μας άρεσε το φαγητό, η θέα & το πολύ καλό, γρηγορο & ευγενικό προσωπικό. Μην ξεχνάμε ότι το προσωπικό διανύει μεγάλη απόσταση από το μαγαζί ως τα τραπέζια! Πολύ ωραίες μακαρονάδες μπολονεζ & καρμπονάρα. Πολύ νόστιμο το ψαρονέφρι με κόκκινη σάλτσα & πιπεριές. Καλαμαράκια τηγανιτα και ψητο επίσης νοστιμότατα καθώς και τα μύδια σαγανάκι. Να το επισκεφθείτε έχει πολύ μεγάλη ποικιλια μενού. Μας έφεραν κανονικά απόδειξη με τον λογαριασμό και οι τιμές τους πολύ καλές.",
  },
  {
    name: "Katerina-K48",
    position: "Ευχάριστη Έκπληξη",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Μας άρεσε πολύ η τοποθεσία, δίπλα στη θάλασσα, κάτω από το κάστρο της Μύρινας και έτσι το επιλέξαμε, χωρίς πολλές προσδοκίες Εκεί που δεν το περιμένεις όμως, όλα είναι τέλεια και άψογα και αυτό είναι πολύ ευχάριστο! Τα μπαρμπούνια λαχταριστά, το σέρβις ευγενέστατο, η περιοχή ιδανική Ωραίο, δροσερό, Λημνιό κρασί, εξαιρετικό φαγητό, καλή παρέα, ό τι καλύτερο για ένα όμορφο καλοκαιρινό βράδυ στην Μύρινα....",
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
