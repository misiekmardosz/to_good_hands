import React from "react";
import people from "../../assets/People.jpg"
import signature from "../../assets/Signature.svg"
const HomeAboutUs = () => {
  return(
      <section className={"about--container"} title="section4" id="section4">
          <div className={"about--content"}>
              <article className="about--article">
                  <h2 className={"about--title"}>O nas</h2>
                  <p className={"about--paragraph"}>Nori grape silver beet<br/> broccoli kombu beet greens fava bean potato quandong celery.<br/> Bunya nuts black-eyed pea prairie turnip leek<br/> lentil turnip greens parsnip.</p>

              </article>
              <div className={"signature"}><img src={signature}/></div>

          </div>
          <div className={"about--photo"}></div>
      </section>
  )
}

export default HomeAboutUs