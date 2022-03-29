import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const HomeHelp = () => {
  return(
      <section className={"help--container"} title="section5" id="section5">
          <h2 className={"help--title"}>Komu Pomagamy?</h2>
          <Tabs className={"help--tabs"}>
              <TabList className={"tab--list"}>
                  <Tab className={"main--button tab--buttons"}>Fundacjom</Tab>
                  <Tab className={"main--button tab--buttons"}>Organizacjom pozarządowym</Tab>
                  <Tab className={"main--button tab--buttons"}>Lokalnym zbiórkom</Tab>
              </TabList>

              {/*Foundations*/}

              <TabPanel className={"tab--panel"}>
                  <p className={"tab--title"}>W naszej bazie znajdziesz listę zweryfikowanych Fundacji,<br/> z którymi współpracujemy. Możesz sprawdzić czym się zajmują,<br/> komu pomagają i czego potrzebują.</p>
                  <Tabs className={"help--tabs"}>
                      <TabPanel className={"tab--panel"}>
                          <article className={"tab--row"}>
                              <div className={"tab--row--container"}>
                                  <div className={"tab--row--main"}>
                                      <h3 className={"tab--row--title"}>Fundacja “Dbam o Zdrowie”</h3>
                                      <p className={"tab--row--paragraph"}>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                                  </div>
                                  <div>
                                      <p className={"tab--row--paragraph"}>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                                  </div>
                              </div>
                          </article>
                          <article className={"tab--row"}>
                              <div className={"tab--row--container"}>
                                  <div className={"tab--row--main"}>
                                      <h3 className={"tab--row--title"}>Fundacja “Dla dzieci”</h3>
                                      <p className={"tab--row--paragraph"}>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                                  </div>
                                  <div>
                                      <p className={"tab--row--paragraph"}>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                                  </div>
                              </div>
                          </article>
                          <article className={"tab--row"}>
                              <div className={"tab--row--container"}>
                                  <div className={"tab--row--main"}>
                                      <h3 className={"tab--row--title"}>Fundacja “Bez domu”</h3>
                                      <p className={"tab--row--paragraph"}>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                                  </div>
                                  <div>
                                      <p className={"tab--row--paragraph"}>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                                  </div>
                              </div>
                          </article>
                      </TabPanel>
                      <TabPanel className={"tab--panel"}>
                          <article className={"tab--row"}>
                              <div className={"tab--row--container"}>
                                  <div className={"tab--row--main"}>
                                      <h3 className={"tab--row--title"}>Fundacja “Lorem Ipsum 1”</h3>
                                      <p className={"tab--row--paragraph"}>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                                  </div>
                                  <div>
                                      <p className={"tab--row--paragraph"}>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                                  </div>
                              </div>
                          </article>
                          <article className={"tab--row"}>
                              <div className={"tab--row--container"}>
                                  <div className={"tab--row--main"}>
                                      <h3 className={"tab--row--title"}>Fundacja  “Lorem Ipsum 2”</h3>
                                      <p className={"tab--row--paragraph"}>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                                  </div>
                                  <div>
                                      <p className={"tab--row--paragraph"}>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                                  </div>
                              </div>
                          </article>
                          <article className={"tab--row"}>
                              <div className={"tab--row--container"}>
                                  <div className={"tab--row--main"}>
                                      <h3 className={"tab--row--title"}>Fundacja  “Lorem Ipsum 3”</h3>
                                      <p className={"tab--row--paragraph"}>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                                  </div>
                                  <div>
                                      <p className={"tab--row--paragraph"}>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                                  </div>
                              </div>
                          </article>
                      </TabPanel>
                      <TabPanel className={"tab--panel"}>
                          <article className={"tab--row"}>
                              <div className={"tab--row--container"}>
                                  <div className={"tab--row--main"}>
                                      <h3 className={"tab--row--title"}>Fundacja “Scelerisque in dictum 1”</h3>
                                      <p className={"tab--row--paragraph"}>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                                  </div>
                                  <div>
                                      <p className={"tab--row--paragraph"}>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                                  </div>
                              </div>
                          </article>
                          <article className={"tab--row"}>
                              <div className={"tab--row--container"}>
                                  <div className={"tab--row--main"}>
                                      <h3 className={"tab--row--title"}>Fundacja “Scelerisque in dictum 2”</h3>
                                      <p className={"tab--row--paragraph"}>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                                  </div>
                                  <div>
                                      <p className={"tab--row--paragraph"}>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                                  </div>
                              </div>
                          </article>
                          <article className={"tab--row"}>
                              <div className={"tab--row--container"}>
                                  <div className={"tab--row--main"}>
                                      <h3 className={"tab--row--title"}>Fundacja “Scelerisque in dictum 3”</h3>
                                      <p className={"tab--row--paragraph"}>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                                  </div>
                                  <div>
                                      <p className={"tab--row--paragraph"}>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                                  </div>
                              </div>
                          </article>
                      </TabPanel>
                      <TabList className={"bottom--button--list"}>
                          <Tab className={"bottom--button"}>1</Tab>
                          <Tab className={"bottom--button"}>2</Tab>
                          <Tab className={"bottom--button"}>3</Tab>
                      </TabList>
                  </Tabs>
              </TabPanel>

              {/*ORGANIZATIONS*/}

              <TabPanel className={"tab--panel"}>
                  <p className={"tab--title"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br/> do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis nostrud exercitation.</p>
                  <Tabs className={"help--tabs"}>
                      <TabPanel className={"tab--panel"}>
                          <article className={"tab--row"}>
                              <div className={"tab--row--container"}>
                                  <div className={"tab--row--main"}>
                                      <h3 className={"tab--row--title"}>Organizacja “Lorem Ipsum 1”</h3>
                                      <p className={"tab--row--paragraph"}>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                                  </div>
                                  <div>
                                      <p className={"tab--row--paragraph"}>Egestas, sed, tempus</p>
                                  </div>
                              </div>
                          </article>
                          <article className={"tab--row"}>
                              <div className={"tab--row--container"}>
                                  <div className={"tab--row--main"}>
                                      <h3 className={"tab--row--title"}>Organizacja “Lorem Ipsum 2”</h3>
                                      <p className={"tab--row--paragraph"}>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                                  </div>
                                  <div>
                                      <p className={"tab--row--paragraph"}>Ut, aliquam, purus, sit, amet</p>
                                  </div>
                              </div>
                          </article>
                          <article className={"tab--row"}>
                              <div className={"tab--row--container"}>
                                  <div className={"tab--row--main"}>
                                      <h3 className={"tab--row--title"}>Organizacja “Lorem Ipsum 3”</h3>
                                      <p className={"tab--row--paragraph"}>Scelerisque in dictum non consectetur a erat nam.</p>
                                  </div>
                                  <div>
                                      <p className={"tab--row--paragraph"}>Mi, quis, hendrerit, dolor</p>
                                  </div>
                              </div>
                          </article>
                      </TabPanel>
                      <TabPanel className={"tab--panel"}>
                          <article className={"tab--row"}>
                              <div className={"tab--row--container"}>
                                  <div className={"tab--row--main"}>
                                      <h3 className={"tab--row--title"}>Organizacja “Scelerisque in dictum 2”</h3>
                                      <p className={"tab--row--paragraph"}>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                                  </div>
                                  <div>
                                      <p className={"tab--row--paragraph"}>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                                  </div>
                              </div>
                          </article>
                          <article className={"tab--row"}>
                              <div className={"tab--row--container"}>
                                  <div className={"tab--row--main"}>
                                      <h3 className={"tab--row--title"}>Organizacja “Scelerisque in dictum 3”</h3>
                                      <p className={"tab--row--paragraph"}>Scelerisque in dictum non consectetur a erat nam.</p>
                                  </div>
                                  <div>
                                      <p className={"tab--row--paragraph"}>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                                  </div>
                              </div>
                          </article>
                          <article className={"tab--row"}>
                              <div className={"tab--row--container"}>
                                  <div className={"tab--row--main"}>
                                      <h3 className={"tab--row--title"}>Organizacja “Scelerisque in dictum 3”</h3>
                                      <p className={"tab--row--paragraph"}>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                                  </div>
                                  <div>
                                      <p className={"tab--row--paragraph"}>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                                  </div>
                              </div>
                          </article>
                      </TabPanel>
                      <TabList className={"bottom--button--list"}>
                          <Tab className={"bottom--button"}>1</Tab>
                          <Tab className={"bottom--button"}>2</Tab>
                      </TabList>
                  </Tabs>
              </TabPanel>
              <TabPanel className={"tab--panel"}>
                  <p className={"tab--title"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br/> do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis nostrud exercitation.</p>

                  {/*LOCALS*/}

                  <article className={"tab--row"}>
                      <div className={"tab--row--container"}>
                          <div className={"tab--row--main"}>
                              <h3 className={"tab--row--title"}>Zbiórka “Lorem Ipsum 1”</h3>
                              <p className={"tab--row--paragraph"}>Quis varius quam quisque id diam vel quam elementum pulvinar.</p>
                          </div>
                          <div>
                              <p className={"tab--row--paragraph"}>Egestas, sed, tempus</p>
                          </div>
                      </div>
                  </article>
                  <article className={"tab--row"}>
                      <div className={"tab--row--container"}>
                          <div className={"tab--row--main"}>
                              <h3 className={"tab--row--title"}>Zbiórka “Lorem Ipsum 2”</h3>
                              <p className={"tab--row--paragraph"}>Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.</p>
                          </div>
                          <div>
                              <p className={"tab--row--paragraph"}>Ut, aliquam, purus, sit, amet</p>
                          </div>
                      </div>
                  </article>
                  <article className={"tab--row"}>
                      <div className={"tab--row--container"}>
                          <div className={"tab--row--main"}>
                              <h3 className={"tab--row--title"}>Zbiórka “Lorem Ipsum 3”</h3>
                              <p className={"tab--row--paragraph"}>Scelerisque in dictum non consectetur a erat nam.</p>
                          </div>
                          <div>
                              <p className={"tab--row--paragraph"}>Mi, quis, hendrerit, dolor</p>
                          </div>
                      </div>
                  </article>
              </TabPanel>
          </Tabs>
      </section>
  )
}

export default HomeHelp