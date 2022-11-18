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
import LanguageSelector from '../components/Forms/LanguageSelector/LanguageSelector'

const Test = ({ testpage }) => {
    return (
        <Layout>
            <Head>
                <title>{testpage.Title}</title>
            </Head>

            {/* Page Structures */}
            <Section className="bg-light">
                <Container>
                    <Title>Section Page Structure for padding box and outer wrapper</Title>
                </Container>
            </Section>

            {/* Page Elements */}
            <Section>
                <Container>
                    <Title>Title Component Default</Title>
                    <Title type="h2">Title with Type attribute</Title>
                    <Title type="h3" className="pt-2 pb-4">Title with Add Class</Title>
                    <Title replaceclass="true" type="h4" className="pt-2 pb-4">Title with Replace Class</Title>
                </Container>
            </Section>

            <Section className="bg-light">
                <Container>
                    <Title type="h2">Image Field</Title>
                    <p><b>replaceclass</b> - attribute to replace class rather to append with default class</p>
                    <p><b>size</b> - thumbnail, large, small, bank for default</p>
                    <p><b>size</b> - thumbnail, large, small, bank for default</p>
                    <br />
                    <div className="row">
                        {testpage.Image.data.map(image => (
                            <div key={image.id} className="col-2">
                                <Image src={image} />
                            </div>
                        ))}

                        {testpage.Image.data.map(image => (
                            <div key={image.id} className="col-2">
                                <Image size="thumbnal" className="image-2" src={image} />
                            </div>
                        ))}

                        {testpage.Image.data.map(image => (
                            <div key={image.id} className="col-2">
                                <Image replaceclass="true" size="thumbnal" className="image-2 mb-5" src={image} />
                            </div>
                        ))}
                    </div>
                </Container>
            </Section>

            <Section>
                <Container>
                    <Title type="h2">Description Section</Title>
                    <p><b>replaceclass</b> - attribute to replace class rather to append with default class</p>
                    <br />
                    <div className="row">
                        <Description >{"<div class='dummy-class mb-3'><p><b>HTML content without attribute</b></p></div>"}</Description>
                        <Description className="mb-4">{"<div class='dummy-class mb-3'><p><i>HTML content with add class to default.</i></p></div>"}</Description>
                        <Description replaceclass='true' className="mb-5">{"<div class='dummy-class mb-3'><p><u>HTML content with replace class</u></p></div>"}</Description>
                    </div>
                </Container>
            </Section>

            <Section className="bg-light">
                <Container>
                    <Title type="h2">Slug Section</Title>
                    <br />
                    <div className="row">
                        <div className='col-12 mb-4'>
                            <Slug>Link Default Type</Slug>
                        </div>
                        <div className='col-12 mb-4'>
                            <Slug replaceclass="true" Link="/test">Link with Link Attribute</Slug>
                        </div>
                        <div className='col-12 mb-4'>
                            <Slug replaceclass="true" Link="/test" className="link-secondary">Link with replace class Attribute</Slug>
                        </div>
                        <div className='col-12 mb-4'>
                            <Slug type="button">Button with No Attribute</Slug>
                        </div>

                        <div className='col-12 mb-4'>
                            <Slug size="small" type="button">Button with size Attribute -- small/large/no attribute</Slug>
                        </div>
                        <div className='col-12 mb-4'>
                            <Slug size="large" type="button">Button with size Attribute -- small/large/no attribute</Slug>
                        </div>
                        <div className='col-12 mb-4'>
                            <Slug size="large" styleclass="secondary" type="button">Button with styleclass Attribute -- primary default/secondary/info</Slug>
                        </div>
                        <div className='col-12 mb-4'>
                            <Slug size="large" styleclass="info" type="button">Button with styleclass Attribute -- primary default/secondary/info</Slug>
                        </div>
                        <div className='col-12 mb-4'>
                            <Slug bordered size="large" styleclass="primary" type="button">Button with bordered Attribute -- true/false</Slug>
                        </div>
                        <div className='col-12 mb-4'>
                            <Slug bordered size="large" styleclass="secondary" type="button">Button with bordered Attribute -- true/false</Slug>
                        </div>
                        <div className='col-12 mb-4'>
                            <Slug bordered size="large" styleclass="info" type="button">Button with bordered Attribute -- true/false</Slug>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* language selector */}
            <section>
                <Container>
                  <div className='row'>
                    <div className='col-md-6'>
                        <LanguageSelector />
                    </div>
                  </div>
                </Container>
            </section>
            
        </Layout>
    )
}

export default Test;

export async function getStaticProps() {
    const testResponse = await fetcher(`test?populate=*`);
    return {
        props: {
            testpage: testResponse.data.attributes
        }
    }
}