import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReactPaginate from 'react-paginate';
import {useState,useEffect} from "react";
const API_URL = 'http://localhost:3000';

const HomeHelp = () => {
    const [foundations, setFoundations] = useState([{}])
    const [locals, setLocals] = useState([{}])
    const [organizations, setOrganizations] = useState([{}])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true);
        fetch(`${API_URL}/foundations`)
            .then((response) => response.json())
            .then((data) => {
                setFoundations(data);
                setLoading(false);
            });
    }, []);
    useEffect(() => {
        setLoading(true);
        fetch(`${API_URL}/locals`)
            .then((response) => response.json())
            .then((data) => {
                setLocals(data);
                setLoading(false);
            });
    }, []);
    useEffect(() => {
        setLoading(true);
        fetch(`${API_URL}/organizations`)
            .then((response) => response.json())
            .then((data) => {
                setOrganizations(data);
                setLoading(false);
            });
    }, []);
    function Items({ currentItems }) {
        return (
            <>
                {currentItems && currentItems.map((item)=>(
                    <article className={"tab--row"}>
                        <div className={"tab--row--container"}>
                            <div className={"tab--row--main"}>
                                <h3 className={"tab--row--title"}>{item.title}</h3>
                                <p className={"tab--row--paragraph"}>{item.text}</p>
                            </div>
                            <div>
                                <p className={"tab--row--paragraph"}>{item.items}</p>
                            </div>
                        </div>
                    </article>
                ))
                }
            </>
        );
    }
    function PaginatedItems({ itemsPerPage, name}) {
        const [currentItems, setCurrentItems] = useState(null);
        const [pageCount, setPageCount] = useState(0);
        const [itemOffset, setItemOffset] = useState(0);

        useEffect(() => {
            const endOffset = itemOffset + itemsPerPage;
            setCurrentItems(name.slice(itemOffset, endOffset));
            setPageCount(Math.ceil(name.length / itemsPerPage));
        }, [itemOffset, itemsPerPage]);

        console.log(currentItems);

        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % name.length;
            setItemOffset(newOffset);
        };
        return (
            <>
                <Items currentItems={currentItems} />
                <ReactPaginate
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    renderOnZeroPageCount={null}
                />
            </>
        );
    }
  return(
      <section className={"help--container"} title="section5" id="section5">
          <h2 className={"help--title"}>Komu Pomagamy?</h2>
          <Tabs className={"help--tabs"}>
              <TabList className={"tab--list"}>
                  <Tab className={"main--button tab--buttons"}>Fundacjom</Tab>
                  <Tab className={"main--button tab--buttons"}>Organizacjom pozarządowym</Tab>
                  <Tab className={"main--button tab--buttons"}>Lokalnym zbiórkom</Tab>
              </TabList>
              <TabPanel className={"tab--panel"}>
                  <p className={"tab--title"}>W naszej bazie znajdziesz listę zweryfikowanych Fundacji,<br/> z którymi współpracujemy. Możesz sprawdzić czym się zajmują,<br/> komu pomagają i czego potrzebują.</p>
                  <PaginatedItems className={"pagination"} name={foundations} itemsPerPage={3}/>
              </TabPanel>
              <TabPanel className={"tab--panel"}>
                  <p className={"tab--title"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br/> do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis nostrud exercitation.</p>
                  <PaginatedItems name={organizations} itemsPerPage={3}/>
              </TabPanel>
              <TabPanel className={"tab--panel"}>
                  <p className={"tab--title"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed<br/> do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis nostrud exercitation.</p>
                  <PaginatedItems name={locals} itemsPerPage={3}/>
              </TabPanel>
          </Tabs>
      </section>
  )
}

export default HomeHelp