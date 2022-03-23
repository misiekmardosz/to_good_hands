import React from "react";
import icon1 from "../../assets/Icon-1.svg"
import icon2 from "../../assets/Icon-2.svg"
import icon3 from "../../assets/Icon-3.svg"
import icon4 from "../../assets/Icon-4.svg"


const HomeHandOver = () => {
  return(
      <section className={"handover"}>
          <h2 className={"handover--title"}>Wystarczą 4 proste kroki</h2>
          <div className={"handover--columns"}>
              <article className={"handover--column"}>
                  <img src={icon1}/>
                  <h3 className={"handover--column--title"}>Wybierz rzeczy</h3>
                  <p className={"handover--column--paragraph"}>ubrania, zabawki, sprzęt i inne</p>
              </article>
              <article className={"handover--column"}>
                  <img src={icon2}/>
                  <h3 className={"handover--column--title"}>Spakuj je</h3>
                  <p className={"handover--column--paragraph"}>skorzystaj z worków na śmieci</p>
              </article>
              <article className={"handover--column"}>
                  <img src={icon3}/>
                  <h3 className={"handover--column--title"}>Zdecyduj komu<br/>chcesz pomóc</h3>
                  <p className={"handover--column--paragraph"}>wybierz zaufane<br/> miejsce</p>
              </article>
              <article className={"handover--column"}>
                  <img src={icon4}/>
                  <h3 className={"handover--column--title"}>Zamów kuriera</h3>
                  <p className={"handover--column--paragraph"}>kurier przyjedzie<br/> w dogodnym terminie</p>
              </article>
          </div>
          <button className="main--button">ODDAJ<br/>RZECZY</button>
      </section>
  )
}
export {HomeHandOver}