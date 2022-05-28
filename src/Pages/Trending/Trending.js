import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleCard from "../../components/SingleCardContent/SingleCard";
import './Trending.css'
import Pagination from "../../components/CustomPagination/Pagination"
const Trending = () => {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const fetchTrending = async () => {

    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_THEMOVIEDB_API_KEY}&page=${page}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_THEMOVIEDB_API_TOKEN}`,
        },
      }
    );
    setContent(res.data.results);
  };
  useEffect(() => {
    fetchTrending();
  }, [page]);
  return(
    <>
    <div className="pageTitle" >Trending</div>
    <div className="trending">
      {content && content.map((item,)=>
          <SingleCard key={item.id}
          id={item.id}
          poster={item.poster_path}
          title={item.title || item.name}
          date={item.first_air_date || item.release_date}
          media_type={item.media_type}
          vote_average={item.vote_average}/>
      )}
    </div>
    <Pagination setPage={setPage}/>
    </>
  );
};

export default Trending;
