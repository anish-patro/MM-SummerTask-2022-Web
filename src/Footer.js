import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import './App.css';
const Footer=()=>{
    return(
     <div className="main-footer" >
         <div className="container">
             <div className="row"   >
                 {/*Column1*/}
                 <div className="col"   >
                     <h4 align="center" >MONDAY MORNING</h4>
                
                 <ul className="list-unstyled1" >
                     <li>760-009-015</li>
                     <li>Odisha, India</li>
                     <li>National Institute of Technology, Rourkela</li>
                 </ul>
                 </div>
                  {/*Column2*/}
                 <div className="cc1"  >
                     
                  <h4 align="center">Social handles</h4>  
                  <div className="list-unstyled2" >
                     <ul>
                      <li><FacebookIcon/></li>
                      <li><InstagramIcon/></li>
                      <li><TwitterIcon/></li>
                     </ul>                    
                  </div>
                  <hr />
                  <div className="row">
                      <p className="col-sm" align="center">
                          &copy; 2022  ARTICLES | All right reserved | Terms of service | Privacy policy 
                      </p>
                  </div>
                 </div>
                 
             </div>
         </div>
     </div>   
    )
}
export default Footer;