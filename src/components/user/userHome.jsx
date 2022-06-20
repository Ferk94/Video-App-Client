import React, {useState, useEffect} from 'react';
import './userHome.css';
import axios from 'axios';
import { data } from '../../data/data';
import Cards from '../cards/Cards';
import Paginate from '../paginate/paginate.jsx';

const UserHome = ({userInfo}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(9);
  const indexOfLastMovie = currentPage * moviesPerPage;



    let currentRecipes;
    let maxPage;

    maxPage = Math.ceil(data.length / 9)

    const paginado = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    function handleNext(){
      if(currentPage < maxPage){
          setCurrentPage(currentPage + 1)
      }
  }
  
  function handlePrevious(){
      if(currentPage > 1){
          setCurrentPage(currentPage - 1)
      }
  }

  return (
    <div className='userHome-container'>
        <div className='userHome-navBar'>
            <p>{userInfo.email}</p>
        </div>
        <div>
          <Paginate 
          moviesPerPage={moviesPerPage}
          foundMovies={data.length}
          paginado={paginado}
          previous={handlePrevious}
          next={handleNext}
          maxPage={maxPage}
          page={currentPage}
          />
        </div>
        <div>
          <Cards data={data}/>
        </div>
    </div>
  )
}

export default UserHome;
