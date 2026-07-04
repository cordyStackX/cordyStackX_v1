import Image from "next/image";
import { About__css } from "@/app/config/css/landpage";
import image__src from "@/app/config/conf/images.json";
import { useInView } from "@/app/utilities";

export default function About() {
  // each element gets its own hook
  const { ref: img1Ref, isInView: img1InView } = useInView<HTMLSpanElement>(true);
  const { ref: img2Ref, isInView: img2InView } = useInView<HTMLSpanElement>(true);
  const { ref: titleRef, isInView: titleInView } = useInView<HTMLHeadingElement>(true);
  const { ref: lineRef, isInView: lineInView } = useInView<HTMLDivElement>(true);
  const { ref: para1, isInView: para1InView } = useInView<HTMLDivElement>(true);
  const { ref: para2, isInView: para2InView } = useInView<HTMLDivElement>(true);

  return (
    <section id="About" className={About__css.about__sections}>
      <div className={About__css.about__container}>
        <div className={About__css.about__left_side}>
          <div>
            <span
              className={`${About__css.about__left_side_image_1} ${img1InView ? About__css.image_in_view : ''}`}
              ref={img1Ref}
            >
              <Image
                src={image__src.about.image__1}
                alt="Marc Giestin Louis Cordova"
                title="Marc Giestin Louis Cordova"
                width={420}
                height={560}
                priority={false}
              />
            </span>

            <span
              className={`${About__css.about__left_side_image_2} ${img2InView ? About__css.image_in_view : ''}`}
              ref={img2Ref}
            >
              <Image
                src={image__src.about.image__2}
                alt="Cordy Signature Avatar"
                title="Cordy Signature Avatar"
                width={420}
                height={420}
                priority={false}
              />
            </span>
          </div>
        </div>

        <div className={About__css.about__right_side}>
          <div className={About__css.about__right_side_info}>
            <h2 ref={titleRef} style={{ '--titleIsInView': titleInView ? 1 : 0 } as React.CSSProperties}>
              <span>A</span>
              <span>B</span>
              <span>O</span>
              <span>U</span>
              <span>T</span>
              <span>M</span>
              <span>E</span>
            </h2>

            <div ref={lineRef} className={`${About__css.about__right_side_info_div} ${lineInView ? About__css.elements_in_view : ''}`} />
            <p ref={para1} className={`${About__css.about__right_side_info_p} ${para1InView ? About__css.text_in_view : ''}`}>
              Founder of CordyStackX | Open Source Software Developer | Next.js Enthusiast | Building innovative blockchain &
              web applications with speed, scalability, and modern design.
            </p>
            <p ref={para2} className={`${About__css.about__right_side_info_p} ${para2InView ? About__css.text_in_view : ''}`}>
              I aim to build the next wave of scalable Web2 and Web3 applications —
              blending modern frameworks like Next.js and Express with decentralized tools like Hardhat
              and Wagmi. My vision is to create seamless, user-friendly digital experiences while
              optimizing visibility through SEO. Long-term, I&#39;m working towards becoming a validator and founder, driving
              innovation in blockchain-powered platforms that empower users and developers alike.
            </p>
            <button>Ask my Resume</button>
          </div>
        </div>
      </div>

    </section>
  );
}
