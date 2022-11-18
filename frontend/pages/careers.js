import Layout from "../components/PageStructure/Container/Layout";
import Container from "../components/PageStructure/Container/Container";
import React from "react";
import { fetcher } from '../lib/api';
import Image from '../components/Elements/Image';

const Careers = ({ careers }) => {
  return (
    <Layout>
      
      <div className="bg-banner position-relative">
      <Image src={careers.Image.data}/>
     
        <Container>
          <div className="banner-title position-absolute top-50">
            <h1 className="text-dark">
            {careers.Title} 
           
             
            </h1>
          </div>
        </Container>
      </div>
       <Container>
        <div className="col-12 pt-5">
          <div className="row">
            <div className="col-6">
              <div className="figure-image">
                <figure className="figure pt-4 px-5 pb-4">
                  <img src="../image_348-246.jpg" />
                  <figcaption class="figure-caption text-start pt-2 text-success">
                    Bowmanville Veterinary Clinic, Bowmanville, ON
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-6">
              <div className="community-details border-4 border-start  px-5 border-success rounded-0">
                <h2 className="text-info fw-bold">Join Our Community</h2>
                <p>
                  Explore the world of opportunities NVA Canada offers at
                  hospitals across the country. Why not take a look at available
                  positions? With so many outstanding locations, you may find
                  the fit you’ve always imagined.
                </p>
                <div className="button-container">
                  <button
                    type="button"
                    class="btn btn-success fw-bold p-3 radius-0"
                  >
                    View NVA Canada Job Postings on LinkedIn
                  </button>
                </div>
                <div className="button-container pt-4">
                  <button
                    type="button"
                    class="btn  btn-success fw-bold p-3 radius-0"
                  >
                    Explore all NVA Opportunities
                  </button>
                </div>
                <div className="button-container pt-4">
                  <button
                    type="button"
                    class="btn  btn-success fw-bold p-3 radius-0"
                  >
                    Email Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-details pt-5">
          <div className="team-heading">
            <h1 className="text-info fw-bold">
              Let our team become your team.
            </h1>
            <p>
              The dream of helping pets kept you motivated as you worked hard to
              earn your expertise. We’re dedicated to keeping a clear pathway
              between your talents and the pets who need you.
            </p>
          </div>
          <div className="col-12">
            <div className="row border-secondary  border-bottom mt-4">
              <div className="col-3 pb-3">
                <img className="img-fluid ps-3" src="../image_150-150.jpg" />
              </div>
              <div className="col-9">
                <h3 className="text-info">Find the right fit for you.</h3>
                <p>
                  Our family of hospitals across Canada gives you the
                  opportunity to find your career home.{" "}
                </p>
                <p>
                  Cultures vary, from region to region and between hospitals.
                  Those subtle differences can amplify under the pressures of
                  veterinary care. The right team will become your friends. The
                  best teams will become your family. Explore your options with
                  confidence in our universal culture of medical excellence.
                </p>
              </div>
            </div>
            <div className="row border-bottom mt-4 border-secondary">
              <div className="col-9">
                <h3 className="text-info">
                  Access the tools to practice your best medicine.
                </h3>
                <p>
                  Have you ever been frustrated by knowing how to help a pet,
                  but missing a critical element for treatment? NVA Canada makes
                  meaningful investments in our hospitals, ensuring our teams
                  have the resources to perform at the highest levels. We listen
                  to clinicians at every level and represent your interests in
                  all we do. Medicine rules the day. And your expertise is put
                  to work, just as you always intended.
                </p>
              </div>
              <div className="col-3 pb-3">
                <img className="img-fluid ps-3" src="../image_150-150.jpg" />
              </div>
            </div>
            <div className="row">
              <div className="col-3 pt-3 pb-3">
                <img className="img-fluid" src="../image_150-150.jpg" />
              </div>
              <div className="col-9 pt-3">
                <h3 className="text-info">
                  You serve your communities. NVA Canada serves you.
                </h3>
                <p>
                  We provide unmatched opportunities for development. From
                  manager training to wellness programs, we invest in you and
                  the people you work with every day. That translates into
                  better experiences for you, for your team members and for your
                  patients. </p>
                  <p>And we believe that not everything can be learned
                  from a publication or explained by the numbers. When experts
                  share ideas, knowledge advances. When professionals connect
                  with each other, everyone stands a little stronger.
                </p>
              </div>
            </div>
            <div className="offer-details border-bottom mt-4 border-secondary">
              <h3 className="text-info">We offer programs such as:</h3>
              <ul>
                <li>
                  <span>
                    CE curriculum and online learning to improve medical and
                    management skills
                  </span>
                </li>
                <li>
                  <span>
                    Hospital Manager and DVM workshops to increase personal and
                    professional life balance
                  </span>
                </li>
                <li>
                  <span>
                    Professional development to help our DVMs enjoy fulfilling
                    careers
                  </span>
                </li>
                <li>
                  <span>
                    NVA’s exclusive Health of Healers retreat—a multi-day
                    program that gives hospital leaders a chance to focus on
                    their own wellness
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="video-details">
          <div className="col-12">
            <div className="row border-secondary  border-bottom mt-4">
              <div className="col-6 pb-3">
                <img className="img-fluid ps-3" src="../image_551-350.jpg" />
              </div>
              <div className="col-6">
                <h3 className="text-info">
                  Excellent benefits matter, because our people matter.
                </h3>
                <p>
                  We care about the well-being of every team member. We're
                  excited to announce our partnership with Canada Life, a
                  premier healthcare provider based in Canada that’s helping us
                  set the standard for benefit care.
                </p>
                <p>
                  NVA Canada is committed to a policy of non-discrimination and
                  equal opportunity for all qualified applicants without regard
                  to race, colour, sex, national origin, age, disability,
                  veteran status or ancestry.
                </p>
              </div>
            </div>
            <div className="row border-bottom mt-4 border-secondary">
              <div className="col-6">
                <h3 className="text-info">Our Teams are Superheroes</h3>
                <p>
                  At NVA Canada, our veterinarians and animal care teams do
                  hero’s work. Earlier this year, we shared this video message
                  with our teams to thank them for the impacts they make on the
                  lives of animals and people who love them.
                </p>
              </div>
              <div className="col-6 pb-3">
                <img className="img-fluid ps-3" src="../image_551-350.jpg" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="career-location bg-dark ">
        <div className="col-12 mb-5 pt-3">
          <Container>
            <div className="location-details border-4 border-start  px-5 border-success rounded-0">
              <h1 className="text-white">Our locations</h1>
              <p className="text-white">
                Discover a job that takes you closer to home, or launches a new
                adventure. NVA has locations across Canada, and we’re adding
                more world-class hospitals to our family all the time.
              </p>
              <button
                type="button"
                class="btn  btn-success fw-bold p-2  radius-0"
              >
                Learn More
              </button>
              <div className="google-map pt-3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14319.432536204175!2d84.344832!3d26.201292799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1667488092294!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="social-icon">
                <div className="fab-icon d-flex">
                  <span>
                    <i class="fa-duotone fa-heart"></i>
                  </span>
                  <span className="icon-name text-white">general practice</span>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div> 
    </Layout>
  );
};
export default Careers;
export async function getStaticProps() {
  const careersResponse = await fetcher(`careers?populate=*`);
  return {
    props: {
      careers: careersResponse.data.attributes
    }
  }
}
