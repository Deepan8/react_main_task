import {
    Button, Hydrocodone, Hydro,Generic,HydroHeader, AlertMessages, Img, HydroContent,
    Alerts, Inputs, AlertText, InputLabel, Note, Count, Select, Buttons, ButtonContent,
    GenericLink,Information,TherapyInfo
} from "./hydrostyle"
import { images } from "../../../../resources/images"

import { hydro } from "../../../../resources/string"



export default function Hydroco() {
    return (
        <>
        <Hydrocodone>
            <Hydro>
                <HydroHeader>
                <h2>{hydro.hydroTitle}</h2>
                <Generic>GENERIC</Generic>
                </HydroHeader>
                <HydroContent>
                    <Alerts>
                        <h3>{hydro.alerts}</h3>
                        <AlertMessages>
                            <Img src={images.Coin} alt="money" />
                            <AlertText>{hydro.costSaving} <GenericLink>{hydro.link}</GenericLink></AlertText>
                        </AlertMessages>
                        <AlertMessages>
                            <Img src={images.Message} alt="tool" />
                            <AlertText>{hydro.therapy}</AlertText>
                        </AlertMessages>
                    </Alerts>


                    <Inputs>
                        <div>
                            <InputLabel>{hydro.quantity}</InputLabel>
                            <Count type="number" />
                        </div>

                        <div>
                            <InputLabel>{hydro.type}</InputLabel>
                            <ButtonContent>
                                <Buttons>Retail</Buttons>
                                <Buttons>Mail Order</Buttons>
                            </ButtonContent>
                        </div>

                        <div>
                            <InputLabel>{hydro.refill}</InputLabel>
                            <Select>
                                <option>Every 1 month</option>
                                <option>Every 3 month</option>
                                <option>Every 6 month</option>
                                <option>Every 1 year</option>
                            </Select>
                        </div>

                        <div>
                            <Note>{hydro.note}</Note>
                            <Note>{hydro.availability}</Note>
                            <Note>{hydro.date}</Note>
                        </div>

                        <Button>Add Drug to List</Button>
                    </Inputs>
                </HydroContent>
            </Hydro>
        </Hydrocodone>
        
        <Information>
        <h3>Important Information</h3>
        <TherapyInfo>{hydro.therapy}</TherapyInfo>
        </Information>
        </>

    )
}