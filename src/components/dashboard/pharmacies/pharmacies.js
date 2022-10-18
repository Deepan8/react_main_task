import { Nav, Bluebox, Coverage, Let, Question, Search, Tot, Whitebox, Titlebox, Combothree, Downcombothree, Downcombotwo, Row, Col, Buttontag, Bluecontent, InputType, Select } from "../../../components/dashboard/pharmacies/pharmaciesstyle"
import context from "../../../resources/string"
import { useRef, useState } from "react";
import PharmacyNames from "./PharmacyName";
import Footer from "../../common/footer";

function Pharmacies() {
    const hours = useRef();
    const all = useRef();
    const standard = useRef();
    const prefer = useRef();

    const [shown, isShown] = useState(false);
    const handleSubmit = event => {

        if (hours.current.checked === true && (all.current.checked === true || standard.current.checked === true ||
            prefer.current.checked === true)) {
            isShown(current => !current);
        }
    }
    return (
        <Tot>

            <Nav>{context.Navcontent}</Nav>
            <Bluebox>
                <Bluecontent>
                    <Coverage>
                        {context.Coveragearea}
                        {context.Plancoverage}
                        <select>
                            <option>Current Year</option>
                            <option>Next Year</option>
                        </select>
                    </Coverage>

                    <Question>
                        {context.Pharmquestion}
                    </Question>
                    <Whitebox>
                        <Combothree>
                            <Titlebox>
                                <h3>Pharmacy Name</h3>
                                <input type='text'></input>
                            </Titlebox>
                            <Titlebox>
                                <h3>Search Radius</h3>
                                <Select>
                                    <option>1 Mile</option>
                                    <option>5 Mile</option>
                                    <option>15 Mile</option>
                                    <option>30 Mile</option>
                                    <option>50 Mile</option>
                                </Select>
                            </Titlebox>
                            <Titlebox>
                                <h3>Pharmacy Type</h3>
                                <InputType>

                                    <Select id="type">
                                        <option value="all">All</option>
                                        <option value="hospital">Hospital</option>
                                        <option value="clinical">Clinical</option>
                                        <option value="consulting">Consulting</option>
                                        <option value="industrial">Industrial</option>
                                    </Select>
                                </InputType>
                            </Titlebox>
                        </Combothree>
                        <Downcombothree>
                            <Downcombotwo>
                                <h4>Extended Hours</h4>
                                <Row>
                                    <input type="checkbox" ref={hours} id="vehicle1" name="vehicle1" value="Bike" />
                                    <label for="vehicle1"> 24-Hour Pharmacy</label>
                                </Row>
                            </Downcombotwo>
                            <Downcombotwo>
                                <h4>cost Share</h4>
                                <Col>
                                    <Row>
                                        <input type="radio" n ref={all} id="html" name="fav_language" value="HTML" />
                                        <label for="html">All</label>
                                    </Row>
                                    <Row>
                                        <input type="radio" ref={standard} id="html" name="fav_language" value="HTML" />
                                        <label for="html">Standard cost Share</label>
                                    </Row>
                                    <Row>
                                        <input type="radio" ref={prefer} id="html" name="fav_language" value="HTML" />
                                        <label for="html">Prefferd cost Share</label>
                                    </Row>
                                </Col>
                            </Downcombotwo>
                            <Buttontag type="submit" value="Submit" onClick={handleSubmit}>Search Pharmacy</Buttontag>

                        </Downcombothree>


                    </Whitebox>
                    <Search>

                    </Search>

                    <Let>
                        {context.pharmacyCount}
                    </Let>
                </Bluecontent>
            </Bluebox>
            {/* <PharmacyNames/> */}
            {shown && <PharmacyNames />}
            <Footer />
        </Tot>
    );
}

export default Pharmacies;