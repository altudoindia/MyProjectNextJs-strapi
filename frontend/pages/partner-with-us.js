import Head from 'next/head'
import Image from '../components/Elements/Image'
import Layout from '../components/PageStructure/Container/Layout'
import Container from '../components/PageStructure/Container/Container'
import { fetcher } from '../lib/api'
import React from 'react'
import Section from '../components/PageStructure/Container/Section'
import Title from '../components/Elements/Title'
import Description from '../components/Elements/Description'
import Slug from '../components/Elements/Slug'

const Partner = ({ partner }) => {
  console.log(partner);
  return (
    <Layout>
         <Section className="bg-light">
                <Container>
                <Head>
                <title>{partner.Title}</title>
                 </Head>
                    <Title>{partner.Banner.Title}</Title>
                    <Description type="h4" className="pt-2 pb-4">{partner.Banner.Description}</Description>
                </Container>
            </Section> 
     
     <section>
      <Container>
        <div className='row'>
          <div className='col-md-12'>
            <div className='pb-5'>
            <Title type='h2' className='text-success fw-bold'>{partner.Title}</Title>             
              <Description>{partner.Description}</Description>
            </div>
          </div>
        </div>
        <div className='row border-bottom mb-3'>
          <div className='col-md-3 col-12'>
            <div className='p-3'>
              <Image src={partner.Cards.Background_Image.data} alt=".." />            
            </div>
          </div>
          <div className='col-md-9 col-12'>
            <div className='p-3'>
            <Title type="h4" className='text-success fw-bold'>{partner.Cards.Title}</Title>
            <Description>{partner.Cards.Description}</Description>
          </div>
          </div>
        </div>
        <div className='row border-bottom mb-3'>          
          <div className='col-md-9 col-12'>
            <div className='p-3'>
            <Title type="h4" className='text-success fw-bold'>{partner.Cards2.Description}</Title>
            <Description>{partner.Cards2.Description}</Description>
          </div>
          </div>
          <div className='col-md-3 col-12'>
            <div className='p-3'>
            <Image src={partner.Cards2.Background_Image.data} alt=".." />              
            </div>
          </div>
        </div>
        <div className='row border-bottom mb-3'>
          <div className='col-md-12 col-12'>
            <div className='p-3'>
            <Title type="h4" className='text-success fw-bold mb-3'>{partner.Image.Title}</Title>
            <Image size="medium" src={partner.Image.Image.data[0]} alt=".." />               
            </div>
          </div>         
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='border-start border-success border-4 px-5 mt-5 mb-5'>
              <Description>{partner.ContentTile.Description}</Description>
              <Image size="large" src={partner.ContentTile.Image.data} alt=".." />  
            </div>
          </div>
        </div>
      </Container>
      </section>
    <section className='bg-secondary p-5 position-relative'>
    <Image src={partner.ContentTile2.Background_Image.data} className="position-relative" alt=".." />  
      <Container>
        <div className='row'>
          <div className='col-md-6'>
            <div className='position-absolute w-50 top-0 text-white border-start border-4 px-5 mt-5 mb-5'>
                <Description>{partner.ContentTile2.Description}</Description>
            </div>
          </div>
        
        </div>
      </Container>
    </section>
    <section className="bg-light">
      <Container>
          <div className='row'>
            <div className='col-md-6'>
            <div className='border-start border-4 border-success px-5 mt-5 mb-5'>
              <Title type="h2" className='text-success fw-bold fs-2'>{partner.ContactUs.Title}</Title>
              <p>{partner.ContactUs.SubTitle}</p>
              <Description>{partner.ContactUs.Description}</Description>
              <p><a>Email</a></p>
              <p>+012 321 456 98</p>
            </div>
            </div>
            <div className='col-md-6'>
              <div className='mt-5 mb-5'>
                <form action='' method='post'>
                  <div className='row'>
                    <div className='col-6'>
                    <div className="mb-3">
                      <label className="form-label">First Name <span className='text-danger'>*</span></label>
                      <input type="text" id='' className="form-control"/>
                    </div>
                    </div>
                    <div className='col-6'>
                    <div className="mb-3">
                      <label className="form-label">Last Name <span className='text-danger'>*</span></label>
                      <input type="text" id='' className="form-control"/>
                    </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12'>
                    <div className="mb-3">
                      <label className="form-label">Title <span className='text-danger'>*</span></label>
                      <input type="text" id='' className="form-control"/>
                    </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-6'>
                    <div className="mb-3">
                      <label className="form-label">Email <span className='text-danger'>*</span></label>
                      <input type="email" id='' className="form-control"/>
                    </div>
                    </div>
                    <div className='col-6'>
                    <div className="mb-3">
                      <label className="form-label invisible">Confirm Email</label> 
                      <input type="email" id='' className="form-control" placeholder='Confirm Email' />
                    </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12'>
                    <div className="mb-3">
                      <label className="form-label">Phone Number <span className='text-danger'>*</span></label>
                      <input type="text" id='' className="form-control"/>
                    </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12'>
                    <div className="mb-3">
                      <label className="form-label">Hospital Name <span className='text-danger'>*</span></label>
                      <input type="text" id='' className="form-control"/>
                    </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12'>
                    <div className="mb-3">
                      <label className="form-label">Address (Optional)</label>
                      <input type="text" id='' className="form-control" placeholder='Street Address'/>
                    </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-6'>
                    <div className="mb-3">
                      <input type="email" id='' className="form-control" placeholder='City'/>
                    </div>
                    </div>
                    <div className='col-6'>
                    <div className="mb-3">
                      <input type="email" id='' className="form-control" placeholder='State'/>
                    </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-6'>
                    <div className="mb-3">
                      <input type="email" id='' className="form-control" placeholder='ZIP'/>
                    </div>
                    </div>
                    <div className='col-6'>
                    <div className="mb-3">
                    <select className="form-select">
                    <option defaultValue>Country</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                    </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12'>
                    <div className="mb-3">
                      <label className="form-label">Message (Optional)</label>
                      <textarea className="form-control"  id='' rows="3"></textarea>
                    </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12'>
                    <div className="mb-3">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" />
                    <label className="form-check-label">
                    Yes, Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </label>
                  </div>
                    </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-12'>
                      <div className='text-end'>
                      <Slug type="button" size="large" styleclass="btn-success">Success</Slug>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </Container>
    </section>


    </Layout>


  )}

export default Partner;

export async function getStaticProps() {
  const homeResponse = await fetcher(`partner-with-us?populate[0]=Cards.Background_Image&populate[1]=Banner.Image&populate[2]=Image.Image&populate[3]=Cards2.Background_Image&populate[4]=ContentTile.Image&populate[5]=ContentTile2.Background_Image&populate[6]=ContactUs.Description`);
  return {
    props: {
      partner: homeResponse.data.attributes
    }
  }
}