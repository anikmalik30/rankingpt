import React from "react"
import Icons from "../../../components/Icons/Icons"


const Industries = () => {
  return (
    <>
      <div className="services-area pt-100 pb-70">
        <div className="container">
        <div className="section-title">
            <span className="sub-title">Digital Marketing</span>
            <h2>what can we do?</h2>
            <p>
            A lot of things, like galloping around the office and watching stupid 
            stuff on the internet! But also some other things, not less important.
             Check it out below!

            </p>
          </div>
          <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
  <div className="single-boxes-box">
    <div className="icon">
      {/* Replace the flaticon icon with your custom Icons component */}
      <Icons name="116-pill" size={48} color="#000" />  {/* Adjust `name` to match your icon ID */}
      <div className="circles-box">
        <div className="circle-one"></div>
        <div className="circle-two"></div>
      </div>
    </div>
    <h3>
      Pharmaceutical
    </h3>
    <p>
      We don't like the drugs, but the drugs like us. Joking... We love it.
    </p>
  </div>
</div>


            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-boxes-box">
                <div className="icon">
                <Icons name="117-HE~1.SVG" size={48} color="#000" />  {/* Adjust `name` to match your icon ID */}
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>
                Insurance
                </h3>
                <p>
                Cuz your health means everything to us... We got you boo.

                </p>

              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-boxes-box">
                <div className="icon">
                <Icons name="icon6" size={48} color="#000" />  {/* Adjust `name` to match your icon ID */}
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>
                Wine & Spirits
                </h3>
                <p>
                Portugal does have the best wine in the world... #sorryfrance

                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-boxes-box">
                <div className="icon">
                <Icons name="#4481911" size={48} color="#000" />  {/* Adjust `name` to match your icon ID */}
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>
                Professional Nutrition
                </h3>
                <p>
                Summer bodies and mirror selfies are awful... but still important, and for that, we must look our best for all our enemies.

                </p>

              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-boxes-box">
                <div className="icon">
                <Icons name="001-credit" size={48} color="#000" />  {/* Adjust `name` to match your icon ID */}
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>
                Transportation
                </h3>
                <p>
                They see us rollin' they hatin'. We have places to be, and yes, you can sit with us.

                </p>

              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-boxes-box">
                <div className="icon">
                <Icons name="117-HE~1.SVG" size={48} color="#000" />  {/* Adjust `name` to match your icon ID */}
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>
                Food & Beverages
                </h3>
                <p>
                We make food dissapear. What's your superpower?
                </p>

              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-boxes-box">
                <div className="icon">
                <Icons name="122-dress" size={48} color="#000" />  {/* Adjust `name` to match your icon ID */}
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>
                Beauty & Fashion
                </h3>
                <p>
                We didn't wake up like this. We need all the help we can get.

                </p>

              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-boxes-box">
                <div className="icon">
                <Icons name="123-law" size={48} color="#000" />  {/* Adjust `name` to match your icon ID */}
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>
                Law
                </h3>
                <p>
                We can be crazy ass professionals adults. You'd be like "wutttt", and we would be like: "Told'ya mister lawyer boss"

                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-boxes-box">
                <div className="icon">
                <Icons name="117-HE~1.SVG" size={48} color="#000" />  {/* Adjust `name` to match your icon ID */}
                  <div className="circles-box">
                    <div className="circle-one"></div>
                    <div className="circle-two"></div>
                  </div>
                </div>
                <h3>
                Travel
                </h3>
                <p>
                We're "travsessed"*.
*Obsessed with travelling.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Industries
