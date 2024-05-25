import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
const Contactform = () => {
  return (
    <>
      <div className="relative ">
        <h2
          className="text-2xl xl:text-5xl font-Lato-Black mb-4 text-center mt-10 text-Light-Purple2"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          Email us
        </h2>
        <div className="container mx-auto px-4 py-8 flex flex-wrap">
          <div
            className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <iframe
              className="w-full h-[370px] rounded-lg"
              src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=San%20Andres,Cainta%20Rizal+(Pandora's%20Treasure)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps systems</a>
            </iframe>

            <div
              className="flex justify-between items-center mt-8 font-Lato-Light"
              data-aos="fade-down"
              data-aos-duration="1500"
            >
              <div className="w-1/3 flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#ded3f5ff"
                  className="size-6 me-2"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
                <a href="mailto:projectHub@gmail.com">projectHub@gmail.com</a>
              </div>
              <div className="w-1/3 flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#ded3f5ff"
                  className="size-6 me-2"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
                <a href="tel:1-847-555-5555">Call 1-847-555-5555</a>
              </div>
              <div className="w-1/3 flex ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#ded3f5ff"
                  className="size-6 me-2"
                >
                  <path
                    fillRule="evenodd"
                    d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                    clipRule="evenodd"
                  />
                </svg>
                <a href="https://maps.google.com/?q=Cainta+Rizal">
                  <address>Cainta, Rizal 1900 </address>
                </a>
              </div>
            </div>
          </div>

          <div
            className="w-full lg:w-1/2 p-5 rounded-lg border"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <form action="#" method="POST" className="space-y-4">
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                  <Input
                    size="lg"
                    label="First Name"
                    className="focus:outline-none focus:ring-0 "
                  />
                </div>
                <div className="w-full md:w-1/2 px-2">
                  <Input
                    size="lg"
                    label="Last Name"
                    className="focus:outline-none focus:ring-0 "
                  />
                </div>
                <div className="w-full px-2 mt-4">
                  <Input
                    size="lg"
                    label="Email"
                    type="email"
                    className="focus:outline-none focus:ring-0"
                  />
                </div>
              </div>
              <Textarea
                size="md"
                label="Enter your inquiry"
                cols={30}
                rows={10}
                className="focus:outline-none focus:ring-0 "
              />
              <Button className="w-full font-Lato-Medium py-4 text-md bg-Dark-Purple">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactform;
