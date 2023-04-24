import React from "react";
import '../styles/ChildInfoForm.css'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const ChildInfoForm = () => {
    let currentPageNumber = 0;
    const formPages = ["tab1", "tab2", "tab3"];
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate("/home");
    }
    return (
        <div className="form-container">
            <div className="form-back-button" onClick={navigateToHome}><IoMdArrowRoundBack size={34}/></div>
            <h1> Wish Child Form </h1>
            <p>We are eager to get you started on the journey to get your child's wish granted, but first we just need some information.</p>
            <form id="regForm">
                <div className="tab1" id="tab1">
                    <h3>General Information</h3>
                    <br/>
                    <label htmlFor="child_first"> Child First Name </label>
                    <input type="text" name="child_first" className="form-input" required />
                    <br/> <br />
                    <label htmlFor="child_last"> Child Last Name </label>
                    <input type="text" name="child_last" className="form-input" required />
                    <br /> <br />
                    <label htmlFor="dob"> Date of Birth </label>
                    <input type="date" name="dob" id="dob" min="2004-04-22" max="2022-04-22" className="form-input" required />
                    <br /> <br />
                    <label htmlFor="guardian_first"> Guardian First Name </label>
                    <input type="text" name="guardian_first" className="form-input" required />
                    <br /> <br />
                    <label htmlFor="guardian_last"> Guardian Last Name </label>
                    <input type="text" name="guardian_last" className="form-input" required />
                    <br /> <br />
                    <label htmlFor="phone"> Guardian Phone Number </label>
                    <input type="tel" id="pmp_phone" name="pmp_phone" pattern="^\d{3}-\d{3}-\d{4}$" className="form-input" required />
                    <br />
                    <br />
                    <label htmlFor="pcp_first"> PCP First Name </label>
                    <input type="text" name="pcp_first" className="form-input" required />
                    <br /> <br />
                    <label htmlFor="pcp_last"> PCP Last Name </label>
                    <input type="text" name="pcp_last" className="form-input" required />
                    <br /> <br />
                    <label htmlFor="pmp_phone"> PCP Contact </label>
                    <input type="tel" id="pmp_phone" name="pmp_phone" pattern="^\d{3}-\d{3}-\d{4}$" className="form-input" required />
                    <br/> <br/>
                    <label htmlFor="address">Home Address:</label>
                    <input name="address" type="address" className="form-input" required />
                    <br/> <br/>
                    <label htmlFor="medical-condition">Wish Child's Medical Condition:</label>
                    <input name="medical-condition" type="text" className="form-input" required />
                    <br/> <br/>
                    <label htmlFor="primary-email">Email Address</label>
                    <input type="email" id="email" pattern=".+@globex\.com" className="form-input" required/>
                    <br/> <br/>
                </div>
                <div className="tab2" id="tab2">
                    <h3>Optional: Wish Child Favorites</h3>
                    <label htmlFor="size"> Wish Child T-Shirt Size </label>
                    <select name="size">
                        <option value="xxsmall">XXS</option>
                        <option value="xsmall">XS</option>
                        <option value="small">S</option>
                        <option value="medium">M</option>
                        <option value="large">L</option>
                    </select>
                    <br /> <br />
                    <label htmlFor="color">Favorite Color </label>
                    <input type="text" name="color" className="form-input" />
                    <br /> <br />
                    <label htmlFor="book_story">Book/Story</label>
                    <input type="text" name="book_story" className="form-input" />
                    <br /> <br />
                    <label htmlFor="food">Food</label>
                    <input type="food" className="form-input" />
                    <br /> <br />
                    <label htmlFor="subject">Subject</label>
                    <input type="text" for="subject" className="form-input" />
                    <br /> <br />
                    <label htmlFor="singer">Band or Singer</label>
                    <input type="text" className="form-input" />
                    <br /> <br />
                    <label htmlFor="movie_show">Show or Movie</label>
                    <input type="text" className="form-input" />
                    <br /> <br />
                    <label htmlFor="actor">Actor/Actress</label>
                    <input type="text" name="actor" className="form-input" />
                    <br /> <br />
                    <label htmlFor="athlete">Athlete/Sport Team</label>
                    <input type="text" name="athlete" className="form-input" />
                    <br /> <br />
                </div>
                <div className="tab3" id="tab3">
                    <h3>Driver Identification Information</h3>
                    <p>Many wishes involve the use of a rental vehicle. For this reason, please indicate a preferred and potential driver
                         who may be driving during the course of the wish.</p>
                    <br />
                    <label htmlFor="driver"> Preferred Driver Name </label>
                    <input type="text" name="driver" className="form-input" required />
                    <br /> <br />
                    <label htmlFor="license_num"> Valid D.L # </label>
                    <input type="license_num" className="form-input" required />
                    <br /> <br />
                    <label htmlFor="exp_date">Expiration date</label>
                    <input type="date" name="exp_date" id="exp_date" min="2023-04-22" className="form-input" required />
                    <br /> <br />
                </div>
                <div className="buttons">
                    <div>
                        <button type="button" id="prev" onClick={() => {
                            document.getElementById(formPages[currentPageNumber]).style.display = "none";
                            currentPageNumber--;
                            document.getElementById(formPages[currentPageNumber]).style.display = "inline";
                            document.getElementById("next").style.cursor = "pointer";
                            if(currentPageNumber == 0){
                                document.getElementById("prev").disabled = true;
                                document.getElementById("prev").style.cursor = "not-allowed";
                            }
                            document.getElementById("next").disabled = false;
                        }}>Previous</button>

                        <button type="button" id="next" onClick={() => {
                            document.getElementById(formPages[currentPageNumber]).style.display = "none";
                            currentPageNumber++;
                            document.getElementById("prev").style.cursor = "pointer";
                            document.getElementById("prev").disabled = false;
                            document.getElementById(formPages[currentPageNumber]).style.display = "inline";
                            console.log("Current page: " + currentPageNumber);
                            if(currentPageNumber >= formPages.length - 1){
                                document.getElementById("next").style.cursor = "not-allowed";
                                document.getElementById("next").disabled = true;
                            }
                        }}> Next</button>
                    </div>
                </div>
            </form>
            <footer className="form-footer"><p>Have questions? Click <a href="/faq"> here </a> to see our most frequently asked questions.</p> </footer>
        </div>
    );
};

export default ChildInfoForm;