import React from "react";
import {ContactUs as ContactForming} from '../widgets/cards/ContactUs'
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Alert,
  checkbox
} from "@material-tailwind/react";
import { UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function Home() {
  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black"
              >
                Hekayən bizimlə başlayır.
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Həftədə 1 saat çalışmaqla karyeranı inkişaf etdir, fit bədənə sahib ol, yeni bacarıq öyrən!
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-gray-50 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <Alert className="alert">Ilk qeydiyyatdan keçən 100 nəfərə 76% endirim!!! (10-dan az qaldı)</Alert>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">
                <UsersIcon className="h-6 w-6 text-blue-gray-900" />
              </div>
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                Bizimlə işləmək çox xoşdur.
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                Çünki işimizdə ən yaxşısı bizik! Bunu biz yox, müştərilərimiz deyir. 
                <br />
                <br />
                Müştərilər həmişə dinlənir, hədəflərinə çatana qədər dayanmadan çalışılırıq. Ən əsası isə, YALNIZ onların istədikləri olur. 
              </Typography>
              <Button onClick={() => {
      
                window.scrollTo({
                  top: 1300,
                  behavior: 'smooth'}
                )}}
                        
              variant="outlined">Daha çox</Button>
            </div>
            <div className="mx-auto mt-24 flex w-full justify-center px-4 md:w-4/12 lg:mt-0">
              <Card className="shadow-lg shadow-gray-500/10">
                <CardHeader className="relative h-56">
                  <img
                    alt="Card Image"
                    src="/img/teamwork.jpeg"
                    className="h-full w-full"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-3 font-bold"
                  >
                    Keyfiyyətə şübhə yoxdur!!!
                  </Typography>
                  <Typography className="font-normal text-blue-gray-500">
                    Sadəcə əlaqəyə keç və sən də nəticəni görəcəksən.
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle heading="Here are our heroes">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-lg fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section> */}
      <section className="relative bg-blue-gray-50/50 py-24 px-4">
        <div className="container mx-auto">
          {/* <PageTitle heading="Build something">
            Scambos.
          </PageTitle> */}
          {/* <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-white shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div> */}
          <PageTitle heading="İşkişaf etməyə hazırsan?" className="contactt">
            Bu formu doldur və biz 24 saat içində əlaqə saxlayaq.
          </PageTitle>
          {/* <form className="mx-auto mt-12 max-w-3xl text-center">
            <div className="mb-8 flex gap-8">
              <Input variant="standard" size="lg" label="Full Name" />
              <Input variant="standard" size="lg" label="Email Address" />
            </div>
            <Textarea variant="standard" size="lg" label="Message" rows={8} />
            <Button variant="gradient" size="lg" className="mt-8">
              Send Message
            </Button>
            
          </form> */}
        </div>
        <div className="contacting">
          <ContactForming />
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Home;
