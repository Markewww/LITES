import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1120px)");
  return (
    <section
      id="home"
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <div>
        {/* MAIN HEADER */}
        <div>
          {/* HEADINGS */}
          <div>
            <div>
              <div>
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>

            <p>
              Unleash Your Potential with LITES: Where Studies Meets Excellence
            </p>
          </div>
          {/* ACTION BUTTONS */}
          <div>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
            className="text-sm font-bold text-primary hover:text-primary-light"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
            >
              <p>Contact Us</p>
            </AnchorLink>
          </div>
        </div>

        {/* IMAGE */}
        <div></div>
      </div>
    </section>
  )
}

export default Home