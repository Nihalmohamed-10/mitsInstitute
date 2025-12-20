import React from "react";
import Spotlight from "../components/Spotlight";
import About from "../components/About";
import CoursesCategories from "../components/CoursesCategories";
import WebImageGallery from "../components/WebImageGallery";
import WhatsAppChatButton from "../components/WhatsAppChatButton";
function Home() {
  return (
    <div>
      <Spotlight />
      <About />
      <CoursesCategories />
       <WhatsAppChatButton />
      {/* <h1 className="text-3xl font-bold text-center mt-6">Website Gallery</h1> */}
      {/* <WebImageGallery /> */}
    </div>
  );
}

export default Home;

// import React from "react";
// import Spotlight from "../components/Spotlight";
// import About from "../components/About";
// import CoursesCategories from "../components/CoursesCategories";
// import Gallery from "../components/Gallery";
// function Home() {
//   return (
//     <div>
//       <Spotlight />
//       <About />
//       <CoursesCategories />
//       <div>
//       <h1 className="text-3xl font-bold text-center mt-6">My Gallery</h1>
//       <Gallery />
//     </div>
//     </div>
//   );
// }

// export default Home;
