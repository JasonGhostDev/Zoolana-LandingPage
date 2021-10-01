import React from "react";
import Story from "../../components/story/Story";
import Tower from "../../assets/images/tower-img.png";
import Layer5 from "../../assets/images/Layer-5.png";
import "./Story.css";

import {  Image} from "react-bootstrap";

const StoryPage = () => {
  return (
    <div className="story_container_main">
      <Story
        leftElement={
          <>
            <h4 className="t_text-shadow">STORY</h4>
            <div className="t_story t_text-shadow ">
              <p>
                It's the year 2300. Extreme wealth disparity has divided the
                world into two zones. While the poor live in squalor, living and
                dying in failing cities, the ultra-wealthy build a paradise just
                for themselves: Zoolana.
                <br />
                <br />
                Deep within the Rocky Mountains, they build an enclave for the
                rich and famous. The amount of money and land they invest in
                Zoolana is unprecedented. But, the rich hoard it all. Robots and
                machines equipped with Al are cheap and accessible, turning
                labor into a novelty, but still, the poor are excluded. The
                wealthy's Al rapidly accelerates the pace of improving
                technology and only they benefit. Below, the world's poor
                starve, and perish.
                <br />
                <br />
                Initially built so the citizens of Zoolana could maintain and
                surround themselves with the ones that lavish on extravagant
                lifestyles, the city turns into something...else. After years of
                seclusion in the mountains, and with limitless technology at
                their fingertips, the city's inhabitants begin to turn strange.
                They start to abuse their power, using technology for strange
                and twisted experiments.
                <br />
                <br />
                Among other gross uses of their power, the inhabitants begin
                modifying animals as a source of entertainment, hosting
                gladiator battles to the death, even going so far as to give
                them human-like intelligence to make the battles more
                entertaining. They named these animals Zanis. Slowly but surely,
                a deep hatred is borne deep within these oppressed creatures.
                <br />
                <br />
                After withstanding more than five years of inequity and
                mistreatment by the citizens of Zoolana, rallied by their
                pent-up anger and frustration, the Zanis rebel. They hijack the
                headquarters with the skills they've forged from years of battle
                in the Colosseum, and overwhelm the operators, forcing them to
                shut down all communications in Zoolana. "Lights out." And the
                hunt begins.
              </p>
            </div>
          </>
        }
        rightElement={
          <Image className="story_image" src={Tower} alt="display" />
        }
      />
      <Story
        propClass="wrap-reverse-sm"
        rightElement={
          <>
            <div className="t_story t_text-shadow ">
              <p>
                It was a total bloodbath; all humans who lived in Zoolana either
                died or escaped, leaving behind their former paradise to find
                refuge in a hostile world.
                <br />
                <br />
                After gaining their freedom, the Zanis went their separate ways,
                though most stayed within the Zoolana valley. As the years
                passed, groups of Zanis settled in various tribes, calling
                different regions of Zoolana their home.
                <br />
                <br />
                To date, there are three tribes in the Zoolana valley: Luna,
                Nor, and Vand.
                <br />
                <br />
                The Luna tribe was founded by a tribal leader who suffered great
                harm in the Colosseum. He knew survival was the only thing that
                matters and didn't feel safe while living as they did in the old
                city.
                <br />
                <br />
                Lunas want nothing to do with Zoolana tech and live off the
                land. Looking up, bathing in the moonlight, Lunas chose to
                settle at the flat plateaus, the perfect seat for a view of the
                moon. It's not only the beauty that captured the heart of Lunas;
                over time, they've gained an ability to increase in power on the
                night of a full moon.
                <br />
                <br />
                The Nor tribe was founded by a tribal leader who fixed the armor
                in the Colosseum. Despite hating its creators, he knew the value
                of Zoolana's technology, and wouldn't let it go to waste.
                <br />
                <br />
                Nors use Zoolana tech to improve their lives. Learning from
                scratch, the Nors have had many trials and tribulations through
                their experiments with Zoolana tech; still, they believe
                technology helps, rather than harms them. Nors chose to settle
                in the ruins of the old Zoolana city, a place that's filled with
                abundant abandoned technology.
              </p>
            </div>
          </>
        }
        leftElement={
          <Image className="story_image" src={Layer5} alt="display" />
        }
      />
      <Story
        leftElement={
          <>
            <div className="t_story t_text-shadow ">
              <p>
                The Vand tribe, the last known tribe in the Zoolana valley, was
                founded by the twin tribal leaders, and was cast out from the
                Nor tribe.
                <br />
                <br />
                Vand seclude themselves up in the mountains, and as such, little
                is known about them... The twin tribal leaders once belonged to
                the Nor but were caught experimenting with the genetic
                modification technology that had created Zanis long ago. Taboo
                even for the Nor, these experiments led to them being cast out
                from their tribe, and the Vand twins were banned from entering
                the ruins of Zoolana ever again.
                <br />
                <br />
                For 50 years the tribes have had their own respective
                territories and lived separate lives within their regions.
                <br />
                <br />
                That is, until now. In recent years, it's become apparent that
                the land in the Zoolana valley has limited resources...and it's
                every tribe, and even Zani, for themself.
                <br />
                <br />
                As war begins to tear apart the Zoolana valley, eyes situated
                far to the north look on, closely observing the fighting...
                <br />
                <br />
                Which tribe will prevail in Zoolana?
              </p>
            </div>
          </>
        }
        rightElement={
          <Image className="story_image" src={Layer5} alt="display" />
        }
      />
    </div>
  );
};

export default StoryPage;
