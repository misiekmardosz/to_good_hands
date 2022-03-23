import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const HomeHelp = () => {
  return(
      <section className={"help--container"}>
          <h2 className={"help--title"}>Komu Pomagamy?</h2>
          <Tabs className={"help--tabs"}>
              <TabList className={"tab--list"}>
                  <Tab className={"main--button"}>Fundacjom</Tab>
                  <Tab className={"main--button"}>Organizacjom pozarządowym</Tab>
                  <Tab className={"main--button"}>Lokalnym zbiórkom</Tab>
              </TabList>
              <TabPanel className={"tab--panel"}>
                  <p className={"tab--title"}>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                  <article className={"tab--row"}>
                      <div className={"tab--row--main"}>
                          <h3 className={"tab--row--title"}>Fundacja “Dbam o Zdrowie”</h3>
                          <p className={"tab--row--paragraph"}>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                      </div>
                      <div>
                          <p className={"tab--row--paragraph"}>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                      </div>
                  </article>
                  <article className={"tab--row"}>
                      <div className={"tab--row--main"}>
                          <h3 className={"tab--row--title"}>Fundacja “Dbam o Zdrowie”</h3>
                          <p className={"tab--row--paragraph"}>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                      </div>
                      <div>
                          <p className={"tab--row--paragraph"}>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                      </div>
                  </article>
                  <article className={"tab--row"}>
                      <div className={"tab--row--main"}>
                          <h3 className={"tab--row--title"}>Fundacja “Dbam o Zdrowie”</h3>
                          <p className={"tab--row--paragraph"}>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                      </div>
                      <div>
                          <p className={"tab--row--paragraph"}>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                      </div>
                  </article>
              </TabPanel>
              <TabPanel>

              </TabPanel>
              <TabPanel>
                  <p className={"tab--title"}></p>
              </TabPanel>
          </Tabs>
      </section>
  )
}

export default HomeHelp