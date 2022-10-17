import { Available, ContactDistance, AddressContact,Contact,Heading, Img,P,PharmacyName,
    Tag,TagContent,Pharm,Pageno,Links,PageLink,Number,Divsion,Subdivsion } from "./PharmacyNamestyle"
import { details } from '../../../resources/string'
import call from '../../../assets/images/telephone.png'
import location from '../../../assets/images/location.png'
import left from '../../../assets/images/left_arrow.png'
import right from '../../../assets/images/right_arrow.png'
import Pharmacies from "./pharmacies"
import Footer from "../../common/footer";
import About from "./Aboutpharmacy"
import { useState } from "react"

export default function PharmacyNames() {
    const [shown,isShown] = useState(false);
    const handleSubmit = event =>{
     isShown(true);
    }
return (
    
   <>
   {/* <Pharmacies/> */}
   <Divsion>
   <Available>
                <Heading>{details.avail}</Heading>

                <Links onClick={handleSubmit} state={{ id: details.cvs }}>
                    <Pharm>
                        <PharmacyName>{details.cvs}</PharmacyName>
                        <CommonDetails />
                        <TagContent>
                            <Tag>{details.home}</Tag>
                            <Tag>{details.retail}</Tag>
                        </TagContent>
                    </Pharm>
                </Links>
                <Links onClick={handleSubmit} state={{ id: details.avenue }}>
                    <Pharm>
                        <PharmacyName>{details.avenue}</PharmacyName>
                        <CommonDetails />
                        <TagContent>
                            <Tag>{details.home}</Tag>
                        </TagContent>
                    </Pharm>
                </Links>
                <Links onClick={handleSubmit} state={{ id: details.cvs }}>
                    <Pharm>
                        <PharmacyName>{details.cvs}</PharmacyName>
                        <CommonDetails />
                        <TagContent>
                            <Tag>{details.home}</Tag>
                            <Tag>{details.retail}</Tag>
                        </TagContent>
                    </Pharm>
                </Links>
                <Links onClick={handleSubmit} state={{ id: details.kroger }} >
                    <Pharm>
                        <PharmacyName>{details.kroger}</PharmacyName>
                        <CommonDetails />
                        <TagContent>
                            <Tag>{details.home}</Tag>
                            <Tag>{details.retail}</Tag>
                            <Tag>{details.specialty}</Tag>
                            <Tag>{details.care}</Tag>
                        </TagContent>
                    </Pharm>
                </Links>
                <Links onClick={handleSubmit} state={{ id: details.cardinal }} >
                    <Pharm>
                        <PharmacyName>{details.cardinal}</PharmacyName>
                        <CommonDetails />
                        <TagContent>
                            <Tag>{details.home}</Tag>
                            <Tag>{details.retail}</Tag>
                        </TagContent>
                    </Pharm>
                </Links>
                <Links onClick={handleSubmit} state={{ id: details.wallgreen }} >
                    <Pharm>
                        <PharmacyName>{details.wallgreen}</PharmacyName>
                        <CommonDetails />
                        <TagContent>
                            <Tag>{details.home}</Tag>
                            <Tag>{details.retail}</Tag>
                        </TagContent>
                    </Pharm>
                </Links>
                <Links onClick={handleSubmit} state={{id:details.avenue }}>
                    <Pharm>
                        <PharmacyName>{details.avenue}</PharmacyName>
                        <CommonDetails />
                        <TagContent>
                            <Tag>{details.home}</Tag>
                        </TagContent>
                    </Pharm>
                </Links>
                <Links onClick={handleSubmit} state={{ id: details.cvs }}>
                    <Pharm>
                        <PharmacyName>{details.cvs}</PharmacyName>
                        <CommonDetails />
                        <TagContent>
                            <Tag>{details.home}</Tag>
                            <Tag>{details.retail}</Tag>
                        </TagContent>
                    </Pharm>
                </Links>
                <Links onClick={handleSubmit} state={{id:details.kroger }} >
                    <Pharm>
                        <PharmacyName>{details.kroger}</PharmacyName>
                        <CommonDetails />
                        <TagContent>
                            <Tag>{details.home}</Tag>
                            <Tag>{details.retail}</Tag>
                            <Tag>{details.specialty}</Tag>
                            <Tag>{details.care}</Tag>
                        </TagContent>
                    </Pharm>
                </Links>
                <Links onClick={handleSubmit} state={{ id: details.cardinal }} >
                    <Pharm>
                        <PharmacyName>{details.cardinal}</PharmacyName>
                        <CommonDetails />
                        <TagContent>
                            <Tag>{details.home}</Tag>
                            <Tag>{details.retail}</Tag>
                        </TagContent>
                    </Pharm>
                </Links>
                <Pageno>
                    <Img src={left} alt="left-arrow" />
                    <PageLink><Number>1</Number></PageLink>
                    <PageLink> <Number>2</Number></PageLink>
                    <PageLink><Number>3</Number></PageLink>
                    <PageLink> <Number>4</Number></PageLink>
                    <PageLink> <Number>5</Number></PageLink>
                    <PageLink> <Number>6</Number></PageLink>
                    <Img src={right} alt="right-arrow" />
                </Pageno>
            </Available>
            <Subdivsion>
               {/* <About/> */}
               {shown &&  <About/> }
            </Subdivsion>
            </Divsion>
      

   </>
   
)
}
function CommonDetails() {
return (
   <AddressContact>
       <p>{details.address}</p>
       <ContactDistance>
           <Contact>
               <Img src={call} alt="contact" />
               <P>{details.contact}</P>
           </Contact>
           <Contact>
               <Img src={location} alt="location" />
               <P>{details.distance}</P>
           </Contact>
       </ContactDistance>
   </AddressContact>
)
}