import { Nav,Bluebox,Coverage,Let,Question,SearchBar,Input,Button,Invalid} from "../../../components/dashboard/drug/drugstyle"
import { useState } from "react";
import context from "../../../resources/string"
import Closepop from "../../../assets/images/close.png"
// import SearchBar from "../../dashboard/Search/SearchBar";
import Hydroco from "./Hydro/hydro";
import Footer from "../../common/footer";
import { Modal, Overlay, ModalContent, Popuphead, ButtonTag, Close, Buttons, PopupContent } from '../popupstyle'
import { useRef } from "react";
// import  from "../Search/SearchBar";
import {data} from "../Search/search_animal";

function Drug() {
//     const [value, setValue] = useState("");
//     const onChange = (event) => {
//         setValue(event.target.value);
//     };

//     const onSearch = (searchTerm) => {
//         setValue(searchTerm);
       

//     };
//     const [empty, isEmpty] = useState(false);
//     const handleClick = event => {
//         if (value === 'Hydrocodone') {
//             isShown(true);
//             isEmpty(false);
//         }
//         else {
//             isEmpty(true);
//             isShown(false);
//         }
//     }

//   const [shown,isShown] = useState(false);
//   const handleSubmit = event =>{
//    isShown(current => !current);
   
// }
// const yearplan = useRef();

// const [modal, setModal] = useState(false);
//     const toggleModal = () => {
//         if (yearplan.current.value === 'Next Year')
//             setModal(!modal);
//     };
const yearplan = useRef();
const [value, setValue] = useState("");
const [shown, isShown] = useState(false);
const [modal, setModal] = useState(false);
const [empty, isEmpty] = useState(false);
const toggleModal = () => {
    if (yearplan.current.value === 'Next Year')
        setModal(!modal);
};
const handleClick = event => {
    if (value === 'Hydrocodone') {
        isShown(true);
        isEmpty(false);
    }
    else {
        isEmpty(true);
        isShown(false);
    }

   
}
const handleSubmit = event => {
    yearplan.current.value = 'Current Year';
    setModal(!modal);
}

const onChange = (event) => {
    setValue(event.target.value);
};

const onSearch = (searchTerm) => {
    setValue(searchTerm);
   

};

    return (
        <>
            
          <Nav>{context.Navcontent}</Nav>
          <Bluebox>
                    <Coverage>
                        {context.Coveragearea}
                        {context.Plancoverage}
                        <select onChange={toggleModal} ref={yearplan}>
                       
                        <option>Current Year</option>
                        <option>Next Year</option>
                        </select>
                        <>
                            {modal && (
                                <Modal>
                                    <Overlay onClick={toggleModal} ></Overlay>
                                    <ModalContent>
                                        <Close>
                                            <Popuphead>You are Choosing Next Year as Plan Coverage </Popuphead>
                                            <img src={Closepop} onClick={toggleModal} alt="close" />
                                        </Close>
                                        <PopupContent>
                                            <p>By continuing this, You may Loose already added details of drugslist. </p>
                                            <h5>Do you want to Continue?</h5>
                                        </PopupContent>
                                        <ButtonTag>
                                            <Buttons onClick={toggleModal}>Yes</Buttons>
                                            <Buttons className="buttons" onClick={toggleModal}>No</Buttons>
                                        </ButtonTag>
                                    </ModalContent>
                                </Modal>
                            )}
                        </>
                    </Coverage>
                    <Let>
                    {context.Letsbe}
                   </Let>
                   <Question>
                    {context.Drugquestion}
                   </Question>
                   <SearchBar>
                   <Input type="text" value={value} onChange={onChange}/>
                    <Button  onClick={handleClick} >Search</Button>
                {/* <SearchBarclick/> */}
                </SearchBar>

                    
                </Bluebox> 
                {data
                    .filter((item) => {
                        const searchTerm = value.toLowerCase();
                        const searchValue = item.search_value.toLowerCase();
                        
                        return (
                            searchTerm &&
                            searchValue.startsWith(searchTerm) &&
                            searchValue !== searchTerm
                        );
                    })
                    .map((item) => (
                        <div onClick={() => onSearch(item.search_value)}
                            key={item.search_value} >
                            {item.search_value}
                        </div>
                    ))}
             
                {shown &&  <Hydroco/> }
                {empty && (<Invalid>Not Found</Invalid>)}
                <Footer/>
        </>
    );
}

export default Drug;