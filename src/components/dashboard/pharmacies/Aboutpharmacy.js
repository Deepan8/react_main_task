import { useLocation } from "react-router-dom"
import { details, explain } from "../../../resources/string";
import {
    PharmacyName, Pharm, Planing, Tag, TagContent, PreferOptions, StandardOptions, Div,
    Information, P, H4, Fillup
} from "./Aboutpharmacystyle"

export default function About() {
    const { state } = useLocation();
    return (
        <>
            {((state.id === details.cvs) || (state.id === details.avenue) || (state.id === details.kroger)
                || (state.id === details.cardinal) || (state.id === details.wallgreen)) && (
                    <>
                        <Pharm>
                            <PharmacyName>{state.id}</PharmacyName>
                           
                            <Div>
                                <Planing>
                                    <div>
                                        <H4>{explain.extHours}</H4>
                                        <P>{explain.time}</P>
                                    </div>
                                    <div>
                                        <H4>{explain.tt}</H4>
                                        <P>{explain.ttCount}</P>
                                    </div>
                                </Planing>
                            </Div>
                            <Div>
                                <>
                                <h3>{explain.pharmType}</h3>
                                <Tag>
                                        <TagContent>{details.home}</TagContent>
                                        <TagContent>{details.retail}</TagContent>
                                        <TagContent>{details.specialty}</TagContent>
                                        <TagContent>{details.care}</TagContent>
                                </Tag>
                                    <Fillup>
                                        <li>{explain.fillup}</li>
                                        <li>{explain.pricing}</li>
                                    </Fillup>
                                </>
                                <>
                                    <h3>{explain.prefer}</h3>
                                    <PreferOptions>
                                        <li>{explain.plus}</li>
                                        <li>{explain.plus}</li>
                                        <li>{explain.connect}</li>
                                        <li>{explain.connect}</li>
                                        <li>{explain.smartplus}</li>
                                        <li>{explain.smartplus}</li>
                                        <li>{explain.longCare}</li>
                                        <li>{explain.longCare}</li>
                                        <li>{explain.select}</li>
                                    </PreferOptions>
                                </>
                                <>
                                    <h3>{explain.standard}</h3>
                                    <StandardOptions>
                                        <li>{explain.plus}</li>
                                        <li>{explain.plus}</li>
                                        <li>{explain.connect}</li>
                                        <li>{explain.connect}</li>
                                    </StandardOptions>
                                </>
                            </Div>
                            <Div>
                                <>
                                    <P>{explain.dueDate}</P>
                                    <P>{explain.lastUpdate}</P>
                                </>
                            </Div>
                            <Div>
                                <Information>
                                    <h3>{explain.importantinfo}</h3>
                                    <P>{explain.info}</P>
                                </Information>
                            </Div>
                        </Pharm>

                    </>
                )}
        </>


    )
}