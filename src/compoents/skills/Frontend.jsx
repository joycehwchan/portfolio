import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frontend</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i class="devicon-html5-plain skills__devicon"></i>
                    <div>
                        <h3 className="skills__name">HTML</h3>
                            {/* <span className="skills__level">Basic</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    <i class="devicon-css3-plain skills__devicon"></i>
                    <div>
                        <h3 className="skills__name">CSS</h3>
                            {/* <span className="skills__level">Advance</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    <i class="devicon-javascript-plain skills__devicon"></i>
                    <div>
                        <h3 className="skills__name">JavaScript</h3>
                        {/* <span className="skills__level">Intermediate</span> */}
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i class="devicon-bootstrap-plain skills__devicon"></i>
                    <div>
                        <h3 className="skills__name">Bootstrap</h3>
                        {/* <span className="skills__level">Intermediate</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    <i class="devicon-tailwindcss-plain skills__devicon"></i>
                    <div>
                        <h3 className="skills__name">Tailwind</h3>
                        {/* <span className="skills__level">Basic</span> */}
                    </div>
                </div>

                <div className="skills__data">
                    <i class="devicon-react-original skills__devicon"></i>
                    <div>
                        <h3 className="skills__name">React</h3>
                        {/* <span className="skills__level">Basic</span> */}
                    </div>
                </div>
            </div>

           
        </div>
    </div>
  )
}

export default Frontend