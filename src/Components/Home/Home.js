import './Home.css';
import nepalToUsImage from './nepalToUsImage.png';
import house from './house.png';
import test from './test.png'
import interview from './interview.png';
import consulting from './consult.png';
import NavBar from '../NavBar/NavBar';
import FeaturesTile from '../FeaturesTile/FeaturesTile';
import SuccessStoryTile from '../SuccessStoryTile/SuccessStoryTile';

import { Link } from "react-router";

function Home() {
  return (
    <div className="Home">
        <NavBar />
        <div className='main'>
            <h1>Your Path to Study in the USA Starts Here</h1>
            <p>Find the right university. Understand the application process. Unlock scholarships and financial aid.</p>
        </div>
        <div className='homeButtons'>
            <button id="first">Schedule a Free Consulations</button>
            <button>Why Us?</button>
        </div>
        <div className='homeImage'>
            <img src={nepalToUsImage} />
        </div>

        <div className='startJourney'>
            <div className='leftPart'>
                <h2>Ready to start your journey?</h2>
                <p>Apply to top US universities and find the perfect housing with our help.</p>
                <button>Get Started</button>
            </div>
            <div className='rightPart'>
                <img src="https://media.istockphoto.com/id/528632901/photo/work-together.jpg?s=612x612&w=0&k=20&c=aqhsjdrxJky_145BS81Lyz4awOsWp9d5ySx64hhyyLY=" />
            </div>
        </div>

        <div className='features'>
            <h2>Turn Your U.S. Study Dreams Into Reality</h2>
            <p>Your dream of studying in the U.S. is within reach, and we’re here to help you make it happen. Whether you're in need of personalized college recommendations, SAT/ACT prep, visa support, or one-on-one consulting, we provide all the tools and resources you need to succeed</p>
            <div className='featuresTiles'>
                <FeaturesTile
                    image={house}
                    title="Find Your Perfect U.S. University with Ease"
                    subtitle="Choosing the right university is one of the most important decisions of your academic journey. With thousands of options available, it can be overwhelming to know where to start."
                    buttonTitle="Find more"
                />
                <Link to="/test-prep">
                    <FeaturesTile
                        image={test}
                        title="Ace Your Admissions Test and Unlock Your Future"
                        subtitle="Preparing for standardized tests like the SAT or ACT can be daunting, but with the right resources, you can achieve the scores that will open doors to top U.S. universities."
                        buttonTitle="Find more"
                    />
                </Link>
                <FeaturesTile
                    image={interview}
                    title="Secure Your U.S. Student Visa with Confidence"
                    subtitle="Getting your U.S. student visa is a crucial step in making your dreams of studying abroad a reality. The visa application process can be complex and stressful, but we’re here to help simplify it."
                    buttonTitle="Find more"
                />
                <FeaturesTile
                    image={consulting}
                    title="Expert Consulting for Your U.S. College Journey"
                    subtitle="The journey to studying in the U.S. can be complex, but with personalized consulting, you don’t have to do it alone. Our consultants work with you every step of the way."
                    buttonTitle="Find more"
                />
            </div>
        </div>

        <div className='successStories'>
            <h2>Success Stories from Our Students</h2>
            <p>Read how other international students have successfully navigated the application process with our help</p>
            <div className='successStoryTile'>
                <SuccessStoryTile
                    image="https://media.licdn.com/dms/image/v2/D5603AQEDwnQotRcBvA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726624725389?e=2147483647&v=beta&t=YLIgMYSnsr1QsMH2ndroJ0u6mEiflBGQoLNSBSjinnI"
                    name="Rista Subedi"
                    university="Howard University"
                    description="With your guidance, I received offers from three top universities in the U.S.! Thank you so much for the help."
                />

                <SuccessStoryTile
                    image="https://media.licdn.com/dms/image/v2/D4E03AQH44gxxk_GLTg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1667103294626?e=1743033600&v=beta&t=73SMSB-dHw99mUxBNWQBGv9KA_M_TdDuG7iXVUsSuHI"
                    name="Suyog Bala"
                    university="Howard University"
                    description="With your guidance, I received offers from three top universities in the U.S.! Thank you so much for the help."
                />

                <SuccessStoryTile
                    image="https://media.licdn.com/dms/image/v2/D5603AQEDwnQotRcBvA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726624725389?e=2147483647&v=beta&t=YLIgMYSnsr1QsMH2ndroJ0u6mEiflBGQoLNSBSjinnI"
                    name="Rista Subedi"
                    university="Howard University"
                    description="With your guidance, I received offers from three top universities in the U.S.! Thank you so much for the help."
                />

                <SuccessStoryTile
                    image="https://media.licdn.com/dms/image/v2/D5603AQEDwnQotRcBvA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1726624725389?e=2147483647&v=beta&t=YLIgMYSnsr1QsMH2ndroJ0u6mEiflBGQoLNSBSjinnI"
                    name="Rista Subedi"
                    university="Howard University"
                    description="With your guidance, I received offers from three top universities in the U.S.! Thank you so much for the help."
                />  
            </div>
        </div>

        <div className='footer'>
            <p>Copyright F1-Approved @</p>
        </div>
    </div>
  );
}

export default Home;
