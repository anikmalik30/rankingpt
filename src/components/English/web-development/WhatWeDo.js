import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion"

import WhatWeDoImg from "../../../assets/images/home-8-9-10/what-we-do/what-we-do-2.png"

const WhatWeDo = () => {
  return (
    <>
      <div className="mibix-what-we-do-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="mibix-what-we-do-content">
                <span className="sub-title">WHAT WE DO</span>
                <h3 className="title">
                Oferecemos serviços para impulsionar sua marca e alcançar sucesso online.
                </h3>
                <p>
                Temos como objetivo criar UI/UX incríveis, elevando a experiência do usuário a um nível superior.

                </p>

                <Accordion allowZeroExpanded preExpanded={["a"]}>
                  <AccordionItem uuid="a">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>WebDesign</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      Desenvolvemos websites que proporcionam uma experiência online envolvente.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="b">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Loja On-line</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      Construímos lojas online onde cada clique se transforma numa experiência de compra única
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Posicionamento SEO</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      Eleve sua visibilidade online com nosso serviço de Posicionamento SEO. 
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>

                  <AccordionItem uuid="c">
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        <span>Marketing Digital</span>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p>
                      Ajudamos empresas a impulsionar o seu crescimento no mundo digital.
                      </p>
                    </AccordionItemPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="mibix-what-we-do-image">
                <img src={WhatWeDoImg} alt="What We Do" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatWeDo
