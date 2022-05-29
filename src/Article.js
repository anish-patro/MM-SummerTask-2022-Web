import React from "react";
import './App.css';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
const Article=()=>
{
    return(
        <><div className="Article">
            <h1 className="Article1_h1">Lizard</h1>
            <hr className="ArticleHR"/>
            <p className="Article_p1">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos culpa qui ipsam, rem eius nam dolorum, tenetur exercitationem atque pariatur quam repudiandae molestiae explicabo cumque! Necessitatibus amet quo culpa nihil, quia a incidunt, animi eum, minima soluta non. Quaerat id voluptates sint atque ad ipsa sequi iste nam deserunt quae similique suscipit, odio impedit excepturi aliquam tempore blanditiis, dolore magni facilis ratione doloremque dicta. Minus saepe, at illum qui voluptatum ratione dolor ipsum similique magnam autem! At quisquam blanditiis consequatur quidem quasi adipisci magnam? Quibusdam quis sit nulla fugit animi laborum consequatur, ducimus reprehenderit aspernatur? Molestias delectus consectetur reprehenderit sint expedita commodi illo ullam, placeat omnis vitae aspernatur odio at, magnam quasi, numquam tempore. Mollitia asperiores corporis explicabo laborum iste!
            </p>
            <div className="view_like">
            <div className="View"><VisibilityRoundedIcon/></div>
           <div className="Like"><ThumbUpIcon /></div>
        </div></div></>
    )
}
export default Article;
