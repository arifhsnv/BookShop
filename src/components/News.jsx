import React,{useState} from 'react'
import "./News.css"
import { Typography } from "@mui/material";
function News() {
    const [newsInformation] = useState([
        {
            id: 1,
            image:"src/assets/Photo news.png",
            bookInformation: "The Books You Need to Read in 2023",
            bookDescription: "his is the blog we know you've all been waiting for. We present the top 10 titles for 2023 in fiction, non-fiction and children's books; a glorious mix of masterful storytelling, compelling subject matter and page-turning thrills...",
            
        },
        {
            id: 2,
            image: "src/assets/second photo news.png",
            bookInformation: "February's Best Children's Books",
            bookDescription:"Some of the finest children's authors currently writing have books publishing this month, from Natasha Farrant to Elle McNicoll and from Tahereh Mafi to Harriet Muncaster. Across all areas and age ranges there are plenty of fantastic titles..."
        }
    ])
  return (
      <>
          
          <div className='news-container'>
              <Typography variant='h3' sx={{ color: "#0D0842", fontFamily: "Montserrat", fontSize: "24px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal", marginLeft: "20px", marginTop: "40px" }}>News</Typography>
              <div className='book-container'>
                  {newsInformation.map((news) => 
                      <div key={news.id} news={news} className='first-book'>
                          <div className='information-book'>
                              <Typography variant="body1" sx={{ color: "#0D0842", marginLeft: "20px", fontFamily: "Montserrat", fontSize: "16px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal" }}>{news.bookInformation}</Typography>
                          <div className='line'></div>
                              <Typography variant="body1" sx={{ color: "#0D0842", fontFamily: "Nunito Sans", fontSize: "14px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal", marginLeft: "20px" }}>{news.bookDescription}</Typography>
                      </div>
                      <img src={news.image} alt="" /> 
                      </div>
                  )}
               
              </div>
          </div>
      </>
  )
}

export default News