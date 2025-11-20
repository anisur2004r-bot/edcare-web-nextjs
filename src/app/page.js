
import Image from "next/image";
import Hero from "./homeComponants/Hero";
import About from "./homeComponants/About";
import CourseCategores from "./homeComponants/CourseCategores";
import Choose from "./homeComponants/Choose";
import CoursePlan from "./homeComponants/CoursePlan";
import CourseDitails from "./homeComponants/CourseDitails";
import ComplateCourse from "./homeComponants/ComplateCourse";
import AskedQuestion from "./homeComponants/AskedQuestion";
import OurInstructor from "./homeComponants/OurInstructor";
import ShortJurney from "./homeComponants/ShortJurney";
import Subscribe from "./homeComponants/Subscribe";
import NewsBlog from "./homeComponants/NewsBlog";
import Footer from "@/componants/Footer";
import FilterCategory from "./homeComponants/FilterCategory";

const Home = async () => {
  const res = await fetch("http://localhost:3000/coursecategores.json")
  const courseCategores = await res.json()
  console.log(courseCategores);

  const res1 = await fetch("http://localhost:3000/course.json")
  const courseDitails = await res1.json()
  console.log(courseDitails);

  return (
    <div className="bg-white text-black">
      <Hero></Hero>
      <About></About>
      <CourseCategores></CourseCategores>
      <Choose></Choose>
      <div className='bg-[#F2F4F7] text-black' >
        <FilterCategory courseCategores={courseCategores} courseDitails={courseDitails}></FilterCategory>
      </div>
      <ComplateCourse></ComplateCourse>
      <AskedQuestion></AskedQuestion>
      <OurInstructor></OurInstructor>
      <ShortJurney></ShortJurney>
      <Subscribe></Subscribe>
      <NewsBlog></NewsBlog>
      <Footer></Footer>
    </div>
  );
}
export default Home;
